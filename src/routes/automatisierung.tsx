import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/automatisierung")({
  head: () => ({
    meta: [
      { title: "Automatisierung – Scan & Smile" },
      { name: "description", content: "Prozesse automatisieren, die dir Arbeit abnehmen." },
    ],
  }),
  component: () => <ServicePage service="automation" />,
});
