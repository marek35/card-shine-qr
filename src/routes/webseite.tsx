import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { artificialDelay } from "@/lib/artificial-delay";

export const Route = createFileRoute("/webseite")({
  loader: () => artificialDelay(),
  head: () => ({
    meta: [
      { title: "Neue Webseite – Scan & Smile" },
      { name: "description", content: "Wir bauen deine neue Webseite genau passend zu deinem Business." },
    ],
  }),
  component: () => <ServicePage service="website" />,
});
