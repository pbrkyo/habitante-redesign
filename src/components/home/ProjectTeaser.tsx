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
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src={featured.heroImage}
          alt={featured.title[lang]}
          width={700}
          height={525}
          className="w-full object-cover aspect-[4/3]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="label-upper text-sand-light mb-3">
          {t("teaser.label")}
        </div>
        <h2 className="font-serif text-display-md text-carbon leading-[1.35] mb-4">
          {t("teaser.title")}
        </h2>
        <p className="text-xs text-sand leading-[1.9] mb-6">
          {t("teaser.desc")}
        </p>
        <Link
          href={`/proyectos/${featured.slug}`}
          className="label-upper text-az-brand border-b border-az-brand pb-0.5 cursor-pointer"
        >
          {t("teaser.link")}
        </Link>
      </motion.div>
    </section>
  );
}
