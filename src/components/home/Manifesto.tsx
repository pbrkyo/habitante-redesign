"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const principles = [
  { n: "01", titleKey: "mf.p1.title", descKey: "mf.p1.desc" },
  { n: "02", titleKey: "mf.p2.title", descKey: "mf.p2.desc" },
  { n: "03", titleKey: "mf.p3.title", descKey: "mf.p3.desc" },
];

export default function Manifesto() {
  const { t } = useLanguage();

  return (
    <section className="bg-white section-pad py-24 max-md:py-14 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-20 max-md:gap-10 items-center">
      <motion.div
        className="font-serif text-display-lg text-carbon leading-[1.38]"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {t("mf.quote.1")}
        <br />
        {t("mf.quote.2")}
        <br />
        {t("mf.quote.3")}
        <br />
        <em className="italic text-az-brand">{t("mf.quote.em")}</em>
      </motion.div>

      <div className="flex flex-col">
        {principles.map((p, i) => (
          <motion.div
            key={p.n}
            className="grid grid-cols-[36px_1fr] py-[22px] border-t border-bone/50 last:border-b last:border-bone/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <span className="text-[11px] text-az-brand tracking-[0.1em] pt-0.5">
              {p.n}
            </span>
            <div>
              <div className="text-sm font-medium text-carbon mb-2">
                {t(p.titleKey)}
              </div>
              <div className="text-sm text-ink/70 leading-[1.8]">
                {t(p.descKey)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
