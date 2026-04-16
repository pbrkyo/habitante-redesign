"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const easeWipe = [0.76, 0, 0.24, 1] as const;

const typologies = [
  {
    titleEs: "Residencias de autor",
    titleEn: "Author residences",
    descEs:
      "Cada casa parte de un brief emocional. No diseñamos viviendas genéricas — diseñamos la forma específica en que una persona o familia quiere habitar su espacio.",
    descEn:
      "Every home starts from an emotional brief. We don't design generic housing — we design the specific way a person or family wants to inhabit their space.",
    image:
      "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_05.png",
  },
  {
    titleEs: "Espacios comerciales",
    titleEn: "Commercial spaces",
    descEs:
      "Oficinas, restaurantes y espacios de trabajo donde la arquitectura potencia la experiencia del usuario. El mismo rigor de autor aplicado a la escala comercial.",
    descEn:
      "Offices, restaurants, and workspaces where architecture enhances the user experience. The same author's rigor applied to commercial scale.",
    image:
      "https://www.habitante.co/wp-content/uploads/2024/04/QatarHouse_Habitante_01.jpg",
  },
  {
    titleEs: "Proyectos especiales",
    titleEn: "Special projects",
    descEs:
      "Intervenciones urbanas, espacios públicos y encargos que trascienden la tipología convencional. Proyectos donde la arquitectura dialoga con la comunidad.",
    descEn:
      "Urban interventions, public spaces, and commissions that transcend conventional typology. Projects where architecture dialogues with the community.",
    image:
      "https://www.habitante.co/wp-content/uploads/2024/04/Terrarossa_habitante_01.jpg",
  },
];

const values = [
  {
    titleEs: "Práctica de autor",
    titleEn: "Author practice",
    descEs:
      "Cada proyecto es único. No repetimos fórmulas ni aplicamos estilos predefinidos. Diseñamos desde la vida de quien habitará el espacio.",
    descEn:
      "Every project is unique. We don't repeat formulas or apply predefined styles. We design from the life of those who will inhabit the space.",
    icon: "◆",
  },
  {
    titleEs: "Escala humana",
    titleEn: "Human scale",
    descEs:
      "Somos un estudio boutique. Eso significa atención directa, relación cercana con cada cliente, y la certeza de que cada detalle importa.",
    descEn:
      "We are a boutique studio. That means direct attention, close relationship with each client, and the certainty that every detail matters.",
    icon: "○",
  },
  {
    titleEs: "Responsabilidad emocional",
    titleEn: "Emotional responsibility",
    descEs:
      "Integramos principios de neuroarquitectura porque creemos que los espacios afectan profundamente a las personas. Diseñar es un acto de responsabilidad.",
    descEn:
      "We integrate neuroarchitecture principles because we believe spaces profoundly affect people. Designing is an act of responsibility.",
    icon: "△",
  },
];

