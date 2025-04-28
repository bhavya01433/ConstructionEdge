import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceDetail.css";

const Commercial = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="service-detail-wrapper">
      {/* Hero Banner */}
      <div className="hero-banner">
        <img
          src="/images/commercial-hero.jpg"
          alt="Commercial Construction"
          className="banner-img"
        />
        <div className="banner-overlay">
          <h1>Commercial Construction</h1>
          <p>Building spaces for business success.</p>
        </div>
      </div>

      {/* Back Button */}
      <div className="service-detail-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Services
        </button>

        {/* Intro Section */}
        <section className="intro-section">
          <h2>Building the Future of Business</h2>
          <p>
            At Construct Edge, we specialize in creating commercial spaces that
            serve your business needs. From office buildings and retail centers
            to hospitality and industrial projects, we deliver high-quality,
            functional spaces that enhance operations and inspire creativity.
          </p>

          <p>
            Our team of architects, engineers, and project managers work closely
            with you to ensure your commercial property not only meets your
            vision but also adheres to budget and timelines. With a focus on
            sustainability and innovation, we create spaces designed for growth
            and long-term success.
          </p>
        </section>

        {/* Offering Section */}
        <section className="offerings-section">
          <h2>What We Offer</h2>
          <div className="offering-grid">
            <div className="offering-card">
              <h3>🏢 Office Buildings</h3>
              <p>Designing workspaces that promote productivity and comfort.</p>
            </div>
            <div className="offering-card">
              <h3>🛍️ Retail Spaces</h3>
              <p>
                Creating retail environments that engage customers and drive
                sales.
              </p>
            </div>
            <div className="offering-card">
              <h3>🏨 Hospitality Construction</h3>
              <p>
                Building hotels and resorts that create unforgettable guest
                experiences.
              </p>
            </div>
            <div className="offering-card">
              <h3>🏭 Industrial Facilities</h3>
              <p>
                Constructing efficient and durable spaces for manufacturing and
                production.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <h2>Commercial Projects Designed for Success</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/comm1.jpg" alt="Office Building Design" />
              <p className="image-caption">
                Modern office spaces designed to foster productivity.
              </p>
            </div>
            <div className="gallery-item">
              <img src="/images/comm2.jpg" alt="Retail Store Construction" />
              <p className="image-caption">
                Stylish retail store interiors that attract customers.
              </p>
            </div>
            <div className="gallery-item">
              <img src="/images/comm3.jpg" alt="Hospitality Project" />
              <p className="image-caption">
                Innovative hospitality designs that elevate guest experiences.
              </p>
            </div>
            <div className="gallery-item">
              <img src="/images/comm4.jpg" alt="Industrial Facility Design" />
              <p className="image-caption">
                State-of-the-art industrial facilities built for efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to Start Your Commercial Project?</h2>
          <p>
            Let’s bring your business vision to life with our expertise in
            commercial construction.
          </p>
          <button className="cta-btn">Request a Free Consultation</button>
        </section>
      </div>
    </section>
  );
};

export default Commercial;
