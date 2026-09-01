const NAVY = "#14213d";
const LIGHT_BLUE = "#8fb8ef";

export function BrandLogo({ className = "", iconClassName = "h-10", textClassName = "text-lg" }: {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 220 140" className={`w-auto ${iconClassName}`} aria-hidden="true">
        <path
          d="M 20 85 C 5 55, 25 15, 65 20 C 95 24, 90 55, 55 55 C 40 55, 32 45, 40 38"
          fill="none"
          stroke={NAVY}
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="10" y="85" width="50" height="30" rx="6" fill={NAVY} />
        <line x1="22" y1="90" x2="22" y2="110" stroke={LIGHT_BLUE} strokeWidth="4" strokeLinecap="round" />
        <line x1="32" y1="90" x2="32" y2="110" stroke={LIGHT_BLUE} strokeWidth="4" strokeLinecap="round" />
        <line x1="42" y1="90" x2="42" y2="110" stroke={LIGHT_BLUE} strokeWidth="4" strokeLinecap="round" />
        <line x1="52" y1="90" x2="52" y2="110" stroke={LIGHT_BLUE} strokeWidth="4" strokeLinecap="round" />
        <rect x="58" y="88" width="48" height="24" rx="4" fill={LIGHT_BLUE} />
      </svg>
      <div className="leading-none">
        <div className={`${textClassName} font-extrabold uppercase tracking-tight`} style={{ color: LIGHT_BLUE }}>
          Scan&amp;
        </div>
        <div className={`${textClassName} font-extrabold uppercase tracking-tight`} style={{ color: NAVY }}>
          Smile
        </div>
      </div>
    </div>
  );
}