/* ─── Animated line component ─── */
function AnimatedLine({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`h-px bg-bone/60 ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: easeWipe, delay }}
      style={{ originX: 0 }}
    />
  );
}

export default function LaFirmaPage() {
  const { lang, t } = useLanguage();
  const [openTypology, setOpenTypology] = useState<number>(0);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroTextY = useTransform(heroProgress, [0, 1], [0, -60]);
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);

  const imageStripRef = useRef<HTMLElement>(null);
  const { scrollYProgress: stripProgress } = useScroll({
    target: imageStripRef,
    offset: ["start end", "end start"],
  });
  const stripX = useTransform(stripProgress, [0, 1], ["8%", "-8%"]);

  return (
    <>
      {/* ─── Hero: full-height with parallax text ─── */}
      <section
        ref={heroRef}
        className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden bg-linen"
      >
        <motion.div
          className="section-pad pb-16 relative z-10 max-w-3xl"
          style={{ y: heroTextY, opacity: heroOpacity }}
        >
          <motion.div
            className="label-upper text-sand-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("firm.title")}
          </motion.div>

          <motion.h1
            className="font-serif text-display-xl text-carbon mb-6 leading-[1.08]"
            initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1, ease: easeWipe, delay: 0.2 }}
          >
            {t("firm.subtitle")}
          </motion.h1>

          <motion.p
            className="text-base text-ink/65 font-light leading-[1.9] max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {lang === "es"
              ? "Habitante es un estudio de arquitectura boutique fundado con una convicción: los espacios que habitamos nos transforman. Diseñamos arquitectura residencial, comercial y especial que parte de la experiencia humana — no de la forma."
              : "Habitante is a boutique architecture studio founded with a conviction: the spaces we inhabit transform us. We design residential, commercial, and special architecture that starts from human experience — not from form."}
          </motion.p>
        </motion.div>

        {/* Decorative number */}
        <motion.div
          className="absolute right-8 md:right-16 bottom-8 font-serif text-[180px] md:text-[260px] text-bone/30 leading-none select-none pointer-events-none"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: easeWipe }}
        >
          H
        </motion.div>
      </section>

      {/* ─── Parallax image strip ─── */}
      <section ref={imageStripRef} className="overflow-hidden py-1 bg-carbon">
        <motion.div className="flex gap-1" style={{ x: stripX }}>
          {[
            "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_05.png",
            "https://www.habitante.co/wp-content/uploads/2024/04/QatarHouse_Habitante_01.jpg",
            "https://www.habitante.co/wp-content/uploads/2024/04/Terrarossa_habitante_01.jpg",
            "https://www.habitante.co/wp-content/uploads/2024/04/Casa89_Habitante_4.jpg",
            "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_03.png",
          ].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] h-[160px] bg-cover bg-center"
              style={{ backgroundImage: `url('${src}')` }}
            />
          ))}
        </motion.div>
      </section>

      {/* ─── Vision: quote with dramatic reveal ─── */}
      <section className="bg-white section-pad py-28 max-md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-20 items-center">
          <div>
            <motion.div
              className="font-serif text-display-lg text-carbon leading-[1.35] italic"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }}
            >
              {lang === "es" ? (
                <>
                  &ldquo;No diseñamos para impresionar.
                  <br />
                  Diseñamos para que{" "}
                  <em className="not-italic text-az-brand">
                    la vida suceda mejor.
                  </em>
                  &rdquo;
                </>
              ) : (
                <>
                  &ldquo;We don&apos;t design to impress.
                  <br />
                  We design so that{" "}
                  <em className="not-italic text-az-brand">
                    life happens better.
                  </em>
                  &rdquo;
                </>
              )}
            </motion.div>
            <AnimatedLine className="mt-8 max-w-[200px]" delay={0.4} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-sm text-ink/70 leading-[1.95] mb-6">
              {lang === "es"
                ? "Nuestra visión es crear arquitectura que trascienda lo estético. Espacios que respondan a la forma en que las personas realmente viven: sus rutinas, sus emociones, su relación con la luz, el sonido y la naturaleza."
                : "Our vision is to create architecture that transcends aesthetics. Spaces that respond to how people actually live: their routines, emotions, their relationship with light, sound, and nature."}
            </p>
            <p className="text-sm text-ink/70 leading-[1.95]">
              {lang === "es"
                ? "Creemos que la arquitectura tiene la responsabilidad de mejorar la vida cotidiana."
                : "We believe architecture has the responsibility to improve everyday life."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Values: horizontal cards with hover depth ─── */}
      <section className="bg-linen section-pad py-24 max-md:py-16 border-t border-bone/50">
        <div className="flex items-end gap-8 mb-16">
          <div>
            <motion.div
              className="label-upper text-sand-light mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {lang === "es" ? "Valores" : "Values"}
            </motion.div>
            <motion.h2
              className="font-serif text-display-md text-carbon"
              initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: easeWipe, delay: 0.1 }}
            >
              {lang === "es" ? "Lo que nos define" : "What defines us"}
            </motion.h2>
          </div>
          <motion.div
            className="hidden md:block flex-1 h-px bg-bone/60 mb-2"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: easeWipe, delay: 0.3 }}
            style={{ originX: 0 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              className="group relative bg-white border border-bone/50 p-8 md:p-10 cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease }}
              whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(12,50,112,0.08)" }}
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-az-brand origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="text-2xl text-az-brand/30 mb-6 transition-colors group-hover:text-az-brand duration-300">
                {v.icon}
              </div>
              <h3 className="font-serif text-xl text-carbon mb-3 transition-colors group-hover:text-az-brand duration-300">
                {lang === "es" ? v.titleEs : v.titleEn}
              </h3>
              <p className="text-sm text-ink/65 leading-[1.9]">
                {lang === "es" ? v.descEs : v.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Typologies: accordion with image reveal ─── */}
      <section className="bg-az-deep section-pad py-24 max-md:py-16">
        <motion.div
          className="label-upper text-az-mid/60 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {lang === "es" ? "Tipos de proyecto" : "Project types"}
        </motion.div>
        <motion.h2
          className="font-serif text-display-md text-linen mb-16"
          initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easeWipe, delay: 0.1 }}
        >
          {lang === "es"
            ? "Práctica internacional, enfoque de autor"
            : "International practice, author's approach"}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 items-start">
          {/* Accordion */}
          <div className="flex flex-col">
            {typologies.map((typ, i) => {
              const isOpen = openTypology === i;
              return (
                <motion.div
                  key={i}
                  className={`border-t border-az-brand/20 cursor-pointer transition-colors duration-300 ${
                    isOpen ? "bg-az-brand/10" : ""
                  }`}
                  onClick={() => setOpenTypology(i)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between py-6 px-4">
                    <div className="flex items-center gap-4">
                      <span className="text-[11px] text-az-mid/40 tracking-[0.1em] font-light">
                        0{i + 1}
                      </span>
                      <h3
                        className={`font-serif text-lg transition-colors duration-300 ${
                          isOpen ? "text-linen" : "text-az-mid/70"
                        }`}
                      >
                        {lang === "es" ? typ.titleEs : typ.titleEn}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-az-mid/50 text-lg"
                    >
                      +
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-az-mid/70 leading-[1.9] px-4 pb-6 pl-[52px]">
                          {lang === "es" ? typ.descEs : typ.descEn}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
            <div className="border-t border-az-brand/20" />
          </div>

          {/* Image that changes with accordion */}
          <div className="relative aspect-[4/3] overflow-hidden hidden md:block" data-cursor="view">
            <AnimatePresence mode="wait">
              <motion.div
                key={openTypology}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${typologies[openTypology].image}')`,
                }}
                initial={{ opacity: 0, scale: 1.08, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0% 0 0)" }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: easeWipe }}
              />
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
