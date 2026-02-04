import CtaButton from "../../CtaButton";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

type CardVariant = "small" | "big";

interface PackCardProps {
  cardTitle: string;
  cardSubTitle: React.ReactNode;
  cardPrice: string;
  cardInfo: React.ReactNode;
  variant: CardVariant;
  index: number;
}

export default function PackCard({
  cardTitle,
  cardSubTitle,
  cardPrice,
  cardInfo,
  variant,
  index,
}: PackCardProps) {
  const { cardRef, isCardVisible } = useIntersectionObserver();

  const baseClasses =
    "relative  px-[2em] mb-[5em] text-md text-center bg-white border-4 border-custom-darkBlue rounded-lg shadow-[0_0px_10px_rgba(13,153,255,0.75)] overflow-hidden transition-all duration-[.75s] xl:mb-0 xl:px-[3em]";

  const sizeClasses =
    variant === "small"
      ? "sm:h-[570px] xl:w-[380px]"
      : "sm:h-[600px] xl:w-[400px]";

  const topBadge = (
    <div className="pack-icon absolute -left-27.5 top-6 w-full py-[.5em] bg-custom-blue -rotate-45 xl:-left-35 xl:top-8 z-[-1]">
      <p className="text-white text-md font-bold uppercase tracking-[.5rem]">
        Top
      </p>
    </div>
  );

  const animationDelay = index * 200;

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${animationDelay}ms` }}
      className={`${baseClasses} ${sizeClasses} ${isCardVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-8"}`}
    >
      {variant === "big" && topBadge}
      <p className="pack-title mt-[1em] text-2xl font-bold uppercase">
        {cardTitle}
      </p>
      <p className="mt-[.5em] mb-[1.2em]">{cardSubTitle}</p>
      <p className="pack-price text-2xl">
        <span className="text-custom-darkBlue font-bold">{cardPrice}</span>{" "}
        netto
      </p>
      <p className="pack-info mt-[1.2em] leading-8 text-left">{cardInfo}</p>
      <CtaButton
        className={`my-[1.5em] px-[.5em] sm:absolute sm:bottom-0 sm:left-[50%] sm:translate-x-[-50%] text-[1rem]! font-light! ${variant === "big" ? "w-62.5" : ""}`}
        variant="light"
      >
        {variant === "big" ? "Najlepszy wybór" : "Wybierz"}
      </CtaButton>
    </div>
  );
}
