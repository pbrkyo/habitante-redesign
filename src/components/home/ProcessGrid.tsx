"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const steps = [
  { nKey: "proc.1.n", titleKey: "proc.1.title", descKey: "proc.1.desc" },
  { nKey: "proc.2.n", titleKey: "proc.2.title", descKey: "proc.2.desc" },
  { nKey: "proc.3.n", titleKey: "proc.3.title", descKey: "proc.3.desc" },
  { nKey: "proc.4.n", titleKey: "proc.4.title", descKey: "proc.4.desc" },
];

export default function ProcessGrid() {
  const { t } = useLanguage();

  return (
    <section className="bg-linen section-pad py-20 max-md:py-14 border-t border-bone/50 border-b border-bone/50">
      <div className="label-upper text-sand-light mb-3">
        {t("proc.label")}
      </div>
      <h2 className="font-serif text-display-md text-carbon mb-12">
        {t("proc.title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-bone/50">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="p-7 max-lg:p-5 border-r border-bone/50 last:border-r-0 max-lg:border-b max-lg:last:border-b-0 transition-colors duration-200 hover:bg-white/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="label-upper text-az-brand mb-[18px]">
              {t(step.nKey)}
            </div>
            <div className="font-serif text-[17px] text-carbon mb-[9px] leading-[1.3]">
              {t(step.titleKey)}
            </div>
            <div className="text-[11px] text-sand leading-[1.75]">
              {t(step.descKey)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
