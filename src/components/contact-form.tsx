import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { submitContactRequest } from "@/lib/contact.functions";
import type { Dict } from "@/lib/i18n";

export function ContactForm({ t }: { t: Dict }) {
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
