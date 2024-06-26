import logo from "../assets/shared/desktop/logo.svg";

import { Link } from "react-router-dom";
import Basket from "./Basket";
// eslint-disable-next-line react/prop-types
function NavBar() {
  return (
    <nav className="nav">
      <img className="nav-link" src={logo} alt="Logo" />

      <Link to="/" className="nav-link gone">
        HOME
      </Link>
      <Link to="/headphones" className="nav-link gone">
        HEADPHONES
      </Link>
      <Link to="/speakers" className="nav-link gone">
        SPEAKERS
      </Link>
      <Link to="/earphones" className="nav-link gone">
        EARPHONES
      </Link>
      <Basket />
    </nav>
  );
}

export default NavBar;
