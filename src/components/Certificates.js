import React from "react";
import { motion } from "framer-motion";

const certificates = [
  "HTML CSS – Infosys Springboard (March 2024): Certified training on web development fundamentals, semantic HTML, and responsive CSS",
  "Web Development Internship – Codsoft (April 2024): Completed 1-month internship with hands-on HTML, CSS, JavaScript projects",
  "Web Development Internship – Oasis Infobyte (March 2024): Developed multiple frontend projects and gained practical experience in responsive design",
  "Python for Beginners – Simplilearn (February 2023): Beginner-level Python training covering syntax, loops, functions, and data structures"
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-800">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Certificates
      </motion.h2>

      <div className="max-w-4xl mx-auto grid gap-6">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <p className="text-gray-800 dark:text-gray-100 font-medium">{cert}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
