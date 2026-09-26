import Link from "next/link";
import { notFound } from "next/navigation";
import { getWork, workCatalog } from "@/content/works";
import { JsonLd } from "@/components/JsonLd";
import { getDictionary, getWorkCopy } from "@/lib/content";
import { getRoute, locales } from "@/lib/i18n";
import { readLocale } from "@/lib/locale";
import { breadcrumbJsonLd, buildMetadata, videoJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    workCatalog.map((work) => ({ locale, slug: work.slug })),
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const locale = await readLocale(params);
  const work = getWork(slug);
  const piece = getWorkCopy(locale, slug);
  if (!work || !piece) return {};
  return buildMetadata({
    locale,
    route: "work",
    suffix: `/${work.slug}`,
    title: `${work.client} — 24SHOOTS`,
    description: piece.summary,
    image: work.poster,
    imageAlt: piece.alt,
  });
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const locale = await readLocale(params);
  const work = getWork(slug);
  const piece = getWorkCopy(locale, slug);
  if (!work || !piece) notFound();

  const copy = getDictionary(locale);
  const workHref = getRoute(locale, "work");
  const caseHref = getRoute(locale, "work", `/${work.slug}`);

  return (
    <article className="page case">
      <JsonLd
        data={videoJsonLd({
          name: work.client,
          description: piece.summary,
          poster: work.poster,
          video: work.video,
          locale,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "24SHOOTS", path: getRoute(locale, "home") },
          { name: copy.casePage.back, path: workHref },
          { name: work.client, path: caseHref },
        ])}
      />
      <p className="kicker">
        <Link href={workHref}>{copy.casePage.back}</Link>
      </p>
      <h1>{work.client}</h1>
      <p>{piece.kind}</p>
      <div className="player">
        <video
          controls
          playsInline
          preload="none"
          poster={work.poster}
          aria-label={work.client}
        >
          <source src={work.video} type="video/mp4" />
        </video>
      </div>
      <div className="measure">
        <p>{piece.description}</p>
        <div className="case-links">
          <Link className="cut" href={getRoute(locale, "contact")}>
            {copy.nav.cta}
          </Link>
          <Link className="cut-quiet" href={`${getRoute(locale, "services")}#events`}>
            {copy.casePage.related}
          </Link>
        </div>
      </div>
    </article>
  );
}
