import {
  Hammer,
  Home,
  LayoutTemplate,
  Building2,
  Ruler,
  ClipboardList,
} from "lucide-react";
import "./Services.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: <Ruler size={40} color="var(--secondary)" />,
    title: "Architecture & Planning",
    description: "Innovative blueprints and designs tailored to your space and goals. Our expert architects combine creativity with functionality to create spaces that inspire.",
    features: ["Custom Design Solutions", "Space Optimization", "Sustainable Planning"],
    link: "/services/architecture",
  },
  {
    icon: <Hammer size={40} color="var(--secondary)" />,
    title: "Renovation & Remodeling",
    description: "Transforming structures with modern, functional upgrades. We breathe new life into existing spaces while maintaining their character and improving functionality.",
    features: ["Structural Upgrades", "Modern Amenities", "Energy Efficiency"],
    link: "/services/renovation",
  },
  {
    icon: <LayoutTemplate size={40} color="#ffd700" />,
    title: "Interior Designing",
    description: "Creating elegant, functional interiors that reflect your personality. Our designs blend aesthetics with practicality to create spaces you'll love living in.",
    features: ["Custom Furnishings", "Color Schemes", "Lighting Design"],
    link: "/services/interior",
  },
  {
    icon: <Home size={40} color="var(--secondary)" />,
    title: "Residential Construction",
    description: "Building beautiful, lasting homes from foundation to finish. We combine quality materials with expert craftsmanship to create your dream home.",
    features: ["Quality Materials", "Expert Craftsmanship", "Timely Delivery"],
    link: "/services/residential",
  },
  {
    icon: <Building2 size={40} color="var(--secondary)" />,
    title: "Commercial Construction",
    description: "Constructing modern workspaces and commercial structures. We deliver functional, efficient spaces that support your business goals and enhance productivity.",
    features: ["Modern Infrastructure", "Business Solutions", "Future-Proof Design"],
    link: "/services/commercial",
  },
  {
    icon: <ClipboardList size={40} color="var(--secondary)" />,
    title: "Project Management",
    description: "Streamlining timelines and budgets for efficient project delivery. Our experienced team ensures your project stays on track and within budget.",
    features: ["Timeline Management", "Budget Control", "Quality Assurance"],
    link: "/services/project",
  },
];

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-left">
          <div className="services-heading-content">
            <h2 className="services-heading-title">Our Core Services</h2>
            <p className="services-description">
              We bring innovation and precision to every project. From architectural design to project management, we deliver excellence in construction. Our team of experts ensures your vision becomes reality with unmatched quality and attention to detail.
            </p>
          </div>
        </div>

        <div className="services-right">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="service-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="icon-container">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">{feature}</span>
                ))}
              </div>
              <span className="learn-more-text">Learn More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
