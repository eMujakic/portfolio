"use client";

import React, { useEffect, useState } from "react";
import Landing from "./landing/page";
import Navbar from "@/components/Navbar";
import MobileMenu from "@/components/MobileMenu";
import ParticlesBackground from "@/components/ParticleBackground";
import Loading from "@/components/Loading";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ParticlesBackground />
      <div className="min-h-screen transition-opacity duration-200 z-auto text-white">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main className={`h-full flex w-full flex-col`}>
          <Landing />
        </main>
      </div>
    </>
  );
};

export default Home;
