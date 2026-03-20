"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const stats = [
  { nKey: "cs.stat1.n", labelKey: "cs.stat1.label", subKey: "cs.stat1.sub", large: false },
  { nKey: "cs.stat2.n", labelKey: "cs.stat2.label", subKey: "cs.stat2.sub", large: true },
  { nKey: "cs.stat3.n", labelKey: "cs.stat3.label", subKey: "cs.stat3.sub", large: true },
];

export default function QuoteStats() {
  const { t } = useLanguage();

  return (
    <section className="bg-az-light section-pad py-20 max-md:py-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-20 max-md:gap-10 items-center border-t border-az-mid/50 border-b border-az-mid/50">
      <motion.div
        className="font-serif text-display-lg text-carbon leading-[1.32] italic"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        &ldquo;{t("cs.quote")}
        <em className="not-italic text-az-brand">{t("cs.quote.em")}</em>&rdquo;
      </motion.div>

      <div className="flex flex-col">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="flex items-baseline gap-3.5 py-[18px] border-t border-az-mid/50 last:border-b last:border-az-mid/50"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <div
              className={`font-serif text-az-brand leading-none ${
                stat.large ? "text-[26px] pt-1.5" : "text-4xl"
              }`}
            >
              {t(stat.nKey)}
            </div>
            <div className="text-sm text-ink/80 leading-[1.5]">
              {t(stat.labelKey)}
              <small className="block text-[11px] text-ink/60 mt-1 tracking-[0.04em]">
                {t(stat.subKey)}
              </small>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
