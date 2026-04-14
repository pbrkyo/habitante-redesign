"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const typologies = [
  {
    titleEs: "Residencias de autor",
    titleEn: "Author residences",
    descEs:
      "Cada casa parte de un brief emocional. No diseñamos viviendas genéricas — diseñamos la forma específica en que una persona o familia quiere habitar su espacio.",
    descEn:
      "Every home starts from an emotional brief. We don't design generic housing — we design the specific way a person or family wants to inhabit their space.",
  },
  {
    titleEs: "Espacios comerciales",
    titleEn: "Commercial spaces",
    descEs:
      "Oficinas, restaurantes y espacios de trabajo donde la arquitectura potencia la experiencia del usuario. El mismo rigor de autor aplicado a la escala comercial.",
    descEn:
      "Offices, restaurants, and workspaces where architecture enhances the user experience. The same author's rigor applied to commercial scale.",
  },
  {
    titleEs: "Proyectos especiales",
    titleEn: "Special projects",
    descEs:
      "Intervenciones urbanas, espacios públicos y encargos que trascienden la tipología convencional. Proyectos donde la arquitectura dialoga con la comunidad.",
    descEn:
      "Urban interventions, public spaces, and commissions that transcend conventional typology. Projects where architecture dialogues with the community.",
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
              ? "Habitante es un estudio de arquitectura boutique fundado con una convicción: los espacios que habitamos nos transforman. Diseñamos arquitectura residencial, comercial y especial que parte de la experiencia humana — no de la forma."
              : "Habitante is a boutique architecture studio founded with a conviction: the spaces we inhabit transform us. We design residential, commercial, and special architecture that starts from human experience — not from form."}
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

      {/* Typologies */}
      <section className="bg-az-light section-pad py-20 border-b border-az-mid/50">
        <div className="label-upper text-az-brand/70 mb-3">
          {lang === "es" ? "Tipos de proyecto" : "Project types"}
        </div>
        <h2 className="font-serif text-display-md text-carbon mb-14">
          {lang === "es"
            ? "Práctica internacional, enfoque de autor"
            : "International practice, author's approach"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {typologies.map((typ, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 border border-bone/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <h3 className="font-serif text-lg text-carbon mb-3">
                {lang === "es" ? typ.titleEs : typ.titleEn}
              </h3>
              <p className="text-sm text-ink/70 leading-[1.8]">
                {lang === "es" ? typ.descEs : typ.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
