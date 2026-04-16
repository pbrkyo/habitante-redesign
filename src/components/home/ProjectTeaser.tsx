"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { projects } from "@/lib/data/projects";

export default function ProjectTeaser() {
  const { lang, t } = useLanguage();
  const featured = projects[0];
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);
  const imageBorderRadius = useTransform(scrollYProgress, [0, 0.45], [24, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.3, 0.55], [0, 0.55]);
  const textY = useTransform(scrollYProgress, [0.35, 0.55], [60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[120vh] max-md:h-[100vh]"
      data-cursor="view"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="relative w-full h-full overflow-hidden"
          style={{ scale: imageScale, borderRadius: imageBorderRadius }}
        >
          <Image
            src={featured.heroImage}
            alt={featured.title[lang]}
            fill
            className="object-cover"
            sizes="100vw"
          />

          <motion.div
            className="absolute inset-0 bg-carbon"
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 section-pad"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.div className="label-upper text-az-light/70 mb-4">
            {t("teaser.label")}
          </motion.div>

          <h2 className="font-serif text-display-lg md:text-display-xl text-cream leading-[1.1] mb-5 max-w-3xl">
            {t("teaser.title")}
          </h2>

          <p className="text-[15px] text-bone/60 leading-[1.85] max-w-md font-light mb-8">
            {t("teaser.desc")}
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link
              href={`/proyectos/${featured.slug}`}
              className="label-upper text-cream border border-cream/30 py-3.5 px-10 rounded-sm hover:bg-cream/10 transition-colors duration-300"
            >
              {t("teaser.link")} →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
