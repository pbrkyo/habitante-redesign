"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const bulletKeys = ["nr.li1", "nr.li2", "nr.li3", "nr.li4"];

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const easeWipe = [0.76, 0, 0.24, 1] as const;

export default function NeuroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <section ref={sectionRef} className="relative min-h-[700px] max-md:min-h-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Sticky image side */}
        <div className="md:sticky md:top-16 md:h-screen relative overflow-hidden min-h-[400px] md:min-h-0">
          <motion.div
            className="absolute inset-[-12%] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_03.png')",
              y: imageY,
              scale: imageScale,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-az-brand origin-left"
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: easeWipe }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-az-brand/20 hidden md:block" />
        </div>

        {/* Scrollable content side */}
        <div className="bg-az-brand px-10 md:px-16 py-20 md:py-28 max-md:px-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="label-upper text-az-mid/70 mb-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t("nr.label")}
            </motion.div>

            <motion.h2
              className="font-serif text-display-md text-linen leading-[1.32] mb-6"
              initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: easeWipe, delay: 0.15 }}
            >
              {t("nr.title.1")}
              <br />
              {t("nr.title.2")}
              <br />
              <em className="italic text-[#A8C0E8]">{t("nr.title.em")}</em>
            </motion.h2>

            <motion.div
              className="h-px bg-az-light/20 mb-8 max-w-[100px]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeWipe, delay: 0.3 }}
              style={{ originX: 0 }}
            />

            <motion.p
              className="text-[15px] text-az-light/80 leading-[1.9] font-light mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {t("nr.body")}
            </motion.p>

            <div className="flex flex-col gap-5">
              {bulletKeys.map((key, i) => (
                <motion.div
                  key={key}
                  className="flex gap-3.5 items-start group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.08, ease }}
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#A8C0E8]/60 mt-[6px] flex-shrink-0 group-hover:bg-[#A8C0E8] transition-colors duration-300"
                    whileHover={{ scale: 1.4 }}
                  />
                  <span className="text-[14px] text-az-light/75 leading-[1.7] group-hover:text-az-light/95 transition-colors duration-300">
                    {t(key)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
