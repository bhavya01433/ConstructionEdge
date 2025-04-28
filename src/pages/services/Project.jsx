import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceDetail.css";

const ProjectManagement = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="service-detail-wrapper">
      {/* Hero Banner */}
      <div className="hero-banner">
        <img
          src="/images/project-hero.jpeg"
          alt="Project Management"
          className="banner-img"
        />
        <div className="banner-overlay">
          <h1>Project Management</h1>
          <p>
            Efficiently bringing your vision to life, every step of the way.
          </p>
        </div>
      </div>

      {/* Back Button */}
      <div className="service-detail-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Services
        </button>

        {/* Intro Section */}
        <section className="intro-section">
          <h2>Mastering Every Phase of Construction</h2>
          <p>
            At Construct Edge, we ensure the seamless execution of your
            construction projects from start to finish. Our project management
            services encompass planning, coordination, and oversight, allowing
            us to deliver projects on time, within budget, and according to the
            highest quality standards.
          </p>

          <p>
            We focus on delivering a smooth and collaborative process, handling
            everything from budgeting and scheduling to contractor selection and
            risk management. With our experienced team managing the entire
            lifecycle, you can focus on what matters most — your vision.
          </p>
        </section>

        {/* Offering Section */}
        <section className="offerings-section">
          <h2>What We Offer</h2>
          <div className="offering-grid">
            <div className="offering-card">
              <h3>📝 Comprehensive Planning</h3>
              <p>
                Meticulous planning to ensure your project is set up for
                success.
              </p>
            </div>
            <div className="offering-card">
              <h3>🔧 Contractor Management</h3>
              <p>We select and manage the right contractors for the job.</p>
            </div>
            <div className="offering-card">
              <h3>📊 Budget and Time Management</h3>
              <p>Strict control over budget and timeline to meet your goals.</p>
            </div>
            <div className="offering-card">
              <h3>🔍 Quality Control</h3>
              <p>Ensuring every phase meets the highest quality standards.</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <h2>Our Project Management in Action</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/pro1.jpg" alt="Project Planning Session" />
              <p className="image-caption">
                Planning a project with precision and detail.
              </p>
            </div>
            <div className="gallery-item">
              <img src="/images/pro2.jpg" alt="Contractor Meeting" />
              <p className="image-caption">
                Effective contractor management to ensure project success.
              </p>
            </div>
            <div className="gallery-item">
              <img src="/images/pro3.jpg" alt="Budget Management" />
              <p className="image-caption">
                Strict budget management to meet financial goals.
              </p>
            </div>
            <div className="gallery-item">
              <img src="/images/pro4.jpg" alt="Quality Control Inspection" />
              <p className="image-caption">
                Ensuring quality control through every phase of construction.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to Get Started on Your Project?</h2>
          <p>
            Let us handle the details so you can focus on your vision. Reach out
            for a consultation today!
          </p>
          <button className="cta-btn">Request a Free Consultation</button>
        </section>
      </div>
    </section>
  );
};

export default ProjectManagement;
