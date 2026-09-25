import Link from "next/link";
import { getRoute } from "@/lib/i18n";
import type { Dictionary, Locale, TerritoryId } from "@/lib/types";

function anchor(id: TerritoryId): string {
  switch (id) {
    case "brand":
      return "brand";
    case "campaigns":
      return "campaigns";
    case "events":
      return "events";
    default: {
      const neverId: never = id;
      return neverId;
    }
  }
}

export function Territories({
  locale,
  copy,
  linked = false,
}: {
  locale: Locale;
  copy: Dictionary;
  linked?: boolean;
}) {
  const services = getRoute(locale, "services");

  return (
    <ol className="territories">
      {copy.territories.map((territory) => (
        <li className="territory" id={anchor(territory.id)} key={territory.id}>
          <h3>
            {linked ? (
              territory.title
            ) : (
              <Link href={`${services}#${anchor(territory.id)}`}>{territory.title}</Link>
            )}
          </h3>
          <div className="territory-copy">
            <p>
              <span>{copy.labels.situation}</span>
              {territory.situation}
            </p>
            <p>
              <span>{copy.labels.approach}</span>
              {territory.approach}
            </p>
            <p>
              <span>{copy.labels.delivery}</span>
              {territory.delivery}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
