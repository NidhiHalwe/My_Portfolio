import React from "react";
import { motion } from "framer-motion";

const achievements = [
  "Solved 200+ DSA problems on LeetCode using Java",
  "Built 5+ frontend projects with clean UI and 85%+ user satisfaction",
  "Continuously improving development and problem-solving skills through self-learning"
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Achievements
      </motion.h2>

      <div className="max-w-4xl mx-auto grid gap-6">
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            className="bg-teal-50 dark:bg-teal-900 p-5 rounded-xl shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <p className="text-gray-800 dark:text-gray-100 font-semibold">{ach}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
