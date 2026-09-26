import type { Metadata } from "next";
import { heroImage } from "@/content/works";
import { getSiteConfig } from "./content";
import { routes } from "./i18n";
import type { Locale, RouteKey } from "./types";

const RELEASED = "2026-09-25";

export function contentRevision(): string {
  return RELEASED;
}

export function absoluteUrl(path: string): string {
  const site = getSiteConfig();
  if (path.startsWith("http")) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  locale,
  route,
  title,
  description,
  suffix = "",
  image = heroImage.src,
  imageAlt,
}: {
  locale: Locale;
  route: RouteKey;
  title: string;
  description: string;
  suffix?: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const site = getSiteConfig();
  const esPath = `/${"es"}${routes[route].es}${suffix}`;
  const enPath = `/${"en"}${routes[route].en}${suffix}`;
  const canonical = locale === "es" ? esPath : enPath;
  const url = absoluteUrl(canonical);
  const imageUrl = absoluteUrl(image);

  return {
    title: { absolute: title },
    description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: url,
      languages: {
        es: absoluteUrl(esPath),
        en: absoluteUrl(enPath),
        "x-default": absoluteUrl(esPath),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_ES"],
      type: "website",
      images: [
        {
          url: imageUrl,
          width: heroImage.width,
          height: heroImage.height,
          alt: imageAlt ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: { index: true, follow: true },
    other: {
      "geo.region": "ES-V",
      "geo.placename": "Valencia",
    },
  };
}

export function organizationJsonLd(locale: Locale) {
  const site = getSiteConfig();
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description[locale],
    url: site.url,
    image: absoluteUrl(heroImage.src),
    email: site.contact.email,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressCountry: "ES",
    },
    areaServed: {
      "@type": "Country",
      name: "Spain",
    },
    sameAs: [site.contact.instagram],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function videoJsonLd({
  name,
  description,
  poster,
  video,
  locale,
}: {
  name: string;
  description: string;
  poster: string;
  video: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: absoluteUrl(poster),
    contentUrl: absoluteUrl(video),
    inLanguage: locale,
  };
}
