"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[92vh] min-h-[600px] overflow-hidden flex items-end bg-linen">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-[center_35%] opacity-55"
        style={{
          backgroundImage:
            "url('https://www.habitante.co/wp-content/uploads/2025/12/slider1.webp')",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(247,245,241,0.97) 0%, rgba(247,245,241,0.45) 45%, rgba(247,245,241,0.05) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 section-pad pb-[72px] max-md:pb-14 max-w-[680px]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3.5 label-upper text-az-brand mb-6 before:content-[''] before:block before:w-6 before:h-px before:bg-az-brand">
          {t("hero.eyebrow")}
        </div>

        <h1 className="font-serif text-[38px] md:text-display-xl text-carbon leading-[1.05] mb-[22px]">
          {t("hero.title.line1")}
          <br />
          {t("hero.title.line2")}
          <em className="italic text-az-brand">{t("hero.title.em")}</em>
        </h1>

        <p className="text-sm text-sand leading-[1.85] max-w-[400px] font-light">
          {t("hero.subtitle")}
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute right-[52px] max-md:right-6 bottom-16 z-10 flex flex-col items-center gap-2 label-upper text-sand-light after:content-[''] after:block after:w-px after:h-9 after:bg-sand-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        {t("hero.scroll")}
      </motion.div>
    </section>
  );
}
