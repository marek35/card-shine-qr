import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "@/components/language-toggle";
import type { Dict, Lang } from "@/lib/i18n";

export function MobileMenu({
  t,
  lang,
  setLang,
}: {
  t: Dict;
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const linkClass =
    "rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted";

  return (
    <div className="sm:hidden">
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t.navServices}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="flex size-9 items-center justify-center rounded-full text-foreground"
      >
        <Menu className="size-5" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
            />
            <motion.div
              className="fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-xs flex-col gap-1 bg-background p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {t.navServices}
                </span>
                <motion.button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="flex size-9 items-center justify-center rounded-full text-foreground"
                >
                  <X className="size-5" />
                </motion.button>
              </div>

              <Link to="/webseite" onClick={close} className={linkClass}>
                {t.servicePages.website.eyebrow}
              </Link>
              <Link to="/automatisierung" onClick={close} className={linkClass}>
                {t.servicePages.automation.eyebrow}
              </Link>
              <Link to="/preise" onClick={close} className={linkClass}>
                {t.pricing}
              </Link>
              <Link to="/kontakt" onClick={close} className={linkClass}>
                {t.contact}
              </Link>

              <div className="mt-4">
                <LanguageToggle lang={lang} onChange={setLang} />
              </div>

              <Link
                to="/checkout"
                onClick={close}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-google-blue px-4 py-3 text-sm font-medium text-background ring-2 ring-google-blue/20"
              >
                {t.navCta}
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
