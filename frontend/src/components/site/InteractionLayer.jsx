import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "input",
  "select",
  "textarea",
  "label",
  "[role='button']",
  "[data-interactive='true']",
].join(",");

export const InteractionLayer = () => {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const frameRef = useRef(null);
  const hoverHandlerRef = useRef(null);
  const removeTimersRef = useRef([]);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return undefined;
    }

    const finePointerQuery = window.matchMedia("(pointer: fine)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const current = { x: window.innerWidth / 2, y: window.innerHeight / 2, scale: 1, opacity: 0 };
    const target = { ...current };

    const renderCursor = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      current.scale += (target.scale - current.scale) * 0.14;
      current.opacity += (target.opacity - current.opacity) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%) scale(${current.scale})`;
        dotRef.current.style.opacity = `${current.opacity}`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%) scale(${1 + (current.scale - 1) * 0.55})`;
        glowRef.current.style.opacity = `${current.opacity * 0.88}`;
      }

      frameRef.current = window.requestAnimationFrame(renderCursor);
    };

    if (finePointerQuery.matches) {
      frameRef.current = window.requestAnimationFrame(renderCursor);
    }

    const updateHoverState = (element) => {
      if (!finePointerQuery.matches) {
        return;
      }

      target.scale = element?.closest(INTERACTIVE_SELECTOR) ? 1.6 : 1;
    };

    hoverHandlerRef.current = (event) => updateHoverState(event.target);

    const handlePointerMove = (event) => {
      if (!finePointerQuery.matches) {
        return;
      }

      target.x = event.clientX;
      target.y = event.clientY;
      target.opacity = 1;
      updateHoverState(event.target);
    };

    const handlePointerLeave = () => {
      target.opacity = 0;
      target.scale = 1;
    };

    const handlePointerDown = (event) => {
      const interactiveTarget = event.target.closest(INTERACTIVE_SELECTOR);
      if (!interactiveTarget) {
        return;
      }

      const isTouchLike = event.pointerType === "touch" || coarsePointerQuery.matches;
      if (!isTouchLike) {
        return;
      }

      const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const x = event.clientX || interactiveTarget.getBoundingClientRect().left;
      const y = event.clientY || interactiveTarget.getBoundingClientRect().top;

      setRipples((currentRipples) => [...currentRipples.slice(-3), { id, x, y }]);

      const timeout = window.setTimeout(() => {
        setRipples((currentRipples) => currentRipples.filter((ripple) => ripple.id !== id));
      }, 900);

      removeTimersRef.current.push(timeout);
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.addEventListener("pointerover", hoverHandlerRef.current, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerleave", handlePointerLeave);
      if (hoverHandlerRef.current) {
        document.removeEventListener("pointerover", hoverHandlerRef.current);
      }
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
      removeTimersRef.current.forEach((timer) => window.clearTimeout(timer));
      removeTimersRef.current = [];
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] overflow-hidden" aria-hidden="true">
      <div ref={glowRef} className="custom-cursor-glow" />
      <div ref={dotRef} className="custom-cursor-dot" />

      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="touch-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </div>
  );
};