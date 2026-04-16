"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView, useScroll, useTransform } from "framer-motion";
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
const easeWipe = [0.76, 0, 0.24, 1] as const;

export default function QuoteStats() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-az-light overflow-hidden border-t border-az-mid/50 border-b border-az-mid/50"
    >
      <motion.div
        className="absolute inset-[-5%] bg-gradient-to-br from-az-light via-az-light to-az-mid/30"
        style={{ y: bgY }}
      />

      <div className="relative section-pad py-24 max-md:py-16 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-20 max-md:gap-12 items-center">
        <div>
          <motion.div
            className="font-serif text-display-lg text-carbon leading-[1.32] italic"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
          >
            &ldquo;{t("cs.quote")}
          </motion.div>
          <motion.div
            className="font-serif text-display-lg leading-[1.32] italic mt-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
          >
            <em className="not-italic text-az-brand">{t("cs.quote.em")}</em>&rdquo;
          </motion.div>

          <motion.div
            className="h-px bg-az-brand/25 mt-8 max-w-[120px]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeWipe, delay: 0.4 }}
            style={{ originX: 0 }}
          />
        </div>

        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex items-baseline gap-4 py-[22px] border-t border-az-mid/50 last:border-b last:border-az-mid/50 group"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease }}
              whileHover={{ x: 4 }}
            >
              <div
                className={`font-serif text-az-brand leading-none transition-transform duration-300 group-hover:scale-110 ${
                  stat.large ? "text-[28px] md:text-[32px] pt-1" : "text-4xl"
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
                <small className="block text-[11px] text-ink/55 mt-1.5 tracking-[0.04em]">
                  {t(stat.subKey)}
                </small>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
