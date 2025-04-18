"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/utils";

const TechnicalDetails = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div
        className="mt-34 md:mt-40
                    max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-white"
      >
        <h1 className="section-heading2">
          Technical Details
        </h1>

        <div className="p-0 md:p-6 mt-2">
          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                     hover-glow bg-[#0f0f0f] max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-bold mb-2 text-center">Temperature and Humidity Monitoring System</h3>
            <p className="text-gray-300 mb-4 text-center md:text-left text-lg">
              This IoT project leverages an ESP32 microcontroller for the acquisition and transmission of temperature and humidity data to a RESTful API.
              The front-end architecture utilizes Next.js, Redux, Tailwind CSS, TypeScript, React, and Recharts, enabling a dynamic and responsive user interface with advanced data visualization capabilities.
              A real-time data collection system, written in C++, interfaces with environmental sensors to capture metrics.
              A RESTful API was constructed using Node.js and Express.js, facilitating efficient communication between the ESP32 device and the backend services.
              For deployment, AWS EC2 and Amplify were utilized , ensuring high availability and scalability of the application.
            </p>
            <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
              {[
                "C++",
                "React",
                "Node.js",
                "AWS Amplify",
                "EC2",
                "TypeScript",
                "Recharts",
                "ESP32",
                "PlatformIO",
              ].map((tech, key) => (
                <span key={key} className="tech-icon">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechnicalDetails;
