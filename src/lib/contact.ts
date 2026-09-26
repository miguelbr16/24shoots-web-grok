import type { Locale, NeedId } from "./types";

const needs: NeedId[] = ["brand", "campaigns", "events", "other"];

export interface ContactPayload {
  name: string;
  email: string;
  organization: string;
  phone: string;
  need: NeedId;
  message: string;
  locale: Locale;
}

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n\t]+/g, " ").trim().slice(0, max);
}

function isNeed(value: string): value is NeedId {
  return needs.includes(value as NeedId);
}

export function parseContact(
  body: unknown,
): { ok: true; value: ContactPayload } | { ok: false } {
  if (!body || typeof body !== "object") return { ok: false };
  const record = body as Record<string, unknown>;

  const name = clean(record.name, 80);
  const email = clean(record.email, 120);
  const organization = clean(record.organization, 120);
  const phone = clean(record.phone, 40);
  const need = clean(record.need, 20);
  const message = typeof record.message === "string" ? record.message.replace(/\r/g, "").trim() : "";
  const locale = record.locale === "en" ? "en" : "es";
  const privacy = record.privacy === "yes";

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneOk = phone.length === 0 || /^[+0-9 ().-]{6,40}$/.test(phone);

  if (
    !privacy ||
    name.length < 2 ||
    !emailOk ||
    !isNeed(need) ||
    message.length < 10 ||
    message.length > 4000 ||
    !phoneOk
  ) {
    return { ok: false };
  }

  return {
    ok: true,
    value: { name, email, organization, phone, need, message, locale },
  };
}

export function contactText(
  value: ContactPayload,
  needLabel: string,
): { subject: string; text: string } {
  const subject = value.organization
    ? `Proyecto 24SHOOTS — ${value.organization}`
    : `Proyecto 24SHOOTS — ${value.name}`;
  const lines = [
    value.locale === "es" ? "Nuevo proyecto desde la web." : "New project from the website.",
    "",
    `${value.locale === "es" ? "Nombre" : "Name"}: ${value.name}`,
    `Email: ${value.email}`,
    `${value.locale === "es" ? "Organización" : "Organisation"}: ${value.organization || "—"}`,
    `${value.locale === "es" ? "Teléfono" : "Phone"}: ${value.phone || "—"}`,
    `${value.locale === "es" ? "Encargo" : "Commission"}: ${needLabel}`,
    "",
    value.message,
  ];
  return { subject, text: lines.join("\n") };
}

export function isHoneypotFilled(body: unknown): boolean {
  if (!body || typeof body !== "object") return false;
  const website = (body as Record<string, unknown>).website;
  return typeof website === "string" && website.trim().length > 0;
}
