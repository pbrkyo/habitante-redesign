"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const principles = [
  { n: "01", titleKey: "mf.p1.title", descKey: "mf.p1.desc" },
  { n: "02", titleKey: "mf.p2.title", descKey: "mf.p2.desc" },
  { n: "03", titleKey: "mf.p3.title", descKey: "mf.p3.desc" },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const quoteVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

const principleVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export default function Manifesto() {
  const { t } = useLanguage();

  const quoteLines = [
    t("mf.quote.1"),
    t("mf.quote.2"),
    t("mf.quote.3"),
  ];

  return (
    <section className="bg-white section-pad py-24 max-md:py-14 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-20 max-md:gap-10 items-center">
      {/* Quote with line-by-line reveal */}
      <motion.div
        className="font-serif text-display-lg text-carbon leading-[1.38] overflow-hidden"
        variants={quoteVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {quoteLines.map((line, i) => (
          <div key={i} style={{ overflow: "hidden" }}>
            <motion.div variants={lineVariants}>{line}</motion.div>
          </div>
        ))}
        <div style={{ overflow: "hidden" }}>
          <motion.div variants={lineVariants}>
            <em className="italic text-az-brand">{t("mf.quote.em")}</em>
          </motion.div>
        </div>
      </motion.div>

      {/* Principles */}
      <motion.div
        className="flex flex-col"
        variants={principleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {principles.map((p) => (
          <motion.div
            key={p.n}
            className="grid grid-cols-[36px_1fr] py-[22px] border-t border-bone/50 last:border-b last:border-bone/50 group cursor-default"
            variants={rowVariants}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <span className="text-[11px] text-az-brand tracking-[0.1em] pt-0.5 transition-colors group-hover:text-az-deep">
              {p.n}
            </span>
            <div>
              <div className="text-sm font-medium text-carbon mb-2 transition-colors group-hover:text-az-brand">
                {t(p.titleKey)}
              </div>
              <div className="text-sm text-ink/70 leading-[1.8]">
                {t(p.descKey)}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
