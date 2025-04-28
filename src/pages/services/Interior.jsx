import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceDetail.css";

const Interior = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="service-detail-wrapper">
      {/* Hero section */}
      <div className="hero-banner">
        <img
          src="/images/interior-hero.jpeg"
          alt="Interior Design"
          className="banner-img"
        />
        <div className="banner-overlay">
          <h1>Interior Design</h1>
          <p>Crafting beautiful, functional spaces that feel like home.</p>
        </div>
      </div>

      {/* back Button */}
      <div className="service-detail-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Services
        </button>

        {/* Intro section */}
        <section className="intro-section">
          <h2>Where Style Meets Function</h2>
          <p>
            Interior design is more than just furniture and colours- it's the
            art of shaping how a space feels, flows, and functions. At Construct
            Edge, we believe your interiors should reflect your personality,
            support your lifestyle, and spark inspiration everyday.
          </p>

          <p>
            Whether you're transforming a single room or planning a full-scale
            interior revamp, our team crafts thoughtful,, cohesive designs
            tailored to your uniques taste. We balance beaauty with
            practicality, creating spaces that are not only visually stunnning
            but also liveable.
          </p>
        </section>

        {/* offering section */}

        <section className="offerings-section">
          <h2>What We Offer</h2>
          <div className="offering-grid">
            <div className="offering-card">
              <h3>🛋️ Space Planning </h3>
              <p>We optimize layout and flow to make the most of your space.</p>
            </div>
            <div className="offering-card">
              <h3>🎨 Color & Material Selection</h3>
              <p>
                We pick the perfect palette, textures, and materials to suit
                your vision.
              </p>
            </div>
            <div className="offering-card">
              <h3>🖼️ Décor & Styling</h3>
              <p>
                Finishing touches like artwork, lighting, and decor bring life
                to your space.
              </p>
            </div>
            <div className="offering-card">
              <h3>🪞Custom Furniture Design</h3>
              <p>Bespoke pieces designed to complement your space and needs.</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <h2>Designed to Reflect You</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/int1.jpeg" alt="Living room design" />
              <p className="image-caption">
                Elegant living room design with modern comforts.
              </p>
            </div>
            <div className="gallery-item">
              <img src="/images/int2.jpeg" alt="Bedroom Setup" />
              <p className="image-caption">
                Cozy and luxurious bedroom setup for ultimate relaxation.
              </p>
            </div>
            <div className="gallery-item">
              <img src="/images/int3.jpeg" alt="Dining area Design" />
              <p className="image-caption">
                Stylish dining area that brings people together.
              </p>
            </div>
            <div className="gallery-item">
              <img src="/images/int4.jpeg" alt="Home office decor" />
              <p className="image-caption">
                Functional and inspiring home office decor.
              </p>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="cta-section">
          <h2>Let's Bring Your Vision to Life</h2>
          <p>Your dream interior is just a consultation away.</p>
          <button className="cta-btn">Request a Free Consultation</button>
        </section>
      </div>
    </section>
  );
};

export default Interior;
