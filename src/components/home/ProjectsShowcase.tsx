"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { projects } from "@/lib/data/projects";

const easeWipe = [0.76, 0, 0.24, 1] as const;

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

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.12, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.4], [40, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "100%"]);

  const stickyOffset = index * 20;

  return (
    <div
      ref={cardRef}
      className="h-[85vh] min-h-[500px] max-md:h-[70vh]"
      style={{ marginBottom: index < total - 1 ? "-15vh" : 0 }}
    >
      <div
        className="sticky overflow-hidden group"
        style={{ top: `${80 + stickyOffset}px`, height: "75vh", minHeight: "450px" }}
      >
        <Link href={`/proyectos/${project.slug}`} className="block relative w-full h-full overflow-hidden">
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

          <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-carbon/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon/50 via-transparent to-transparent" />

          <motion.div
            className="absolute top-6 right-8 md:right-12 font-serif text-[100px] md:text-[160px] text-white/[0.06] leading-none select-none pointer-events-none"
          >
            0{index + 1}
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 p-8 md:p-14"
            style={{ y: contentY, opacity: contentOpacity }}
          >
            <div className="flex items-end justify-between gap-8">
              <div className="max-w-2xl">
                <div className="text-[11px] tracking-[0.22em] uppercase text-[#8AABDC] mb-3">
                  {categoryLabel} · {project.year}
                </div>
                <h3 className="font-serif text-[28px] md:text-display-md text-linen mb-2 group-hover:translate-x-3 transition-transform duration-500">
                  {project.title[lang]}
                </h3>
                {project.tagline && (
                  <p className="text-[14px] text-bone/50 font-light leading-[1.7] max-w-lg">
                    {project.tagline[lang].split("\n")[0]}
                  </p>
                )}
                <motion.div
                  className="h-px bg-az-light/30 mt-5 origin-left"
                  style={{ width: lineWidth }}
                />
              </div>

              <div className="flex-shrink-0 mb-2 hidden md:block">
                <span className="w-12 h-12 rounded-full border border-az-light/20 flex items-center justify-center text-az-light/40 group-hover:text-az-light group-hover:border-az-light/50 transition-all duration-500">
                  →
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-0 left-0 right-0 h-[3px] bg-az-brand origin-left"
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
