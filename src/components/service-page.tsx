import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { LanguageToggle } from "@/components/language-toggle";
import { RevealButton } from "@/components/reveal-button";
import { translations, type Dict } from "@/lib/i18n";
import { useLang } from "@/lib/use-lang";

export function ServicePage({ service }: { service: "website" | "automation" }) {
  const [lang, setLang] = useLang();
  const t = translations[lang] as unknown as Dict;
  const data = t.servicePages[service];

  return (
    <div className="hero-glow min-h-screen font-sans" lang={lang}>
      <div className="mx-auto max-w-screen-sm px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            {t.checkoutBack}
          </Link>
          <LanguageToggle lang={lang} onChange={setLang} />
        </div>

        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-google-blue">
          {data.eyebrow}
        </p>
        <h1 className="mb-4 text-balance text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
          {data.title}
        </h1>
        <p className="mb-10 max-w-[45ch] text-pretty text-lg text-muted-foreground">{data.subtitle}</p>

        <div className="mb-8 rounded-[2rem] bg-card p-8 ring-1 ring-black/5">
          <ul className="flex flex-col gap-3">
            {data.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed text-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-google-blue" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <RevealButton href="/kontakt" label={data.cta} />
      </div>
    </div>
  );
}
