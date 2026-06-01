"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const easeWipe = [0.76, 0, 0.24, 1] as const;

type Tone = "brand" | "light" | "cream" | "azlight";

type Tile = {
  key: string;
  num: string;
  tone: Tone;
  span: string;
  feature?: boolean;
};

// Asymmetric bento: feature tile (2×2) top-left, two stacked tiles on the
// right, one wide band across the bottom.
const tiles: Tile[] = [
  {
    key: "proc.1",
    num: "01",
    tone: "brand",
    feature: true,
    span: "md:col-span-2 md:row-span-2",
  },
  { key: "proc.2", num: "02", tone: "light", span: "md:col-start-3 md:row-start-1" },
  { key: "proc.3", num: "03", tone: "cream", span: "md:col-start-3 md:row-start-2" },
  { key: "proc.4", num: "04", tone: "azlight", span: "md:col-span-3 md:row-start-3" },
];

const toneStyles: Record<
  Tone,
  {
    tile: string;
    eyebrow: string;
    ghost: string;
    tick: string;
    title: string;
    desc: string;
  }
> = {
  brand: {
    tile: "bg-az-brand border border-az-brand",
    eyebrow: "text-az-light/75",
    ghost: "text-white/[0.08]",
    tick: "bg-az-light/60",
    title: "text-bone",
    desc: "text-az-light/80",
  },
  light: {
    tile: "bg-white border border-bone/70",
    eyebrow: "text-az-brand/80",
    ghost: "text-carbon/[0.04]",
    tick: "bg-az-brand",
    title: "text-carbon",
    desc: "text-ink/75",
  },
  cream: {
    tile: "bg-cream border border-bone/70",
    eyebrow: "text-az-brand/80",
    ghost: "text-carbon/[0.04]",
    tick: "bg-az-brand",
    title: "text-carbon",
    desc: "text-ink/75",
  },
  azlight: {
    tile: "bg-az-light border border-az-mid",
    eyebrow: "text-az-brand/80",
    ghost: "text-az-brand/[0.07]",
    tick: "bg-az-brand",
    title: "text-carbon",
    desc: "text-ink/75",
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

function BentoTile({
  tile,
  phase,
  title,
  desc,
  reduce,
}: {
  tile: Tile;
  phase: string;
  title: string;
  desc: string;
  reduce: boolean | null;
}) {
  const s = toneStyles[tile.tone];
  // Phase label arrives as "01 — Escucha"; keep the word after the dash.
  const phaseWord = phase.split("—").pop()?.trim() ?? phase;

  return (
    <motion.div
      variants={reduce ? undefined : tileVariants}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className={`group relative overflow-hidden rounded-[3px] flex flex-col ${
        tile.feature ? "p-9 md:p-11" : "p-7 md:p-8"
      } ${s.tile} ${tile.span}`}
    >
      {/* Ghost numeral motif */}
      <span
        className={`pointer-events-none absolute -top-4 right-1 font-serif leading-none select-none ${
          tile.feature ? "text-[160px]" : "text-[104px]"
        } ${s.ghost}`}
      >
        {tile.num}
      </span>

      {/* Eyebrow: number + phase, with a short tick line */}
      <div className="relative flex items-center gap-3 mb-5">
        <span className={`h-px w-7 ${s.tick}`} />
        <span className={`label-upper ${s.eyebrow}`}>
          {tile.num} · {phaseWord}
        </span>
      </div>

      <h3
        className={`relative font-serif ${
          tile.feature ? "text-display-md" : "text-display-sm"
        } leading-[1.15] ${s.title} ${tile.feature ? "mb-5" : "mb-3"}`}
      >
        {title}
      </h3>

      <p
        className={`relative body-text leading-[1.8] ${s.desc} ${
          tile.feature ? "max-w-md mt-auto" : ""
        }`}
      >
        {desc}
      </p>
    </motion.div>
  );
}

export default function ProcessGrid() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

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
        className="grid grid-cols-1 md:grid-cols-3 gap-3 md:auto-rows-[minmax(190px,1fr)]"
        variants={reduce ? undefined : containerVariants}
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "visible"}
        viewport={{ once: true, margin: "-80px" }}
      >
        {tiles.map((tile) => (
          <BentoTile
            key={tile.key}
            tile={tile}
            phase={t(`${tile.key}.n`)}
            title={t(`${tile.key}.title`)}
            desc={t(`${tile.key}.desc`)}
            reduce={reduce}
          />
        ))}
      </motion.div>
    </section>
  );
}
