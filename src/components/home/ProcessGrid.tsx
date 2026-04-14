"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const steps = [
  { nKey: "proc.1.n", titleKey: "proc.1.title", descKey: "proc.1.desc" },
  { nKey: "proc.2.n", titleKey: "proc.2.title", descKey: "proc.2.desc" },
  { nKey: "proc.3.n", titleKey: "proc.3.title", descKey: "proc.3.desc" },
  { nKey: "proc.4.n", titleKey: "proc.4.title", descKey: "proc.4.desc" },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease },
  },
};

export default function ProcessGrid() {
  const { t } = useLanguage();

  return (
    <section className="bg-linen section-pad py-20 max-md:py-14 border-t border-bone/50 border-b border-bone/50">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="flex items-end gap-8 mb-12"
      >
        <div>
          <div className="label-upper text-sand-light mb-3">
            {t("proc.label")}
          </div>
          <h2 className="font-serif text-display-md text-carbon">
            {t("proc.title")}
          </h2>
        </div>
        <motion.div
          className="hidden md:block flex-1 h-px bg-bone/60 mb-3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
          style={{ originX: 0 }}
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-bone/50"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className={`p-7 max-lg:p-5 transition-colors duration-300 hover:bg-white/80 group
              border-bone/50
              lg:border-r lg:last:border-r-0
              max-lg:border-b max-lg:last:border-b-0
              sm:max-lg:[&:nth-child(2n)]:border-r-0
              sm:max-lg:[&:nth-child(n+3)]:border-b-0
              sm:max-lg:last:border-b-0
            `}
            variants={cardVariants}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="label-upper text-az-brand mb-[18px] transition-colors group-hover:text-az-deep">
              {t(step.nKey)}
            </div>
            <div className="font-serif text-[18px] text-carbon mb-3 leading-[1.35]">
              {t(step.titleKey)}
            </div>
            <div className="text-sm text-ink/70 leading-[1.8]">
              {t(step.descKey)}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
