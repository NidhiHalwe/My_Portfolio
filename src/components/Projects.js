import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
    title: "Sorting Visualizer",
    description: "An interactive web app to visualize popular sorting algorithms like Bubble, Merge, and Quick Sort. Includes animations to demonstrate step-by-step execution, enhancing understanding of algorithm efficiency.",
    link: "https://nidhihalwe.github.io/Sorting_Visualizer/"
  },
  {
    title: "Pantry Tracker",
    description: "A simple yet effective pantry management app to track items, quantities, and expiry dates. Designed to improve organization and reduce food waste with a user-friendly interface.",
    link: "https://nidhihalwe.github.io/Pantry_Tracker/"
  },
  {
    title: "Temperature Converter",
    description: "A responsive temperature converter that allows users to easily convert values between Celsius and Fahrenheit. Built with clean UI and optimized for usability across devices.",
    link: "https://nidhihalwe.github.io/Temperature_Convertor/"
  },
  {
    title: "Calculator",
    description: "A modern and responsive calculator with a clean UI, built using HTML, CSS, and JavaScript. Provides smooth user experience with basic arithmetic operations on all devices.",
    link: "https://nidhihalwe.github.io/Calculator/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-800">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
            >
              View Code
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
