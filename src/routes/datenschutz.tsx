import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Scan & Smile" },
      { name: "description", content: "Datenschutzerklärung von Scan & Smile / Real Time Colors GmbH" },
    ],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <div className="mx-auto max-w-screen-md px-6 py-16 text-foreground">
      <Link to="/" className="mb-8 inline-block text-sm text-muted-foreground hover:text-foreground">
        ← Zurück zur Startseite
      </Link>

      <h1 className="mb-8 text-3xl font-semibold tracking-tight">Datenschutzerklärung</h1>

      <div className="space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-2 text-xl font-medium text-foreground">1. Verantwortlicher</h2>
          <p>
            Real Time Colors GmbH<br />
            Makus Sirenko<br />
            Poststraße 53<br />
            40878 Ratingen<br />
            E-Mail: scan.smile@proton.me
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium text-foreground">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p>
            Wenn Sie unser Kontaktformular nutzen, erheben wir die von Ihnen eingegebene E-Mail-Adresse
            sowie Ihre Nachricht. Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
            verwendet und in einer Datenbank bei unserem Auftragsverarbeiter Supabase gespeichert.
            Zusätzlich erhalten wir eine Benachrichtigung per E-Mail über den Dienst Resend.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium text-foreground">3. Rechtsgrundlage</h2>
          <p>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Erfüllung
            vorvertraglicher Maßnahmen bzw. Bearbeitung Ihrer Anfrage) sowie Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an effizienter Kommunikation).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium text-foreground">4. Hosting</h2>
          <p>
            Diese Website wird bei Vercel Inc. gehostet. Der Anbieter verarbeitet dabei automatisch
            technische Daten (z. B. IP-Adresse, Zeitpunkt des Zugriffs) in sogenannten Server-Logfiles,
            die technisch erforderlich sind, um die Website auszuliefern.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium text-foreground">5. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
            Verarbeitung Ihrer bei uns gespeicherten Daten sowie ein Widerspruchsrecht gegen die
            Verarbeitung und ein Recht auf Datenübertragbarkeit. Wenden Sie sich hierzu an die oben
            genannte Kontakt-E-Mail-Adresse. Ihnen steht zudem ein Beschwerderecht bei einer
            Datenschutzaufsichtsbehörde zu.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-medium text-foreground">6. Speicherdauer</h2>
          <p>
            Wir speichern Ihre Kontaktanfrage, bis der Zweck der Speicherung entfällt (in der Regel nach
            abschließender Bearbeitung Ihrer Anfrage), sofern keine gesetzlichen Aufbewahrungspflichten
            entgegenstehen.
          </p>
        </section>
      </div>
    </div>
  );
}
