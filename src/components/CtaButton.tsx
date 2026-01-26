import { Link } from "react-router-dom";

type ButtonProps = {
  ctaButtonText: string;
};

export default function CtaButton({ ctaButtonText }: ButtonProps) {
  return (
    <button className="cta-btn animate-custom-pulse absolute right-0 mt-[8em] mr-[2em] bg-custom-darkBlue rounded-[50px] hover:bg-custom-blue sm:mr-[5em] xl:mr-[20em]">
      <Link
        to="#contact"
        aria-label="Zamów bezpłatną wycenę"
        className="cta-text inline-block px-[1.5em] py-[.75em] font-semibold text-lg text-white uppercase xl:text-xl"
      >
        {ctaButtonText}
      </Link>
    </button>
  );
}
