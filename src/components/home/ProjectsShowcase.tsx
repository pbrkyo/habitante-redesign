"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { projects } from "@/lib/data/projects";

const easeWipe = [0.76, 0, 0.24, 1] as const;
const ease = [0.25, 0.46, 0.45, 0.94] as const;

function StackingProjectCard({
  project,
  index,
  lang,
  categoryLabel,
  total,
}: {
  project: (typeof projects)[0];
  index: number;
  lang: "es" | "en";
  categoryLabel: string;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1]);
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.5], ["0%", "100%"]);

  const stickyOffset = index * 24;

  return (
    <div
      ref={cardRef}
      className="h-[85vh] min-h-[520px] max-md:h-[70vh]"
      style={{ marginBottom: index < total - 1 ? "-15vh" : 0 }}
    >
      <div
        className="sticky overflow-hidden group rounded-sm"
        style={{ top: `${80 + stickyOffset}px`, height: "75vh", minHeight: "460px" }}
      >
        <Link href={`/proyectos/${project.slug}`} className="block relative w-full h-full overflow-hidden">
          {/* Image with subtle parallax zoom */}
          <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
            <Image
              src={project.heroImage}
              alt={project.title[lang]}
              fill
              className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
              sizes="100vw"
              priority={index < 2}
            />
          </motion.div>

          {/* Gradients for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-carbon/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon/40 via-transparent to-transparent" />

          {/* Ghost index number */}
          <div className="absolute top-6 right-8 md:right-12 font-serif text-[100px] md:text-[140px] text-white/[0.05] leading-none select-none pointer-events-none">
            0{index + 1}
          </div>

          {/* Content — always visible, whileInView entrance */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-8 md:p-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <div className="flex items-end justify-between gap-8">
              <div className="max-w-2xl">
                <div className="text-[11px] tracking-[0.22em] uppercase text-[#8AABDC] mb-3">
                  {categoryLabel} · {project.year}
                </div>
                <h3 className="font-serif text-[32px] md:text-[clamp(28px,3.5vw,42px)] text-white leading-[1.15] mb-3 group-hover:translate-x-3 transition-transform duration-500">
                  {project.title[lang]}
                </h3>
                {project.tagline && (
                  <p className="text-[14px] text-bone/60 font-light leading-[1.7] max-w-lg">
                    {project.tagline[lang].split("\n")[0]}
                  </p>
                )}
                <motion.div
                  className="h-px bg-white/20 mt-5 origin-left"
                  style={{ width: lineWidth }}
                />
              </div>

              <div className="flex-shrink-0 mb-2 hidden md:block">
                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 text-lg group-hover:text-white group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-500">
                  →
                </span>
              </div>
            </div>
          </motion.div>

          {/* Top accent line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-white/20 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: easeWipe, delay: 0.2 }}
          />
        </Link>
      </div>
    </div>
  );
}

export default function ProjectsShowcase() {
  const { lang, t } = useLanguage();
  const showcase = projects.slice(0, 5);

  const categoryLabels: Record<string, Record<"es" | "en", string>> = {
    residential: { es: "Residencial", en: "Residential" },
    commercial: { es: "Comercial", en: "Commercial" },
  };

  return (
    <section className="bg-carbon pt-24 pb-8 max-md:pt-16">
      <div className="section-pad mb-14 max-md:mb-10">
        <div className="flex items-end justify-between gap-8">
          <div>
            <motion.div
              className="label-upper text-sand/60 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t("proy.label")}
            </motion.div>
            <motion.h2
              className="font-serif text-display-lg text-cream"
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
              className="label-upper text-az-light/70 border-b border-az-light/30 pb-0.5 cursor-pointer hover:text-az-light hover:border-az-light/60 transition-colors whitespace-nowrap min-h-[44px] inline-flex items-center"
            >
              {t("proy.viewAll")} →
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="h-px bg-white/10 mt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: easeWipe, delay: 0.3 }}
          style={{ originX: 0 }}
        />
      </div>

      <div className="section-pad">
        {showcase.map((project, i) => (
          <StackingProjectCard
            key={project.slug}
            project={project}
            index={i}
            lang={lang}
            categoryLabel={categoryLabels[project.category]?.[lang] ?? project.category}
            total={showcase.length}
          />
        ))}
      </div>
    </section>
  );
}
