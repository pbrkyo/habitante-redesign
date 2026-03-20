"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { projects } from "@/lib/data/projects";

const easeDefault = [0.25, 0.46, 0.45, 0.94] as const;
const easeWipe = [0.76, 0, 0.24, 1] as const;

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeDefault } },
};

const showcaseVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.1, ease: easeWipe },
  },
};

export default function ProjectsShowcase() {
  const { lang, t } = useLanguage();

  const showcase = projects.slice(0, 3);
  const main = showcase[0];
  const side = showcase.slice(1, 3);

  return (
    <section className="bg-white pt-20 pb-0">
      <motion.div
        className="flex items-end justify-between section-pad mb-9"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div>
          <div className="label-upper text-sand-light mb-1.5">
            {t("proy.label")}
          </div>
          <h2 className="font-serif text-display-md text-carbon">
            {t("proy.title")}
          </h2>
        </div>
        <Link
          href="/proyectos"
          className="label-upper text-az-brand border-b border-az-brand pb-0.5 cursor-pointer hover:text-az-deep hover:border-az-deep transition-colors"
        >
          {t("proy.viewAll")} →
        </Link>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-[1.65fr_1fr] gap-[3px]"
        variants={showcaseVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Main project */}
        <motion.div variants={imageVariants}>
          <Link href={`/proyectos/${main.slug}`} className="group relative overflow-hidden block">
            <Image
              src={main.heroImage}
              alt={main.title[lang]}
              width={900}
              height={510}
              className="w-full h-[510px] max-md:h-[350px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/78 to-carbon/0 group-hover:from-carbon/88 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-[11px] tracking-[0.18em] uppercase text-[#8AABDC] mb-1">
                {t(`ft.${main.category}`)} · {main.country}
              </div>
              <div className="font-serif text-lg text-linen leading-[1.2]">
                {main.title[lang]}
              </div>
              <div className="text-[10px] text-bone/55 mt-[3px]">
                {main.city}, {main.year}
              </div>
            </div>
            <motion.div
              className="absolute right-[22px] bottom-[22px] text-base text-[#8AABDC]"
              initial={{ opacity: 0, x: -8 }}
              whileHover={{ opacity: 1, x: 0 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              →
            </motion.div>
            {/* Arrow shown via group hover */}
            <div className="absolute right-[22px] bottom-[22px] text-base text-[#8AABDC]/70 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
              →
            </div>
          </Link>
        </motion.div>

        {/* Side projects */}
        <div className="grid grid-rows-2 gap-[3px]">
          {side.map((project) => (
            <motion.div key={project.slug} variants={imageVariants}>
              <Link
                href={`/proyectos/${project.slug}`}
                className="group relative overflow-hidden block"
              >
                <Image
                  src={project.heroImage}
                  alt={project.title[lang]}
                  width={600}
                  height={254}
                  className="w-full h-[254px] max-md:h-[200px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/78 to-carbon/0 group-hover:from-carbon/88 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[11px] tracking-[0.18em] uppercase text-[#8AABDC] mb-1">
                    {t(`ft.${project.category}`)} · {project.country}
                  </div>
                  <div className="font-serif text-lg text-linen leading-[1.2]">
                    {project.title[lang]}
                  </div>
                  <div className="text-[10px] text-bone/55 mt-[3px]">
                    {project.city}, {project.year}
                  </div>
                </div>
                <div className="absolute right-[22px] bottom-[22px] text-base text-[#8AABDC]/70 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
