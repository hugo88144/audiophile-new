import logo from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";

function NavBar() {
  return (
    <nav className="nav">
      <img className="nav-link" src={logo} alt="Logo" />
      <div className="nav-link">HOME</div>
      <div className="nav-link">HEADPHONES</div>
      <div className="nav-link">SPEAKERS</div>
      <div className="nav-link">EARPHONES</div>
      <img className="nav-link" src={cart} alt="Logo" />
    </nav>
  );
}

export default NavBar;
