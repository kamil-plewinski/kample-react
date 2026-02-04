import PackCard from "./PackCard";

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

  return (
    <>
      {cards.map((card, index) => {
        return (
          <PackCard
            key={card.cardTitle}
            cardTitle={card.cardTitle}
            cardSubTitle={card.cardSubTitle}
            cardPrice={card.cardPrice}
            cardInfo={card.cardInfo}
            variant={card.variant}
            index={index}
          />
        );
      })}
    </>
  );
}
