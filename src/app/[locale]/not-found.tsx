import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { DocumentTitle } from "@/components/DocumentTitle";
import { getDictionary } from "@/lib/content";
import { getRoute } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

function localeFromHeaders(headerStore: Headers): Locale {
  return headerStore.get("x-locale") === "en" ? "en" : "es";
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = localeFromHeaders(await headers());
  const copy = getDictionary(locale);
  return {
    title: { absolute: `${copy.notFound.title} — 24SHOOTS` },
  };
}

export default async function NotFound() {
  const locale = localeFromHeaders(await headers());
  const copy = getDictionary(locale);
  const title = `${copy.notFound.title} — 24SHOOTS`;

  return (
    <div className="not-found">
      <DocumentTitle title={title} />
      <h1>{copy.notFound.title}</h1>
      <p>{copy.notFound.body}</p>
      <p>
        <Link className="text-action" href={getRoute(locale, "home")}>
          {copy.notFound.home}
        </Link>
      </p>
    </div>
  );
}
