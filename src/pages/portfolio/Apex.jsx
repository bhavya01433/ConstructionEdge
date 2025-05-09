import React from "react";
import { Link } from "react-router-dom";
import "./portfolioDetailed.css";

const ApexIndustrialPark = () => {
  return (
    <div className="portfolio-detailed-container">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <img
          src="/images/apex.jpg"
          alt="Apex Industrial Park"
          className="portfolio-hero-image"
        />
        <div className="portfolio-hero-overlay">
          <h1 className="portfolio-title">Apex Industrial Park</h1>
          <p className="portfolio-subtitle">
            Powering Progress Through Smart Industrial Design
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="zigzag-section">
        <div className="zigzag-row">
          <div className="zigzag-text">
            <h2>Project Overview</h2>
            <p>
              Apex Industrial Park is a next-gen industrial zone built for the
              future of manufacturing, logistics, and sustainable production.
              Spanning over 300 acres, Apex redefines industrial infrastructure
              with smart technology, efficient workflows, and eco-conscious
              planning—all while delivering unmatched scalability and safety.
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/apex2.jpeg"
              alt="Apex Overview"
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
                <strong>Smart Logistics Hub:</strong> Automated inventory
                systems and real-time supply chain monitoring.
              </li>
              <li>
                <strong>Heavy-Duty Infrastructure:</strong> Wide lanes,
                reinforced foundations, and adaptable warehouse modules.
              </li>
              <li>
                <strong>Green Operations:</strong> Solar arrays, water recycling
                systems, and zero-waste processing zones.
              </li>
              <li>
                <strong>Built for Scale:</strong> Modular expansions, on-site
                transport terminals, and enterprise-grade utilities.
              </li>
            </ul>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/apex3.jpeg"
              alt="Apex Highlights"
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
              “Apex Industrial Park has helped us streamline operations and
              future-proof our production lines. The infrastructure is robust
              and scalable.”
            </p>
            <p>
              From smart security to sustainable systems, everything was
              executed with precision. It’s industrial development—done right.{" "}
              <br /> — <em>SteelCore Industries</em>
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/client4.jpeg"
              alt="Client Testimonial"
              className="image"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Looking to Scale Up Smartly?</h2>
        <p>Let’s design the industrial campus your operations deserve.</p>
        <Link to="/" className="cta-button">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
};

export default ApexIndustrialPark;
