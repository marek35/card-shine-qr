import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import {
  Nfc,
  Star,
  Smartphone,
  MapPin,
  Sparkles,
  BadgeCheck,
  Infinity as InfinityIcon,
  Monitor,
  Bot,
  Mail,
  Send,
  Loader2,
} from "lucide-react";
import qrCode from "@/assets/qr-code.jpg";
import { submitContactRequest } from "@/lib/contact.functions";
import { translations, type Dict } from "@/lib/i18n";
import { RevealButton } from "@/components/reveal-button";
import { LanguageToggle } from "@/components/language-toggle";
import { BrandLogo } from "@/components/brand-logo";
import { useLang } from "@/lib/use-lang";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Google Review Karte mit NFC & QR – 49,99 € einmalig" },
      {
        name: "description",
        content:
          "Lass deine glücklichen Kunden für dich sprechen: NFC- & QR-Karte für mehr Google-Bewertungen. Einmalig 49,99 € inkl. Programmierung und Karte.",
      },
      { property: "og:title", content: "Google Review Karte mit NFC & QR – 49,99 € einmalig" },
      {
        property: "og:description",
        content: "Tippen oder scannen – deine Kunden bewerten dich in Sekunden bei Google.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function ReviewCard({ t }: { t: Dict }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card-float">
      <button
        type="button"
        aria-label={t.cardFlip}
        onClick={() => setFlipped((f) => !f)}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        className="preserve-3d relative h-[480px] w-[320px] cursor-pointer transition-transform duration-700 ease-out"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Vorderseite */}
        <div className="backface-hidden absolute inset-0 flex flex-col items-center justify-between overflow-hidden rounded-[24px] bg-card p-8 text-center shadow-2xl ring-1 ring-black/10">
          <div className="flex w-full items-start justify-between">
            <div className="flex size-9 items-center justify-center rounded-full bg-muted">
              <Nfc className="size-5 text-muted-foreground" />
            </div>
            <div className="flex size-9 items-center justify-center rounded-full bg-google-red/10">
              <Sparkles className="size-4 text-google-red" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="mx-auto grid size-20 place-items-center rounded-2xl bg-muted outline-1 -outline-offset-1 outline-black/5">
              <span className="text-4xl font-bold text-google-blue">G</span>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-foreground">{t.cardFrontTitle}</p>
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-google-yellow text-google-yellow" />
                ))}
              </div>
            </div>
          </div>

          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {t.cardFront}
          </p>
        </div>

        {/* Rückseite */}
        <div
          className="backface-hidden absolute inset-0 flex flex-col items-center justify-between overflow-hidden rounded-[24px] bg-card p-8 text-center shadow-2xl ring-1 ring-black/10"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-full bg-google-blue/10">
              <Nfc className="size-5 text-google-blue" />
            </div>
            <p className="text-xs font-medium text-muted-foreground">{t.cardBackHint}</p>
          </div>

          <img
            src={qrCode}
            alt={t.qrAlt}
            width={512}
            height={512}
            loading="lazy"
            className="size-36 rounded-xl object-cover outline-1 -outline-offset-1 outline-black/5"
          />

          <div className="space-y-2">
            <div className="flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-google-yellow text-google-yellow" />
              ))}
            </div>
            <p className="text-2xl font-semibold tracking-tight">
              <span className="text-google-blue">G</span>
              <span className="text-google-red">o</span>
              <span className="text-google-yellow">o</span>
              <span className="text-google-blue">g</span>
              <span className="text-google-green">l</span>
              <span className="text-google-red">e</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.cardBack}</p>
          </div>
        </div>
      </button>
    </div>
  );
}

function ContactForm({ t }: { t: Dict }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      await submitContactRequest({ data: { email, message } });
      setStatus("success");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : t.formErrorFallback);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-foreground">
          {t.formEmail}
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.formEmailPlaceholder}
          className="w-full rounded-xl bg-background px-4 py-3 text-foreground outline-none ring-1 ring-black/10 placeholder:text-muted-foreground focus:ring-2 focus:ring-google-blue"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-foreground">
          {t.formMessage}
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.formMessagePlaceholder}
          rows={4}
          className="w-full resize-none rounded-xl bg-background px-4 py-3 text-foreground outline-none ring-1 ring-black/10 placeholder:text-muted-foreground focus:ring-2 focus:ring-google-blue"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-google-blue px-6 py-3 text-sm font-medium text-background ring-2 ring-google-blue/20 transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            {t.formSending}
          </>
        ) : (
          <>
            <Send className="size-4" />
            {t.formSubmit}
          </>
        )}
      </button>
      {status === "success" && <p className="text-sm text-google-green">{t.formSuccess}</p>}
      {status === "error" && <p className="text-sm text-google-red">{error}</p>}
      <p className="text-xs text-muted-foreground">{t.formSla}</p>
    </form>
  );
}

