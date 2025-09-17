import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Java", "HTML", "CSS", "JavaScript", "MySQL",
  "React", "Node", "Tailwind CSS", "FastAPI",
  "DSA", "OOP", "Git", "Thunder Client", "VS Code", "Visual Studio", "Eclipse"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Technical Skills
      </motion.h2>

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            className="bg-teal-100 dark:bg-teal-700 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-full font-semibold shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
