import Image from "next/image";
import Link from "next/link";
import { heroImage, workCatalog } from "@/content/works";
import { JsonLd } from "@/components/JsonLd";
import { getDictionary, getWorkCopy } from "@/lib/content";
import { getRoute } from "@/lib/i18n";
import { readLocale } from "@/lib/locale";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const copy = getDictionary(locale);
  return buildMetadata({
    locale,
    route: "home",
    title: copy.meta.title,
    description: copy.meta.description,
    imageAlt: copy.hero.imageAlt,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const copy = getDictionary(locale);

  return (
    <>
      <JsonLd data={organizationJsonLd(locale)} />
      <section className="hero">
        <div className="hero-media">
          <Image
            src={heroImage.src}
            alt={copy.hero.imageAlt}
            width={heroImage.width}
            height={heroImage.height}
            priority
            sizes="(min-width: 860px) 62vw, 100vw"
          />
        </div>
        <div className="hero-copy">
          <h1 className="brand-line">
            {copy.hero.line} <em>{copy.hero.emphasis}</em>
          </h1>
          <p className="hero-meta">
            {copy.hero.territories}
            <br />
            {copy.hero.place}
          </p>
          <div className="hero-actions">
            <Link className="cut" href={getRoute(locale, "contact")}>
              {copy.hero.primary}
            </Link>
            <Link className="cut-quiet" href={getRoute(locale, "work")}>
              {copy.hero.secondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="frames" aria-label={copy.workSection.label}>
        {workCatalog.map((work, index) => {
          const piece = getWorkCopy(locale, work.slug);
          if (!piece) return null;
          const split =
            index === 1 ? " is-split" : index === 2 ? " is-inset" : index === 3 ? " is-split is-left" : "";
          return (
            <Link
              className={`frame${split}`}
              href={getRoute(locale, "work", `/${work.slug}`)}
              key={work.slug}
            >
              <Image
                src={work.poster}
                alt={piece.alt}
                width={work.width}
                height={work.height}
                sizes="(min-width: 860px) 70vw, 100vw"
              />
              <span className="frame-caption">
                <span className="index">{String(index + 1).padStart(2, "0")}</span>
                <h2>{work.client}</h2>
                <p>{piece.kind}</p>
              </span>
            </Link>
          );
        })}
      </section>

      <section className="sheet dossier" aria-labelledby="continue-title">
        <div className="continue">
          <h2 id="continue-title">
            {copy.piece.title} <em>{copy.piece.emphasis}</em>
          </h2>
          <ol className="continue-steps">
            {copy.piece.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p>{copy.piece.body}</p>
        </div>
        <ol className="index-list" aria-label={copy.territoriesIntro.title}>
          {copy.territories.map((territory, index) => (
            <li key={territory.id}>
              <Link href={`${getRoute(locale, "services")}#${territory.id}`}>
                <span className="index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{territory.title}</h3>
              </Link>
              <p>{territory.line}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="close-band" aria-labelledby="close-title">
        <h2 id="close-title">
          {copy.close.title} <em>{copy.close.emphasis}</em>
        </h2>
        <p>{copy.close.body}</p>
        <Link className="cut" href={getRoute(locale, "contact")}>
          {copy.close.cta}
        </Link>
      </section>
    </>
  );
}
