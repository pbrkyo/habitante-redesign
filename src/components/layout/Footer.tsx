"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-cream pt-16 pb-8 section-pad border-t border-bone/50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-bone/50">
        {/* Brand */}
        <div>
          <div className="font-sans text-xs font-medium tracking-[0.22em] text-az-brand uppercase">
            HABITANTE
            <span className="block text-[10px] tracking-[0.15em] text-[#4B73C4] font-light mt-[3px]">
              arquitectura
            </span>
          </div>
          <p className="text-sm text-ink/60 mt-4 italic leading-relaxed whitespace-pre-line">
            {t("ft.tagline")}
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="label-upper text-sand-light mb-4">{t("ft.nav")}</h4>
          <div className="flex flex-col gap-3">
            <Link
              href="/proyectos"
              className="text-sm text-ink/65 hover:text-carbon transition-colors"
            >
              {t("nav.projects")}
            </Link>
            <Link
              href="/forma-de-disenar"
              className="text-sm text-ink/65 hover:text-carbon transition-colors"
            >
              {t("nav.approach")}
            </Link>
            <Link
              href="/la-firma"
              className="text-sm text-ink/65 hover:text-carbon transition-colors"
            >
              {t("nav.firm")}
            </Link>
            <Link
              href="/conversacion"
              className="text-sm text-ink/65 hover:text-carbon transition-colors"
            >
              {t("ft.conversation")}
            </Link>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h4 className="label-upper text-sand-light mb-4">
            {t("ft.projects")}
          </h4>
          <div className="flex flex-col gap-3">
            <Link
              href="/proyectos?cat=residential"
              className="text-sm text-ink/65 hover:text-carbon transition-colors"
            >
              {t("ft.residential")}
            </Link>
            <Link
              href="/proyectos?cat=commercial"
              className="text-sm text-ink/65 hover:text-carbon transition-colors"
            >
              {t("ft.commercial")}
            </Link>
            <Link
              href="/proyectos?cat=urban"
              className="text-sm text-ink/65 hover:text-carbon transition-colors"
            >
              {t("ft.international")}
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="label-upper text-sand-light mb-4">
            {t("ft.contact")}
          </h4>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:info@habitante.co"
              className="text-sm text-ink/65 hover:text-carbon transition-colors"
            >
              info@habitante.co
            </a>
            <a
              href="https://habitante.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink/65 hover:text-carbon transition-colors"
            >
              habitante.co
            </a>
            <a
              href="https://www.instagram.com/habitantearquitectura/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink/65 hover:text-carbon transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 text-xs text-sand tracking-[0.05em]">
        <span>{t("ft.copyright")}</span>
        <div className="flex gap-3.5">
          <span className="text-xs text-az-brand/60 tracking-nav">CR</span>
          <span>·</span>
          <span className="text-xs text-az-brand/60 tracking-nav">CA</span>
          <span>·</span>
          <span className="text-xs text-az-brand/60 tracking-nav">NI</span>
        </div>
      </div>
    </footer>
  );
}
