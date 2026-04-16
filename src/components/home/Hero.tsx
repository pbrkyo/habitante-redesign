"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const easeWipe = [0.76, 0, 0.24, 1] as const;

function WordReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.28em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotateX: -40 }}
            animate={{ y: "0%", rotateX: 0 }}
            transition={{
              duration: 0.9,
              ease: easeWipe,
              delay: delay + i * 0.06,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const rawBgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgY = useSpring(rawBgY, { stiffness: 80, damping: 25 });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.15]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] min-h-[700px] overflow-hidden flex items-end bg-carbon"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-[center_35%]"
        style={{
          backgroundImage:
            "url('https://www.habitante.co/wp-content/uploads/2025/12/slider1.webp')",
          y: bgY,
          scale: bgScale,
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.03 }}
        transition={{ duration: 14, ease: "easeOut" }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background: [
            "linear-gradient(to top, rgba(20,19,16,0.92) 0%, rgba(20,19,16,0.6) 30%, rgba(20,19,16,0.15) 55%, transparent 100%)",
            "radial-gradient(ellipse at 30% 100%, rgba(20,19,16,0.3) 0%, transparent 70%)",
          ].join(", "),
          opacity: overlayOpacity,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(20,19,16,0.75) 0%, rgba(20,19,16,0.25) 25%, transparent 50%)",
        }}
      />

      <motion.div
        className="relative z-10 section-pad pb-[88px] max-md:pb-16 max-w-[720px]"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          className="flex items-center gap-3.5 label-upper text-az-light/80 mb-7"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
        >
          <motion.span
            className="block w-8 h-px bg-az-light/60"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeWipe }}
            style={{ originX: 0 }}
          />
          {t("hero.eyebrow")}
        </motion.div>

        <h1 className="font-serif text-[42px] md:text-display-xl text-cream leading-[1.05] mb-6">
          <WordReveal text={t("hero.title.line1")} delay={0.4} />
          <br />
          <WordReveal text={t("hero.title.line2")} delay={0.7} />
          <span className="inline-block overflow-hidden ml-[0.28em]">
            <motion.em
              className="italic text-az-light inline-block"
              initial={{ y: "110%", rotateX: -40 }}
              animate={{ y: "0%", rotateX: 0 }}
              transition={{ duration: 0.9, ease: easeWipe, delay: 1.0 }}
            >
              {t("hero.title.em")}
            </motion.em>
          </span>
        </h1>

        <motion.p
          className="text-[15px] text-bone/80 leading-[1.9] max-w-[420px] font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          className="mt-8 h-px bg-gradient-to-r from-az-light/40 to-transparent max-w-[280px]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1.5, ease: easeWipe }}
          style={{ originX: 0 }}
        />
      </motion.div>

      <motion.div
        className="absolute right-[52px] max-md:right-6 bottom-20 z-10 flex flex-col items-center gap-2.5 label-upper text-bone/45"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        {t("hero.scroll")}
        <motion.div
          className="w-px bg-bone/30"
          animate={{ height: [20, 40, 20], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
