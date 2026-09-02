import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import type { Dict } from "@/lib/i18n";

export function ServicesMenu({ t }: { t: Dict }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative hidden sm:block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:text-google-blue"
      >
        {t.navServices}
        <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-2xl bg-background p-2 shadow-lg ring-1 ring-black/5">
          <Link
            to="/webseite"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            {t.servicePages.website.eyebrow}
          </Link>
          <Link
            to="/automatisierung"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            {t.servicePages.automation.eyebrow}
          </Link>
        </div>
      )}
    </div>
  );
}
