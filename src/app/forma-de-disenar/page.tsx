"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const principles = [
  {
    n: "01",
    titleEs: "Brief emocional",
    titleEn: "Emotional brief",
    descEs:
      "Antes de cualquier línea, entendemos quién habitará el espacio. No partimos de un programa arquitectónico — partimos de la vida del cliente: sus hábitos, sus emociones, su forma de habitar el mundo.",
    descEn:
      "Before any line, we understand who will inhabit the space. We don't start from an architectural program — we start from the client's life: their habits, emotions, and way of inhabiting the world.",
  },
  {
    n: "02",
    titleEs: "Luz como material",
    titleEn: "Light as material",
    descEs:
      "La luz natural no es ornamento. Es el material más poderoso y más silencioso del diseño. Cada espacio se orienta, se abre o se cierra en función de cómo la luz lo habitará a lo largo del día.",
    descEn:
      "Natural light is not ornament. It is the most powerful and silent material in design. Every space is oriented, opened, or closed based on how light will inhabit it throughout the day.",
  },
  {
    n: "03",
    titleEs: "Materia honesta",
    titleEn: "Honest matter",
    descEs:
      "Madera, piedra, concreto expuesto. Materiales que tienen peso, tacto y envejecen con dignidad. No ocultamos la materia — la celebramos. Cada textura cuenta una historia del lugar.",
    descEn:
      "Wood, stone, exposed concrete. Materials that have weight, touch, and age with dignity. We don't hide matter — we celebrate it. Every texture tells a story of the place.",
  },
  {
    n: "04",
    titleEs: "Diálogo con el entorno",
    titleEn: "Dialogue with the environment",
    descEs:
      "Orientación solar, ventilación cruzada, vistas controladas. La arquitectura no se impone al lugar — responde a él. Cada proyecto es una conversación entre el diseño y el sitio.",
    descEn:
      "Solar orientation, cross ventilation, controlled views. Architecture doesn't impose on the place — it responds to it. Every project is a conversation between design and site.",
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

  return (
    <>
      {/* Hero */}
      <section className="bg-white section-pad pt-24 pb-16 border-b border-bone/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="label-upper text-sand-light mb-3">
            {t("approach.title")}
          </div>
          <h1 className="font-serif text-display-lg text-carbon mb-6">
            {t("approach.subtitle")}
          </h1>
          <p className="text-sm text-sand font-light leading-[1.9]">
            {lang === "es"
              ? "En Habitante no ofrecemos servicios. Practicamos arquitectura. Cada proyecto es una obra de autor — diseñada desde la vida de quien la habitará, con la precisión de quien entiende que los espacios afectan profundamente a las personas."
              : "At Habitante we don't offer services. We practice architecture. Every project is an authored work — designed from the life of those who will inhabit it, with the precision of those who understand that spaces profoundly affect people."}
          </p>
        </motion.div>
      </section>

      {/* Principles */}
      <section className="bg-linen section-pad py-20 border-b border-bone/50">
        <div className="label-upper text-sand-light mb-3">
          {lang === "es" ? "Principios" : "Principles"}
        </div>
        <h2 className="font-serif text-display-md text-carbon mb-14">
          {lang === "es"
            ? "Lo que guía cada decisión"
            : "What guides every decision"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              className="border-t border-bone/50 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="label-upper text-az-brand mb-4">{p.n}</div>
              <h3 className="font-serif text-xl text-carbon mb-3">
                {lang === "es" ? p.titleEs : p.titleEn}
              </h3>
              <p className="text-xs text-sand leading-[1.85]">
                {lang === "es" ? p.descEs : p.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-white section-pad py-20 border-b border-bone/50">
        <div className="label-upper text-sand-light mb-3">
          {lang === "es" ? "Proceso" : "Process"}
        </div>
        <h2 className="font-serif text-display-md text-carbon mb-14">
          {lang === "es"
            ? "De la escucha a la construcción"
            : "From listening to construction"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, i) => (
            <motion.div
              key={step.n}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="text-5xl font-serif text-az-light mb-4">
                {step.n}
              </div>
              <h3 className="font-serif text-lg text-carbon mb-2">
                {lang === "es" ? step.titleEs : step.titleEn}
              </h3>
              <p className="text-[11px] text-sand leading-[1.8]">
                {lang === "es" ? step.descEs : step.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Neuro section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
        <div
          className="bg-cover bg-center min-h-[300px]"
          style={{
            backgroundImage:
              "url('https://www.habitante.co/wp-content/uploads/2025/12/bg-home.webp')",
          }}
        />
        <div className="bg-az-brand px-14 py-16 max-md:px-6 max-md:py-12 flex flex-col justify-center">
          <div className="label-upper text-az-mid/65 mb-3.5">
            {t("nr.label")}
          </div>
          <h2 className="font-serif text-display-md text-linen leading-[1.32] mb-5">
            {t("nr.title.1")}
            <br />
            {t("nr.title.2")}
            <br />
            <em className="italic text-[#A8C0E8]">{t("nr.title.em")}</em>
          </h2>
          <p className="text-[13px] text-az-light/60 leading-[1.85] font-light">
            {t("nr.body")}
          </p>
        </div>
      </section>
    </>
  );
}
