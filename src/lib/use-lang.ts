import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";

const STORAGE_KEY = "lang";

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "de";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "es") return stored;
  return "de";
}

export function useLang() {
  // Always start with "de" so server-rendered and first client-rendered
  // markup match; the stored preference is applied after mount.
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    setLangState(readStoredLang());
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
    }
  };

  return [lang, setLang] as const;
}
