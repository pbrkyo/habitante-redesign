"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className="text-[9px] uppercase tracking-nav text-az-brand/60 hover:text-az-brand transition-colors duration-200 cursor-pointer"
      aria-label={`Switch to ${lang === "es" ? "English" : "Español"}`}
    >
      {t("nav.lang")}
    </button>
  );
}
