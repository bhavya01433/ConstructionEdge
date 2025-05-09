import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common components
import Header from "./components/common/Header";
import VideoBackground from "./components/common/VideoBackground";

// Home sections
import About from "./components/home/About";
import Services from "./components/home/Services";
import Portfolio from "./components/home/Portfolio";

// Service Detail Pages
import Architectural from "./pages/services/Architectural";
import Commercial from "./pages/services/Commercial";
import Interior from "./pages/services/Interior";
import Project from "./pages/services/Project";
import Renovation from "./pages/services/Renovation";
import Residential from "./pages/services/Residential";

// Portfolio Detail Pages
import Skyline from "./pages/portfolio/Skyline";
import Eden from "./pages/portfolio/Eden";
import NovaOffices from "./pages/portfolio/Nova";
import ApexIndustrialPark from "./pages/portfolio/Apex";
import HorizonVillas from "./pages/portfolio/Horizon";
import TempleRestoration from "./pages/portfolio/Temple";
import MercyHospital from "./pages/portfolio/Mercy";
import PalmGroove from "./pages/portfolio/Palm";
import GreenTech from "./pages/portfolio/Greentech";

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
              <section id="about">
                <About />
              </section>
              <section id="services">
                <Services />
              </section>
              <section id="portfolio">
                <Portfolio />
              </section>
            </>
          }
        />

        {/* Services Detail Pages */}
        <Route path="/services/architecture" element={<Architectural />} />
        <Route path="/services/commercial" element={<Commercial />} />
        <Route path="/services/interior" element={<Interior />} />
        <Route path="/services/project" element={<Project />} />
        <Route path="/services/renovation" element={<Renovation />} />
        <Route path="/services/residential" element={<Residential />} />

        {/* Portfolio Detail Pages */}
        <Route path="/portfolio/skyline" element={<Skyline />} />
        <Route path="/portfolio/eden-residence" element={<Eden />} />
        <Route path="/portfolio/nova-offices" element={<NovaOffices />} />
        <Route path="/portfolio/horizon-villas" element={<HorizonVillas />} />
        <Route path="/portfolio/greentech-towers" element={<GreenTech />} />
        <Route path="/portfolio/the-palm-groove" element={<PalmGroove />} />
        <Route path="/portfolio/mercy-hospital" element={<MercyHospital />} />
        <Route
          path="/portfolio/temple-restoration"
          element={<TempleRestoration />}
        />
        <Route
          path="/portfolio/apex-industrial-park"
          element={<ApexIndustrialPark />}
        />
      </Routes>
    </Router>
  );
}

export default App;
