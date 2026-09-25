import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { internalSegment, isValidLocale, localizeSegment, defaultLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

const RETIRED_SLUGS = new Set([
  "eventos-corporativos",
  "contenido-marca",
  "documental-reportaje",
  "videoclip-musical",
  "bodas-celebraciones",
  "fiestas-aftermovies",
  "fallas-tradicion",
  "proyectos-personalizados",
  "campanas-pago",
  "produccion-aerea-dron",
  "pack-completo",
  "pack-audiovisual",
  "pack-community-management",
]);

const LEGACY_WORK: Record<string, string> = {
  "hutamaki-aftermovie": "huhtamaki",
  "premios-isabel-ferrer": "premios-isabel-ferrer",
  "imperia-mas-events": "imperia-mas-events",
  "pivc-aftermovie": "pivc",
};

function servicesPath(locale: Locale): string {
  return locale === "es" ? "/es/servicios" : "/en/services";
}

function studioPath(locale: Locale): string {
  return locale === "es" ? "/es/estudio" : "/en/studio";
}

function workPath(locale: Locale, slug?: string): string {
  const base = locale === "es" ? "/es/trabajo" : "/en/work";
  return slug ? `${base}/${slug}` : base;
}

function legacyPath(locale: Locale, rest: string[]): string | null {
  const first = rest[0];
  if (!first) return null;

  if (first === "portfolio") {
    const mapped = rest[1] ? LEGACY_WORK[rest[1]] : undefined;
    return workPath(locale, mapped);
  }

  if (first === "packs") return servicesPath(locale);

  if (first === "about" || first === "sobre-nosotros" || first === "nosotros") {
    return studioPath(locale);
  }

  if (
    rest[1] &&
    RETIRED_SLUGS.has(rest[1]) &&
    (first === "servicios" || first === "services")
  ) {
    return servicesPath(locale);
  }

  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  if (!maybeLocale || !isValidLocale(maybeLocale)) {
    const url = request.nextUrl.clone();
    const suffix = pathname === "/" ? "" : pathname;
    url.pathname = `/${defaultLocale}${suffix}`;
    return NextResponse.redirect(url, 308);
  }

  const locale = maybeLocale;
  const rest = segments.slice(1);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  const legacy = legacyPath(locale, rest);
  if (legacy && legacy !== `/${locale}${rest.length ? `/${rest.join("/")}` : ""}`) {
    const url = request.nextUrl.clone();
    url.pathname = legacy;
    return NextResponse.redirect(url, 301);
  }

  if (rest[0]) {
    const canonical = localizeSegment(rest[0], locale);
    if (canonical !== rest[0]) {
      const url = request.nextUrl.clone();
      const nextRest = [canonical, ...rest.slice(1)];
      url.pathname = `/${locale}/${nextRest.join("/")}`;
      return NextResponse.redirect(url, 301);
    }

    const internal = internalSegment(rest[0]);
    if (locale === "en" && internal !== rest[0]) {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}/${[internal, ...rest.slice(1)].join("/")}`;
      return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
    }
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
