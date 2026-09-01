import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Loader2, Send } from "lucide-react";
import { LanguageToggle } from "@/components/language-toggle";
import { translations, type Dict } from "@/lib/i18n";
import { useLang } from "@/lib/use-lang";
import { submitContactRequest } from "@/lib/contact.functions";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Bestellung – Scan & Smile" },
      { name: "description", content: "Bestelle deine Google Review Karte." },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const [lang, setLang] = useLang();
  const t = translations[lang] as unknown as Dict;
  const tier = t.pricingTiers[0];

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      await submitContactRequest({
        data: { email, message: `Neue Bestellung: ${tier.name}-Paket (${tier.price} ${tier.priceNote}).` },
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : t.formErrorFallback);
    }
  };

  return (
    <div className="hero-glow min-h-screen font-sans" lang={lang}>
      <div className="mx-auto max-w-screen-sm px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            {t.checkoutBack}
          </Link>
          <LanguageToggle lang={lang} onChange={setLang} />
        </div>

        <h1 className="mb-2 text-4xl font-semibold tracking-tight text-foreground">{t.checkoutTitle}</h1>
        <p className="mb-10 text-lg text-muted-foreground">{t.checkoutSubtitle}</p>

        <div className="mb-6 rounded-[2rem] bg-card p-8 ring-1 ring-black/5">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t.checkoutSummaryTitle}
          </h2>
          <div className="mb-4 flex items-baseline justify-between">
            <span className="text-xl font-semibold text-foreground">{tier.name}</span>
            <span className="text-2xl font-bold text-foreground">{tier.price}</span>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">{tier.priceNote}</p>
          <ul className="flex flex-col gap-2">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-google-blue" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {status === "success" ? (
          <div className="rounded-[2rem] bg-card p-8 text-center ring-1 ring-black/5">
            <p className="text-foreground">{t.checkoutSuccess}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-[2rem] bg-card p-8 ring-1 ring-black/5">
            <label htmlFor="checkout-email" className="mb-2 block text-sm font-medium text-foreground">
              {t.formEmail}
            </label>
            <input
              id="checkout-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.formEmailPlaceholder}
              className="mb-4 w-full rounded-xl bg-background px-4 py-3 text-foreground outline-none ring-1 ring-black/10 placeholder:text-muted-foreground focus:ring-2 focus:ring-google-blue"
            />
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{t.checkoutNote}</p>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-google-blue px-6 py-3 text-sm font-medium text-background ring-2 ring-google-blue/20 transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  {t.checkoutSending}
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  {t.checkoutSubmit}
                </>
              )}
            </button>
            {status === "error" && <p className="mt-3 text-sm text-google-red">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
