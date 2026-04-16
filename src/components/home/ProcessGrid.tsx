"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const steps = [
  { nKey: "proc.1.n", titleKey: "proc.1.title", descKey: "proc.1.desc" },
  { nKey: "proc.2.n", titleKey: "proc.2.title", descKey: "proc.2.desc" },
  { nKey: "proc.3.n", titleKey: "proc.3.title", descKey: "proc.3.desc" },
  { nKey: "proc.4.n", titleKey: "proc.4.title", descKey: "proc.4.desc" },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const easeWipe = [0.76, 0, 0.24, 1] as const;

export default function ProcessGrid() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-linen section-pad py-24 max-md:py-16 border-t border-bone/50 border-b border-bone/50">
      <div className="flex items-end gap-8 mb-16 max-md:mb-10">
        <div>
          <motion.div
            className="label-upper text-sand-light mb-3"
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
          className="hidden md:block flex-1 h-px bg-bone/60 mb-3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: easeWipe, delay: 0.3 }}
          style={{ originX: 0 }}
        />
      </div>

      <div className="max-w-4xl">
        {steps.map((step, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={i}
              className="border-t border-bone/50 last:border-b last:border-bone/50 cursor-pointer group"
              onClick={() => setOpenIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
            >
              <div className="flex items-center justify-between py-6 md:py-7">
                <div className="flex items-center gap-5 md:gap-8">
                  <motion.span
                    className="label-upper transition-colors duration-300"
                    animate={{
                      color: isOpen ? "rgb(27,82,166)" : "rgb(200,195,188)",
                    }}
                  >
                    {t(step.nKey)}
                  </motion.span>

                  <motion.h3
                    className="font-serif text-[20px] md:text-[24px] transition-colors duration-300"
                    animate={{
                      color: isOpen ? "rgb(30,29,26)" : "rgb(158,150,144)",
                    }}
                  >
                    {t(step.titleKey)}
                  </motion.h3>
                </div>

                <motion.div
                  className="w-8 h-8 rounded-full border border-bone/50 flex items-center justify-center flex-shrink-0"
                  animate={{
                    borderColor: isOpen
                      ? "rgba(27,82,166,0.4)"
                      : "rgba(232,228,222,0.5)",
                    rotate: isOpen ? 45 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span
                    className={`text-lg leading-none transition-colors duration-300 ${
                      isOpen ? "text-az-brand" : "text-sand-light"
                    }`}
                  >
                    +
                  </span>
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease }}
                    className="overflow-hidden"
                  >
                    <div className="pl-[52px] md:pl-[72px] pb-8 pr-12 max-md:pr-4 max-md:pl-10">
                      <motion.div
                        className="h-px bg-az-brand/20 mb-5 origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, ease: easeWipe, delay: 0.1 }}
                      />
                      <p className="text-sm text-ink/70 leading-[1.9] max-w-lg">
                        {t(step.descKey)}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
