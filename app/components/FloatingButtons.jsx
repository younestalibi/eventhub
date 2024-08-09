'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaTelegramPlane, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const FloatingButtons = () => {

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.2 }
  };

  return (
    <div className="hidden sm:flex fixed top-1/2 right-4 transform -translate-y-1/2 flex-col space-y-2 z-50">
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={buttonVariants}
        transition={{ duration: 0.3 }}
      >
        <button className="p-4 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-600 transition duration-300">
          <FaWhatsapp size={24} />
        </button>
      </motion.a>
      
      <motion.a
        href="https://t.me/username"
        target="_blank"
        rel="noopener noreferrer"
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={buttonVariants}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <button className="p-4 bg-blue-500 rounded-full text-white shadow-lg hover:bg-blue-600 transition duration-300">
          <FaTelegramPlane size={24} />
        </button>
      </motion.a>
      
      <motion.a
        href="mailto:example@example.com"
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={buttonVariants}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <button className="p-4 bg-red-500 rounded-full text-white shadow-lg hover:bg-red-600 transition duration-300">
          <FaEnvelope size={24} />
        </button>
      </motion.a>
      
      <motion.button
        onClick={handleGoToTop}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={buttonVariants}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <div className="p-4 bg-gray-800 rounded-full text-white shadow-lg hover:bg-gray-900 transition duration-300">
          <FaArrowUp size={24} />
        </div>
      </motion.button>
    </div>
  );
};

export default FloatingButtons;
