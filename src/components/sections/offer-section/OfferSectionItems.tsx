import SpeedIcon from "../../icons/SpeedIcon";
import MobileCheckIcon from "../../icons/MobileCheckIcon";
import ShieldCheckIcon from "../../icons/ShieldCheckIcon";
import TrendingUpIcon from "../../icons/TrendingUpIcon";
import FileIcon from "../../icons/FileIcon";
import WorldWwwIcon from "../../icons/WorldWwwIcon";

interface OfferSectionItem {
  offerTitle: string;
  offerIcon: React.ReactNode;
  offerText: string;
}

export default function OfferSectionItems() {
  const items: OfferSectionItem[] = [
    {
      offerTitle: "Szybkość",
      offerIcon: <SpeedIcon />,
      offerText:
        "Twoi użytkownicy mogą szybko uzyskać dostęp do informacji, których potrzebują.",
    },
    {
      offerTitle: "Responsywność",
      offerIcon: <MobileCheckIcon />,
      offerText:
        "Strony są dopasowane do ekranów wszystkich urządzeń. Wyglądają świetnie zarówno na ekranie komputera jak i telefonu.",
    },
    {
      offerTitle: "Bezpieczeństwo",
      offerIcon: <ShieldCheckIcon />,
      offerText: "Strony posiadają certyfikat bezpieczeństwa SSL.",
    },
    {
      offerTitle: "Optymalizacja SEO",
      offerIcon: <TrendingUpIcon />,
      offerText:
        "Optymalizacja strony pod kątem SEO zwiększa jej widoczność w wyszukiwarkach.",
    },
    {
      offerTitle: "Projekt Graficzny",
      offerIcon: <FileIcon />,
      offerText:
        "Dla każdego klienta przygotowuję projekt graficzny strony internetowej.",
    },
    {
      offerTitle: "Hosting i domena",
      offerIcon: <WorldWwwIcon />,
      offerText: "Pomagam przy wyborze odpowiedniej domeny oraz hostingu.",
    },
  ];

  const renderedItems = items.map((item) => {
    return (
      <div
        key={item.offerTitle}
        className="mb-[1em] max-w-[320px] bg-transparent"
      >
        <div className="flex items-center">
          <div className="text-custom-darkBlue">{item.offerIcon}</div>
          <p className="ml-[1em] text-xl font-semibold">{item.offerTitle}</p>
        </div>
        <p className="mt-[1em] text-lg">{item.offerText}</p>
      </div>
    );
  });

  return <>{renderedItems}</>;
}
