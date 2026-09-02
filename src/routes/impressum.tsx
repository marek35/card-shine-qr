import { createFileRoute, Link } from "@tanstack/react-router";
import { artificialDelay } from "@/lib/artificial-delay";

export const Route = createFileRoute("/impressum")({
  loader: () => artificialDelay(),
  head: () => ({
    meta: [
      { title: "Impressum – Scan & Smile" },
      { name: "description", content: "Impressum von Scan & Smile / Real Time Colors GmbH" },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <div className="mx-auto max-w-screen-md px-6 py-16 text-foreground">
      <Link to="/" className="mb-8 inline-block text-sm text-muted-foreground hover:text-foreground">
        ← Zurück zur Startseite
      </Link>

      <h1 className="mb-8 text-3xl font-semibold tracking-tight">Impressum</h1>

      <div className="space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-2 text-xl font-medium text-foreground">Angaben gemäß § 5 TMG</h2>
          <p>
            Real Time Colors GmbH<br />
            Poststraße 53<br />
            40878 Ratingen
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium text-foreground">Vertreten durch</h2>
          <p>Geschäftsführer: Markus Josef Oskar Sirenko</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium text-foreground">Kontakt</h2>
          <p>E-Mail: scan.smile@proton.me</p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium text-foreground">Registereintrag</h2>
          <p>
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Düsseldorf<br />
            Registernummer: HRB 94654
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium text-foreground">Redaktionell verantwortlich</h2>
          <p>
            Markus Josef Oskar Sirenko<br />
            Poststraße 53<br />
            40878 Ratingen
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium text-foreground">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-google-blue hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium text-foreground">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </div>
  );
}
