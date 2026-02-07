import { Link, useLocation, useNavigate } from "react-router-dom";

const FOOTER_NAV_ITEMS = [
  { label: "O mnie", id: "aboutme" },
  { label: "Oferta", id: "offer" },
  { label: "Realizacje", id: "realisation" },
  { label: "Kontakt", id: "contact" },
];

export default function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <footer className="footer pt-[4em] pb-[3em] bg-custom-light text-center">
      <h2 className="pb-[3em] text-2xl font-semibold text-custom-darkBlue tracking-wider">
        KamPle
      </h2>
      <ul className="flex flex-col sm:flex-row justify-center flex-wrap">
        {FOOTER_NAV_ITEMS.map((item) => {
          return (
            <li
              key={item.id}
              className="mx-[0.5em] my-[1em] md:mx-[1.5em] hover:text-custom-blue transition-colors duration-200"
            >
              <button className="p-[1em]" onClick={() => handleClick(item.id)}>
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="underline my-[3em] w-full h-0.5 bg-custom-darkBlue"></div>
      <p className="text-sm text-custom-dark">
        &copy; KamPle - Profesjonalne strony internetowe |{" "}
        {new Date().getFullYear()}r.
      </p>
      <Link
        to="/polityka-prywatnosci"
        aria-label="dowiedz się więcej o polityce prywatności"
        className="text-sm text-custom-dark underline hover:text-custom-blue transition-colors duration-200"
      >
        Polityka prywatności
      </Link>
    </footer>
  );
}
