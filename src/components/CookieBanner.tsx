"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { saveConsent } from "@/lib/cookie-consent";
import { getRoute } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

interface CookieBannerProps {
  locale: Locale;
  message: string;
  accept: string;
  reject: string;
  policy: string;
}

export function CookieBanner({
  locale,
  message,
  accept,
  reject,
  policy,
}: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function choose(value: "all" | "necessary") {
    saveConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie" role="dialog" aria-label={policy}>
      <p>
        {message}{" "}
        <Link href={getRoute(locale, "cookies")}>{policy}</Link>.
      </p>
      <div className="cookie-actions">
        <button type="button" onClick={() => choose("all")}>
          {accept}
        </button>
        <button type="button" onClick={() => choose("necessary")}>
          {reject}
        </button>
      </div>
    </div>
  );
}
