import { notFound } from "next/navigation";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDictionary } from "@/lib/content";
import { isValidLocale, locales } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const copy = getDictionary(locale);

  return (
    <>
      <a className="skip-link" href="#contenido">
        {copy.skip}
      </a>
      <Header locale={locale} labels={copy.nav} />
      <main id="contenido">{children}</main>
      <Footer locale={locale} />
      <CookieBanner
        locale={locale}
        message={copy.cookies.message}
        accept={copy.cookies.accept}
        reject={copy.cookies.reject}
        policy={copy.cookies.policy}
      />
      <AnalyticsScripts />
    </>
  );
}
