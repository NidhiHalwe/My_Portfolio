import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-4xl mx-auto text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I'm <span className="font-semibold text-teal-500">Nidhi Halwe</span>, a passionate web developer with a strong foundation in 
        frontend technologies and a keen interest in building interactive and responsive web applications. 
        I specialize in React, Tailwind CSS, and creating projects that are visually appealing, performant, and user-friendly.
        I continuously challenge myself by solving DSA problems and implementing real-world projects to enhance my skills.
      </motion.p>
    </section>
  );
}
