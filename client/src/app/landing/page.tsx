import React from "react";
import HomeSection from "./Home";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import ParticlesBackground from "@/components/ParticleBackground";

const Landing = () => {
  return (
    <>
      <div className="min-h-screen transition-opacity duration-200">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Landing;
