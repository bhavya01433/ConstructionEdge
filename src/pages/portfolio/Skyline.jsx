import { Link } from "react-router-dom";
import "./portfolioDetailed.css";

const Skyline = () => {
  return (
    <div className="portfolio-detailed-container">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <img
          src="/images/skyline.jpeg"
          alt="Skyline Tower Project"
          className="portfolio-hero-image"
        />
        <div className="portfolio-hero-overlay">
          <h1 className="portfolio-title">Skyline Tower Project</h1>
          <p className="portfolio-subtitle">
            Redefining City Skylines with Innovation
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="zigzag-section">
        <div className="zigzag-row">
          <div className="zigzag-text">
            <h2>Project Overview</h2>
            <p>
              The Skyline Tower isn’t just a high-rise—it’s a bold statement in
              steel and glass. Fusing advanced engineering with timeless luxury,
              it redefines what’s possible in modern urban design. Rising as a
              dual-purpose marvel for both commercial and residential
              excellence, it stands as a beacon of sustainable innovation and
              architectural finesse. With Skyline, the city didn't just gain a
              tower—it gained a landmark.
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/skyline2.jpeg"
              alt="Skyline Overview"
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
                <strong>LEED Gold Certified:</strong> Designed with
                sustainability at its core, minimizing environmental impact
                while maximizing energy performance.
              </li>
              <li>
                <strong>Smart Technology Integration:</strong> From lighting to
                HVAC, advanced automation systems ensure peak energy efficiency
                and user comfort.
              </li>
              <li>
                <strong>Luxury Meets Function:</strong> State-of-the-art
                amenities, collaborative office spaces, and premium interiors
                tailored for modern living and working.
              </li>
              <li>
                <strong>Speed + Safety:</strong> Delivered in just 30 months,
                thanks to rigorous safety-first protocols and agile project
                management.
              </li>
            </ul>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/gallery2.jpeg"
              alt="Highlights Skyline project "
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
              “Construct Edge transformed our vision into an architectural icon.
              The Skyline Tower is not just a building—it’s a legacy of
              innovation and excellence. From the first sketch to the final
              beam, their team delivered with precision, creativity, and an
              unshakable commitment to quality."
            </p>
            <p>
              They understood our goals, respected our budget, and still managed
              to exceed every expectation. The integration of smart systems,
              green materials, and future-forward design made this project not
              just relevant—but revolutionary. <br /> —{" "}
              <em>UrbanBuild Group</em>
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/client.jpeg"
              alt="Client Testimonial"
              className="image"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Want to Build a Landmark Like Skyline?</h2>
        <p>Let's collaborate and turn your vision into a towering reality.</p>
        <Link to="/" className="cta-button">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
};

export default Skyline;
