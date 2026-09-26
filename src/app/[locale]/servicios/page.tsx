import Link from "next/link";
import { Territories } from "@/components/Territories";
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
    route: "services",
    title: `${copy.servicesPage.title} — 24SHOOTS`,
    description: copy.servicesPage.description,
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const copy = getDictionary(locale);

  return (
    <div className="page page-paper encargos">
      <header className="page-intro">
        <p className="kicker">{copy.territoriesIntro.kicker}</p>
        <h1>{copy.servicesPage.title}</h1>
        <p>{copy.servicesPage.intro}</p>
      </header>
      <Territories locale={locale} copy={copy} linked />
      <p className="capability">{copy.territoriesIntro.capability}</p>
      <div className="case-links">
        <Link className="cut" href={getRoute(locale, "contact")}>
          {copy.nav.cta}
        </Link>
        <Link className="cut-quiet" href={getRoute(locale, "work")}>
          {copy.servicesPage.workLink}
        </Link>
      </div>
    </div>
  );
}
