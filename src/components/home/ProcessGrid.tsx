"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const easeWipe = [0.76, 0, 0.24, 1] as const;

const principles = [
  { key: "proc.1", num: "01" },
  { key: "proc.2", num: "02" },
  { key: "proc.3", num: "03" },
  { key: "proc.4", num: "04" },
];

function Band({
  num,
  phase,
  title,
  desc,
  index,
  reduce,
}: {
  num: string;
  phase: string;
  title: string;
  desc: string;
  index: number;
  reduce: boolean | null;
}) {
  // The phase label arrives as "01 — Escucha"; keep only the word after the dash.
  const phaseWord = phase.split("—").pop()?.trim() ?? phase;

  return (
    <motion.div
      className="group relative border-t border-bone/60 last:border-b last:border-bone/60"
      initial={reduce ? undefined : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_minmax(0,420px)] gap-x-10 gap-y-4 items-baseline py-10 max-md:py-8 transition-colors duration-500">
        {/* Numeral */}
        <span className="font-serif text-2xl md:text-3xl text-az-brand/40 leading-none tabular-nums transition-colors duration-500 group-hover:text-az-brand">
          {num}
        </span>

        {/* Title + phase + sweeping underline */}
        <div className="min-w-0">
          <span className="label-upper text-az-brand/80 block mb-3">
            {phaseWord}
          </span>
          <h3 className="font-serif text-display-sm text-carbon leading-[1.1] transition-colors duration-500 group-hover:text-az-brand">
            {title}
          </h3>
          <div className="relative mt-4 h-px w-full max-w-[280px] bg-bone/60 overflow-hidden">
            <motion.span
              className="absolute inset-0 bg-az-brand origin-left"
              initial={reduce ? undefined : { scaleX: 0 }}
              whileInView={reduce ? undefined : { scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.25 + index * 0.08, ease: easeWipe }}
              style={reduce ? { transform: "scaleX(1)" } : undefined}
            />
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="body-text text-ink/75 leading-[1.85] md:pt-1"
          initial={reduce ? undefined : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.4 + index * 0.08, ease }}
        >
          {desc}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function ProcessGrid() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section className="bg-linen section-pad py-24 max-md:py-16 border-t border-bone/50">
      {/* Intro */}
      <div className="flex items-end gap-8 mb-14 max-md:mb-10">
        <div>
          <motion.div
            className="label-upper mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("proc.label")}
          </motion.div>
          <motion.h2
            className="font-serif text-display-md text-carbon"
            initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easeWipe, delay: 0.1 }}
          >
            {t("proc.title")}
          </motion.h2>
        </div>
        <motion.div
          className="hidden md:block flex-1 h-px bg-bone/60 mb-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: easeWipe, delay: 0.3 }}
          style={{ originX: 0 }}
        />
      </div>

      {/* Principle bands */}
      <div>
        {principles.map((p, i) => (
          <Band
            key={p.key}
            num={p.num}
            phase={t(`${p.key}.n`)}
            title={t(`${p.key}.title`)}
            desc={t(`${p.key}.desc`)}
            index={i}
            reduce={reduce}
          />
        ))}
      </div>
    </section>
  );
}
