"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/utils";

const About = () => {
  const frontendSkills = [
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "Next.js",
    "TailwindCSS",
    "Typescript",
    "Recharts",
  ];

  const backendSkills = [
    "Python",
    "C & C++",
    "JavaScript / Typescript",
    // "AI & Machine Learning",
    "MySQL & PostgreSQL",
    "MongoDB",
    "Node.js & Express.js",
    "Django",
    "Spring Boot",
    "Linux",
    "Git",
    "AWS",
    // "Docker",
    "RESTful APIs",
    "Agile & Scrum Methodologies",
    "Java",
  ];

  return (
    <section
      id="about"
      className="min-h-[80vh] flex items-center justify-center py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
      >
        <div className="max-w-3xl mx-auto px-4 text-center md:text-left">
          <h2 className="section-heading">About Me</h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-[#0f0f0f]">
            <p className="text-gray-200 mb-6 md:text-lg">
              Detail-oriented Computer Science student with a strong foundation
              in software development principles and a keen interest in creating
              innovative applications. Committed to applying analytical skills
              and technical knowledge to contribute to impactful projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {frontendSkills.map((tech, key) => (
                    <span key={key} className="tech-icon ">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {backendSkills.map((tech, key) => (
                    <span key={key} className="tech-icon">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1f gap-6 mt-8 md:text-lg">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-[#0f0f0f]">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-item list-inside text-gray-300 space-y-3">
                <li>
                  <strong>B.S. in Computer Science</strong> - Western Governors
                  Unviersity (2024 - Current)
                </li>
                <li>
                  <i>Releveant Coursework</i>: Data Structures,
                  Software Engineering, Cloud Computing...
                </li>
                <br />
                <h4 className="text-xl font-bold mb-4">📜 Certifications</h4>
                <li>
                  <strong>
                    ITIL Foundation Certificate in IT Service Management
                  </strong>
                  - PeopleCert - February 2025
                </li>
                <li>
                  <strong>Linux Essentials</strong>- Linux Professional
                  Insititute (LPI) - February 2025
                </li>
              </ul>
            </div>
            {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-[#0f0f0f]">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Software Engineer at ABC Corp (2025 - Present)
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem neque quis at possimus quasi hic, Perferendis
                    minus natus quas.
                  </p>
                  <br />
                  <h4 className="font-semibold">
                    Intern at XYZ Inc. (2024 - 2025)
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem neque quis at possimus quasi hic, Perferendis
                    minus natus quas.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
