"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const steps = [
  {
    nKey: "proc.1.n",
    titleKey: "proc.1.title",
    descKey: "proc.1.desc",
    image: "/images/projects/casa-descalzo/casa-descalzo-01.jpg",
  },
  {
    nKey: "proc.2.n",
    titleKey: "proc.2.title",
    descKey: "proc.2.desc",
    image: "/images/projects/casa-dosel/casa-dosel-01.jpg",
  },
  {
    nKey: "proc.3.n",
    titleKey: "proc.3.title",
    descKey: "proc.3.desc",
    image: "/images/projects/casa-enso/casa-enso-01.jpg",
  },
  {
    nKey: "proc.4.n",
    titleKey: "proc.4.title",
    descKey: "proc.4.desc",
    image: "/images/projects/villa-fuste/villa-fuste-01.jpg",
  },
];

const easeWipe = [0.76, 0, 0.24, 1] as const;

export default function ProcessGrid() {
  const { t, lang } = useLanguage();

  const trackRef = useRef<HTMLDivElement>(null);
  const [horizontal, setHorizontal] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setHorizontal(mq.matches && !reduce);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduce]);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Translate the track left by (n-1) viewport widths over the scroll span.
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(steps.length - 1) * 100}vw`]
  );
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* ─── Process intro ─── */}
      <section className="bg-linen border-t border-bone/50 section-pad pt-24 pb-12 max-md:pt-16">
        <div className="flex items-end gap-8">
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
            className="hidden md:flex items-center gap-3 label-upper text-sand mb-2 whitespace-nowrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="h-px bg-bone/60 w-16 inline-block" />
            {lang === "es" ? "Desplázate para recorrer" : "Scroll to explore"} →
          </motion.div>
        </div>
      </section>

      {/* ─── Process: horizontal pinned showcase ─── */}
      <section
        ref={trackRef}
        className="relative bg-linen"
        style={{ height: horizontal ? `${steps.length * 100}vh` : undefined }}
      >
        <div
          className={
            horizontal
              ? "sticky top-0 h-screen overflow-hidden flex items-center"
              : ""
          }
        >
          <motion.div
            className={`flex ${horizontal ? "flex-row h-screen" : "flex-col"}`}
            style={horizontal ? { x } : undefined}
          >
            {steps.map((step) => (
              <div
                key={step.nKey}
                className={`relative flex-shrink-0 overflow-hidden ${
                  horizontal
                    ? "w-screen h-screen"
                    : "w-full h-[80vh] min-h-[460px]"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${step.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/92 via-carbon/45 to-carbon/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-carbon/55 via-transparent to-transparent" />

                {/* Ghost number — just the digits, e.g. "01" */}
                <div className="absolute top-10 right-8 md:right-16 font-serif text-[120px] md:text-[220px] text-white/[0.06] leading-none select-none pointer-events-none">
                  {t(step.nKey).split(" — ")[0]}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 section-pad pb-16 md:pb-24 max-w-3xl">
                  <div className="label-upper text-az-light/85 mb-4 tracking-[0.2em]">
                    {t(step.nKey)}
                  </div>
                  <h3 className="font-serif text-display-md md:text-display-lg text-cream leading-[1.1] mb-5">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-[15px] md:text-base text-bone/85 leading-[1.9] max-w-xl">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Horizontal progress bar — only while pinned */}
          {horizontal && (
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
              <motion.div
                className="h-full bg-az-light origin-left"
                style={{ width: progressWidth }}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
