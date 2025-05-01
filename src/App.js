import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import VideoBackground from "./components/videoBackground";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/portfolio/Portfolio";

// Service Detail Pages
import Architectural from "./pages/services/Architectural";
import Commercial from "./pages/services/Commercial";
import Interior from "./pages/services/Interior";
import Project from "./pages/services/Project";
import Renovation from "./pages/services/Renovation";
import Residential from "./pages/services/Residential";

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
      </Routes>
    </Router>
  );
}

export default App;
