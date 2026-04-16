"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const easeWipe = [0.76, 0, 0.24, 1] as const;

const principles = [
  {
    n: "01",
    titleEs: "Brief emocional",
    titleEn: "Emotional brief",
    descEs:
      "Antes de cualquier línea, entendemos quién habitará el espacio. No partimos de un programa arquitectónico — partimos de la vida del cliente: sus hábitos, sus emociones, su forma de habitar el mundo.",
    descEn:
      "Before any line, we understand who will inhabit the space. We don't start from an architectural program — we start from the client's life: their habits, emotions, and way of inhabiting the world.",
    image:
      "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_00.jpg",
  },
  {
    n: "02",
    titleEs: "Luz como material",
    titleEn: "Light as material",
    descEs:
      "La luz natural no es ornamento. Es el material más poderoso y más silencioso del diseño. Cada espacio se orienta, se abre o se cierra en función de cómo la luz lo habitará a lo largo del día.",
    descEn:
      "Natural light is not ornament. It is the most powerful and silent material in design. Every space is oriented, opened, or closed based on how light will inhabit it throughout the day.",
    image:
      "https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_04.png",
  },
  {
    n: "03",
    titleEs: "Materia honesta",
    titleEn: "Honest matter",
    descEs:
      "Madera, piedra, concreto expuesto. Materiales que tienen peso, tacto y envejecen con dignidad. No ocultamos la materia — la celebramos. Cada textura cuenta una historia del lugar.",
    descEn:
      "Wood, stone, exposed concrete. Materials that have weight, touch, and age with dignity. We don't hide matter — we celebrate it. Every texture tells a story of the place.",
    image:
      "https://www.habitante.co/wp-content/uploads/2024/04/Terrarossa_habitante_01.jpg",
  },
  {
    n: "04",
    titleEs: "Diálogo con el entorno",
    titleEn: "Dialogue with the environment",
    descEs:
      "Orientación solar, ventilación cruzada, vistas controladas. La arquitectura no se impone al lugar — responde a él. Cada proyecto es una conversación entre el diseño y el sitio.",
    descEn:
      "Solar orientation, cross ventilation, controlled views. Architecture doesn't impose on the place — it responds to it. Every project is a conversation between design and site.",
    image:
      "https://www.habitante.co/wp-content/uploads/2024/04/QatarHouse_Habitante_03.jpg",
  },
];

const process = [
  {
    n: "01",
    titleEs: "Escucha",
    titleEn: "Listen",
    descEs:
      "Conversación inicial para entender quién eres, cómo vives y qué esperas del espacio. No es un cuestionario — es un diálogo.",
    descEn:
      "Initial conversation to understand who you are, how you live, and what you expect from the space. Not a questionnaire — a dialogue.",
  },
  {
    n: "02",
    titleEs: "Concepto",
    titleEn: "Concept",
    descEs:
      "Traducimos la escucha en una idea arquitectónica. Una narrativa espacial que guiará todas las decisiones de diseño.",
    descEn:
      "We translate listening into an architectural idea. A spatial narrative that will guide all design decisions.",
  },
  {
    n: "03",
    titleEs: "Desarrollo",
    titleEn: "Development",
    descEs:
      "Planos, materialidad, detalles constructivos. El concepto toma forma con precisión técnica sin perder su esencia emocional.",
    descEn:
      "Plans, materiality, construction details. The concept takes shape with technical precision without losing its emotional essence.",
  },
  {
    n: "04",
    titleEs: "Construcción",
    titleEn: "Construction",
    descEs:
      "Supervisión directa para que cada detalle se ejecute como fue diseñado. La calidad no se negocia.",
    descEn:
      "Direct supervision so every detail is executed as designed. Quality is non-negotiable.",
  },
];

