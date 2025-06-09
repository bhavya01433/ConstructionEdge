import React, { useState } from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Let's Build Something Great Together.</h1>
          <p>
            Reach out to discuss your project, get a quote, or simply ask a
            question.
          </p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="contact-content">
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
            <p className="privacy-note">
              We typically respond within 24-48 business hours.
            </p>
          </form>
        </div>

        <div className="contact-info-container">
          <h2>Our Information</h2>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <span>
              <a href="tel:+911234567890">+91 12345 67890</a>
            </span>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>
              <a href="mailto:info@yourconstruction.com">
                info@yourconstruction.com
              </a>
            </span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>
              123 Construction Road,
              <br />
              Ahmedabad, Gujarat, India - 380001
            </span>
          </div>
          <div className="info-item">
            <FaClock className="info-icon" />
            <span>
              Mon - Fri: 9:00 AM - 5:00 PM IST
              <br />
              Sat - Sun: Closed
            </span>
          </div>

          <div className="map-container">
            <h3>Find Us on Map</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117500.00000000001!2d72.5000000!3d23.0000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848ae0d7831f%3A0x6b8f3b7f6c7c2b5e!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
            <p className="map-note"></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

