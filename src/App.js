import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import AboutUsLeftCircle from "../src/AboutUsLeftCircle.png";
import AboutUsRightCircle from "../src/Images/AboutUsRIghtCircle.png";
import QuickLinksSection from "../src/Pages/QuickLinksSection";
function App() {
  const { scrollYProgress } = useScroll();

  return (
    // REMOVED <Router> wrapper (now in index.js)
    <div className="flex flex-col min-h-screen relative">
      {/* All your existing content remains the same */}
      <img src={AboutUsLeftCircle} alt="Glow left" className="absolute top-0 left-0 z-0" />
      <img src={AboutUsRightCircle} alt="Glow right" className="absolute top-0 right-0 z-0" />

      <div className="relative z-50">
        <Navbar />
      </div>

      <main className="flex-grow relative z-40">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>

        <motion.div
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            transformOrigin: "left",
            backgroundColor: "#CBE26B",
            zIndex: 9999,
          }}
        />
      </main>

      <QuickLinksSection />
      <Footer />
    </div>
    // REMOVED </Router> closing tag
  );
}

export default App;
