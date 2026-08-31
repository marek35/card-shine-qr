import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  email: z.string().trim().email({ message: "Bitte gib eine gültige E-Mail-Adresse ein." }).max(255),
  message: z.string().trim().max(1000, { message: "Deine Nachricht darf maximal 1000 Zeichen lang sein." }).optional(),
});

export const submitContactRequest = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_requests").insert({
      email: data.email,
      message: data.message ?? "",
    });

    if (error) {
      console.error("Failed to store contact request:", error);
      throw new Error("Deine Anfrage konnte nicht gespeichert werden. Bitte versuche es erneut.");
    }

    await sendContactNotification(data);

    return { success: true };
  });

async function sendContactNotification(data: { email: string; message?: string }) {
  const RESEND_API_KEY = process.env["RESEND_API_KEY"];
  const RESEND_TO_EMAIL = process.env["RESEND_TO_EMAIL"];
  const RESEND_FROM_EMAIL = process.env["RESEND_FROM_EMAIL"];

  if (!RESEND_API_KEY || !RESEND_TO_EMAIL || !RESEND_FROM_EMAIL) {
    console.error(
      "[Resend] Skipping notification email: missing RESEND_API_KEY, RESEND_TO_EMAIL or RESEND_FROM_EMAIL.",
    );
    return;
  }

  const { Resend } = await import("resend");
  const resend = new Resend(RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: RESEND_FROM_EMAIL,
    to: RESEND_TO_EMAIL,
    replyTo: data.email,
    subject: "Neue Kontaktanfrage – Scan & Smile",
    text: `Neue Anfrage von ${data.email}\n\n${data.message ?? "(keine Nachricht)"}`,
  });

  if (error) {
    console.error("Failed to send contact notification email:", error);
  }
}
