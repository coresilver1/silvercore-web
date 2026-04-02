import { useEffect, useRef, useState } from "react";

const parseMetric = (value) => {
  const target = Number(value.replace(/[^0-9]/g, ""));
  const suffix = value.includes("%") ? "%" : value.includes("+") ? "+" : "";
  return { target, suffix };
};

export const AnimatedMetric = ({ label, value, index }) => {
  const metricRef = useRef(null);
  const frameRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const node = metricRef.current;
    if (!node || typeof window === "undefined") {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { target } = parseMetric(value);

    if (prefersReducedMotion) {
      setDisplayValue(target);
      return undefined;
    }

    const animateMetric = () => {
      const duration = 1600;
      const start = performance.now();

      const updateFrame = (timestamp) => {
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(target * eased));

        if (progress < 1) {
          frameRef.current = window.requestAnimationFrame(updateFrame);
        }
      };

      frameRef.current = window.requestAnimationFrame(updateFrame);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          animateMetric();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value]);

  const { suffix } = parseMetric(value);

  return (
    <div ref={metricRef} className="bg-[#0b1221] p-6" data-testid={`home-metric-${index}`}>
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</p>
      <p className="mt-4 font-['Cormorant_Garamond'] text-4xl text-white" data-testid={`home-metric-value-${index}`}>
        {displayValue}
        {suffix}
      </p>
    </div>
  );
};