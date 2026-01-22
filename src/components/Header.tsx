import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "O mnie", id: "aboutme" },
  { label: "Oferta", id: "ofert" },
  { label: "Realizacje", id: "realisation" },
  { label: "Kontakt", id: "contact" },
];

const LOGO_NAV_ITEM = { label: "Home", id: "home" };

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuShow, setIsMenuShow] = useState(false);

  const handleClick = (id: string) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const handleCloseMenu = () => {
    setIsMenuShow(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`fixed flex top-0 z-20 h-22.5 items-center w-full text-2xl transition-colors duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"} text-white`}
      >
        <div className="wrapper flex items-center justify-end sm:relative">
          <button
            onClick={() => handleClick(LOGO_NAV_ITEM.id)}
            className="absolute left-0 ml-[1em] p-3 font-semibold hover:text-custom-blue transition-colors duration-200"
          >
            Kam<span className="text-custom-blue">Ple</span>
          </button>
          <ul
            className={`nav-items flex flex-col items-center justify-center absolute top-0 bg-[rgba(15,21,29,0.8)] backdrop-blur-[7px] w-full h-screen text-3xl transition-all duration-1000 z-10 md:flex md:flex-row md:h-0 md:w-auto md:relative md:translate-x-0 md:my-5 md:text-xl lg:text-2xl ${isMenuShow ? "translate-x-0" : "translate-x-full"}`}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className="mx-3 p-4 hover:text-custom-blue transition-colors duration-300"
                  onClick={() => {
                    handleClick(item.id);
                    handleCloseMenu();
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            name="menu-burger button"
            aria-label="Menu-burger"
            className="burger-icon group absolute top-[50%] right-10 w-10 h-10 translate-y-[-50%] z-10 md:hidden"
            onClick={() => setIsMenuShow((prev) => !prev)}
          >
            <div
              data-number="1"
              className={`icon-line w-full h-1 bg-white group-hover:bg-custom-blue my-2 rounded-lg transition-all duration-300 ${isMenuShow ? "translate-y-[300%] rotate-45" : "translate-y-0 rotate-0"}`}
            ></div>
            <div
              data-number="2"
              className={`icon-line w-full h-1 bg-white group-hover:bg-custom-blue my-2 rounded-lg transition-all duration-300 ${isMenuShow ? "opacity-0" : "opacity-100"}`}
            ></div>
            <div
              data-number="3"
              className={`icon-line w-full h-1 bg-white group-hover:bg-custom-blue my-2 rounded-lg transition-all duration-300 ${isMenuShow ? "translate-y-[-300%] -rotate-45" : "translate-y-0 rotate-0"}`}
            ></div>
          </button>
        </div>
      </nav>
    </header>
  );
}
