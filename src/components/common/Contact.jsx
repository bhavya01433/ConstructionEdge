import "./Contact.css";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success
    setFormSubmitted(true);

    // Clear inputs
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");

    // Hide success after 4 sec
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className="contact-container">
      <motion.div
        className="contact-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Let’s Build Something Solid</h2>
        <p>Got a project or question? Reach out and let’s make it real.</p>

        <div className="contact-info">
          <p>
            <strong>Email:</strong> info@constructedge.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>Location:</strong> 123 Builder’s Way, Concrete City
          </p>
        </div>

        <div className="contact-socials">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="contact-right"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              rows="5"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>

          {formSubmitted && (
            <p className="form-success">✅ Message sent successfully!</p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
