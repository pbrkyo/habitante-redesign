"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

interface ProjectFilterProps {
  active: string | null;
  onChange: (cat: string | null) => void;
}

export default function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  const { t } = useLanguage();

  const filters = [
    { key: null, label: t("projects.all") },
    { key: "residential", label: t("projects.residential") },
    { key: "commercial", label: t("projects.commercial") },
    { key: "urban", label: t("projects.urban") },
  ];

  return (
    <div className="flex gap-6 flex-wrap">
      {filters.map((f) => (
        <button
          key={f.key ?? "all"}
          onClick={() => onChange(f.key)}
          className={`label-upper pb-1 transition-all duration-200 cursor-pointer ${
            active === f.key
              ? "text-az-brand border-b border-az-brand"
              : "text-sand-light hover:text-sand"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
