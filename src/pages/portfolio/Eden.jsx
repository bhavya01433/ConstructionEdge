import React from "react";
import { Link } from "react-router-dom";
import "./portfolioDetailed.css";

const Eden = () => {
  return (
    <div className="portfolio-detailed-container">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <img
          src="/images/eden.jpg"
          alt="Eden Residence"
          className="portfolio-hero-image"
        />
        <div className="portfolio-hero-overlay">
          <h1 className="portfolio-title">Eden Residence</h1>
          <p className="portfolio-subtitle">
            Luxury Living Rooted in Nature and Elegance
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="zigzag-section">
        <div className="zigzag-row">
          <div className="zigzag-text">
            <h2>Project Overview</h2>
            <p>
              Eden Residence is more than a home—it's a lifestyle oasis.
              Strategically located in a green belt, this premium residential
              development balances modern architecture with nature-inspired
              tranquility. With a focus on space, light, and sustainable
              materials, Eden sets a new benchmark for serene, luxurious living.
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/eden2.jpeg"
              alt="Eden Overview"
              className="image"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="zigzag-section">
        <div className="zigzag-row reverse">
          <div className="zigzag-text">
            <h2>Highlights</h2>
            <ul>
              <li>
                <strong>Nature-Inspired Design:</strong> Architecture that
                invites natural light and blends seamlessly with the surrounding
                landscape.
              </li>
              <li>
                <strong>Smart Eco-Features:</strong> Rainwater harvesting,
                solar-powered water heating, and green rooftops.
              </li>
              <li>
                <strong>Premium Interiors:</strong> Hand-selected materials,
                intelligent layouts, and minimalistic elegance.
              </li>
              <li>
                <strong>Community Living:</strong> Clubhouse, pool, and gardens
                designed to bring families and neighbors together.
              </li>
            </ul>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/eden3.jpeg"
              alt="Eden Highlights"
              className="image"
            />
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="zigzag-section">
        <div className="zigzag-row">
          <div className="zigzag-text">
            <h2>Client Testimonial</h2>
            <p>
              “Choosing Construct Edge was the best decision we made. They
              didn’t just build a home—they built a sanctuary. Eden Residence is
              now the most admired address in the city."
            </p>
            <p>
              Their attention to detail, passion for design, and
              environment-conscious planning have truly created a paradise for
              our residents. <br /> — <em>GreenField Developers</em>
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/client2.jpeg"
              alt="Client Testimonial"
              className="image"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Inspired by Eden Residence?</h2>
        <p>Let’s create a nature-integrated home that speaks to your soul.</p>
        <Link to="/" className="cta-button">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
};

export default Eden;
