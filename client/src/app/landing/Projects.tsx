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
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all bg-[#0f0f0f]"
            >
              <h3 className="text-xl font-bold mb-2">
                Full-Stack Real Estate Application
              </h3>
              <p className="text-gray-400 mb-4">
                A comprehensive full stack real estate application that connect
                tenants with properties and enable managers to showcase and
                manage listings. The frontend features a user-friendly interface
                built with modern technologies, ensuring an engaging experience
                for both tenants and managers. The backend supports robust
                functionality, including secure data handling and
                authentication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                {[
                  "AWS",
                  "Amplify",
                  "AWS Cognito",
                  "Typescript",
                  "Node.js",
                  "Express.js",
                  "PostgreSQL",
                  "Next.js",
                  "React",
                ].map((tech, key) => (
                  <span key={key} className="tech-icon">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
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
                Temperature and Humidity Monitoring System{" "}
              </h3>
              <p className="text-gray-400 mb-4">
                A comprehensive Internet of Things (IoT) solution that monitors
                temperature and humidity levels. Utilizes an ESP32 device to
                collect data from sensors and transmit it to a web application.
                A user-friendly interface was created to display real-time
                environmental metrics, making it easy for users to access the
                information.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                {[
                  "C++",
                  "ESP32",
                  "TypeScript",
                  "Node.js",
                  "Express.js",
                  "AWS Lambda",
                  "AWS Lambda",
                  "React",
                  "DynamoDB",
                  "Next.js",
                ].map((tech, key) => (
                  <span key={key} className="tech-icon">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
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
