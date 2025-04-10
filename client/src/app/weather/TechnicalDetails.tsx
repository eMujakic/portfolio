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
          This IoT project leverages an ESP32 microcontroller to gather temperature and humidity data,
          which is transmitted to a RESTful API developed with Node.js and Express.js. To enhance power efficiency,
          the ESP32 enters sleep mode when not actively collecting data, significantly reducing energy consumption.
          The backend is powered by DynamoDB for efficient data storage and management,
          while AWS Lambda provides a scalable deployment environment.
          Recharts is utilized for dynamic data visualization,
          enabling users to view real-time metrics through interactive charts.
          The architecture supports modularity and scalability,
          making it adaptable for future enhancements and additional sensor integrations.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "C++",
              "React",
              "Node.js",
              "AWS",
              "DynamoDB",
              "TypeScript",
              "Recharts",
              "ESP32", "PlatformIO"
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
