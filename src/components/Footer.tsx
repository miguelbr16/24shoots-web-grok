import Link from "next/link";
import { fill, formatPhone, getDictionary, getSiteConfig, instagramHandle } from "@/lib/content";
import { getRoute } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import { Wordmark } from "./Wordmark";

export function Footer({ locale }: { locale: Locale }) {
  const site = getSiteConfig();
  const copy = getDictionary(locale);
  const year = 2026;
  const handle = instagramHandle(site.contact.instagram);

  return (
    <footer className="site-footer">
      <div>
        <Wordmark />
        <p className="place">{site.contact.location[locale]}</p>
        <p>
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
        </p>
        <p>
          <a href={`tel:${site.contact.phone}`}>{formatPhone(site.contact.phone)}</a>
        </p>
      </div>
      <ul>
        <li>
          <Link href={getRoute(locale, "work")}>{copy.footer.work}</Link>
        </li>
        <li>
          <Link href={getRoute(locale, "packs")}>{copy.footer.packs}</Link>
        </li>
        <li>
          <Link href={getRoute(locale, "services")}>{copy.footer.services}</Link>
        </li>
        <li>
          <Link href={getRoute(locale, "contact")}>{copy.footer.contact}</Link>
        </li>
        <li>
          <a href={site.contact.instagram} rel="noopener noreferrer">
            @{handle}
          </a>
        </li>
      </ul>
      <div>
        <ul>
          <li>
            <Link href={getRoute(locale, "legal")}>{copy.footer.legal}</Link>
          </li>
          <li>
            <Link href={getRoute(locale, "privacy")}>{copy.footer.privacy}</Link>
          </li>
          <li>
            <Link href={getRoute(locale, "cookies")}>{copy.footer.cookies}</Link>
          </li>
        </ul>
        <p>
          © {year} {site.name}. {fill(copy.footer.rights, site.contact.email)}
        </p>
      </div>
    </footer>
  );
}
