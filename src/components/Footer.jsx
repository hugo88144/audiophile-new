/* eslint-disable react/no-unescaped-entities */
import logo from "../assets/shared/desktop/logo.svg";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <img src={logo} alt="logo" className="footer__logo" />
        <nav className="footer__nav">
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
        </nav>

        <div className="footer__text">
          Audiophile is an all in one stop to fulfill your audio needs. Were a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our //
          eslint-disable-next-line react/no-unescaped-entities demo facility -
          were open 7 days a week.
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
