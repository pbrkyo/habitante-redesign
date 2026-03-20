"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { key: "nav.projects", href: "/proyectos" },
  { key: "nav.approach", href: "/forma-de-disenar" },
  { key: "nav.firm", href: "/la-firma" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between px-12 max-md:px-6 h-16 bg-white border-b border-bone/50">
      <Link href="/" className="flex flex-col leading-tight">
        <span className="font-sans text-[11px] font-medium tracking-[0.24em] text-az-brand uppercase">
          HABITANTE
        </span>
        <span className="text-[8px] tracking-[0.15em] text-[#4B73C4] font-light mt-[3px] opacity-80">
          arquitectura
        </span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="nav-link">
            {t(link.key)}
          </Link>
        ))}
        <LanguageSwitcher />
      </div>

      <div className="hidden md:block">
        <Link href="/conversacion" className="btn-outline">
          {t("nav.cta")} →
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-carbon"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-bone/50 p-6 flex flex-col gap-6 md:hidden z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {t(link.key)}
            </Link>
          ))}
          <Link
            href="/conversacion"
            className="btn-primary text-center"
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.cta")}
          </Link>
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
}
