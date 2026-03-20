"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function StatementBar() {
  const { t } = useLanguage();

  const items = [
    t("sbar.1"),
    t("sbar.2"),
    t("sbar.3"),
    t("sbar.4"),
  ];

  return (
    <motion.div
      className="bg-az-light section-pad py-5 flex max-md:flex-col items-center gap-12 max-md:gap-4 border-b border-az-mid/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3 flex-1 max-md:w-full">
          {i > 0 && (
            <div className="w-px h-6 bg-az-mid flex-shrink-0 max-md:hidden" />
          )}
          <div className="w-[3px] h-[3px] rounded-full bg-az-brand flex-shrink-0" />
          <span className="text-[11px] text-az-brand/65 tracking-[0.04em]">
            {item}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
