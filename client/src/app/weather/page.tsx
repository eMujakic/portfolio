"use client";

import React, { useEffect, useState } from "react";
import ParticlesBackground from "@/components/ParticleBackground";
import WeatherCard from "./WeatherCard";
import Overview from "./Overview";
import TechnicalDetails from "./TechnicalDetails";
import Navbar from "@/components/Navbar";
import MobileMenu from "@/components/MobileMenu";
import Loading from "@/components/Loading";
import Contact from "./Contact";

const Weather = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ParticlesBackground />
      <div className="min-h-screen transition-opacity duration-100 z-auto text-white">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div>
          <WeatherCard />
          <Overview />
          <TechnicalDetails />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Weather;
