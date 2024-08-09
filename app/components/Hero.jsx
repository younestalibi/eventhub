'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const phrases = [
    "SHAPING THE FUTURE OF FINANCE IN THE CITY OF INNOVATION",
    "EMPOWERING CRYPTO ENTHUSIASTS WORLDWIDE",
    "CONNECTING THE CRYPTO COMMUNITY",
    "LEADING THE DIGITAL REVOLUTION"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [phrases.length]);

  return (
    <section className="relative text-white bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url(https://images.pexels.com/photos/1916816/pexels-photo-1916816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto text-center relative space-y-6">
          <p className="mx-auto mt-4 sm:text-3xl">
            September 30, 2024 at 5:30 PM | Dubai, ATLANTIS, THE PALM.
          </p>
          <h1 className="text-3xl font-extrabold sm:text-6xl">
            CRYPTO EXPO DUBAI 2025
          </h1>

          <motion.p
            className="mx-auto sm:text-2xl"
            key={currentPhraseIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {phrases[currentPhraseIndex]}
          </motion.p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.a
              href="#"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-3 text-sm font-semibold rounded"
              whileHover={{
                scale: 1.1
              }}
            >
              BUY TICKET
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