function Index() {
  const [lang, setLang] = useLang();
  const t = translations[lang] as unknown as Dict;

  return (
    <div className="font-sans" lang={lang}>
      <nav className="sticky top-4 z-50 flex justify-center px-4">
        <div className="flex items-center gap-3 rounded-full bg-background px-4 py-2 shadow-lg ring-1 ring-black/5">
          <div className="hidden sm:inline-block">
            <RevealButton href="/preise" label={t.pricing} compact />
          </div>
          <LanguageToggle lang={lang} onChange={setLang} />
          <Link
            to="/checkout"
            className="inline-flex items-center justify-center rounded-full bg-google-blue px-4 py-2 text-sm font-medium text-background ring-2 ring-google-blue/20 transition-transform hover:scale-[1.02]"
          >
            {t.navCta}
          </Link>
        </div>
      </nav>

      <section className="hero-glow overflow-hidden py-20 lg:py-32">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 max-w-[20ch] text-balance text-4xl font-semibold leading-none tracking-tight text-foreground lg:text-6xl">
                {t.heroTitle}
              </h1>
              <p className="mb-8 max-w-[48ch] text-pretty text-lg text-muted-foreground">
                {t.heroText}
              </p>
              <div className="flex flex-col items-start gap-3">
                <Link
                  to="/checkout"
                  className="flex items-center gap-2 rounded-full bg-google-blue px-6 py-3 text-sm font-medium text-background ring-2 ring-google-blue/20 transition-transform active:scale-95"
                >
                  {t.heroCta}
                </Link>
                <p className="text-sm text-muted-foreground">{t.heroNote}</p>
              </div>
            </div>

            <div className="perspective-1000 relative flex justify-center">
              <ReviewCard t={t} />

              <div className="absolute right-0 top-0 flex size-24 rotate-12 flex-col items-center justify-center rounded-full bg-google-yellow shadow-lg ring-4 ring-background lg:-right-4 lg:size-32">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                  {t.badgeOnly}
                </span>
                <span className="text-2xl font-bold text-foreground lg:text-3xl">
                  {lang === "de" ? "49,99 €" : "€49.99"}
                </span>
                <span className="text-center text-[10px] font-medium text-foreground">{t.badgeAll}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="mx-auto max-w-screen-xl px-6">
          <h2 className="mb-16 text-center text-3xl font-semibold tracking-tight text-foreground">
            {t.howTitle}
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[MapPin, Smartphone, Star].map((Icon, i) => {
              const color = ["bg-google-blue", "bg-google-red", "bg-google-green"][i];
              const step = t.steps[i];
              return (
                <div key={step.title} className="space-y-4 text-center">
                  <div
                    className={`mx-auto flex size-12 items-center justify-center rounded-full ${color} text-background`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
                  <p className="mx-auto max-w-[35ch] text-pretty text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="mx-auto max-w-screen-xl px-6">
          <h2 className="mb-4 text-center text-3xl font-semibold tracking-tight text-foreground">
            {t.servicesTitle}
          </h2>
          <p className="mx-auto mb-16 max-w-[60ch] text-center text-muted-foreground">
            {t.servicesText}
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {[Monitor, Bot].map((Icon, i) => {
              const color = ["bg-google-blue", "bg-google-red"][i];
              const service = t.services[i];
              return (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-[2rem] bg-card p-8 ring-1 ring-black/5 transition-transform hover:-translate-y-1"
                >
                  <div
                    className={`mb-6 flex size-12 items-center justify-center rounded-full ${color} text-background`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="max-w-[45ch] text-pretty leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                  <a
                    href="#anfrage"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-google-blue transition-colors hover:text-google-blue/80"
                  >
                    <Mail className="size-4" />
                    {t.serviceCta}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="bestellen" className="py-24">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="relative flex flex-col items-center justify-between gap-12 overflow-hidden rounded-[2rem] bg-foreground p-8 lg:flex-row lg:p-16">
            <div className="relative z-10">
              <h2 className="mb-4 text-balance text-3xl font-semibold leading-tight text-background lg:text-4xl">
                {t.orderTitle}
              </h2>
              <p className="mb-8 max-w-[40ch] text-muted-foreground">{t.orderText}</p>
              <Link
                to="/checkout"
                className="inline-flex items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:scale-[1.02] active:scale-95"
              >
                {t.orderCta}
              </Link>
            </div>

            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 aspect-square rounded-full bg-google-blue/10 blur-3xl" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-4 rounded-2xl bg-background/5 p-4 ring-1 ring-background/10">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-google-yellow">
                    <InfinityIcon className="size-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-background">{t.onceTitle}</p>
                    <p className="text-xs text-muted-foreground">{t.onceText}</p>
                  </div>
                </div>
                <div className="flex translate-x-4 items-center gap-4 rounded-2xl bg-background/5 p-4 ring-1 ring-background/10">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-google-green">
                    <BadgeCheck className="size-5 text-background" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-background">{t.readyTitle}</p>
                    <p className="text-xs text-muted-foreground">{t.readyText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="anfrage" className="bg-muted py-24">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-google-blue">
                {t.contactEyebrow}
              </p>
              <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                {t.contactTitle}
              </h2>
              <p className="max-w-[45ch] text-pretty text-muted-foreground">{t.contactText}</p>
            </div>
            <div className="rounded-[2rem] bg-card p-8 ring-1 ring-black/5">
              <ContactForm t={t} />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <BrandLogo iconClassName="h-8" textClassName="text-xs" />
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link to="/preise" className="transition-colors hover:text-foreground">{t.pricing}</Link>
            <Link to="/impressum" className="transition-colors hover:text-foreground">{t.imprint}</Link>
            <Link to="/datenschutz" className="transition-colors hover:text-foreground">{t.privacy}</Link>
            <a href="#anfrage" className="transition-colors hover:text-foreground">{t.contact}</a>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 {t.brand}</p>
        </div>
      </footer>
    </div>
  );
}