export default function FormaDeDisenarPage() {
  const { lang, t } = useLanguage();

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroTextY = useTransform(heroProgress, [0, 1], [0, -50]);
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);

  const neuroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: neuroProgress } = useScroll({
    target: neuroRef,
    offset: ["start end", "end start"],
  });
  const neuroImageY = useTransform(neuroProgress, [0, 1], ["-8%", "8%"]);

  return (
    <>
      {/* ─── Hero with parallax ─── */}
      <section
        ref={heroRef}
        className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden bg-white"
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
            {t("approach.title")}
          </motion.div>

          <motion.h1
            className="font-serif text-display-xl text-carbon mb-6 leading-[1.08]"
            initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1, ease: easeWipe, delay: 0.2 }}
          >
            {t("approach.subtitle")}
          </motion.h1>

          <motion.p
            className="text-base text-ink/65 font-light leading-[1.9] max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {lang === "es"
              ? "En Habitante no ofrecemos servicios. Practicamos arquitectura. Cada proyecto es una obra de autor — diseñada desde la vida de quien la habitará, con la precisión de quien entiende que los espacios afectan profundamente a las personas."
              : "At Habitante we don't offer services. We practice architecture. Every project is an authored work — designed from the life of those who will inhabit it, with the precision of those who understand that spaces profoundly affect people."}
          </motion.p>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          className="absolute right-8 md:right-16 bottom-8 font-serif text-[180px] md:text-[260px] text-bone/25 leading-none select-none pointer-events-none"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: easeWipe }}
        >
          D
        </motion.div>
      </section>

      {/* ─── Principles: alternating image+text rows ─── */}
      <section className="bg-linen border-t border-bone/50">
        <div className="section-pad pt-24 pb-4 max-md:pt-16">
          <div className="flex items-end gap-8 mb-6">
            <div>
              <motion.div
                className="label-upper text-sand-light mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {lang === "es" ? "Principios" : "Principles"}
              </motion.div>
              <motion.h2
                className="font-serif text-display-md text-carbon"
                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: easeWipe, delay: 0.1 }}
              >
                {lang === "es"
                  ? "Lo que guía cada decisión"
                  : "What guides every decision"}
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
        </div>

        {principles.map((p, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={p.n}
              className={`grid grid-cols-1 md:grid-cols-2 min-h-[380px] ${
                i < principles.length - 1 ? "" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                className={`relative overflow-hidden min-h-[280px] ${
                  isEven ? "md:order-1" : "md:order-2"
                }`}
                initial={{ opacity: 0, clipPath: isEven ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0%)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease: easeWipe }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url('${p.image}')` }}
                  data-cursor="view"
                />
              </motion.div>

              {/* Text */}
              <div
                className={`flex flex-col justify-center px-14 py-14 max-md:px-6 max-md:py-10 ${
                  isEven ? "md:order-2 bg-white" : "md:order-1 bg-linen"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="label-upper text-az-brand mb-5 tracking-[0.2em]">
                    {p.n}
                  </div>
                  <h3 className="font-serif text-display-sm text-carbon mb-4">
                    {lang === "es" ? p.titleEs : p.titleEn}
                  </h3>
                  <p className="text-sm text-ink/65 leading-[1.95] max-w-md">
                    {lang === "es" ? p.descEs : p.descEn}
                  </p>
                </motion.div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ─── Process: vertical timeline ─── */}
      <section className="bg-white section-pad py-28 max-md:py-16 border-t border-bone/50">
        <div className="flex items-end gap-8 mb-20">
          <div>
            <motion.div
              className="label-upper text-sand-light mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {lang === "es" ? "Proceso" : "Process"}
            </motion.div>
            <motion.h2
              className="font-serif text-display-md text-carbon"
              initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: easeWipe, delay: 0.1 }}
            >
              {lang === "es"
                ? "De la escucha a la construcción"
                : "From listening to construction"}
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

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-[23px] md:left-[27px] top-0 bottom-0 w-px bg-bone"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: easeWipe }}
            style={{ originY: 0 }}
          />

          {process.map((step, i) => (
            <motion.div
              key={step.n}
              className="relative grid grid-cols-[48px_1fr] md:grid-cols-[56px_1fr] gap-6 pb-16 last:pb-0 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              {/* Node */}
              <div className="relative flex justify-center pt-1">
                <motion.div
                  className="w-[14px] h-[14px] rounded-full border-2 border-az-brand bg-white z-10 group-hover:bg-az-brand group-hover:scale-125 transition-all duration-300"
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                />
              </div>

              {/* Content */}
              <div className="pb-8 border-b border-bone/40 last:border-b-0 group-hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-3xl md:text-4xl font-serif text-az-light leading-none">
                    {step.n}
                  </span>
                  <h3 className="font-serif text-xl text-carbon group-hover:text-az-brand transition-colors duration-300">
                    {lang === "es" ? step.titleEs : step.titleEn}
                  </h3>
                </div>
                <p className="text-sm text-ink/65 leading-[1.9]">
                  {lang === "es" ? step.descEs : step.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Neuroarquitectura: parallax split ─── */}
      <section ref={neuroRef} className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
        <div className="relative overflow-hidden min-h-[340px] md:min-h-0">
          <motion.div
            className="absolute inset-[-10%] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://www.habitante.co/wp-content/uploads/2024/04/Casa_Descalzo_Habitante_Arquitectura_03.png')",
              y: neuroImageY,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-az-brand origin-left"
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: easeWipe }}
          />
        </div>

        <div className="bg-az-brand px-14 py-16 max-md:px-6 max-md:py-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="label-upper text-az-mid mb-3.5">
              {t("nr.label")}
            </div>
            <h2 className="font-serif text-display-md text-linen leading-[1.32] mb-5">
              {t("nr.title.1")}
              <br />
              {t("nr.title.2")}
              <br />
              <em className="italic text-[#A8C0E8]">{t("nr.title.em")}</em>
            </h2>
            <p className="text-sm text-az-light/85 leading-[1.85] font-light">
              {t("nr.body")}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
