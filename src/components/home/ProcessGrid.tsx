"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const easeWipe = [0.76, 0, 0.24, 1] as const;

const principles = [
  {
    n: "01",
    titleKey: "proc.1.title",
    shortEs: "Comprendemos a las personas antes que los espacios.",
    shortEn: "We understand people before spaces.",
  },
  {
    n: "02",
    titleKey: "proc.2.title",
    shortEs: "Diseñamos para el bienestar y el equilibrio.",
    shortEn: "We design for wellbeing and balance.",
  },
  {
    n: "03",
    titleKey: "proc.3.title",
    shortEs: "Creamos atmósferas que se sienten y perduran.",
    shortEn: "Atmospheres that are felt and endure.",
  },
  {
    n: "04",
    titleKey: "proc.4.title",
    shortEs: "Respondemos al lugar, su cultura y su contexto.",
    shortEn: "We respond to place, culture and context.",
  },
];

// Desktop node anchors in a 0–100 square viewBox: top, right, bottom, left.
const nodes = [
  { x: 50, y: 20 },
  { x: 80, y: 50 },
  { x: 50, y: 80 },
  { x: 20, y: 50 },
];

const labelPosition = [
  "top-0 left-1/2 -translate-x-1/2 text-center items-center",
  "top-1/2 right-0 -translate-y-1/2 text-left items-start",
  "bottom-0 left-1/2 -translate-x-1/2 text-center items-center",
  "top-1/2 left-0 -translate-y-1/2 text-right items-end",
];

export default function ProcessGrid() {
  const { t, lang } = useLanguage();
  const reduce = useReducedMotion();

  const centerLabel = lang === "es" ? "El habitante" : "The inhabitant";

  return (
    <section className="bg-linen section-pad py-24 max-md:py-16 border-t border-bone/50 border-b border-bone/50">
      {/* Intro */}
      <div className="flex items-end gap-8 mb-16 max-md:mb-12">
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
          className="hidden md:block flex-1 h-px bg-bone/60 mb-3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: easeWipe, delay: 0.3 }}
          style={{ originX: 0 }}
        />
      </div>

      {/* ─── Desktop: radial diagram ─── */}
      <div className="hidden md:block relative mx-auto w-full max-w-[760px] aspect-square">
        {/* Connector lines + node dots */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
        >
          {nodes.map((node, i) => (
            <motion.line
              key={`line-${i}`}
              x1={50}
              y1={50}
              x2={node.x}
              y2={node.y}
              stroke="#1B52A6"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
              {...(!reduce && {
                initial: { pathLength: 0, opacity: 0.3 },
                whileInView: { pathLength: 1, opacity: 1 },
                viewport: { once: true },
                transition: { duration: 0.9, delay: 0.3 + i * 0.12, ease },
              })}
            />
          ))}
          {nodes.map((node, i) => (
            <motion.circle
              key={`dot-${i}`}
              cx={node.x}
              cy={node.y}
              fill="#1B52A6"
              vectorEffect="non-scaling-stroke"
              {...(reduce
                ? { r: 1.4 }
                : {
                    initial: { r: 0 },
                    whileInView: { r: 1.4 },
                    viewport: { once: true },
                    transition: {
                      duration: 0.4,
                      delay: 0.9 + i * 0.12,
                      ease,
                    },
                  })}
            />
          ))}
        </svg>

        {/* Center node */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square rounded-full border border-carbon/25 bg-linen flex items-center justify-center text-center"
          {...(reduce
            ? {}
            : {
                initial: { scale: 0.6, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                viewport: { once: true },
                transition: { duration: 0.7, ease },
              })}
        >
          <span className="font-serif text-xl lg:text-2xl text-carbon px-4 leading-tight">
            {centerLabel}
          </span>
        </motion.div>

        {/* Principle labels */}
        {principles.map((p, i) => (
          <motion.div
            key={p.n}
            className={`absolute flex flex-col max-w-[220px] ${labelPosition[i]}`}
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 12 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.6, delay: 0.9 + i * 0.12, ease },
                })}
          >
            <span className="font-serif text-3xl text-az-brand leading-none mb-2">
              {p.n}
            </span>
            <h3 className="font-serif text-xl lg:text-2xl text-carbon leading-tight mb-2">
              {t(p.titleKey)}
            </h3>
            <p className="text-[13px] text-ink/70 leading-[1.6]">
              {lang === "es" ? p.shortEs : p.shortEn}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ─── Mobile: vertical spine ─── */}
      <div className="md:hidden">
        {/* Center concept */}
        <motion.div
          className="flex flex-col items-center text-center mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="w-32 h-32 rounded-full border border-carbon/25 flex items-center justify-center font-serif text-lg text-carbon leading-tight px-4">
            {centerLabel}
          </span>
        </motion.div>

        {/* Spine + principles */}
        <div className="relative pl-12 pt-4">
          <motion.div
            className="absolute left-[15px] top-0 bottom-8 w-px bg-az-brand/30 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeWipe }}
          />
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              className="relative pb-10 last:pb-0"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
            >
              <span className="absolute -left-[42px] top-1.5 w-3 h-3 rounded-full bg-az-brand ring-4 ring-linen" />
              <span className="font-serif text-2xl text-az-brand leading-none">
                {p.n}
              </span>
              <h3 className="font-serif text-xl text-carbon leading-tight mt-1 mb-1.5">
                {t(p.titleKey)}
              </h3>
              <p className="text-sm text-ink/75 leading-[1.7] max-w-sm">
                {lang === "es" ? p.shortEs : p.shortEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
