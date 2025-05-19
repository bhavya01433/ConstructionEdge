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

const services = [
  {
    icon: <Ruler size={40} color="var(--secondary)" />,
    title: "Architecture & Planning",
    description:
      "Innovative blueprints and designs tailored to your space and goals.",
    link: "/services/architecture",
  },
  {
    icon: <Hammer size={40} color="var(--secondary)" />,
    title: "Renovation & Remodeling",
    description: "Transforming structures with modern, functional upgrades.",
    link: "/services/renovation",
  },
  {
    icon: <LayoutTemplate size={40} color="#ffd700" />,
    title: "Interior Designing",
    description:
      "Creating elegant, functional interiors that reflect your personality.",
    link: "/services/interior",
  },
  {
    icon: <Home size={40} color="var(--secondary)" />,
    title: "Residential Construction",
    description: "Building beautiful, lasting homes from foundation to finish.",
    link: "/services/residential",
  },
  {
    icon: <Building2 size={40} color="var(--secondary)" />,
    title: "Commercial Construction",
    description: "Constructing modern workspaces and commercial structures.",
    link: "/services/commercial",
  },
  {
    icon: <ClipboardList size={40} color="var(--secondary)" />,
    title: "Project Management",
    description:
      "Streamlining timelines and budgets for efficient project delivery.",
    link: "/services/project",
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-heading">
        <div className="services-heading-content">
          <h2 className="services-heading-title">Our Core Services</h2>
          <p className="services-description">
            We bring innovation and precision to every project. Explore our core
            offerings.
          </p>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="service-card">
            <div className="icon-container">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="learn-more-text">Learn More →</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
