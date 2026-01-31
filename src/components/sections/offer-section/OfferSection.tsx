import OfferSectionItems from "./OfferSectionItems";

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
          <OfferSectionItems />
        </div>
      </div>
    </section>
  );
}
