// import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Aboutme", id: "aboutme" },
  { label: "Ofert", id: "ofert" },
  { label: "Realisation", id: "realisation" },
  { label: "Contact", id: "contact" },
];

const LOGO_NAV_ITEM = { label: "Home", id: "home" };

export default function Header() {
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
    <header>
      <nav>
        <button
          onClick={() => handleClick(LOGO_NAV_ITEM.id)}
          className="font-bold"
        >
          {LOGO_NAV_ITEM.label}
        </button>
        <ul>
          {NAV_ITEMS.map((item, idx) => (
            <li>
              <button key={idx} onClick={() => handleClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
