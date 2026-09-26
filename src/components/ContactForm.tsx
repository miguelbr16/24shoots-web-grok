"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { buildProjectMailto } from "@/lib/mailto";
import { getRoute } from "@/lib/i18n";
import type { Dictionary, Locale, NeedId } from "@/lib/types";

type FormCopy = Dictionary["contactPage"]["form"];
type Status = "idle" | "sending" | "sent" | "fallback" | "invalid" | "limited" | "error";

const needOrder: NeedId[] = ["brand", "campaigns", "events", "other"];

function messageFor(status: Status, labels: FormCopy, email: string): string | null {
  switch (status) {
    case "idle":
    case "sending":
      return null;
    case "sent":
      return labels.success.replaceAll("{{email}}", email);
    case "fallback":
      return labels.fallback.replaceAll("{{email}}", email);
    case "invalid":
      return labels.invalid;
    case "limited":
      return labels.limited.replaceAll("{{email}}", email);
    case "error":
      return labels.error.replaceAll("{{email}}", email);
    default: {
      const neverStatus: never = status;
      return neverStatus;
    }
  }
}

export function ContactForm({
  locale,
  labels,
  email,
}: {
  locale: Locale;
  labels: FormCopy;
  email: string;
}) {
  const baseId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const note = messageFor(status, labels, email);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const needLabel = labels.needs[(data.need as NeedId) || "other"] ?? "";
    const href = buildProjectMailto({
      email,
      locale,
      subject: labels.mailSubject,
      fields: {
        name: String(data.name ?? ""),
        organization: String(data.organization ?? ""),
        phone: String(data.phone ?? ""),
        message: String(data.message ?? ""),
        needLabel,
      },
    });

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      const payload = (await response.json().catch(() => ({}))) as { delivered?: boolean; code?: string };

      if (response.ok && payload.delivered) {
        setStatus("sent");
        form.reset();
        return;
      }

      if (response.status === 400 || payload.code === "invalid") {
        setStatus("invalid");
        return;
      }

      if (response.status === 429 || payload.code === "limited") {
        setStatus("limited");
        return;
      }

      setStatus("fallback");
      window.location.href = href;
    } catch {
      setStatus("fallback");
      window.location.href = href;
    }
  }

  if (status === "sent") {
    return (
      <p className="form-status" role="status">
        {note}
      </p>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <fieldset>
        <legend className="sr-only">{labels.legend}</legend>
        <div className="field">
          <label htmlFor={`${baseId}-name`}>{labels.name}</label>
          <input id={`${baseId}-name`} name="name" autoComplete="name" required minLength={2} />
        </div>
        <div className="field">
          <label htmlFor={`${baseId}-email`}>{labels.email}</label>
          <input id={`${baseId}-email`} name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor={`${baseId}-organization`}>{labels.organization}</label>
          <input id={`${baseId}-organization`} name="organization" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor={`${baseId}-phone`}>{labels.phone}</label>
          <input id={`${baseId}-phone`} name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor={`${baseId}-need`}>{labels.need}</label>
          <select id={`${baseId}-need`} name="need" required defaultValue="">
            <option value="" disabled>
              {labels.needPlaceholder}
            </option>
            {needOrder.map((need) => (
              <option key={need} value={need}>
                {labels.needs[need]}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor={`${baseId}-message`}>{labels.message}</label>
          <textarea id={`${baseId}-message`} name="message" required minLength={10} rows={6} />
        </div>
        <label className="check">
          <input type="checkbox" name="privacy" value="yes" required />
          <span>
            {labels.privacyBefore}{" "}
            <Link href={getRoute(locale, "privacy")}>{labels.privacyLink}</Link>
          </span>
        </label>
        <div className="hp" aria-hidden="true">
          <label htmlFor={`${baseId}-website`}>Website</label>
          <input id={`${baseId}-website`} name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </fieldset>
      {note ? (
        <p className="form-status" role={status === "invalid" || status === "error" || status === "limited" ? "alert" : "status"}>
          {note}
        </p>
      ) : null}
      <button className="submit cut" type="submit" disabled={status === "sending"}>
        {status === "sending" ? labels.sending : labels.submit}
      </button>
    </form>
  );
}
