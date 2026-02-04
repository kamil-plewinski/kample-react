import CtaButton from "../../CtaButton";
import PackCards from "./PackCards";

export default function PriceSection() {
  return (
    <section
      id="price"
      className="py-[5em] bg-white xl:pb-[5em] overflow-x-hidden"
    >
      <div className="wrapper">
        <h2 className="title pb-[1em] text-center text-3xl font-semibold text-custom-darkBlue uppercase">
          Gotowe rozwiązania dla Twojej firmy
        </h2>
        <p className="mb-[2em] text-center text-lg">
          Wybierz pakiet, który najlepiej odpowiada Twoim potrzebom!
        </p>
        <div className="my-[4em] px-[1em] flex flex-col justify-around items-center xl:flex-row">
          <PackCards />
        </div>
        <div className="more-info relative text-center">
          <p className="more-info mx-auto px-[1em] text-lg max-w-150">
            <span className="text-3xl font-semibold">Masz Pytania?</span>
            <br />
            <br />
            Sprawdź
            <a href="#faq" className="text-custom-darkBlue font-semibold">
              {" "}
              najczęściej zadawane pytania
            </a>{" "}
            lub skontaktuj się ze mną, pomogę w wyborze odpowiedniego pakietu
            dla Twojej firmy i odpowiem na wszystkie pytania
          </p>
          <CtaButton className="mt-[3em]" variant="light">
            Kontakt
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
