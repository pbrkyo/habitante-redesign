"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const headingVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

function MagneticButton({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Link href={href} className="btn-primary">
          {children}
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="bg-linen section-pad py-24 max-md:py-14 flex max-md:flex-col items-center justify-between gap-12 max-md:gap-8 max-md:text-center border-t border-bone/50">
      <motion.div
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={lineVariants} className="label-upper text-sand-light mb-3.5">
          {t("cta.label")}
        </motion.div>
        <h2 className="font-serif text-display-lg text-carbon leading-[1.2]">
          <div style={{ overflow: "hidden" }}>
            <motion.div variants={lineVariants}>{t("cta.title.1")}</motion.div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.div variants={lineVariants}>
              {t("cta.title.2")}
              <em className="italic text-az-brand">{t("cta.title.em")}</em>
            </motion.div>
          </div>
        </h2>
      </motion.div>

      <motion.div
        className="flex-shrink-0 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <MagneticButton href="/conversacion">{t("cta.btn")}</MagneticButton>
        <span className="text-xs text-sand mt-1">{t("cta.note")}</span>
      </motion.div>
    </section>
  );
}
