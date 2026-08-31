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

    return { success: true };
  });
