"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const bulletKeys = ["nr.li1", "nr.li2", "nr.li3", "nr.li4"];

export default function NeuroSection() {
  const { t } = useLanguage();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
      {/* Image side */}
      <div
        className="bg-cover bg-center bg-no-repeat min-h-[300px] md:min-h-0"
        style={{
          backgroundImage:
            "url('https://www.habitante.co/wp-content/uploads/2025/12/bg-home.webp')",
        }}
      />

      {/* Content side */}
      <div className="bg-az-brand px-14 py-16 max-md:px-6 max-md:py-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="label-upper text-az-mid/65 mb-3.5">
            {t("nr.label")}
          </div>
          <h2 className="font-serif text-display-md text-linen leading-[1.32] mb-[18px]">
            {t("nr.title.1")}
            <br />
            {t("nr.title.2")}
            <br />
            <em className="italic text-[#A8C0E8]">{t("nr.title.em")}</em>
          </h2>
          <p className="text-[13px] text-az-light/60 leading-[1.85] font-light mb-7">
            {t("nr.body")}
          </p>

          <div className="flex flex-col gap-3">
            {bulletKeys.map((key, i) => (
              <motion.div
                key={key}
                className="flex gap-2.5 items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <div className="w-1 h-1 rounded-full bg-[#A8C0E8] mt-1.5 flex-shrink-0" />
                <span className="text-xs text-az-light/55 leading-[1.6]">
                  {t(key)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
