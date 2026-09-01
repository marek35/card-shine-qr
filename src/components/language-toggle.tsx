import { Languages } from "lucide-react";
import type { Lang } from "@/lib/i18n";

export function LanguageToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div
      role="group"
      aria-label="Sprache / Language"
      className="flex items-center gap-1 rounded-full bg-muted p-1 ring-1 ring-black/5"
    >
      <Languages className="ml-1 size-4 text-muted-foreground" aria-hidden="true" />
      {(["de", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onChange(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
            lang === l
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
