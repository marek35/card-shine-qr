import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Check } from "lucide-react";
import { RevealButton } from "@/components/reveal-button";
import { LanguageToggle } from "@/components/language-toggle";
import { translations, type Dict } from "@/lib/i18n";
import { useLang } from "@/lib/use-lang";

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise – Scan & Smile" },
      {
        name: "description",
        content: "Preise für die Google Review Karte: Standard, Premium und Deluxe.",
      },
    ],
  }),
  component: Preise,
});

function Preise() {
  const [lang, setLang] = useLang();
  const t = translations[lang] as unknown as Dict;

  return (
    <div className="font-sans" lang={lang}>
      <div className="mx-auto max-w-screen-xl px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            {t.pricingBack}
          </Link>
          <LanguageToggle lang={lang} onChange={setLang} />
        </div>

        <h1 className="mb-4 max-w-[20ch] text-balance text-4xl font-semibold leading-none tracking-tight text-foreground lg:text-5xl">
          {t.pricingTitle}
        </h1>
        <p className="mb-16 max-w-[55ch] text-pretty text-lg text-muted-foreground">
          {t.pricingSubtitle}
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {t.pricingTiers.map((tier, i) => {
            const highlight = i === 1;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col overflow-hidden rounded-[2rem] p-8 ring-1 ${
                  highlight
                    ? "bg-foreground text-background ring-transparent"
                    : "bg-card text-foreground ring-black/5"
                }`}
              >
                {highlight && (
                  <div className="absolute right-6 top-6 flex items-center gap-1 rounded-full bg-google-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground">
                    <BadgeCheck className="size-3" />
                    {t.pricingPopular}
                  </div>
                )}
                <h2 className="mb-2 text-xl font-semibold">{tier.name}</h2>
                <div className="mb-6">
                  <span className="text-3xl font-bold tracking-tight">{tier.price}</span>
                  <p className="mt-1 text-sm text-muted-foreground">{tier.priceNote}</p>
                </div>
                <ul className="mb-8 flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed">
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${
                          highlight ? "text-google-yellow" : "text-google-blue"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <RevealButton href="/#anfrage" label={t.pricingCta} light={highlight} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
