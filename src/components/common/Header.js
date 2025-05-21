import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
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

        <Link to="/#about" smooth onClick={toggleMenu}>
          About
        </Link>

        <Link to="/#services" smooth onClick={toggleMenu}>
          Services
        </Link>

        <Link to="/#portfolio" smooth onClick={toggleMenu}>
          Portfolio
        </Link>

        <Link to="/#testimonial" smooth onClick={toggleMenu}>
          Testimonial
        </Link>

        <Link to="/contact">
          <button className="btn">Request a Quote</button>
        </Link>
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
