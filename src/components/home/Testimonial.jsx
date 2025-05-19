import { useEffect } from "react";
import testimonialData from "../home/testimonialData";
import "./Testimonial.css";

const Testimonial = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".testimonial-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const renderCard = (item) => {
    switch (item.type) {
      case "quote":
        return (
          <div className="testimonial-card quote-card" key={item.id}>
            <p className="quote">“{item.content}”</p>
            <p className="author">- {item.author}</p>
          </div>
        );
      case "stat":
        return (
          <div
            className="testimonial-card stat-card"
            key={item.id}
            style={{ backgroundColor: item.bg || "#222" }}
          >
            <div className="stat-number">{item.number}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        );
      case "video":
        return (
          <div className="testimonial-card video-card" key={item.id}>
            <iframe
              src={item.videoUrl}
              title="testimonial video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="author">- {item.author}</p>
          </div>
        );
      case "image":
        return (
          <div className="testimonial-card image-card" key={item.id}>
            <img src={item.imageUrl} alt="testimonial" />
            <p className="caption">{item.caption}</p>
          </div>
        );
      case "hidden":
        return (
          <div className="testimonial-card hidden-card" key={item.id}>
            <div className="hidden-content">
              <p className="teaser">{item.teaser}</p>
              <p className="reveal">{item.revealText}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="testimonial-section">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonialData.slice(0, 21).map((item) => renderCard(item))}
      </div>
    </section>
  );
};

export default Testimonial;
