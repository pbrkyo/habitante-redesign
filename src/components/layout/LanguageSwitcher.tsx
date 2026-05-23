"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={() => setLang("es")}
        className={`text-[10px] uppercase tracking-nav transition-colors duration-200 ${
          lang === "es"
            ? "text-az-brand font-medium"
            : "text-ink/40 hover:text-ink/70"
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
      <span className="text-[9px] text-ink/25">|</span>
      <button
        onClick={() => setLang("en")}
        className={`text-[10px] uppercase tracking-nav transition-colors duration-200 ${
          lang === "en"
            ? "text-az-brand font-medium"
            : "text-ink/40 hover:text-ink/70"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
