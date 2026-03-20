"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import ContactForm from "@/components/contact/ContactForm";

export default function ConversacionPage() {
  const { lang, t } = useLanguage();

  return (
    <>
      <section className="bg-white section-pad pt-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-20 max-md:gap-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="label-upper text-sand-light mb-3">
              {t("contact.title")}
            </div>
            <h1 className="font-serif text-display-lg text-carbon mb-6">
              {t("contact.subtitle")}
            </h1>
            <p className="text-sm text-ink/70 font-light leading-[1.9] mb-12">
              {lang === "es"
                ? "Este no es un formulario genérico. Es el inicio de una conversación. Cuéntanos cómo imaginas tu espacio, qué emociones quieres que evoque, cómo quieres vivir en él. Nosotros escuchamos."
                : "This is not a generic form. It's the beginning of a conversation. Tell us how you imagine your space, what emotions you want it to evoke, how you want to live in it. We listen."}
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-az-brand" />
                <a
                  href="mailto:info@habitante.co"
                  className="text-sm text-ink/70 hover:text-carbon transition-colors"
                >
                  info@habitante.co
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-az-brand" />
                <a
                  href="tel:+50683117094"
                  className="text-sm text-ink/70 hover:text-carbon transition-colors"
                >
                  +506 8311 7094
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-az-brand" />
                <span className="text-sm text-ink/70">
                  Tamarindo, Guanacaste, Costa Rica
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
