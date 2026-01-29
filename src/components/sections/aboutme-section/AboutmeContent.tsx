import CtaButton from "../../CtaButton";

export default function AboutmeContent() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:py-[5em] lg:gap-20 xl:gap-40">
      <picture ref={imageRef} className="px-[.5em] z-10">
        <source srcSet="/img/my_photo.webp" type="image/webp" />
        <source srcSet="/img/my_photo.jpg" type="image/jpeg" />
        <img
          src="/img/my_photo.jpg"
          id="photo"
          loading="lazy"
          alt="Moje zdjęcie, w tle łuk triumfalny"
          className={`photo my-[2em] mx-auto w-75 rounded-[5px] shadow-[0px_2px_6px_0px_rgba(0,0,0,.5)] transition-opacity duration-700 ${isImageVisible ? "opacity-100" : "opacity-0"}`}
        />
      </picture>
      <div
        ref={textRef}
        className={`relative mx-auto mb-[5em] px-[1em] py-[2em] text-lg max-w-137.5 transition-opacity duration-700 lg:mx-[.5em] z-10 ${isTextVisible ? "opacity-100" : "opacity-0"}`}
      >
        <p>
          Cześć! Jestem <b className="text-custom-darkBlue">Kamil</b> -
          <strong className="text-custom-darkBlue"> freelancer</strong>, który
          uwielbia tworzyć
          <strong className="text-custom-darkBlue">
            {""} strony internetowe
          </strong>
          . Specjalizuję się w tworzeniu nowoczesnych, funkcjonalnych i
          atrakcyjnych wizualnie stron internetowych dla firm z różnych branż.
        </p>
        <p className="mt-[1em]">
          W swojej pracy zawsze stawiam na
          <b className="text-custom-darkBlue"> najwyższą jakość</b> i
          <b className="text-custom-darkBlue"> terminowość</b>, a do każdego
          projektu podchodzę indywidualnie aby spełnić
          <b className="text-custom-darkBlue"> Twoje potrzeby</b>. Jestem
          otwarty na nowe wyzwania i zawsze szukam skutecznych rozwiązań.
        </p>
        <CtaButton
          variant="dark"
          className="absolute right-[50%] translate-x-[50%] mt-[3em] text-xl lg:mt-[4em]"
        >
          Kontakt
        </CtaButton>
      </div>
    </div>
  );
}
