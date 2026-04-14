export type Language = "es" | "en";

export type BilingualString = { es: string; en: string };

export interface ProjectFicha {
  label: BilingualString;
  value: BilingualString;
}

export interface ProjectSection {
  type: "concept" | "quote" | "fullImage" | "gallery" | "feature" | "materiality" | "strategy" | "imagePair";
  label?: BilingualString;
  title?: BilingualString;
  lead?: BilingualString;
  body?: BilingualString;
  items?: { title: BilingualString; text: BilingualString }[];
  images?: string[];
  credit?: string;
  bgDark?: boolean;
}

export interface Project {
  slug: string;
  title: BilingualString;
  description: BilingualString;
  tagline?: BilingualString;
  category: "residential" | "commercial";
  country: string;
  city: string;
  year: number;
  area: string;
  heroImage: string;
  images: string[];
  featured?: boolean;
  ficha?: ProjectFicha[];
  sections?: ProjectSection[];
  nextProject?: string;
  ctaTitle?: BilingualString;
}

export interface NavLink {
  label: { es: string; en: string };
  href: string;
}

export interface Translation {
  [key: string]: string;
}

export interface Translations {
  es: Translation;
  en: Translation;
}
