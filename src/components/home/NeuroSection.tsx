"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const bulletKeys = ["nr.li1", "nr.li2", "nr.li3", "nr.li4"];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const contentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

const bulletVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

const bulletItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease },
  },
};

export default function NeuroSection() {
  const { t } = useLanguage();
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.02, 1.08]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
      {/* Image side with parallax scale */}
      <div ref={imageRef} className="relative overflow-hidden min-h-[300px] md:min-h-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://www.habitante.co/wp-content/uploads/2025/12/bg-home.webp')",
            scale: imageScale,
          }}
        />
      </div>

      {/* Content side */}
      <div className="bg-az-brand px-14 py-16 max-md:px-6 max-md:py-12 flex flex-col justify-center">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={itemVariants} className="label-upper text-az-mid mb-3.5">
            {t("nr.label")}
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-serif text-display-md text-linen leading-[1.32] mb-[18px]"
          >
            {t("nr.title.1")}
            <br />
            {t("nr.title.2")}
            <br />
            <em className="italic text-[#A8C0E8]">{t("nr.title.em")}</em>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm text-az-light/85 leading-[1.85] font-light mb-7"
          >
            {t("nr.body")}
          </motion.p>

          <motion.div
            className="flex flex-col gap-3"
            variants={bulletVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {bulletKeys.map((key) => (
              <motion.div
                key={key}
                className="flex gap-2.5 items-start"
                variants={bulletItemVariants}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#A8C0E8] mt-[6px] flex-shrink-0" />
                <span className="text-sm text-az-light/80 leading-[1.7]">
                  {t(key)}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
