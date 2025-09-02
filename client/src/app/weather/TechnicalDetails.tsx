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
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechnicalDetails;
