"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const stats = [
  { nKey: "cs.stat1.n", labelKey: "cs.stat1.label", subKey: "cs.stat1.sub", numericValue: null, large: true },
  { nKey: "cs.stat2.n", labelKey: "cs.stat2.label", subKey: "cs.stat2.sub", numericValue: null, large: true },
  { nKey: "cs.stat3.n", labelKey: "cs.stat3.label", subKey: "cs.stat3.sub", numericValue: null, large: true },
];

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2200, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toString() + suffix;
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const quoteVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 30, clipPath: "inset(100% 0 0 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.85, ease },
  },
};

const statsVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const statRowVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export default function QuoteStats() {
  const { t } = useLanguage();

  return (
    <section className="bg-az-light section-pad py-20 max-md:py-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-20 max-md:gap-10 items-center border-t border-az-mid/50 border-b border-az-mid/50">
      {/* Quote with line-by-line reveal */}
      <motion.div
        className="font-serif text-display-lg text-carbon leading-[1.32] italic"
        variants={quoteVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div style={{ overflow: "hidden" }}>
          <motion.div variants={lineVariants}>&ldquo;{t("cs.quote")}</motion.div>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.div variants={lineVariants}>
            <em className="not-italic text-az-brand">{t("cs.quote.em")}</em>&rdquo;
          </motion.div>
        </div>
      </motion.div>

      {/* Stats with count-up */}
      <motion.div
        className="flex flex-col"
        variants={statsVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="flex items-baseline gap-3.5 py-[18px] border-t border-az-mid/50 last:border-b last:border-az-mid/50"
            variants={statRowVariants}
          >
            <div
              className={`font-serif text-az-brand leading-none ${
                stat.large ? "text-[26px] pt-1.5" : "text-4xl"
              }`}
            >
              {stat.numericValue !== null ? (
                <AnimatedNumber value={stat.numericValue} />
              ) : (
                t(stat.nKey)
              )}
            </div>
            <div className="text-sm text-ink/80 leading-[1.5]">
              {t(stat.labelKey)}
              <small className="block text-[11px] text-ink/60 mt-1 tracking-[0.04em]">
                {t(stat.subKey)}
              </small>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
