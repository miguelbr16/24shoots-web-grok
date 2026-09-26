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
  const packsHref = getRoute(locale, "packs");

  return (
    <>
      <JsonLd data={organizationJsonLd(locale)} />
      <section className="hero">
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
            <Link className="text-action" href={getRoute(locale, "contact")}>
              {copy.hero.primary}
            </Link>
            <Link className="text-action" href={getRoute(locale, "work")}>
              {copy.hero.secondary}
            </Link>
          </div>
        </div>
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

      <section className="sheet index-sheet" aria-labelledby="encargos-title">
        <p className="kicker">{copy.territoriesIntro.kicker}</p>
        <h2 id="encargos-title">{copy.territoriesIntro.title}</h2>
        <ol className="index-list">
          {copy.territories.map((territory, index) => (
            <li key={territory.id}>
              <Link href={`${getRoute(locale, "services")}#${territory.id}`}>
                <span className="index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{territory.title}</h3>
              </Link>
              <p>{territory.delivery}</p>
            </li>
          ))}
        </ol>
        <p className="capability">{copy.territoriesIntro.capability}</p>
      </section>

      <section className="pack-band" aria-labelledby="packs-title">
        <p className="kicker">{copy.homePacks.kicker}</p>
        <h2 id="packs-title">{copy.homePacks.line}</h2>
        <ol className="pack-names">
          {copy.packsPage.items.map((item) => (
            <li key={item.id}>
              <Link href={`${packsHref}#${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ol>
        <p>{copy.homePacks.note}</p>
        <Link className="text-action" href={packsHref}>
          {copy.nav.packs}
        </Link>
      </section>

      <section className="studio-band" aria-labelledby="studio-title">
        <div className="studio-grid">
          <h2 className="studio-lead" id="studio-title">
            {copy.studioBand.lead}
          </h2>
          <div>
            <p>{copy.studioBand.body}</p>
            <p className="studio-sequence">{copy.studioBand.sequence}</p>
            <p>
              <Link className="text-action" href={getRoute(locale, "studio")}>
                {copy.nav.studio}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="sheet close-band" aria-labelledby="close-title">
        <h2 id="close-title">
          {copy.close.title} <em>{copy.close.emphasis}</em>
        </h2>
        <p>{copy.close.body}</p>
        <Link className="text-action" href={getRoute(locale, "contact")}>
          {copy.close.cta}
        </Link>
      </section>
    </>
  );
}
