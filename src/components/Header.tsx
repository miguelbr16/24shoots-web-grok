"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { getRoute, swapLocalePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/types";
import { Wordmark } from "./Wordmark";

type NavLabels = Dictionary["nav"];

export function Header({ locale, labels }: { locale: Locale; labels: NavLabels }) {
  const pathname = usePathname() || `/${locale}`;
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const menuTitle = useId();
  const other: Locale = locale === "es" ? "en" : "es";
  const navLabel = locale === "es" ? "Secciones" : "Sections";

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [open]);

  const items = [
    { href: getRoute(locale, "work"), label: labels.work },
    { href: getRoute(locale, "studio"), label: labels.studio },
    { href: getRoute(locale, "contact"), label: labels.contact },
  ] as const;

  function current(href: string): "page" | undefined {
    return pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined;
  }

  return (
    <>
      <header className={`site-header${solid || open || pathname !== `/${locale}` ? " is-solid" : ""}`}>
        <Link href={getRoute(locale, "home")} aria-label="24SHOOTS">
          <Wordmark />
        </Link>
        <nav className="nav-desktop" aria-label={navLabel}>
          {items.map((item) => (
            <Link key={item.href} href={item.href} aria-current={current(item.href)}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-cta" href={getRoute(locale, "contact")}>
            {labels.cta}
          </Link>
          <Link
            className="locale-switch"
            href={swapLocalePath(pathname, other)}
            hrefLang={other}
            lang={other}
          >
            {other.toUpperCase()}
          </Link>
        </nav>
        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen(true)}
        >
          {labels.open}
        </button>
      </header>
      {open ? (
        <div className="menu" id={menuId} role="dialog" aria-modal="true" aria-labelledby={menuTitle}>
          <h2 id={menuTitle} className="sr-only">
            {labels.open}
          </h2>
          <div className="menu-bar">
            <Link href={getRoute(locale, "home")} aria-label="24SHOOTS">
              <Wordmark />
            </Link>
            <button ref={closeRef} type="button" onClick={() => setOpen(false)}>
              {labels.close}
            </button>
          </div>
          <nav className="menu-links" aria-label={navLabel}>
            {items.map((item) => (
              <Link key={item.href} href={item.href} aria-current={current(item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div>
            <Link className="menu-cta" href={getRoute(locale, "contact")}>
              {labels.cta}
            </Link>
            <div>
              <Link href={swapLocalePath(pathname, other)} hrefLang={other} lang={other}>
                {other === "en" ? "English" : "Español"}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
