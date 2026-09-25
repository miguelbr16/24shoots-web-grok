import { NextResponse } from "next/server";
import { contactText, isHoneypotFilled, parseContact } from "@/lib/contact";
import { getDictionary, getSiteConfig } from "@/lib/content";

const hits = new Map<string, { count: number; reset: number }>();

function tooMany(ip: string): boolean {
  const now = Date.now();
  if (hits.size > 500) {
    for (const [key, value] of hits) {
      if (value.reset < now) hits.delete(key);
    }
  }
  const current = hits.get(ip);
  if (!current || current.reset < now) {
    hits.set(ip, { count: 1, reset: now + 60 * 60 * 1000 });
    return false;
  }
  current.count += 1;
  return current.count > 5;
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  const site = getSiteConfig();

  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 20_000) {
      return NextResponse.json({ ok: false, code: "invalid" }, { status: 400 });
    }
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, code: "invalid" }, { status: 400 });
  }

  if (isHoneypotFilled(body)) {
    return NextResponse.json({ ok: true, delivered: true, code: "accepted" });
  }

  if (tooMany(clientIp(request))) {
    return NextResponse.json({ ok: false, code: "limited" }, { status: 429 });
  }

  const parsed = parseContact(body);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, code: "invalid" }, { status: 400 });
  }

  const copy = getDictionary(parsed.value.locale);
  const needLabel = copy.contactPage.form.needs[parsed.value.need];
  const { subject, text } = contactText(parsed.value, needLabel);
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;

  if (!key || !from) {
    return NextResponse.json({ ok: false, code: "not_configured" }, { status: 503 });
  }

  try {
    const sent = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [site.contact.email],
        reply_to: parsed.value.email,
        subject,
        text,
      }),
    });

    if (!sent.ok) {
      console.error("[24SHOOTS contact] delivery failed", sent.status);
      return NextResponse.json({ ok: false, code: "delivery_failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("[24SHOOTS contact] delivery error", error instanceof Error ? error.name : "error");
    return NextResponse.json({ ok: false, code: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true, code: "accepted" });
}
