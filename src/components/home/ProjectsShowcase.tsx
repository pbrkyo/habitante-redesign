"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { projects } from "@/lib/data/projects";

const easeWipe = [0.76, 0, 0.24, 1] as const;
const ease = [0.25, 0.46, 0.45, 0.94] as const;

function ProjectCard({
  project,
  index,
  lang,
  categoryLabel,
}: {
  project: (typeof projects)[0];
  index: number;
  lang: "es" | "en";
  categoryLabel: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      className="group relative overflow-hidden"
      initial={{ opacity: 0, clipPath: isEven ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0%)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, ease: easeWipe, delay: index * 0.1 }}
    >
      <Link href={`/proyectos/${project.slug}`} className="block relative h-[520px] max-md:h-[400px] overflow-hidden">
        {/* Parallax image */}
        <motion.div className="absolute inset-[-8%]" style={{ y: imageY }}>
          <Image
            src={project.heroImage}
            alt={project.title[lang]}
            fill
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-carbon/20 to-transparent group-hover:from-carbon/90 transition-all duration-500" />

        {/* Index number -- decorative */}
        <motion.div
          className="absolute top-6 left-8 font-serif text-[80px] md:text-[120px] text-white/[0.06] leading-none select-none pointer-events-none"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease }}
        >
          0{index + 1}
        </motion.div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
          <div className="text-[11px] tracking-[0.2em] uppercase text-[#8AABDC] mb-2">
            {categoryLabel}
          </div>
          <h3 className="font-serif text-display-sm text-linen mb-1 group-hover:translate-x-2 transition-transform duration-500">
            {project.title[lang]}
          </h3>
          <div className="text-[12px] text-bone/50 mb-4">
            {project.city} · {project.year}
          </div>

          {/* Tagline reveal on hover */}
          {project.tagline && (
            <div className="max-h-0 group-hover:max-h-[60px] overflow-hidden transition-all duration-500 ease-out">
              <p className="text-[13px] text-bone/60 font-light leading-[1.6] max-w-sm">
                {project.tagline[lang].split("\n")[0]}
              </p>
            </div>
          )}

          {/* Animated line + arrow */}
          <div className="flex items-center gap-3 mt-3">
            <motion.div
              className="h-px bg-az-light/30 group-hover:bg-az-light/60 transition-colors duration-500"
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1, ease: easeWipe }}
            />
            <span className="text-sm text-az-light/50 group-hover:text-az-light group-hover:translate-x-2 transition-all duration-400">
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsShowcase() {
  const { lang, t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const showcase = projects.slice(0, 4);

  const categoryLabels: Record<string, Record<"es" | "en", string>> = {
    residential: { es: "Residencial", en: "Residential" },
    commercial: { es: "Comercial", en: "Commercial" },
  };

  return (
    <section ref={sectionRef} className="bg-white pt-24 pb-0 max-md:pt-16">
      {/* Header with animated line */}
      <div className="section-pad mb-12 max-md:mb-8">
        <div className="flex items-end justify-between gap-8">
          <div>
            <motion.div
              className="label-upper text-sand-light mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t("proy.label")}
            </motion.div>
            <motion.h2
              className="font-serif text-display-lg text-carbon"
              initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: easeWipe, delay: 0.1 }}
            >
              {t("proy.title")}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/proyectos"
              className="label-upper text-az-brand border-b border-az-brand pb-0.5 cursor-pointer hover:text-az-deep hover:border-az-deep transition-colors whitespace-nowrap min-h-[44px] inline-flex items-center"
            >
              {t("proy.viewAll")} →
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="h-px bg-bone/50 mt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: easeWipe, delay: 0.3 }}
          style={{ originX: 0 }}
        />
      </div>

      {/* 2x2 grid of cinematic project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-bone/30">
        {showcase.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            lang={lang}
            categoryLabel={categoryLabels[project.category]?.[lang] ?? project.category}
          />
        ))}
      </div>
    </section>
  );
}
