"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const easeWipe = [0.76, 0, 0.24, 1] as const;

type Tile = {
  key: string;
  num: string;
  image: string;
  span: string;
  minH: string;
  feature?: boolean;
};

// Asymmetric bento: feature tile (2×2) top-left, two stacked tiles on the
// right, one wide band across the bottom. Each tile carries its own image so
// every principle is a protagonist.
const tiles: Tile[] = [
  {
    key: "proc.1",
    num: "01",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1100&q=85",
    feature: true,
    span: "md:col-span-2 md:row-span-2",
    minH: "min-h-[440px] md:min-h-0",
  },
  {
    key: "proc.2",
    num: "02",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=85",
    span: "md:col-start-3 md:row-start-1",
    minH: "min-h-[280px] md:min-h-0",
  },
  {
    key: "proc.3",
    num: "03",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=85",
    span: "md:col-start-3 md:row-start-2",
    minH: "min-h-[280px] md:min-h-0",
  },
  {
    key: "proc.4",
    num: "04",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85",
    span: "md:col-span-3 md:row-start-3",
    minH: "min-h-[320px] md:min-h-0",
  },
];

const tileVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

function BentoTile({
  tile,
  index,
  phase,
  title,
  desc,
  principleWord,
  reduce,
}: {
  tile: Tile;
  index: number;
  phase: string;
  title: string;
  desc: string;
  principleWord: string;
  reduce: boolean | null;
}) {
  // Phase label arrives as "01 — Escucha"; keep the word after the dash.
  const phaseWord = phase.split("—").pop()?.trim() ?? phase;

  return (
    <motion.article
      variants={reduce ? undefined : tileVariants}
      whileHover={reduce ? undefined : { y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className={`group relative overflow-hidden rounded-[3px] ${tile.span} ${tile.minH}`}
    >
      {/* Image with clip-path reveal + Ken-Burns hover zoom */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={reduce ? undefined : { clipPath: "inset(0 0 100% 0)" }}
        whileInView={reduce ? undefined : { clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: easeWipe, delay: 0.15 + index * 0.12 }}
      >
        <div className="absolute inset-0 transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]">
          <Image
            src={tile.image}
            alt={title}
            fill
            sizes={tile.feature ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-carbon/92 via-carbon/40 to-carbon/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-carbon/55 via-transparent to-transparent" />
      {/* Brand tint that fades in on hover */}
      <div className="absolute inset-0 bg-az-brand/0 group-hover:bg-az-brand/15 transition-colors duration-500" />

      {/* Ghost numeral motif */}
      <div
        className={`pointer-events-none absolute top-5 right-5 font-serif leading-none select-none text-white/[0.1] transition-transform duration-500 group-hover:-translate-y-1 ${
          tile.feature ? "text-[120px] md:text-[180px]" : "text-[88px]"
        }`}
      >
        {tile.num}
      </div>

      {/* Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-end ${
          tile.feature ? "p-9 md:p-11" : "p-6 md:p-7"
        }`}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-7 bg-az-light/70" />
          <span className="label-upper text-az-light/90">
            {principleWord} {tile.num} · {phaseWord}
          </span>
        </div>

        <h3
          className={`font-serif text-cream leading-[1.12] ${
            tile.feature ? "text-display-lg mb-4" : "text-display-sm mb-2.5"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-bone/85 leading-[1.8] ${
            tile.feature
              ? "text-[15px] md:text-base max-w-md"
              : "text-[13px] max-w-sm"
          }`}
        >
          {desc}
        </p>
      </div>
    </motion.article>
  );
}

export default function ProcessGrid() {
  const { t, lang } = useLanguage();
  const reduce = useReducedMotion();
  const principleWord = lang === "es" ? "Principio" : "Principle";

  return (
    <section className="bg-linen section-pad py-24 max-md:py-16 border-t border-bone/50">
      {/* Intro */}
      <div className="flex items-end gap-8 mb-14 max-md:mb-10">
        <div>
          <motion.div
            className="label-upper mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("proc.label")}
          </motion.div>
          <motion.h2
            className="font-serif text-display-md text-carbon"
            initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easeWipe, delay: 0.1 }}
          >
            {t("proc.title")}
          </motion.h2>
        </div>
        <motion.div
          className="hidden md:block flex-1 h-px bg-bone/60 mb-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: easeWipe, delay: 0.3 }}
          style={{ originX: 0 }}
        />
      </div>

      {/* Bento grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-3 md:auto-rows-[minmax(230px,1fr)]"
        variants={reduce ? undefined : containerVariants}
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "visible"}
        viewport={{ once: true, margin: "-80px" }}
      >
        {tiles.map((tile, i) => (
          <BentoTile
            key={tile.key}
            tile={tile}
            index={i}
            phase={t(`${tile.key}.n`)}
            title={t(`${tile.key}.title`)}
            desc={t(`${tile.key}.desc`)}
            principleWord={principleWord}
            reduce={reduce}
          />
        ))}
      </motion.div>
    </section>
  );
}
