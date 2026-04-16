"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const principles = [
  { n: "01", titleKey: "mf.p1.title", descKey: "mf.p1.desc" },
  { n: "02", titleKey: "mf.p2.title", descKey: "mf.p2.desc" },
  { n: "03", titleKey: "mf.p3.title", descKey: "mf.p3.desc" },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function HighlightWord({
  word,
  progress,
  start,
  end,
  isEm,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  isEm?: boolean;
}) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const color = useTransform(
    progress,
    [start, end],
    isEm ? ["rgba(27,82,166,0.2)", "rgba(27,82,166,1)"] : ["rgb(158,150,144)", "rgb(30,29,26)"]
  );

  return (
    <motion.span
      className={`inline-block mr-[0.3em] ${isEm ? "italic" : ""}`}
      style={{ opacity, color }}
    >
      {word}
    </motion.span>
  );
}

const principleVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

export default function Manifesto() {
  const { t } = useLanguage();
  const quoteRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: quoteRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const quoteText = [t("mf.quote.1"), t("mf.quote.2"), t("mf.quote.3")].join(" ");
  const emText = t("mf.quote.em");
  const quoteWords = quoteText.split(" ");
  const emWords = emText.split(" ");
  const totalWords = quoteWords.length + emWords.length;

  return (
    <section className="bg-white section-pad py-28 max-md:py-16 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-20 max-md:gap-12 items-center">
      <div ref={quoteRef} className="font-serif text-display-lg leading-[1.38]">
        {quoteWords.map((word, i) => (
          <HighlightWord
            key={`q-${i}`}
            word={word}
            progress={scrollYProgress}
            start={i / (totalWords + 3)}
            end={(i + 1.5) / (totalWords + 3)}
          />
        ))}
        <br />
        {emWords.map((word, i) => (
          <HighlightWord
            key={`em-${i}`}
            word={word}
            progress={scrollYProgress}
            start={(quoteWords.length + i) / (totalWords + 3)}
            end={(quoteWords.length + i + 1.5) / (totalWords + 3)}
            isEm
          />
        ))}
      </div>

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
            whileHover={{ x: 6 }}
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
