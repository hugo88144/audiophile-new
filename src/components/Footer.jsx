import logo from "../assets/shared/desktop/logo.svg";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <img src={logo} alt="logo" className="footer__logo" />
        <nav className="footer__nav">
          <div className="footer__nav-link">HOME</div>
          <div className="footer__nav-link">HEADPHONES</div>
          <div className="footer__nav-link">SPEAKERS</div>
          <div className="footer__nav-link">EARPHONES</div>
        </nav>

        <div className="footer__text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </div>
        <div className="footer__icons">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>

        <div className="footer__copyright">
          Copyright 2021. All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
