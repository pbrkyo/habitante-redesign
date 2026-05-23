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
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand mb-3">
              {t("contact.title")}
            </div>
            <h1 className="font-serif text-display-lg text-carbon mb-6">
              {t("contact.subtitle")}
            </h1>
            <p className="text-[15px] text-ink leading-[1.9] mb-12">
              {lang === "es"
                ? "Este no es un formulario genérico. Es el inicio de una conversación. Cuéntanos cómo imaginas tu espacio, qué emociones quieres que evoque, cómo quieres vivir en él. Nosotros escuchamos."
                : "This is not a generic form. It's the beginning of a conversation. Tell us how you imagine your space, what emotions you want it to evoke, how you want to live in it. We listen."}
            </p>

            <div className="flex flex-col gap-5 border-t border-bone pt-8">
              <a
                href="mailto:info@habitante.co"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-az-light flex items-center justify-center flex-shrink-0 group-hover:bg-az-brand transition-colors duration-200">
                  <Mail size={14} className="text-az-brand group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="text-[15px] text-ink group-hover:text-carbon transition-colors">
                  info@habitante.co
                </span>
              </a>

              <a
                href="tel:+50683117094"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-az-light flex items-center justify-center flex-shrink-0 group-hover:bg-az-brand transition-colors duration-200">
                  <Phone size={14} className="text-az-brand group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="text-[15px] text-ink group-hover:text-carbon transition-colors">
                  +506 8311 7094
                </span>
              </a>

              <a
                href="https://wa.me/50683117094"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#E8F8EE] flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white transition-colors duration-200">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span className="text-[15px] text-ink group-hover:text-carbon transition-colors">
                  WhatsApp
                </span>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-az-light flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-az-brand" />
                </div>
                <span className="text-[15px] text-ink">
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
