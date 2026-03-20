"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { projects } from "@/lib/data/projects";

export default function ProjectsShowcase() {
  const { lang, t } = useLanguage();

  const showcase = projects.slice(0, 3);
  const main = showcase[0];
  const side = showcase.slice(1, 3);

  return (
    <section className="bg-white pt-20 pb-0">
      <div className="flex items-end justify-between section-pad mb-9">
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
          className="label-upper text-az-brand border-b border-az-brand pb-0.5 cursor-pointer"
        >
          {t("proy.viewAll")}
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.65fr_1fr] gap-[3px]">
        {/* Main project */}
        <Link href={`/proyectos/${main.slug}`} className="group relative overflow-hidden cursor-pointer">
          <Image
            src={main.heroImage}
            alt={main.title[lang]}
            width={900}
            height={510}
            className="w-full h-[510px] max-md:h-[350px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/78 to-carbon/0 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="text-[8px] tracking-[0.18em] uppercase text-[#8AABDC] mb-1">
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
            className="absolute right-[22px] bottom-[22px] text-base text-[#8AABDC]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            →
          </motion.div>
        </Link>

        {/* Side projects */}
        <div className="grid grid-rows-2 gap-[3px]">
          {side.map((project) => (
            <Link
              key={project.slug}
              href={`/proyectos/${project.slug}`}
              className="group relative overflow-hidden cursor-pointer"
            >
              <Image
                src={project.heroImage}
                alt={project.title[lang]}
                width={600}
                height={254}
                className="w-full h-[254px] max-md:h-[200px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/78 to-carbon/0 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-[8px] tracking-[0.18em] uppercase text-[#8AABDC] mb-1">
                  {t(`ft.${project.category}`)} · {project.country}
                </div>
                <div className="font-serif text-lg text-linen leading-[1.2]">
                  {project.title[lang]}
                </div>
                <div className="text-[10px] text-bone/55 mt-[3px]">
                  {project.city}, {project.year}
                </div>
              </div>
              <div className="absolute right-[22px] bottom-[22px] text-base text-[#8AABDC]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
