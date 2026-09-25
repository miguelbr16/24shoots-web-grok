import Image from "next/image";
import Link from "next/link";
import { workCatalog } from "@/content/works";
import { getDictionary, getWorkCopy } from "@/lib/content";
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
    route: "work",
    title: `${copy.workPage.title} — 24SHOOTS`,
    description: copy.workPage.description,
  });
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const copy = getDictionary(locale);

  return (
    <div className="page page-paper">
      <header className="page-intro">
        <h1>{copy.workPage.title}</h1>
        <p>{copy.workPage.intro}</p>
      </header>
      <div className="work-list">
        {workCatalog.map((work, index) => {
          const piece = getWorkCopy(locale, work.slug);
          if (!piece) return null;
          return (
            <Link className="work-row" href={getRoute(locale, "work", `/${work.slug}`)} key={work.slug}>
              <Image
                src={work.poster}
                alt={piece.alt}
                width={work.width}
                height={work.height}
                sizes="(min-width: 900px) 50vw, 100vw"
                priority={index === 0}
              />
              <span className="work-copy">
                <span className="index">{String(index + 1).padStart(2, "0")}</span>
                <h2>{work.client}</h2>
                <p>{piece.summary}</p>
                <span className="view">{copy.workPage.view}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
