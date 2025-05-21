import { useEffect, useRef } from "react";
import testimonialData from "../home/testimonialData";
import "./Testimonial.css";

const Testimonial = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const topRow = testimonialData.slice(0, 10);
  const bottomRow = testimonialData.slice(10, 20);

  // Scroll-triggered reveal animation
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

  // Continuous scroll animation
  useEffect(() => {
    let topX = 0;
    let bottomX = 0;
    const speed = 0.5;

    const animate = () => {
      if (topRef.current && bottomRef.current) {
        topX -= speed;
        bottomX += speed;

        const topWidth = topRef.current.scrollWidth / 2;
        const bottomWidth = bottomRef.current.scrollWidth / 2;

        if (Math.abs(topX) >= topWidth) topX = 0;
        if (Math.abs(bottomX) >= bottomWidth) bottomX = 0;

        topRef.current.style.transform = `translateX(${topX}px)`;
        bottomRef.current.style.transform = `translateX(${bottomX}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const renderCard = (item) => {
    switch (item.type) {
      case "quote":
        return (
          <div className="testimonial-card quote-card">
            <p className="quote">“{item.content}”</p>
            <p className="author">- {item.author}</p>
          </div>
        );
      case "stat":
        return (
          <div
            className="testimonial-card stat-card"
            style={{ backgroundColor: item.bg || "#222" }}
          >
            <div className="stat-number">{item.number}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        );
      case "video":
        return (
          <div className="testimonial-card video-card">
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
          <div className="testimonial-card image-card">
            <img src={item.imageUrl} alt="testimonial" />
            <p className="caption">{item.caption}</p>
          </div>
        );
      case "hidden":
        return (
          <div className="testimonial-card hidden-card">
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

      <div className="testimonial-scroll-wrapper">
        <div className="testimonial-row">
          <div className="testimonial-track" ref={topRef}>
            {[...topRow, ...topRow].map((item, index) => (
              <div key={`top-${index}`} style={{ "--i": index }}>
                {renderCard(item)}
              </div>
            ))}
          </div>
        </div>
        <div className="testimonial-row">
          <div className="testimonial-track" ref={bottomRef}>
            {[...bottomRow, ...bottomRow].map((item, index) => (
              <div key={`bottom-${index}`} style={{ "--i": index }}>
                {renderCard(item)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
