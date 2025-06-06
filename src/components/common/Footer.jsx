import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Construct Edge</h2>
          <p>Built with trust. Measured by mastery.</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Explore</h4>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <p>
              Email:{" "}
              <a href="mailto:info@constructedge.com">info@constructedge.com</a>
            </p>
            <p>
              Phone: <a href="tel:+1234567890">+1 234 567 890</a>
            </p>
            <p>Location: Ahemdabad, India</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
        </div>
        <p>© 2025 Construct Edge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
