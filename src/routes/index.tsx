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
  Languages,
} from "lucide-react";
import qrCode from "@/assets/qr-code.jpg";
import { submitContactRequest } from "@/lib/contact.functions";
import { translations, type Dict, type Lang } from "@/lib/i18n";

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
    </form>
  );
}

function LanguageToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
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

function Index() {
  const [lang, setLang] = useState<Lang>("de");
  const t = translations[lang] as unknown as Dict;

  return (
    <div className="font-sans" lang={lang}>
      <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-google-blue">
              <Star className="size-4 fill-background text-background" />
            </div>
            <span className="font-semibold tracking-tight text-foreground">{t.brand}</span>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle lang={lang} onChange={setLang} />
            
              href="#bestellen"
              className="inline-flex items-center justify-center rounded-full bg-google-blue px-4 py-2 text-sm font-medium text-background ring-2 ring-google-blue/20 transition-transform hover:scale-[1.02]"
            >
              {t.navCta}
            </a>
          </div>
        </div>
      </nav>

      <section className="hero-glow overflow-hidden py-20 lg:py-32">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
