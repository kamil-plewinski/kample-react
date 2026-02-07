import AccordionItem from "./AccordionItem";

interface AccordionItemData {
  accordionQuestion: string;
  accordionAnswer: string;
}

export default function Accordion() {
  const accordionItems: AccordionItemData[] = [
    {
      accordionQuestion: "1. Jak długo trwa stworzenie strony internetowej?",
      accordionAnswer:
        "Czas realizacji projektu zależy od jego skomplikowania. Prosta strona wizytówka może być gotowa w ciągu 1-2 tygodni, natomiast bardziej złożone projekty mogą zająć od 3 do 4 tygodni lub dłużej. Kluczowy wpływ na czas realizacji ma również tempo dostarczania treści i materiałów przez klienta.",
    },
    {
      accordionQuestion: "2. Ile kosztuje stworzenie strony internetowej?",
      accordionAnswer:
        "Koszt budowy strony internetowej zależy od jej funkcjonalności, ilości podstron oraz zakresu prac. Każdy projekt jest inny, dlatego wyceniam je indywidualnie tak aby dostosować ofertę do Twoich potrzeb.",
    },
    {
      accordionQuestion:
        "3. Czy będę mógł samodzielnie zarządzać stroną po jej wykonaniu?",
      accordionAnswer:
        "Tak, tworzę również strony oparte na systemach CMS (np. WordPress), co umożliwia samodzielne zarządzanie treścią strony bez konieczności posiadania wiedzy technicznej. Zapewniam podstawowe szkolenie z zakresu obsługi strony, tak abyś bezproblemowo mógł wprowadzać na niej zmiany.",
    },
    {
      accordionQuestion: "4. Czy moja strona będzie dobrze widoczna w Google?",
      accordionAnswer:
        "Podstawowa optymalizacja SEO jest standardową częścią procesu tworzenia strony, co pomoże Twojej stronie być lepiej widoczną w wyszukiwarkach. Jednakże, pełna strategia SEO wymaga dodatkowych działań i może obejmować m.in. pozycjonowanie, tworzenie treści oraz analizy SEO.",
    },
    {
      accordionQuestion:
        "5. Jakie informacje i materiały muszę dostarczyć, aby rozpocząć projekt?",
      accordionAnswer:
        "Aby rozpocząć projekt, potrzebuję przede wszystkim szczegółowych informacji na temat celu strony, jej struktury treści (tekstów, zdjęć) oraz preferencji dotyczących designu. Warto również określić, jakie funkcje i integracje są wymagane, np. formularze kontaktowe, mapy dojazdu (mapa google), galerie zdjęć itp.",
    },
  ];

  return (
    <>
      {accordionItems.map((item) => {
        return (
          <AccordionItem
            key={item.accordionQuestion}
            accordionQuestion={item.accordionQuestion}
            accordionAnswer={item.accordionAnswer}
          />
        );
      })}
    </>
  );
}
