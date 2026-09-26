import type { ContactPayload } from "./contact";
import type { Locale } from "./types";

export function buildProjectMailto({
  email,
  locale,
  subject,
  fields,
}: {
  email: string;
  locale: Locale;
  subject: string;
  fields: Partial<ContactPayload> & { needLabel?: string };
}): string {
  const lines =
    locale === "es"
      ? [
          "Hola,",
          "",
          "Me gustaría hablar de un proyecto.",
          "",
          `Nombre: ${fields.name ?? ""}`,
          `Organización: ${fields.organization ?? ""}`,
          `Teléfono: ${fields.phone ?? ""}`,
          `Encargo: ${fields.needLabel ?? ""}`,
          "",
          fields.message ?? "",
        ]
      : [
          "Hello,",
          "",
          "I would like to talk about a project.",
          "",
          `Name: ${fields.name ?? ""}`,
          `Organisation: ${fields.organization ?? ""}`,
          `Phone: ${fields.phone ?? ""}`,
          `Commission: ${fields.needLabel ?? ""}`,
          "",
          fields.message ?? "",
        ];

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}
