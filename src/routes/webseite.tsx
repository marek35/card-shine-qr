import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/webseite")({
  head: () => ({
    meta: [
      { title: "Neue Webseite – Scan & Smile" },
      { name: "description", content: "Wir bauen deine neue Webseite genau passend zu deinem Business." },
    ],
  }),
  component: () => <ServicePage service="website" />,
});
