"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function StatementBar() {
  const { t } = useLanguage();

  const items = [t("sbar.1"), t("sbar.2"), t("sbar.3"), t("sbar.4")];

  const row = items.flatMap((item, i) => [
    <span
      key={`item-${i}`}
      className="text-[12px] md:text-[13px] uppercase tracking-[0.14em] text-az-brand/70 whitespace-nowrap font-light"
    >
      {item}
    </span>,
    <span
      key={`sep-${i}`}
      className="mx-8 text-az-brand/30 text-lg select-none"
      aria-hidden="true"
    >
      ◆
    </span>,
  ]);

  return (
    <div className="bg-az-light border-b border-az-mid/50 py-4 overflow-hidden">
      <div className="flex animate-marquee">
        <div className="flex items-center shrink-0">
          {row}{row}
        </div>
        <div className="flex items-center shrink-0">
          {row}{row}
        </div>
      </div>
    </div>
  );
}
