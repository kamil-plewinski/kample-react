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

  const handleClick = (id: string) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
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
        <div className="wrapper flex w-full items-center px-6">
          <button
            onClick={() => handleClick(LOGO_NAV_ITEM.id)}
            className="text-2xl font-semibold hover:text-custom-blue transition-colors duration-300"
          >
            Kam<span className="text-custom-blue">Ple</span>
          </button>
          <ul className="ml-auto hidden md:flex items-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className="mx-3 p-4 hover:text-custom-blue transition-colors duration-300"
                  onClick={() => handleClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
