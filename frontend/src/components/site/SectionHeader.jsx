export const SectionHeader = ({ eyebrow, title, description, align = "left" }) => {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="text-xs uppercase tracking-[0.35em] text-sky-300" data-testid={`section-eyebrow-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
        {eyebrow}
      </p>
      <h2 className="mt-4 font-['Cormorant_Garamond'] text-4xl tracking-tight text-slate-50 sm:text-5xl" data-testid={`section-title-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-300" data-testid={`section-description-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
        {description}
      </p>
    </div>
  );
};