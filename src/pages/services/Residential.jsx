import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceDetail.css";

const Residential = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="service-detail-wrapper">
      {/* Hero section */}
      <div className="hero-banner">
        <img
          src="/images/residential-hero.jpg" // Update with the correct image path
          alt="Residential Construction"
          className="banner-img"
        />
        <div className="banner-overlay">
          <h1>Residential Construction</h1>
          <p>Building Dream Homes with Precision</p>
        </div>
      </div>

      {/* Back Button */}
      <div className="service-detail-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Services
        </button>

        {/* Intro section */}
        <section className="intro-section">
          <h2>Transforming Visions into Beautiful Homes</h2>
          <p>
            At Construct Edge, we specialize in residential construction that
            brings your dream home to life. Whether it’s a single-family house,
            townhouse, or multi-family unit, our team of experts ensures that
            every detail meets your expectations and exceeds industry standards.
          </p>
          <p>
            With years of experience, we provide full-scale services — from site
            planning and architectural design to final construction. We ensure
            that every home we build reflects the highest standards of quality
            and craftsmanship.
          </p>
        </section>

        {/* Offerings section */}
        <section className="offerings-section">
          <h2>What We Offer</h2>
          <div className="offering-grid">
            <div className="offering-card">
              <h3>🏡 Custom Home Design</h3>
              <p>
                Creating personalized homes tailored to your specific needs.
              </p>
            </div>
            <div className="offering-card">
              <h3>📏 Site Planning</h3>
              <p>
                Carefully planning and optimizing your site for the best
                results.
              </p>
            </div>
            <div className="offering-card">
              <h3>💼 Project Management</h3>
              <p>
                Managing timelines, budgets, and resources for a seamless build.
              </p>
            </div>
            <div className="offering-card">
              <h3>🌱 Sustainable Building</h3>
              <p>
                Using eco-friendly materials and construction techniques to
                protect the environment.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {/* <section className="gallery-section">
          <h2>Our Residential Projects</h2>
          <div className="gallery-grid">
            <img src="/images/resi1.jpg" alt="Residential Project 1" />
            <img src="/images/resi2.jpg" alt="Residential Project 2" />
            <img src="/images/resi3.jpg" alt="Residential Project 3" />
            <img src="/images/resi4.jpg" alt="Residential Project 4" />
          </div>
        </section> */}
        <section className="gallery-section">
          <h2>Our Residential Projects</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/resi1.jpg" alt="Residential Project 1" />
              <p className="image-caption">
                Elegant exterior view showcasing timeless architecture.
              </p>
            </div>
            <div className="gallery-item">
              <img src="/images/resi2.jpg" alt="Residential Project 2" />
              <p className="image-caption">
                Open-concept living space designed for modern families.
              </p>
            </div>
            <div className="gallery-item">
              <img src="/images/resi3.jpg" alt="Residential Project 3" />
              <p className="image-caption">
                Charming outdoor patio perfect for gatherings and relaxation.
              </p>
            </div>
            <div className="gallery-item">
              <img src="/images/resi4.jpg" alt="Residential Project 4" />
              <p className="image-caption">
                Bright, airy interiors that blend comfort and style.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Let’s Build Your Dream Home</h2>
          <p>
            Ready to start your residential construction project? Contact us
            today!
          </p>
          <button className="cta-btn">Request a Free Consultation</button>
        </section>
      </div>
    </section>
  );
};

export default Residential;
