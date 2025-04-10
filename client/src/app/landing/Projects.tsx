"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/utils";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-heading">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all bg-[#0f0f0f]"
            >
              <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente facilis iste necessitatibus. Officia necessitatibus
                illum, cupiditate totam nihil ducimus deleniti{" "}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span key={key} className="tech-icon">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-200 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all bg-[#0f0f0f]"
            >
              <h3 className="text-xl font-bold mb-2">Social Media Platform</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente facilis iste necessitatibus. Officia necessitatibus
                illum, cupiditate totam nihil ducimus deleniti{" "}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Next.js", "Node.js", "MongoDB", "Docker"].map(
                  (tech, key) => (
                    <span key={key} className="tech-icon">
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-200 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
