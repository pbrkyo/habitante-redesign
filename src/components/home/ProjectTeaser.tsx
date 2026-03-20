"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { projects } from "@/lib/data/projects";

export default function ProjectTeaser() {
  const { lang, t } = useLanguage();
  const featured = projects[0];

  return (
    <section className="bg-cream section-pad py-20 max-md:py-14 grid grid-cols-1 md:grid-cols-2 gap-16 max-md:gap-8 items-center border-t border-bone/50">
      {/* Image with clip-path reveal */}
      <motion.div
        className="overflow-hidden"
        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.6 }}
        whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={featured.heroImage}
            alt={featured.title[lang]}
            width={700}
            height={525}
            className="w-full object-cover aspect-[4/3]"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="label-upper text-sand-light mb-3">
          {t("teaser.label")}
        </div>
        <h2 className="font-serif text-display-md text-carbon leading-[1.35] mb-4">
          {t("teaser.title")}
        </h2>
        <p className="text-sm text-ink/70 leading-[1.9] mb-6">
          {t("teaser.desc")}
        </p>
        <motion.div
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="inline-block"
        >
          <Link
            href={`/proyectos/${featured.slug}`}
            className="label-upper text-az-brand border-b border-az-brand pb-0.5 cursor-pointer hover:text-az-deep hover:border-az-deep transition-colors"
          >
            {t("teaser.link")} →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
