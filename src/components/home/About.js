import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2 class="about-title">Who We Are!</h2>
        <p class="about-text">
          At <strong>ConstructEdge</strong>, we don’t just build structures — we
          build legacies. With over <strong>15 years</strong> of hands-on
          experience, our team delivers cutting-edge construction solutions for
          commercial, residential, and interior projects.
          <br />
          <br />
          Our work is defined by precision, passion, and purpose. From blueprint
          to breakthrough, we bring visions to life — one project at a time.
        </p>
        <section class="mission-vision-section">
          <div class="mv-container">
            <div class="mv-block">
              <h2>Our Mission</h2>
              <p>
                To build enduring structures and relationships through
                integrity, innovation, and exceptional craftsmanship. We strive
                to exceed client expectations at every phase.
              </p>
            </div>
            <div class="mv-block">
              <h2>Our Vision</h2>
              <p>
                To be recognized as a benchmark in modern construction—leading
                with sustainable practices, smart technology, and a people-first
                mindset.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
export default About;
