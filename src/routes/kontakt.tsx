import { createFileRoute, Link } from "@tanstack/react-router";
import { LanguageToggle } from "@/components/language-toggle";
import { ContactForm } from "@/components/contact-form";
import { translations, type Dict } from "@/lib/i18n";
import { useLang } from "@/lib/use-lang";
import { artificialDelay } from "@/lib/artificial-delay";

export const Route = createFileRoute("/kontakt")({
  loader: () => artificialDelay(),
  head: () => ({
    meta: [
      { title: "Kontakt – Scan & Smile" },
      { name: "description", content: "Ticket erstellen und Kontakt aufnehmen." },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  const [lang, setLang] = useLang();
  const t = translations[lang] as unknown as Dict;

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
          {t.contactEyebrow}
        </p>
        <h1 className="mb-4 text-balance text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
          {t.contactTitle}
        </h1>
        <p className="mb-10 max-w-[45ch] text-pretty text-lg text-muted-foreground">{t.contactText}</p>

        <div className="rounded-[2rem] bg-card p-8 ring-1 ring-black/5">
          <ContactForm t={t} />
        </div>
      </div>
    </div>
  );
}
