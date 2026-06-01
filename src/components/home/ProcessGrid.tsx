"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const APPROACH_HREF = "/forma-de-disenar";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const easeWipe = [0.76, 0, 0.24, 1] as const;

type Tile = {
  key: string;
  num: string;
  image: string;
  span: string;
  minH: string;
  wide?: boolean;
  objectPosition?: string;
};

// Balanced zigzag bento: each row pairs one wide + one narrow tile, alternating
// sides so every principle gets a large, equal-weight showcase.
const tiles: Tile[] = [
  {
    key: "proc.1",
    num: "01",
    image: "/images/principle-emotional-brief.jpg",
    wide: true,
    span: "md:col-span-3",
    minH: "min-h-[360px] md:min-h-0",
  },
  {
    key: "proc.2",
    num: "02",
    image: "/images/principle-light.jpg",
    span: "md:col-span-2",
    minH: "min-h-[340px] md:min-h-0",
  },
  {
    key: "proc.3",
    num: "03",
    image: "/images/principle-matter.jpg",
    span: "md:col-span-2",
    minH: "min-h-[340px] md:min-h-0",
  },
  {
    key: "proc.4",
    num: "04",
    image: "/images/principle-dialogue.jpg",
    wide: true,
    span: "md:col-span-3",
    minH: "min-h-[360px] md:min-h-0",
    objectPosition: "center 68%",
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
  linkLabel,
  reduce,
}: {
  tile: Tile;
  index: number;
  phase: string;
  title: string;
  desc: string;
  principleWord: string;
  linkLabel: string;
  reduce: boolean | null;
}) {
  // Phase label arrives as "01 — Escucha"; keep the word after the dash.
  const phaseWord = phase.split("—").pop()?.trim() ?? phase;

  return (
    <motion.article
      variants={reduce ? undefined : tileVariants}
      whileHover={reduce ? undefined : { y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className={`group relative overflow-hidden rounded-[3px] cursor-pointer ${tile.span} ${tile.minH}`}
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
            sizes={tile.wide ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 40vw"}
            className="object-cover"
            style={tile.objectPosition ? { objectPosition: tile.objectPosition } : undefined}
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
          tile.wide ? "text-[110px] md:text-[150px]" : "text-[96px] md:text-[120px]"
        }`}
      >
        {tile.num}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-7 bg-az-light/70" />
          <span className="label-upper text-az-light/90">
            {principleWord} {tile.num} · {phaseWord}
          </span>
        </div>

        <h3
          className={`font-serif text-cream leading-[1.12] mb-3 ${
            tile.wide ? "text-display-lg" : "text-display-md"
          }`}
        >
          {title}
        </h3>

        <p className="text-bone/85 leading-[1.8] text-[14px] md:text-[15px] max-w-lg">
          {desc}
        </p>
      </div>

      {/* Hover affordance */}
      <span className="pointer-events-none absolute top-6 left-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-az-light/40 bg-carbon/30 backdrop-blur-sm text-az-light opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <ArrowUpRight size={18} strokeWidth={1.5} />
      </span>

      {/* Full-tile link */}
      <Link
        href={APPROACH_HREF}
        aria-label={`${title} — ${linkLabel}`}
        className="absolute inset-0 z-20"
      />
    </motion.article>
  );
}

export default function ProcessGrid() {
  const { t, lang } = useLanguage();
  const reduce = useReducedMotion();
  const principleWord = lang === "es" ? "Principio" : "Principle";
  const linkLabel = lang === "es" ? "Ver enfoque de diseño" : "View design approach";

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
        className="grid grid-cols-1 md:grid-cols-5 gap-3 md:auto-rows-[minmax(380px,1fr)]"
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
            linkLabel={linkLabel}
            reduce={reduce}
          />
        ))}
      </motion.div>
    </section>
  );
}
