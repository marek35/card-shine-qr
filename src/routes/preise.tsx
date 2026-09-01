import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Check } from "lucide-react";

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

const tiers = [
  {
    name: "Standard",
    price: "49,99 €",
    priceNote: "einmalig",
    highlight: false,
    features: ["Installation & Onboarding", "Physische NFC- & QR-Karte", "Direkt einsatzbereit"],
  },
  {
    name: "Premium",
    price: "49,99 € + 10 €",
    priceNote: "einmalig + pro Monat",
    highlight: true,
    features: [
      "Alles aus Standard",
      "Digitale Stempelkarte, die deine Kunden sammeln können",
    ],
  },
  {
    name: "Deluxe",
    price: "49,99 € + 30 €",
    priceNote: "einmalig + pro Monat",
    highlight: false,
    features: [
      "Alles aus Premium",
      "Eigene Landingpage für dein Business",
      "Pflege deiner Speisekarte (ideal für Restaurants)",
      "Laufende Wartung & Support",
    ],
  },
];

function Preise() {
  return (
    <div className="font-sans">
      <div className="mx-auto max-w-screen-xl px-6 py-16">
        <Link to="/" className="mb-8 inline-block text-sm text-muted-foreground hover:text-foreground">
          ← Zurück zur Startseite
        </Link>

        <h1 className="mb-4 max-w-[20ch] text-balance text-4xl font-semibold leading-none tracking-tight text-foreground lg:text-5xl">
          Preise
        </h1>
        <p className="mb-16 max-w-[55ch] text-pretty text-lg text-muted-foreground">
          Wähle das Paket, das zu deinem Business passt — jederzeit erweiterbar.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col overflow-hidden rounded-[2rem] p-8 ring-1 ${
                tier.highlight
                  ? "bg-foreground text-background ring-transparent"
                  : "bg-card text-foreground ring-black/5"
              }`}
            >
              {tier.highlight && (
                <div className="absolute right-6 top-6 flex items-center gap-1 rounded-full bg-google-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground">
                  <BadgeCheck className="size-3" />
                  Beliebt
                </div>
              )}
              <h2 className="mb-2 text-xl font-semibold">{tier.name}</h2>
              <div className="mb-6">
                <span className="text-3xl font-bold tracking-tight">{tier.price}</span>
                <p
                  className={`mt-1 text-sm ${
                    tier.highlight ? "text-muted-foreground" : "text-muted-foreground"
                  }`}
                >
                  {tier.priceNote}
                </p>
              </div>
              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed">
                    <Check
                      className={`mt-0.5 size-4 shrink-0 ${
                        tier.highlight ? "text-google-yellow" : "text-google-blue"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/#anfrage"
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.02] active:scale-95 ${
                  tier.highlight
                    ? "bg-background text-foreground"
                    : "bg-google-blue text-background ring-2 ring-google-blue/20"
                }`}
              >
                Anfrage stellen
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
