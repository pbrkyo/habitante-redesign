"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { projects } from "@/lib/data/projects";

const easeWipe = [0.76, 0, 0.24, 1] as const;

function ExpandingProjectCard({
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
  const [hasExpanded, setHasExpanded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.85", "start 0.25"],
  });

  // Image scale: starts slightly zoomed in, settles to normal
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.0]);

  // Card height expansion: starts compact, expands to full
  const cardHeight = useTransform(scrollYProgress, [0, 0.6], ["280px", "560px"]);
  const cardHeightMobile = useTransform(scrollYProgress, [0, 0.6], ["220px", "420px"]);

  // Content slide-up
  const contentY = useTransform(scrollYProgress, [0.2, 0.7], [60, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);

  // Animated line width
  const lineWidth = useTransform(scrollYProgress, [0.3, 0.8], ["0%", "100%"]);

  // Overlay darkening as content appears
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.15, 0.55]);

  // Index number drift
  const numberX = useTransform(scrollYProgress, [0, 1], [-30, 0]);
  const numberOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 0.08]);

  // Tagline reveal
  const taglineY = useTransform(scrollYProgress, [0.5, 0.85], [20, 0]);
  const taglineOpacity = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.3 && !hasExpanded) setHasExpanded(true);
  });

  return (
    <motion.div
      ref={cardRef}
      className="relative overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, clipPath: "inset(8% 4% 8% 4%)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.0, ease: easeWipe, delay: index * 0.08 }}
    >
      <Link href={`/proyectos/${project.slug}`} className="block relative overflow-hidden">
        <motion.div
          className="relative w-full overflow-hidden max-md:hidden"
          style={{ height: cardHeight }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ scale: imageScale }}
          >
            <Image
              src={project.heroImage}
              alt={project.title[lang]}
              fill
              className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
              sizes="100vw"
              priority={index < 2}
            />
          </motion.div>

          {/* Dynamic gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-carbon/70 via-carbon/30 to-transparent"
            style={{ opacity: overlayOpacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 via-transparent to-transparent" />

          {/* Ghost index */}
          <motion.div
            className="absolute top-6 right-10 font-serif text-[140px] text-white leading-none select-none pointer-events-none"
            style={{ x: numberX, opacity: numberOpacity }}
          >
            0{index + 1}
          </motion.div>

          {/* Scroll-revealed content */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-10 md:p-14"
            style={{ y: contentY, opacity: contentOpacity }}
          >
            <div className="flex items-end justify-between gap-8">
              <div className="max-w-2xl">
                <div className="text-[11px] tracking-[0.22em] uppercase text-[#8AABDC] mb-2.5">
                  {categoryLabel} · {project.year}
                </div>
                <h3 className="font-serif text-display-md text-linen mb-2 group-hover:translate-x-3 transition-transform duration-600">
                  {project.title[lang]}
                </h3>

                {/* Tagline appears last */}
                {project.tagline && (
                  <motion.p
                    className="text-[14px] text-bone/55 font-light leading-[1.7] max-w-lg"
                    style={{ y: taglineY, opacity: taglineOpacity }}
                  >
                    {project.tagline[lang].split("\n")[0]}
                  </motion.p>
                )}

                {/* Expanding line */}
                <motion.div
                  className="h-px bg-az-light/40 mt-4 origin-left"
                  style={{ width: lineWidth }}
                />
              </div>

              {/* Arrow with hover */}
              <div className="flex-shrink-0 mb-2">
                <span className="text-xl text-az-light/40 group-hover:text-az-light group-hover:translate-x-3 transition-all duration-500 block">
                  →
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile version with simpler animation */}
        <motion.div
          className="relative w-full overflow-hidden md:hidden"
          style={{ height: cardHeightMobile }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ scale: imageScale }}
          >
            <Image
              src={project.heroImage}
              alt={project.title[lang]}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index < 2}
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-carbon/75 via-carbon/20 to-transparent" />

          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6"
            style={{ y: contentY, opacity: contentOpacity }}
          >
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#8AABDC] mb-1.5">
              {categoryLabel} · {project.year}
            </div>
            <h3 className="font-serif text-xl text-linen mb-1">
              {project.title[lang]}
            </h3>
            {project.tagline && (
              <motion.p
                className="text-[12px] text-bone/50 font-light leading-[1.6]"
                style={{ opacity: taglineOpacity }}
              >
                {project.tagline[lang].split("\n")[0]}
              </motion.p>
            )}
            <motion.div
              className="h-px bg-az-light/30 mt-3 origin-left"
              style={{ width: lineWidth }}
            />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
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
    <section className="bg-white pt-24 pb-0 max-md:pt-16">
      {/* Header */}
      <div className="section-pad mb-14 max-md:mb-10">
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
          className="h-px bg-bone/40 mt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: easeWipe, delay: 0.3 }}
          style={{ originX: 0 }}
        />
      </div>

      {/* Expanding project cards */}
      <div className="flex flex-col gap-[3px]">
        {showcase.map((project, i) => (
          <ExpandingProjectCard
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
