import AccordionItems from "./AccordionItems";

export default function FaqSection() {
  return (
    <section id="faq" className="faq py-[5em]">
      <div className="wrapper">
        <h2 className="title pb-[1em] px-[.5em] text-left text-3xl font-semibold text-custom-darkBlue uppercase">
          Najczęściej zadawane pytania
        </h2>
        <div className="flex flex-col justify-center items-center">
          <AccordionItems />
        </div>
      </div>
    </section>
  );
}
