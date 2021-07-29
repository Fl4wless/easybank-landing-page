import React, { useState } from "react";
import "./Navbar.css";
import BankLogo from "../images/logo-dark.svg";
import Button from "./UI/Button";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen((prev) => !prev);
  };

  const handleNavClose = () => {
    setNavOpen(false);
  };

  return (
    <div className="navbar">
      <nav>
        <img src={BankLogo} alt="easybank" />
        {navOpen ? (
          <CloseIcon className="menu-icon" onClick={handleNavOpen} />
        ) : (
          <MenuIcon className="menu-icon" onClick={handleNavOpen} />
        )}

        <ul
          className={`nav-list ${navOpen && "nav-list-active"}`}
          onClick={handleNavClose}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
        </ul>
        <Button className="menu-button">Request Invite</Button>
      </nav>
    </div>
  );
};

export default Navbar;
