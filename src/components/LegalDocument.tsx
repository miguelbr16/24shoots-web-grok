import { fill, getDictionary, getSiteConfig } from "@/lib/content";
import { readLocale } from "@/lib/locale";
import { buildMetadata } from "@/lib/seo";
import type { LegalKey, RouteKey } from "@/lib/types";

const routeByDoc: Record<LegalKey, RouteKey> = {
  notice: "legal",
  privacy: "privacy",
  cookies: "cookies",
};

export async function legalMetadata(params: Promise<{ locale: string }>, doc: LegalKey) {
  const locale = await readLocale(params);
  const copy = getDictionary(locale).legal[doc];
  return buildMetadata({
    locale,
    route: routeByDoc[doc],
    title: `${copy.title} — 24SHOOTS`,
    description: copy.description,
  });
}

export async function LegalDocument({
  params,
  doc,
}: {
  params: Promise<{ locale: string }>;
  doc: LegalKey;
}) {
  const locale = await readLocale(params);
  const site = getSiteConfig();
  const copy = getDictionary(locale).legal[doc];

  return (
    <article className="page page-paper legal">
      <h1>{copy.title}</h1>
      <div className="measure">
        {copy.paragraphs.map((paragraph) => (
          <p key={paragraph}>{fill(paragraph, site.contact.email)}</p>
        ))}
      </div>
    </article>
  );
}
