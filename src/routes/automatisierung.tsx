import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { artificialDelay } from "@/lib/artificial-delay";

export const Route = createFileRoute("/automatisierung")({
  loader: () => artificialDelay(),
  head: () => ({
    meta: [
      { title: "Automatisierung – Scan & Smile" },
      { name: "description", content: "Prozesse automatisieren, die dir Arbeit abnehmen." },
    ],
  }),
  component: () => <ServicePage service="automation" />,
});
