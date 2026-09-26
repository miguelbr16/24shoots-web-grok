import Link from "next/link";
import { getDictionary } from "@/lib/content";
import { getRoute } from "@/lib/i18n";
import { readLocale } from "@/lib/locale";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const copy = getDictionary(locale);
  return buildMetadata({
    locale,
    route: "studio",
    title: `${copy.studioPage.title} — 24SHOOTS`,
    description: copy.studioPage.description,
  });
}

export default async function StudioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const copy = getDictionary(locale);

  return (
    <div className="page page-paper studio-page">
      <header className="page-intro">
        <h1>{copy.studioPage.title}</h1>
      </header>
      <div className="studio-copy">
        {copy.studioPage.paragraphs.map((paragraph, index) => (
          <p className={index === 0 ? "studio-lead" : undefined} key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className="case-links">
        <Link className="cut" href={getRoute(locale, "contact")}>
          {copy.studioPage.contactLink}
        </Link>
        <Link className="cut-quiet" href={getRoute(locale, "work")}>
          {copy.studioPage.workLink}
        </Link>
      </div>
    </div>
  );
}
