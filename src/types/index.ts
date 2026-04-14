export type Language = "es" | "en";

export interface Project {
  slug: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  category: "residential" | "commercial";
  country: string;
  city: string;
  year: number;
  area: string;
  heroImage: string;
  images: string[];
  featured?: boolean;
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
