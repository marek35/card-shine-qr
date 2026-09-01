const NBSP = " ";

type RevealButtonProps = {
  href: string;
  label: string;
  light?: boolean;
  compact?: boolean;
  className?: string;
};

export function RevealButton({ href, label, light, compact, className = "" }: RevealButtonProps) {
  return (
    <a
      href={href}
      className={`reveal-btn ${light ? "reveal-btn--light" : ""} ${className}`}
      style={compact ? { padding: "0.5rem 1.25rem", fontSize: "0.8125rem" } : undefined}
    >
      <span className="original">{label}</span>
      <span className="letters" aria-hidden="true">
        {label.split("").map((char, i) => (
          <span key={i} style={{ transitionDelay: `${i * 0.04}s` }}>
            {char === " " ? NBSP : char}
          </span>
        ))}
      </span>
    </a>
  );
}
