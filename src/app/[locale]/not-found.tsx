import Link from "next/link";
import { headers } from "next/headers";
import { getDictionary } from "@/lib/content";
import { getRoute } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export default async function NotFound() {
  const headerStore = await headers();
  const locale: Locale = headerStore.get("x-locale") === "en" ? "en" : "es";
  const copy = getDictionary(locale);

  return (
    <div className="not-found">
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
