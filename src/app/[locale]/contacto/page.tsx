import { ContactForm } from "@/components/ContactForm";
import { fill, formatPhone, getDictionary, getSiteConfig, instagramHandle, whatsappHref } from "@/lib/content";
import { readLocale } from "@/lib/locale";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const copy = getDictionary(locale);
  return buildMetadata({
    locale,
    route: "contact",
    title: `${copy.contactPage.title} — 24SHOOTS`,
    description: copy.contactPage.description,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await readLocale(params);
  const copy = getDictionary(locale);
  const site = getSiteConfig();
  const handle = instagramHandle(site.contact.instagram);

  return (
    <div className="page page-paper">
      <JsonLd data={organizationJsonLd(locale)} />
      <div className="contact-grid">
        <header className="contact-aside">
          <h1>{copy.contactPage.title}</h1>
          <p>{fill(copy.contactPage.intro, site.contact.email)}</p>
          <p>
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </p>
          <p>
            <a href={`tel:${site.contact.phone}`}>{formatPhone(site.contact.phone)}</a>
          </p>
          <p>
            <a
              href={whatsappHref(site.contact.whatsapp, copy.contactPage.whatsappText)}
              rel="noopener noreferrer"
            >
              {copy.contactPage.whatsapp}
            </a>
          </p>
          <p>
            <a href={site.contact.instagram} rel="noopener noreferrer">
              {copy.contactPage.instagram} @{handle}
            </a>
          </p>
          <p>{site.contact.location[locale]}</p>
        </header>
        <ContactForm locale={locale} labels={copy.contactPage.form} email={site.contact.email} />
      </div>
    </div>
  );
}
