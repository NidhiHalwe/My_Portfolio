import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Development Intern",
    company: "Codsoft",
    duration: "Nov 2022–Present",
    details: [
      "Designed and built responsive web pages using HTML, CSS, and JavaScript.",
      "Developed projects like Todo List and Calculator to demonstrate interaction and logic.",
      "Improved front-end performance and UI consistency across devices."
    ]
  },
  {
    role: "Web Development Intern",
    company: "Oasis Infobyte",
    duration: "Mar 2024–Apr 2024",
    details: [
      "Created 3 web-based mini-projects including portfolio, temperature converter, and landing page.",
      "Focused on clean UI/UX and mobile responsiveness.",
      "Practiced version control using Git and agile development approach."
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-800"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto relative before:absolute before:left-1/2 before:top-0 before:h-full before:w-1 before:-translate-x-1/2 before:bg-gray-300 dark:before:bg-gray-600">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className={`mb-10 w-full md:w-1/2 px-6 relative ${
              idx % 2 === 0 ? "md:left-0 md:text-left" : "md:left-1/2 md:text-right"
            }`}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl text-teal-500">{exp.role}</h3>
              <span className="text-gray-500 dark:text-gray-300">{exp.company}</span>
              <span className="block text-gray-400 dark:text-gray-400 text-sm mb-2">{exp.duration}</span>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
