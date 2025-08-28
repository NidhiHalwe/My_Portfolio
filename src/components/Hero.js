import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import profilePic from "../profile.jpg"; 

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Profile Image */}
      <motion.div
        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={profilePic} alt="Nidhi Halwe" className="w-full h-full object-cover" />
      </motion.div>

      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Hi, I'm Nidhi Halwe
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
          Web Developer | Frontend Enthusiast | React & Tailwind CSS
        </p>

        {/* Explore Button */}
        <a
          href="#about"
          className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition-all"
        >
          Explore My Work ↓
        </a>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-5 mt-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/nidhi-halwe-31438a250/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/NidhiHalwe"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/nidhi_halwe/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:nidhihalwe@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
