export type Locale = "es" | "en";

export type RouteKey =
  | "home"
  | "work"
  | "packs"
  | "services"
  | "studio"
  | "contact"
  | "legal"
  | "privacy"
  | "cookies";

export type PackId = "completo" | "audiovisual" | "community";

export type TerritoryId = "brand" | "campaigns" | "events";

export type NeedId = TerritoryId | "other";

export type LegalKey = "notice" | "privacy" | "cookies";

export interface SiteConfig {
  name: string;
  url: string;
  description: Record<Locale, string>;
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    instagram: string;
    location: Record<Locale, string>;
  };
  legal: {
    companyName: string;
    cif: string;
    address: string;
    lastUpdated: Record<Locale, string>;
  };
  heroPoster: string;
}

export interface WorkAsset {
  slug: string;
  client: string;
  poster: string;
  video: string;
  territory: TerritoryId;
  width: number;
  height: number;
}

export interface WorkCopy {
  kind: string;
  summary: string;
  description: string;
  alt: string;
}

export interface TerritoryCopy {
  id: TerritoryId;
  title: string;
  line: string;
  situation: string;
  approach: string;
  delivery: string;
}

export interface LegalDoc {
  title: string;
  description: string;
  paragraphs: string[];
}

export interface Dictionary {
  meta: { title: string; description: string };
  skip: string;
  nav: {
    work: string;
    packs: string;
    services: string;
    studio: string;
    contact: string;
    cta: string;
    open: string;
    close: string;
  };
  hero: {
    line: string;
    emphasis: string;
    territories: string;
    place: string;
    primary: string;
    secondary: string;
    imageAlt: string;
  };
  workSection: { label: string };
  labels: { situation: string; approach: string; delivery: string };
  territoriesIntro: { kicker: string; title: string; capability: string };
  territories: TerritoryCopy[];
  piece: { title: string; emphasis: string; body: string; steps: string[] };
  close: { title: string; emphasis: string; body: string; cta: string };
  packsPage: {
    title: string;
    description: string;
    intro: string;
    quote: string;
    stillCaption: string;
    cta: string;
    items: { id: PackId; title: string; lines: string[]; note: string }[];
  };
  workPage: {
    title: string;
    description: string;
    intro: string;
    view: string;
  };
  works: Record<string, WorkCopy>;
  casePage: { back: string; related: string };
  servicesPage: { title: string; description: string; intro: string; workLink: string };
  studioPage: {
    title: string;
    description: string;
    paragraphs: string[];
    workLink: string;
    contactLink: string;
  };
  contactPage: {
    title: string;
    description: string;
    intro: string;
    whatsapp: string;
    whatsappText: string;
    instagram: string;
    form: {
      legend: string;
      name: string;
      email: string;
      organization: string;
      phone: string;
      need: string;
      needPlaceholder: string;
      needs: Record<NeedId, string>;
      message: string;
      privacyBefore: string;
      privacyLink: string;
      submit: string;
      sending: string;
      success: string;
      fallback: string;
      invalid: string;
      limited: string;
      error: string;
      mailSubject: string;
    };
  };
  footer: {
    work: string;
    packs: string;
    services: string;
    contact: string;
    legal: string;
    privacy: string;
    cookies: string;
    rights: string;
  };
  cookies: { message: string; accept: string; reject: string; policy: string };
  legal: Record<LegalKey, LegalDoc>;
  notFound: { title: string; body: string; home: string };
}
