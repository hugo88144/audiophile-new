import logo from "../assets/shared/desktop/logo.svg";

import { Link } from "react-router-dom";
import Basket from "./Basket";

function NavBar() {
  return (
    <nav className="nav">
      <img className="nav-link" src={logo} alt="Logo" />

      <Link to="/" className="nav-link">
        HOME
      </Link>
      <Link to="/headphones" className="nav-link">
        HEADPHONES
      </Link>
      <Link to="/speakers" className="nav-link">
        SPEAKERS
      </Link>
      <Link to="/earphones" className="nav-link">
        EARPHONES
      </Link>
      <Basket />
    </nav>
  );
}

export default NavBar;
