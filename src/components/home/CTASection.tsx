"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const easeWipe = [0.76, 0, 0.24, 1] as const;

function MagneticButton({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.3);
    y.set((e.clientY - cy) * 0.3);
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
      className="inline-block"
    >
      <motion.div
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Link
          href={href}
          className="inline-block text-[13px] uppercase tracking-[0.16em] text-carbon bg-cream border-none py-5 px-14 max-md:px-10 rounded-sm transition-colors duration-300 hover:bg-white font-medium"
        >
          {children}
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function CTASection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-carbon overflow-hidden"
    >
      <motion.div
        className="absolute inset-[-10%] opacity-[0.03]"
        style={{
          y: bgY,
          backgroundImage:
            "radial-gradient(circle at 30% 50%, rgba(27,82,166,0.6) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(43,63,212,0.4) 0%, transparent 50%)",
        }}
      />

      <div className="relative section-pad py-32 max-md:py-20 flex flex-col items-center text-center">
        <motion.div
          className="label-upper text-sand/40 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("cta.label")}
        </motion.div>

        <motion.h2
          className="font-serif text-display-lg md:text-display-xl text-cream leading-[1.1] mb-4 max-w-3xl"
          initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeWipe, delay: 0.1 }}
        >
          {t("cta.title.1")}
          <br />
          {t("cta.title.2")}
          <em className="italic text-az-light/80">{t("cta.title.em")}</em>
        </motion.h2>

        <motion.div
          className="h-px bg-cream/10 my-10 w-full max-w-[120px]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeWipe, delay: 0.3 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MagneticButton href="/conversacion">{t("cta.btn")}</MagneticButton>
        </motion.div>

        <motion.span
          className="text-[11px] text-sand/30 mt-4 tracking-[0.05em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {t("cta.note")}
        </motion.span>
      </div>
    </section>
  );
}
