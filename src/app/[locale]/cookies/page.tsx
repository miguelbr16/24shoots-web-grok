import { LegalDocument, legalMetadata } from "@/components/LegalDocument";

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return legalMetadata(params, "cookies");
}

export default function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <LegalDocument params={params} doc="cookies" />;
}
