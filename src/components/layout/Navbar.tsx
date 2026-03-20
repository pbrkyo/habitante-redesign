"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        className="sticky top-0 z-[100] flex items-center justify-between px-12 max-md:px-6 h-16 border-b transition-colors duration-300"
        animate={{
          backgroundColor: scrolled ? "rgba(253,252,250,0.92)" : "rgba(253,252,250,1)",
          borderColor: scrolled ? "rgba(232,228,222,0.6)" : "rgba(232,228,222,0.5)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
      >
        <Link href="/" className="flex flex-col leading-tight group">
          <span className="font-sans text-[11px] font-medium tracking-[0.24em] text-az-brand uppercase transition-opacity group-hover:opacity-80">
            HABITANTE
          </span>
          <span className="text-[8px] tracking-[0.15em] text-[#4B73C4] font-light mt-[3px] opacity-80">
            arquitectura
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link relative transition-colors duration-200 ${
                  isActive ? "text-carbon" : "hover:text-carbon"
                }`}
              >
                {t(link.key)}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-[22px] left-0 right-0 h-px bg-az-brand"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <LanguageSwitcher />
        </div>

        <div className="hidden md:block">
          <Link href="/conversacion" className="btn-outline">
            {t("nav.cta")} →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          className="md:hidden text-carbon p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          animate={{ rotate: mobileOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.15 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile menu overlay + panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-carbon/20 z-[90] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              className="fixed top-16 left-0 right-0 bg-white border-b border-bone/50 p-6 flex flex-col gap-5 md:hidden z-[95]"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      className={`nav-link text-sm block ${isActive ? "text-carbon" : ""}`}
                    >
                      {t(link.key)}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.25 }}
              >
                <Link href="/conversacion" className="btn-primary text-center block">
                  {t("nav.cta")}
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (navLinks.length + 1) * 0.06, duration: 0.25 }}
              >
                <LanguageSwitcher />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
