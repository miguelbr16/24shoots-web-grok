import type { Locale, RouteKey } from "./types";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export const routes: Record<RouteKey, Record<Locale, string>> = {
  home: { es: "", en: "" },
  work: { es: "/trabajo", en: "/work" },
  packs: { es: "/packs", en: "/packs" },
  services: { es: "/servicios", en: "/services" },
  studio: { es: "/estudio", en: "/studio" },
  contact: { es: "/contacto", en: "/contact" },
  legal: { es: "/aviso-legal", en: "/legal-notice" },
  privacy: { es: "/privacidad", en: "/privacy" },
  cookies: { es: "/cookies", en: "/cookies" },
};

const segmentLocale: Record<string, Record<Locale, string>> = {
  trabajo: { es: "trabajo", en: "work" },
  work: { es: "trabajo", en: "work" },
  packs: { es: "packs", en: "packs" },
  servicios: { es: "servicios", en: "services" },
  services: { es: "servicios", en: "services" },
  estudio: { es: "estudio", en: "studio" },
  studio: { es: "estudio", en: "studio" },
  contacto: { es: "contacto", en: "contact" },
  contact: { es: "contacto", en: "contact" },
  "aviso-legal": { es: "aviso-legal", en: "legal-notice" },
  "legal-notice": { es: "aviso-legal", en: "legal-notice" },
  privacidad: { es: "privacidad", en: "privacy" },
  privacy: { es: "privacidad", en: "privacy" },
  cookies: { es: "cookies", en: "cookies" },
};

export function getRoute(locale: Locale, key: RouteKey, suffix = ""): string {
  return `/${locale}${routes[key][locale]}${suffix}`;
}

export function localizeSegment(segment: string, locale: Locale): string {
  return segmentLocale[segment]?.[locale] ?? segment;
}

export function internalSegment(segment: string): string {
  return segmentLocale[segment]?.es ?? segment;
}

export function swapLocalePath(pathname: string, target: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  const rest = parts.slice(1);
  if (rest[0]) rest[0] = localizeSegment(rest[0], target);
  return `/${target}${rest.length ? `/${rest.join("/")}` : ""}`;
}
