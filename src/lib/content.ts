import siteJson from "../../config/site.json";
import en from "@/content/en";
import es from "@/content/es";
import type { Dictionary, Locale, SiteConfig, WorkCopy } from "./types";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getSiteConfig(): SiteConfig {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return {
    ...(siteJson as SiteConfig),
    url: configured || siteJson.url,
  };
}

export function getWorkCopy(locale: Locale, slug: string): WorkCopy | undefined {
  return dictionaries[locale].works[slug];
}

export function fill(text: string, email: string): string {
  return text.replaceAll("{{email}}", email);
}

export function formatPhone(raw: string): string {
  const digits = raw.replace(/[^\d+]/g, "");
  if (digits.startsWith("+34") && digits.length === 12) {
    const national = digits.slice(3);
    return `+34 ${national.slice(0, 3)} ${national.slice(3, 6)} ${national.slice(6)}`;
  }
  return raw;
}

export function whatsappHref(phone: string, text: string): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export function instagramHandle(url: string): string {
  return url.replace(/https?:\/\/(www\.)?instagram\.com\//, "").replace(/\/$/, "");
}
