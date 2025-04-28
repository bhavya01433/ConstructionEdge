import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/tmc.png" alt="Construct Edge Logo" className="logo" />
      </div>

      <div className={`nav ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <a href="#about" onClick={toggleMenu}>
          About
        </a>

        <div className="dropdown" onClick={toggleServices}>
          <span className="drop-title">Services</span>
          <div className={`dropdown-content ${servicesOpen ? "show" : ""}`}>
            <a href="#residential" onClick={toggleMenu}>
              Residential
            </a>
            <a href="#commercial" onClick={toggleMenu}>
              Commercial
            </a>
            <a href="#interior" onClick={toggleMenu}>
              Interior
            </a>
          </div>
        </div>
        <a href="#portfolio" onClick={toggleMenu}>
          Portfolio
        </a>
        <a href="#testimonials" onClick={toggleMenu}>
          Testimonials
        </a>
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
