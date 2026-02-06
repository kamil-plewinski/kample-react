import FbIcon from "./contact-icons/FbIcon";
import MailIcon from "./contact-icons/MailIcon";

export default function ContactContent() {
  return (
    <div className="contact-info inline-block px-[1em] lg:pl-[3em] lg:w-[50%]">
      <h2 className="mt-[2em] title text-left text-2xl font-semibold uppercase sm:text-4xl lg:mt-[1em]">
        Skontaktuj się ze mną
      </h2>
      <p className="my-[2em] text-xl leading-10 font-semibold">
        Zamów bezpłatną wycenę <br />
        Umów projekt <br />
        Masz więcej pytań? Napisz!
      </p>
      <p className="leading-7 text-xl">
        KamPle - Profesjonalne strony internetowe <br />
        Kamil Plewiński <br />
        kontakt@kample.pl
      </p>
      <div className="icon-container mt-[3em] flex justify-center items-center lg:justify-start lg:ml-[6em] lg:mb-[1em]">
        <FbIcon />
        <MailIcon />
      </div>
    </div>
  );
}
