import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const stats = [
  {
    id: 1,
    image: "/images/years-experience.jpeg",
    value: 8,
    label: "Years of Experience",
  },
  {
    id: 2,
    image: "/images/projects-completed.jpeg",
    value: 69,
    label: "Projects Completed",
  },
  { id: 3, image: "/images/awards.jpeg", value: 12, label: "Awards" },
];

function About() {
  const refs = useRef([]);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && counts[index] === 0) {
            let current = 0;
            const step = Math.ceil(stats[index].value / 50);
            const interval = setInterval(() => {
              current += step;
              setCounts((prev) => {
                const updated = [...prev];
                updated[index] =
                  current >= stats[index].value ? stats[index].value : current;
                return updated;
              });
              if (current >= stats[index].value) clearInterval(interval);
            }, 60);
          }
        });
      },
      { threshold: 0.8 }
    );

    refs.current.forEach((ref, index) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [counts]);

  return (
    <section
      className="about-section"
      id="about"
      style={{ backgroundImage: "url('/stats-bgg.jpeg')" }}
    >
      <div className="about-content">
        <h2 className="about-title">Who We Are!</h2>
        <p className="about-text">
          At <strong>ConstructEdge</strong>, we don’t just build structures — we
          build legacies. With over <strong>15 years</strong> of hands-on
          experience, our team delivers cutting-edge construction solutions for
          commercial, residential, and interior projects.
          <br />
          <br />
          Our work is defined by precision, passion, and purpose. From blueprint
          to breakthrough, we bring visions to life — one project at a time.
        </p>

        <section className="mission-vision-section">
          <div className="mv-container">
            <div className="mv-block fade-in-up delay-1">
              <h2>Our Mission</h2>
              <p>
                To build enduring structures and relationships through
                integrity, innovation, and exceptional craftsmanship. We strive
                to exceed client expectations at every phase.
              </p>
            </div>
            <div className="mv-block fade-in-up delay-2">
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

      <div className="stats-section">
        <h2 className="stats-tagline">
          Built with Trust. Measured by Mastery. Proven in Numbers.
        </h2>
        <div className="stats-cards">
          {stats.map((stat, i) => (
            <div
              className="stat-card fade-in-up"
              key={stat.id}
              ref={(el) => (refs.current[i] = el)}
            >
              <img src={stat.image} alt={stat.label} className="stat-img" />
              <div className="stat-count">{counts[i]}</div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
