import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common components
import Header from "./components/common/Header";
import VideoBackground from "./components/common/VideoBackground";
import Contact from "./components/common/Contact";

// Home sections
import About from "./components/home/About";
import Services from "./components/home/Services";
import Portfolio from "./components/home/Portfolio";
import Testimonial from "./components/home/Testimonial";
import ContactTeaser from "./components/home/ContactTeaser";

// Service Detail Pages
import ServiceDetail from "./pages/services/ServiceDetail";

// Portfolio Detail Pages
import PortfolioDetail from "./pages/portfolio/portfolioDetail";
import MasterpieceDetail from "./pages/portfolio/MasterpieceDetail";
import ScrollToTop from "./components/common/ScrollToTop";
import Footer from "./components/common/Footer";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Header />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <VideoBackground />
              <ScrollToTop />
              <section id="about">
                <About />
              </section>
              <section id="services">
                <Services />
              </section>
              <section id="portfolio">
                <Portfolio />
              </section>
              <section id="testimonial">
                <Testimonial />
              </section>
              <ContactTeaser />
            </>
          }
        />

        {/* Services Detail Pages */}
        <Route path="/services/:slug" element={<ServiceDetail />} />

        {/* Portfolio Detail Pages */}
        <Route
          path="/portfolio/MasterpieceDetail"
          element={<MasterpieceDetail />}
        />
        <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
