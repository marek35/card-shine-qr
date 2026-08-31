import { createFileRoute } from "@tanstack/react-router";
import { Nfc, Star, Smartphone, MapPin, Sparkles, BadgeCheck, Infinity as InfinityIcon } from "lucide-react";
import qrCode from "@/assets/qr-code.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Google Review Karte mit NFC & QR – 50 € einmalig" },
      {
        name: "description",
        content:
          "Lass deine glücklichen Kunden für dich sprechen: NFC- & QR-Karte für mehr Google-Bewertungen. Einmalig 50 € inkl. Programmierung und Karte.",
      },
      { property: "og:title", content: "Google Review Karte mit NFC & QR – 50 € einmalig" },
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

function ReviewCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card-float">
      <button
        type="button"
        aria-label="Karte umdrehen"
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
              <p className="font-semibold text-foreground">Bewerten Sie uns auf Google</p>
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-google-yellow text-google-yellow" />
                ))}
              </div>
            </div>
          </div>

          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Vorderseite · Antippen
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
            <p className="text-xs font-medium text-muted-foreground">
              Tippen oder scannen, um uns zu bewerten
            </p>
          </div>

          <img
            src={qrCode}
            alt="QR-Code zur Google-Bewertungsseite"
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
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Rückseite</p>
          </div>
        </div>
      </button>
    </div>
  );
}


function Index() {
  return (
    <div className="font-sans">
      <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-google-blue">
              <Star className="size-4 fill-background text-background" />
            </div>
            <span className="font-semibold tracking-tight text-foreground">BewertungsFix</span>
          </div>
          <a
            href="#bestellen"
            className="inline-flex items-center justify-center rounded-full bg-google-blue px-4 py-2 text-sm font-medium text-background ring-2 ring-google-blue/20 transition-transform hover:scale-[1.02]"
          >
            Jetzt bestellen
          </a>
        </div>
      </nav>

      <section className="overflow-hidden py-20 lg:py-32">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 max-w-[20ch] text-balance text-4xl font-semibold leading-none tracking-tight text-foreground lg:text-6xl">
                Lass deine glücklichen Kunden für dich sprechen
              </h1>
              <p className="mb-8 max-w-[48ch] text-pretty text-lg text-muted-foreground">
                Zeig deine guten Leistungen nach außen. Deine Kunden tippen oder scannen – und landen
                direkt im Google-Bewertungsfenster. Kein Suchen, kein Stress.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#bestellen"
                  className="flex items-center gap-2 rounded-full bg-google-blue px-6 py-3 text-sm font-medium text-background ring-2 ring-google-blue/20 transition-transform active:scale-95"
                >
                  Karte sichern — 50 €
                </a>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm text-foreground">
                  <span className="size-2 rounded-full bg-google-green" />
                  Versandkostenfrei in DE
                </div>
              </div>
            </div>

            <div className="perspective-1000 relative flex justify-center">
              <ReviewCard />

              <div className="absolute right-0 top-0 flex size-24 rotate-12 flex-col items-center justify-center rounded-full bg-google-yellow shadow-lg ring-4 ring-background lg:-right-4 lg:size-32">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">Nur</span>
                <span className="text-2xl font-bold text-foreground lg:text-3xl">50 €</span>
                <span className="text-center text-[10px] font-medium text-foreground">Alles inkl.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="mx-auto max-w-screen-xl px-6">
          <h2 className="mb-16 text-center text-3xl font-semibold tracking-tight text-foreground">
            So einfach funktioniert&apos;s
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                icon: MapPin,
                color: "bg-google-blue",
                title: "Karte platzieren",
                text: "Stelle die Karte an deinem Kassenbereich oder auf den Tischen auf.",
              },
              {
                icon: Smartphone,
                color: "bg-google-red",
                title: "Tippen oder Scannen",
                text: "Kunden halten ihr Smartphone an die Karte oder scannen den QR-Code.",
              },
              {
                icon: Star,
                color: "bg-google-green",
                title: "Bewertung erhalten",
                text: "Das Google-Formular öffnet sich sofort. Sterne vergeben — fertig!",
              },
            ].map(({ icon: Icon, color, title, text }) => (
              <div key={title} className="space-y-4 text-center">
                <div
                  className={`mx-auto flex size-12 items-center justify-center rounded-full ${color} text-background`}
                >
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-medium text-foreground">{title}</h3>
                <p className="mx-auto max-w-[35ch] text-pretty text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bestellen" className="py-24">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="relative flex flex-col items-center justify-between gap-12 overflow-hidden rounded-[2rem] bg-foreground p-8 lg:flex-row lg:p-16">
            <div className="relative z-10">
              <h2 className="mb-4 text-balance text-3xl font-semibold leading-tight text-background lg:text-4xl">
                Bereit für 5-Sterne-Wachstum?
              </h2>
              <p className="mb-8 max-w-[40ch] text-muted-foreground">
                Für 50 € bekommst du die physische NFC-Karte inklusive Programmierung auf dein
                Google-Profil – konfiguriert und versendet innerhalb von 48 h.
              </p>
              <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="Deine E-Mail Adresse"
                  className="w-full rounded-full bg-background/10 px-6 py-3 text-background outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-google-blue sm:w-64"
                />
                <button
                  type="submit"
                  className="rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:scale-[1.02] active:scale-95"
                >
                  Bestellung starten
                </button>
              </form>
            </div>

            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 aspect-square rounded-full bg-google-blue/10 blur-3xl" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-4 rounded-2xl bg-background/5 p-4 ring-1 ring-background/10">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-google-yellow">
                    <InfinityIcon className="size-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-background">Kein Abo</p>
                    <p className="text-xs text-muted-foreground">Einmalzahlung für immer.</p>
                  </div>
                </div>
                <div className="flex translate-x-4 items-center gap-4 rounded-2xl bg-background/5 p-4 ring-1 ring-background/10">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-google-green">
                    <BadgeCheck className="size-5 text-background" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-background">Sofort startklar</p>
                    <p className="text-xs text-muted-foreground">Wir richten alles für dich ein.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-md bg-google-blue">
              <Star className="size-3 fill-background text-background" />
            </div>
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              BewertungsFix
            </span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">Impressum</a>
            <a href="#" className="transition-colors hover:text-foreground">Datenschutz</a>
            <a href="#bestellen" className="transition-colors hover:text-foreground">Kontakt</a>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 BewertungsFix</p>
        </div>
      </footer>
    </div>
  );
}
