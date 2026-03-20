"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import type { Language } from "@/types";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

import { translations } from "./translations";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");

  useEffect(() => {
    const stored = localStorage.getItem("habitante-lang") as Language | null;
    if (stored && (stored === "es" || stored === "en")) {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("habitante-lang", newLang);
    document.documentElement.lang = newLang;
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[lang]?.[key] ?? translations.es[key] ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
