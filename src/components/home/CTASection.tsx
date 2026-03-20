"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="bg-linen section-pad py-24 max-md:py-14 flex max-md:flex-col items-center justify-between gap-12 max-md:text-center border-t border-bone/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="label-upper text-sand-light mb-3.5">
          {t("cta.label")}
        </div>
        <h2 className="font-serif text-display-lg text-carbon leading-[1.2]">
          {t("cta.title.1")}
          <br />
          {t("cta.title.2")}
          <em className="italic text-az-brand">
            {t("cta.title.em")}
          </em>
        </h2>
      </motion.div>

      <motion.div
        className="flex-shrink-0 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link href="/conversacion" className="btn-primary">
          {t("cta.btn")}
        </Link>
        <span className="text-xs text-sand">{t("cta.note")}</span>
      </motion.div>
    </section>
  );
}
