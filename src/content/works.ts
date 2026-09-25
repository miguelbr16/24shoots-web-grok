import type { WorkAsset } from "@/lib/types";

export const heroImage = {
  src: "/videos/web/posters/oficial.jpg",
  width: 1920,
  height: 1080,
} as const;

export const workCatalog: WorkAsset[] = [
  {
    slug: "premios-isabel-ferrer",
    client: "Premios Isabel Ferrer",
    poster: "/videos/web/posters/isabel-ferrer.jpg",
    video: "/videos/web/v3-premios-isabel-ferrer-web.mp4",
    territory: "events",
    width: 1920,
    height: 1080,
  },
  {
    slug: "huhtamaki",
    client: "Huhtamaki",
    poster: "/videos/web/posters/hutamaki.jpg",
    video: "/videos/web/version-entrega-cliente-hutamaki-web.mp4",
    territory: "events",
    width: 1920,
    height: 1080,
  },
  {
    slug: "imperia-mas-events",
    client: "Imperia Más Events",
    poster: "/videos/web/posters/imperia.jpg",
    video: "/videos/web/aftemovie-imperia-mas-events-version-final-web.mp4",
    territory: "events",
    width: 1920,
    height: 1080,
  },
  {
    slug: "pivc",
    client: "PIVC",
    poster: "/videos/web/posters/pivc.jpg",
    video: "/videos/web/aftermovi-pivc-version-final-web.mp4",
    territory: "events",
    width: 1920,
    height: 1080,
  },
];

export function getWork(slug: string): WorkAsset | undefined {
  return workCatalog.find((work) => work.slug === slug);
}
