import React from "react";
import "./Footer.css";
import logo from "../images/logo.svg";
import ytlogo from "../images/icon-youtube.svg";
import fblogo from "../images/icon-facebook.svg";
import twitterlogo from "../images/icon-twitter.svg";
import pinterestlogo from "../images/icon-pinterest.svg";
import iglogo from "../images/icon-instagram.svg";
import Button from "./UI/Button";

const Footer = () => {
  const logos = [ytlogo, fblogo, twitterlogo, pinterestlogo, iglogo];
  const logoJSX = logos.map((logo) => <img src={logo} alt="easybank social" />);

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__icons">
          <img src={logo} alt="easybank" />
          <span>{logoJSX}</span>
        </div>
        <div className="footer__menu">
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer__menu2">
          <ul>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer_copyright">
          <Button>Request Invite</Button>
          <p>&copy; Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
