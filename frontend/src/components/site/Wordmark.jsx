export const Wordmark = ({
  compact = false,
  showTagline = true,
  align = "left",
  dataTestIdPrefix = "site-logo",
}) => {
  const alignmentClass = align === "center" ? "items-center text-center" : "items-start text-left";
  const wordmarkSize = compact ? "text-[2rem] sm:text-[2.2rem]" : "text-[2.2rem] sm:text-[2.45rem]";

  return (
    <div className={`flex flex-col ${alignmentClass}`}>
      <p
        className={`font-['Cormorant_Garamond'] ${wordmarkSize} flex flex-wrap items-baseline gap-x-2 leading-none text-slate-50`}
        data-testid={`${dataTestIdPrefix}-text`}
      >
        <span className="tracking-[-0.048em] text-slate-200">Silver</span>
        <span className="tracking-[-0.022em] font-semibold text-white">Core</span>
        <span className="tracking-[-0.04em] text-slate-200">Partners</span>
      </p>

      {showTagline && (
        <p
          className="mt-2 text-[11px] uppercase tracking-[0.42em] text-slate-400 sm:text-xs"
          data-testid={`${dataTestIdPrefix}-tagline`}
        >
          Boutique cross-border advisory
        </p>
      )}
    </div>
  );
};