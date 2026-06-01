"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const steps = [
  { nKey: "proc.1.n", titleKey: "proc.1.title", descKey: "proc.1.desc" },
  { nKey: "proc.2.n", titleKey: "proc.2.title", descKey: "proc.2.desc" },
  { nKey: "proc.3.n", titleKey: "proc.3.title", descKey: "proc.3.desc" },
  { nKey: "proc.4.n", titleKey: "proc.4.title", descKey: "proc.4.desc" },
];

const easeWipe = [0.76, 0, 0.24, 1] as const;

/* One principle row — its title sweeps from faint sand to deep carbon as it
   scrolls through the viewport, echoing the Manifesto quote reveal. */
function PrincipleRow({
  number,
  phase,
  title,
  desc,
}: {
  number: string;
  phase: string;
  title: string;
  desc: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.4"],
  });

  const titleColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(200,195,188)", "rgb(30,29,26)"]
  );
  const numberColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(27,82,166,0.25)", "rgba(27,82,166,1)"]
  );
  const detailOpacity = useTransform(scrollYProgress, [0.2, 1], [0.2, 1]);

  return (
    <div
      ref={ref}
      className="group grid grid-cols-1 md:grid-cols-[140px_1fr] gap-x-12 gap-y-4 py-12 md:py-16 border-t border-bone/50 last:border-b last:border-bone/50"
    >
      {/* Number + phase */}
      <div className="flex md:flex-col items-baseline md:items-start gap-3 md:gap-2">
        <motion.span
          className="font-serif text-5xl md:text-6xl leading-none tabular-nums"
          style={reduce ? { color: "rgb(27,82,166)" } : { color: numberColor }}
        >
          {number}
        </motion.span>
        <motion.span
          className="label-upper text-az-brand/80"
          style={reduce ? undefined : { opacity: detailOpacity }}
        >
          {phase}
        </motion.span>
      </div>

      {/* Title + description */}
      <div className="max-w-2xl">
        <motion.h3
          className="font-serif text-[34px] md:text-display-md leading-[1.1] mb-4"
          style={reduce ? { color: "rgb(30,29,26)" } : { color: titleColor }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-[15px] md:text-base text-ink/75 leading-[1.85] max-w-xl"
          style={reduce ? undefined : { opacity: detailOpacity }}
        >
          {desc}
        </motion.p>
      </div>
    </div>
  );
}

export default function ProcessGrid() {
  const { t } = useLanguage();

  return (
    <section className="bg-linen section-pad py-24 max-md:py-16 border-t border-bone/50 border-b border-bone/50">
      {/* Intro */}
      <div className="flex items-end gap-8 mb-16 max-md:mb-10">
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

      {/* Editorial principle list */}
      <div className="max-w-5xl">
        {steps.map((step) => {
          const raw = t(step.nKey);
          const [number, phase] = raw.includes(" — ")
            ? raw.split(" — ")
            : [raw, ""];
          return (
            <PrincipleRow
              key={step.nKey}
              number={number}
              phase={phase}
              title={t(step.titleKey)}
              desc={t(step.descKey)}
            />
          );
        })}
      </div>
    </section>
  );
}
