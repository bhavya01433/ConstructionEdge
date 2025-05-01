import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img
            src="/images/tmc.png"
            alt="Construct Edge Logo"
            className="logo"
          />
        </Link>
      </div>

      <div className={`nav ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>

        <Link to="/#about" onClick={toggleMenu}>
          About
        </Link>

        <Link to="/#services" onClick={toggleMenu}>
          Services
        </Link>

        <Link to="/#portfolio" onClick={toggleMenu}>
          Portfolio
        </Link>

        <Link to="/#testimonials" onClick={toggleMenu}>
          Testimonials
        </Link>

        <button className="quote-btn">Request a Quote</button>
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
