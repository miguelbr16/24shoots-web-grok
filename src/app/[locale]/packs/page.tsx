import Image from "next/image";
import Link from "next/link";
import { heroImage } from "@/content/works";
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
    route: "packs",
    title: `${copy.packsPage.title} — 24SHOOTS`,
    description: copy.packsPage.description,
  });
}

export default async function PacksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const copy = getDictionary(locale);

  return (
    <div className="page packs-page">
      <header className="packs-open">
        <div>
          <h1>{copy.packsPage.title}</h1>
          <p>{copy.packsPage.intro}</p>
          <p className="pack-quote">{copy.packsPage.quote}</p>
        </div>
        <figure className="packs-still">
          <Image
            src={heroImage.src}
            alt={copy.hero.imageAlt}
            width={heroImage.width}
            height={heroImage.height}
            priority
            sizes="(min-width: 860px) 52vw, 100vw"
          />
          <figcaption>{copy.packsPage.stillCaption}</figcaption>
        </figure>
      </header>
      <div className="pack-list">
        {copy.packsPage.items.map((item, index) => (
          <article className="pack" id={item.id} key={item.id}>
            <h2>
              <span className="index">{String(index + 1).padStart(2, "0")}</span>
              {item.title}
            </h2>
            <ul>
              {item.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p>{item.note}</p>
          </article>
        ))}
      </div>
      <p className="packs-close">
        <Link className="cut" href={getRoute(locale, "contact")}>
          {copy.packsPage.cta}
        </Link>
      </p>
    </div>
  );
}
