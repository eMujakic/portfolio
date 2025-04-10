"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/utils";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={containerVariants}
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text leading-right text-transparent">
            Hi, I'm Ernad Mujakic
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugit
            nulla dolorum accusamus, officiis facere eaque sit vitae architecto
            dolores tempora suscipit, aliquam nemo ducimus at aut totam
            provident tenetur!
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transtion
                                                 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </motion.div>{" "}
    </section>
  );
};

export default Home;
