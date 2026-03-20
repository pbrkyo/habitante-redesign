"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const offices = [
  {
    country: "Costa Rica",
    city: "Tamarindo, Guanacaste",
    code: "CR",
    descEs:
      "Sede principal. Desde aquí diseñamos proyectos residenciales y comerciales que dialogan con el trópico, la luz y la materialidad local.",
    descEn:
      "Main headquarters. From here we design residential and commercial projects that dialogue with the tropics, light, and local materiality.",
  },
  {
    country: "Canadá",
    city: "Vancouver, BC",
    code: "CA",
    descEs:
      "Presencia internacional para clientes que buscan la misma sensibilidad de diseño en contextos distintos.",
    descEn:
      "International presence for clients seeking the same design sensibility in different contexts.",
  },
  {
    country: "Nicaragua",
    city: "Managua",
    code: "NI",
    descEs:
      "Proyectos comerciales y residenciales que extienden nuestra práctica a nuevos territorios centroamericanos.",
    descEn:
      "Commercial and residential projects extending our practice to new Central American territories.",
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
  },
  {
    titleEs: "Escala humana",
    titleEn: "Human scale",
    descEs:
      "Somos un estudio boutique. Eso significa atención directa, relación cercana con cada cliente, y la certeza de que cada detalle importa.",
    descEn:
      "We are a boutique studio. That means direct attention, close relationship with each client, and the certainty that every detail matters.",
  },
  {
    titleEs: "Responsabilidad emocional",
    titleEn: "Emotional responsibility",
    descEs:
      "Integramos principios de neuroarquitectura porque creemos que los espacios afectan profundamente a las personas. Diseñar es un acto de responsabilidad.",
    descEn:
      "We integrate neuroarchitecture principles because we believe spaces profoundly affect people. Designing is an act of responsibility.",
  },
];

export default function LaFirmaPage() {
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
            {t("firm.title")}
          </div>
          <h1 className="font-serif text-display-lg text-carbon mb-6">
            {t("firm.subtitle")}
          </h1>
          <p className="text-base text-ink/70 font-light leading-[1.9]">
            {lang === "es"
              ? "Habitante es un estudio de arquitectura boutique fundado con una convicción: los espacios que habitamos nos transforman. Desde Guanacaste, Costa Rica, diseñamos arquitectura residencial, comercial y urbana que parte de la experiencia humana — no de la forma."
              : "Habitante is a boutique architecture studio founded with a conviction: the spaces we inhabit transform us. From Guanacaste, Costa Rica, we design residential, commercial, and urban architecture that starts from human experience — not from form."}
          </p>
        </motion.div>
      </section>

      {/* Vision */}
      <section className="bg-linen section-pad py-20 border-b border-bone/50">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <motion.div
            className="font-serif text-display-lg text-carbon leading-[1.35] italic"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm text-ink/70 leading-[1.9]">
              {lang === "es"
                ? "Nuestra visión es crear arquitectura que trascienda lo estético. Espacios que respondan a la forma en que las personas realmente viven: sus rutinas, sus emociones, su relación con la luz, el sonido y la naturaleza. Creemos que la arquitectura tiene la responsabilidad de mejorar la vida cotidiana."
                : "Our vision is to create architecture that transcends aesthetics. Spaces that respond to how people actually live: their routines, emotions, their relationship with light, sound, and nature. We believe architecture has the responsibility to improve everyday life."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white section-pad py-20 border-b border-bone/50">
        <div className="label-upper text-sand-light mb-3">
          {lang === "es" ? "Valores" : "Values"}
        </div>
        <h2 className="font-serif text-display-md text-carbon mb-14">
          {lang === "es" ? "Lo que nos define" : "What defines us"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <motion.div
              key={i}
              className="border-t border-bone/50 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <h3 className="font-serif text-lg text-carbon mb-3">
                {lang === "es" ? v.titleEs : v.titleEn}
              </h3>
              <p className="text-sm text-ink/70 leading-[1.85]">
                {lang === "es" ? v.descEs : v.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* International presence */}
      <section className="bg-az-light section-pad py-20 border-b border-az-mid/50">
        <div className="label-upper text-az-brand/70 mb-3">
          {lang === "es" ? "Presencia internacional" : "International presence"}
        </div>
        <h2 className="font-serif text-display-md text-carbon mb-14">
          {lang === "es" ? "Tres países, una práctica" : "Three countries, one practice"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, i) => (
            <motion.div
              key={office.code}
              className="bg-white p-8 border border-bone/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={14} className="text-az-brand" />
                <span className="text-[11px] uppercase tracking-label text-az-brand">
                  {office.code}
                </span>
              </div>
              <h3 className="font-serif text-lg text-carbon mb-1">
                {office.country}
              </h3>
              <div className="text-xs text-sand mb-4">
                {office.city}
              </div>
              <p className="text-sm text-ink/70 leading-[1.8]">
                {lang === "es" ? office.descEs : office.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
