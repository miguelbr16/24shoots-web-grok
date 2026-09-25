import { notFound } from "next/navigation";
import { isValidLocale } from "./i18n";
import type { Locale } from "./types";

export async function readLocale(params: Promise<{ locale: string }>): Promise<Locale> {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return locale;
}
