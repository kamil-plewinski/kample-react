import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to={"/#aboutme"}>O mnie</Link>
      </nav>
    </header>
  );
}
