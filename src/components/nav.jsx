import logo from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";

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
      <img className="nav-link" src={cart} alt="Logo" />
    </nav>
  );
}

export default NavBar;
