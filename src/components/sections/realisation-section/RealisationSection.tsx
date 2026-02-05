import RealisationIconFirst from "./realisation-icons/RealisationIconFirst";
import RealisationIconSecond from "./realisation-icons/RealisationIconSecond";
import RealisationItem from "./RealisationItem";

export default function RealisationSection() {
  return (
    <section id="realisation" className="relative py-[5em] bg-white">
      <div className="wrapper relative">
        <RealisationIconFirst />
        <RealisationIconSecond />
        <h2 className="title pb-[1em] px-[.5em] text-left text-3xl font-semibold text-custom-darkBlue uppercase z-10">
          Realizacje
        </h2>
        <p className="my-[2em] px-[1em] max-w-117.5 text-left text-lg">
          Każdy projekt to nowe wyzwanie, które realizuję z pasją i
          zaangażowaniem.
        </p>
        <div className="flex flex-col justify-center items-center xl:flex-row xl:justify-between mt-[5em] px-[1em] flex-wrap">
          <RealisationItem
            linkTo="https://tomibet.pl/"
            srcWebp="./img/realizacja-tomibet-ogrodzenia-i-wyroby-betonowe-2.webp"
            srcJpg="./img/realizacja-tomibet-ogrodzenia-i-wyroby-betonowe.jpg"
            alt="nowoczesna strona internetowa producenta wyrobów betonowych Tomibet stworzona przez Kample"
            title="Tomibet"
            subtitle="Ogrodzenia i wyroby betonowe"
          />
          <RealisationItem
            linkTo="https://kancelaria-chutnik.pl/"
            srcWebp="./img/realisation-msch.webp"
            srcJpg="./img/realisation-msch.jpg"
            alt="nowoczesna strona internetowa dla kancelarii radcy prawnego stworzona przez Kample"
            title="Kancelaria Radcy Prawnego"
          />
          <RealisationItem
            linkTo="https://dt-cars.pl/"
            srcWebp="./img/realisation-dtcars.webp"
            srcJpg="./img/realisation-dtcars.jpg"
            alt="nowoczesna strona internetowa Wypożyczalni samochodowej stworzona przez Kample"
            title="Dt cars"
            subtitle="Wypożyczalnia samochodów"
          />
          <RealisationItem
            linkTo="https://zlobekforest.pl/"
            srcWebp="./img/realisation-forest.webp"
            srcJpg="./img/realisation-forest.png"
            alt="Strona internetowa Żłobka forest"
            title="Forest"
            subtitle="Żłobek - klub dziecięcy"
          />
        </div>
      </div>
    </section>
  );
}
