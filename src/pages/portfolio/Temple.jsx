import React from "react";
import { Link } from "react-router-dom";
import "./portfolioDetailed.css";

const TempleRestoration = () => {
  return (
    <div className="portfolio-detailed-container">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <img
          src="/images/temples.jpeg"
          alt="Temple Restoration"
          className="portfolio-hero-image"
        />
        <div className="portfolio-hero-overlay">
          <h1 className="portfolio-title">Temple Restoration</h1>
          <p className="portfolio-subtitle">
            Preserving Heritage, Reviving Divinity
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="zigzag-section">
        <div className="zigzag-row">
          <div className="zigzag-text">
            <h2>Project Overview</h2>
            <p>
              Our Temple Restoration project is a testament to the reverence for
              culture and craftsmanship. We brought back the grandeur of a
              centuries-old spiritual landmark while embedding subtle modern
              reinforcements for longevity. This restoration is not just
              structural—it’s spiritual, historical, and symbolic.
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/temple2.jpeg"
              alt="Temple Overview"
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
                <strong>Authentic Materials:</strong> Use of traditional
                sandstone, lime mortar, and regional woodwork.
              </li>
              <li>
                <strong>Artisan Collaboration:</strong> Partnered with local
                sculptors and temple masons for detail fidelity.
              </li>
              <li>
                <strong>Seismic Stability:</strong> Modern structural
                reinforcements masked in ancient detailing.
              </li>
              <li>
                <strong>Cultural Legacy:</strong> Restored murals, carvings, and
                ceremonial zones with archival precision.
              </li>
            </ul>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/temple3.jpeg"
              alt="Temple Highlights"
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
              “Construct Edge handled our sacred project with unmatched care,
              respecting both the divine and the structural. They didn’t just
              restore a temple— they rekindled a spiritual heritage.”
            </p>
            <p>
              Their dedication to authenticity and structural resilience has
              gifted future generations a site to cherish. <br /> —{" "}
              <em>Sanskriti Foundation</em>
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/templeclt.jpeg"
              alt="Client Testimonial"
              className="image"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Inspired by Timeless Craft?</h2>
        <p>Let’s honor the past while building a stronger, sacred future.</p>
        <Link to="/" className="cta-button">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
};

export default TempleRestoration;
