"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

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
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
    >
      {items.map((item, i) => (
        <motion.div key={i} className="flex items-center gap-3 flex-1 max-md:w-full" variants={itemVariants}>
          {i > 0 && (
            <div className="w-px h-6 bg-az-mid flex-shrink-0 max-md:hidden" />
          )}
          <div className="w-[3px] h-[3px] rounded-full bg-az-brand flex-shrink-0" />
          <span className="text-[11px] text-az-brand/65 tracking-[0.04em]">
            {item}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
