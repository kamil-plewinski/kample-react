import OfferSectionItem from "./OfferSectionItem";
import SpeedIcon from "../../icons/SpeedIcon";
import MobileCheckIcon from "../../icons/MobileCheckIcon";
import ShieldCheckIcon from "../../icons/ShieldCheckIcon";
import TrendingUpIcon from "../../icons/TrendingUpIcon";
import FileIcon from "../../icons/FileIcon";
import WorldWwwIcon from "../../icons/WorldWwwIcon";

export default function OfferSection() {
  return (
    <section id="offer" className="py-[5em] bg-custom-light">
      <div className="wrapper">
        <h2 className="title pb-[1em] px-[.5em] text-left text-3xl font-semibold text-custom-darkBlue uppercase">
          Co wyróżnia moje strony?
        </h2>
        <p className="my-[2em] px-[1em] max-w-187.5 text-left text-lg">
          Chcesz aby twoja firma była widoczna w sieci ? Oferuję szeroki zakres
          usług związanych z
          <strong className="text-custom-darkBlue">
            {" "}
            tworzeniem i programowaniem stron internetowych
          </strong>
          . Do programowania stron internetowych wykorzystuję najnowsze
          technologie, Dzięki temu moje strony są
          <b className="text-custom-darkBlue">
            {" "}
            nowoczesne, funkcjonalne i bezpieczne
          </b>
          .
        </p>
        <div className="mx-[1em] mt-[6em] mb-[3em] flex flex-col gap-20 justify-center items-center lg:flex-row lg:flex-wrap lg:items-start lg:gap-32">
          <OfferSectionItem
            offerTitle="Szybkość"
            offerText="Twoi urzytkownicy mogą szybko uzyskać dostęp do informacji, których potrzebują."
            offerIcon={<SpeedIcon />}
          />
          <OfferSectionItem
            offerTitle="Responsywność"
            offerText="Strony są dopasowane do ekranów wszystkich urządzeń. Wyglądają świetnie zarówno na ekranie komputera jak i telefonu."
            offerIcon={<MobileCheckIcon />}
          />
          <OfferSectionItem
            offerTitle="Bezpieczeństwo"
            offerText="Strony posiadają certyfikat bezpieczeństwa SSL."
            offerIcon={<ShieldCheckIcon />}
          />
          <OfferSectionItem
            offerTitle="Optymalizacja SEO"
            offerText="Optymalizacja strony pod kątem SEO zwiększa jej widoczność w wyszukiwarkach."
            offerIcon={<TrendingUpIcon />}
          />
          <OfferSectionItem
            offerTitle="Projekt Graficzny"
            offerText="Dla każdego klienta przygotowuję projekt graficzny strony internetowej."
            offerIcon={<FileIcon />}
          />
          <OfferSectionItem
            offerTitle="Hosting i domena"
            offerText="Pomagam przy wyborze odpowiedniej domeny oraz hostingu."
            offerIcon={<WorldWwwIcon />}
          />
        </div>
      </div>
    </section>
  );
}