import CtaButton from "../../CtaButton";

export default function HomeContent() {
  return (
    <div className="hero-text absolute top-[50%] right-0 translate-y-[-70%] px-[.5em] w-full max-w-125 sm:max-w-150 md:max-w-175 lg:max-w-225 xl:max-w-300 text-white">
      <h1 className="title mb-[1.5em] px-2 text-4xl font-semibold leading-14 drop-shadow-lg lg:text-5xl xl:text-6xl">
        <span className="text-custom-blue">Profesjonalne</span> strony
        internetowe
      </h1>
      <p className="subtitle px-[.5em] text-xl font-light drop-shadow-lg xl:text-2xl">
        Funkcjonalne, wydajne, responsywne
      </p>
      <CtaButton ctaButtonText={"Bezpłatna wycena"} />
    </div>
  );
}
