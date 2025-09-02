"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/utils";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-[80vh] flex items-center justify-center py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto px-4 text-center md:text-left">
          <h2 className="section-heading">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all bg-[#0f0f0f]"
            >
              <h3 className="text-xl font-bold mb-2">
                C Chess Engine
              </h3>
              <p className="text-gray-400 mb-4 md:text-lg">
                An open-source C chess engine I developed which implements a robust framework for chess gameplay,
                utilizing efficient algorithms and data structures.
                Features a compact board representation through bitboards,
                enabling legal move generation while adhering to all chess rules.
                This engine employs the Minimax algorithm enhanced with alpha-beta pruning to optimize search efficiency.
                A heuristic evaluation function assesses board states based on material balance, piece activity,
                and control of key squares, guiding the engine's move selection.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                {[
                  "Open-Source",
                  "C",
                  "CUnit",
                  "CMake",
                  "Artificial Intelligence",
                  "Minimax Algorithm",
                  "Alpha-Beta Pruning",
                  "Dynamic Programming",
                ].map((tech, key) => (
                  <span key={key} className="tech-icon">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/eMujakic/ACC-Engine"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-200 transition-colors my-4 mx-auto md:mx-0"
                >
                  View Project ➡
                </a>
              </div>
            </div> */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all bg-[#0f0f0f]"
            >
              <h3 className="text-xl font-bold mb-2">
                Temperature and Humidity Monitoring System{" "}
              </h3>
              <p className="text-gray-400 mb-4 md:text-lg">
                A comprehensive Internet of Things (IoT) solution that monitors
                temperature and humidity levels. Utilizes an ESP32 device to
                collect data from sensors and transmit it to a web application.
                The ESP32's Wi-Fi capabilities enable it to collect data from the
                sensors and transmit it to a backend server.
                A user-friendly interface was created to display real-time
                environmental metrics, making it easy for users to access the
                information.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                {[
                  "C++",
                  "ESP32",
                  'Sensor Interfacing',
                  'Power Management',
                  "React",
                  "Node.js",
                  "AWS Amplify",
                  "EC2",
                  "TypeScript",
                  "Recharts",
                ].map((tech, key) => (
                  <span key={key} className="tech-icon">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="/weather"
                  className="text-blue-400 hover:text-blue-200 transition-colors my-4 mx-auto md:mx-0"
                >
                  View Project ➡
                </a>
              </div>
            </div>
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all bg-[#0f0f0f]"
            >
              <h3 className="text-xl font-bold mb-2">
                Technical Knowledge Base{" "}
              </h3>
              <p className="text-gray-400 mb-4 md:text-lg">
                A knowledge hub to store and share my notes in the fields of computer engineering/science,
                electrical engineering, and mathematics. I detail key concepts in areas such as artificial intelligence,
                digital logic, and computer architecture. I also provide in-depth summaries of
                foundational textbooks such as <i>Artificial Intelligence: A Modern Approach</i> and <i>Computer Organization and Design</i>.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                {[
                  "Computer Science",
                  "Computer Engineering",
                  'Embedded Engineering',
                  "Artificial Intelligence",
                  "Electrical Engineering",
                  "Machine Learning",
                  "Computer Architecture"
                ].map((tech, key) => (
                  <span key={key} className="tech-icon">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://emujakic.github.io/TechKB/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-200 transition-colors my-4 mx-auto md:mx-0"
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
