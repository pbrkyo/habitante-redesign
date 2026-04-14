"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const rawBgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgY = useSpring(rawBgY, { stiffness: 80, damping: 25 });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[92vh] min-h-[600px] overflow-hidden flex items-end bg-carbon"
    >
      {/* Background image — full intensity, parallax + Ken Burns slow zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-[center_35%]"
        style={{
          backgroundImage:
            "url('https://www.habitante.co/wp-content/uploads/2025/12/slider1.webp')",
          y: bgY,
        }}
        initial={{ scale: 1.18 }}
        animate={{ scale: 1.03 }}
        transition={{ duration: 14, ease: "easeOut" }}
      />

      {/* Cinematic bottom scrim — dark gradient, lower half only */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "linear-gradient(to top, rgba(20,19,16,0.88) 0%, rgba(20,19,16,0.55) 35%, rgba(20,19,16,0.12) 60%, transparent 100%)",
            "radial-gradient(ellipse at 30% 100%, rgba(20,19,16,0.25) 0%, transparent 70%)",
          ].join(", "),
        }}
      />

      {/* Content — light text on dark scrim */}
      <motion.div
        className="relative z-10 section-pad pb-[72px] max-md:pb-14 max-w-[680px]"
        style={{ opacity: contentOpacity, y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3.5 label-upper text-az-light/80 mb-6 before:content-[''] before:block before:w-6 before:h-px before:bg-az-light/60"
        >
          {t("hero.eyebrow")}
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-serif text-[38px] md:text-display-xl text-cream leading-[1.05] mb-[22px]"
        >
          {t("hero.title.line1")}
          <br />
          {t("hero.title.line2")}
          <em className="italic text-az-light">{t("hero.title.em")}</em>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-sm text-bone/85 leading-[1.85] max-w-[400px] font-light"
        >
          {t("hero.subtitle")}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute right-[52px] max-md:right-6 bottom-16 z-10 flex flex-col items-center gap-2 label-upper text-bone/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        {t("hero.scroll")}
        <motion.div
          className="w-px bg-bone/40"
          animate={{ height: [24, 36, 24], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
