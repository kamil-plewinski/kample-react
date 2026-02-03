import CtaButton from "../../CtaButton";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

type CardVariant = "small" | "big";

interface Card {
  cardTitle: string;
  cardSubTitle: React.ReactNode;
  cardPrice: string;
  cardInfo: React.ReactNode;
  variant: CardVariant;
}

export default function PackCards() {
  const cards: Card[] = [
    {
      cardTitle: "Start",
      cardSubTitle: (
        <>
          Strona One Page <br />
          (WordPress)
        </>
      ),
      cardPrice: "od 700zł",
      cardInfo: (
        <>
          Ilość podstron: 1 (One Page) <br />
          Responsywny design
          <br />
          Formularz kontaktowy
          <br />
          Google Maps
          <br />
          Galeria
          <br />
          Podstawowa optymalizacja SEO
          <br />
          Certyfikat SSL
        </>
      ),
      variant: "small",
    },
    {
      cardTitle: "Standard",
      cardSubTitle: (
        <>
          Strona do 5 podstron <br />
          (WordPress)
        </>
      ),
      cardPrice: "od 1200zł",
      cardInfo: (
        <>
          Ilość Podstron: do 5<br />
          Responsywny design
          <br />
          Formularz kontaktowy
          <br />
          Google Maps
          <br />
          Galeria
          <br />
          Podstawowa optymalizacja SEO
          <br />
          Certyfikat SSL <br />
          Intergracja z social mediami <br />
          Wizytówka Google
        </>
      ),
      variant: "big",
    },
    {
      cardTitle: "Premium",
      cardSubTitle: (
        <>
          Strona do 10 podstron lub
          <br />
          programowana “od zera”
        </>
      ),
      cardPrice: "od 1700zł",
      cardInfo: (
        <>
          WordPress lub HTML/CSS/JS <br />
          WordPress do 10 Podstron
          <br />
          Responsywny design
          <br />
          Formularz kontaktowy
          <br />
          Google Maps, Galeria
          <br />
          Podstawowa optymalizacja SEO
          <br />
          Integracja z social mediami
          <br />
          Certyfikat SSL
          <br />
          Wizytówka Google
        </>
      ),
      variant: "small",
    },
  ];

  const { cardRef, isCardVisible } = useIntersectionObserver();

  const baseClasses =
    "relative  px-[2em] mb-[5em] text-md text-center bg-white border-4 border-custom-darkBlue rounded-lg shadow-[0_0px_10px_rgba(13,153,255,0.75)] overflow-hidden opacity-100 scale-100 transition-all duration-[.75s] xl:mb-0 xl:px-[3em] xl:opacity-0 xl:scale-50";

  const topBadge = (
    <div className="pack-icon absolute -left-27.5 top-6 w-full py-[.5em] bg-custom-blue -rotate-45 xl:-left-35 xl:top-8 z-[-1]">
      <p className="text-white text-md font-bold uppercase tracking-[.5rem]">
        Top
      </p>
    </div>
  );

  const renderedCards = cards.map((card, index) => {
    const sizeClasses =
      card.variant === "small"
        ? "sm:h-[570px] xl:w-[380px]"
        : "sm:h-[600px] xl:w-[400px]";

    const animationDelay = index * 200;

    return (
      <div
        key={card.cardTitle}
        ref={cardRef}
        style={{ transitionDelay: `${animationDelay}ms` }}
        className={`${baseClasses} ${sizeClasses} ${isCardVisible ? "xl:opacity-100 xl:scale-100" : "xl:opacity-0 xl:scale-50"}`}
      >
        {card.variant === "big" && topBadge}
        <p className="pack-title mt-[1em] text-2xl font-bold uppercase">
          {card.cardTitle}
        </p>
        <p className="mt-[.5em] mb-[1.2em]">{card.cardSubTitle}</p>
        <p className="pack-price text-2xl">
          <span className="text-custom-darkBlue font-bold">
            {card.cardPrice}
          </span>{" "}
          netto
        </p>
        <p className="pack-info mt-[1.2em] leading-8 text-left">
          {card.cardInfo}
        </p>
        <CtaButton
          className={`my-[1.5em] px-[.5em] sm:absolute sm:bottom-0 sm:left-[50%] sm:translate-x-[-50%] text-[1rem]! font-light! ${card.variant === "big" ? "w-62.5" : ""}`}
          variant="light"
        >
          {card.variant === "big" ? "Najlepszy wybór" : "Wybierz"}
        </CtaButton>
      </div>
    );
  });

  return <>{renderedCards}</>;
}
