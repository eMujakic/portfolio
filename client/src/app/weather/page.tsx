"use client"

import React, { useState } from "react";
import ParticlesBackground from "@/components/ParticleBackground";
import WeatherCard from "./WeatherCard";
import Overview from "./Overview";
import TechnicalDetails from "./TechnicalDetails";
import Navbar from "@/components/Navbar";
import MobileMenu from "@/components/MobileMenu";

const Weather = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ParticlesBackground />
      <div className="min-h-screen transition-opacity duration-200 z-auto text-white">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div >
        <WeatherCard />
        <Overview />
        <TechnicalDetails />
        </div>
      </div>
    </>
  );
};

export default Weather;
