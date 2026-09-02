import { Link } from "@tanstack/react-router";

const NBSP = " ";

type RevealButtonProps = {
  href: string;
  label: string;
  light?: boolean;
  compact?: boolean;
  className?: string;
};

export function RevealButton({ href, label, light, compact, className = "" }: RevealButtonProps) {
  const content = (
    <>
      <span className="original">{label}</span>
      <span className="letters" aria-hidden="true">
        {label.split("").map((char, i) => (
          <span key={i} style={{ transitionDelay: `${i * 0.04}s` }}>
            {char === " " ? NBSP : char}
          </span>
        ))}
      </span>
    </>
  );

  const btnClassName = `reveal-btn ${light ? "reveal-btn--light" : ""} ${className}`;
  const btnStyle = compact ? { padding: "0.5rem 1.25rem", fontSize: "0.8125rem" } : undefined;

  if (href.startsWith("/") && !href.includes("#")) {
    return (
      <Link to={href} className={btnClassName} style={btnStyle}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={btnClassName} style={btnStyle}>
      {content}
    </a>
  );
}
