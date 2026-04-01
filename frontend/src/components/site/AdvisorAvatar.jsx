const palettes = [
  {
    glow: "from-sky-400/25 via-transparent to-transparent",
    badge: "bg-sky-300/15 text-sky-100 border-sky-300/30",
    suit: "#1f3b5c",
    accent: "#7dd3fc",
  },
  {
    glow: "from-slate-300/20 via-transparent to-transparent",
    badge: "bg-slate-200/10 text-slate-100 border-slate-300/25",
    suit: "#233449",
    accent: "#cbd5e1",
  },
  {
    glow: "from-cyan-300/20 via-transparent to-transparent",
    badge: "bg-cyan-300/10 text-cyan-100 border-cyan-300/25",
    suit: "#1e3a4a",
    accent: "#67e8f9",
  },
];

export const AdvisorAvatar = ({ name, index = 0 }) => {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const palette = palettes[index % palettes.length];

  return (
    <div className="relative h-72 overflow-hidden border-b border-white/10 bg-[#09111f]" data-testid={`advisor-avatar-${index}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${palette.glow}`} />
      <div className="absolute inset-x-6 top-6 h-20 rounded-full border border-white/5 bg-white/[0.02] blur-xl" />
      <svg viewBox="0 0 320 240" className="relative mx-auto mt-8 h-56 w-full opacity-95" aria-hidden="true">
        <circle cx="160" cy="82" r="36" fill="#eef2ff" fillOpacity="0.92" />
        <path d="M108 196c12-40 33-58 52-58s40 18 52 58" fill={palette.suit} fillOpacity="0.98" />
        <path d="M120 196c11-32 25-49 40-49s29 17 40 49" fill="#0b1221" fillOpacity="0.95" />
        <path d="M152 136l8 18 8-18" stroke={palette.accent} strokeWidth="4" strokeLinecap="round" />
        <path d="M132 196l28-58 28 58" fill="none" stroke="#f8fafc" strokeOpacity="0.18" strokeWidth="2" />
        <circle cx="160" cy="76" r="42" fill="none" stroke="#f8fafc" strokeOpacity="0.08" strokeWidth="10" />
      </svg>

      <div className={`absolute bottom-5 left-5 inline-flex items-center rounded-full border px-4 py-2 text-xs tracking-[0.3em] ${palette.badge}`} data-testid={`advisor-avatar-badge-${index}`}>
        {initials}
      </div>

      <div className="absolute right-5 top-5 h-14 w-14 rounded-full border border-white/10 bg-white/[0.03]" />
      <div className="absolute right-9 top-9 h-6 w-6 rounded-full border border-white/10 bg-white/[0.04]" />
    </div>
  );
};