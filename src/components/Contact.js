import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors">
            <FaEnvelope /> 
            <a href="mailto:nidhihalwe@gmail.com">nidhihalwe@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors">
            <FaLinkedin /> 
            <a href="https://www.linkedin.com/in/nidhi-halwe-31438a250/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors">
            <FaGithub /> 
            <a href="https://github.com/NidhiHalwe" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors">
            <FaInstagram /> 
            <a href="https://www.instagram.com/nidhi_halwe/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:text-white"
            required
          />
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-2 rounded transition-colors duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
