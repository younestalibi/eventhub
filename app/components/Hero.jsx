'use client'

import React from 'react'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <section
      className="bg-black text-white">

      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto mt-4 sm:text-xl/relaxed">
            September 30, 2024 at 5:30 PM | Dubai, ATLANTIS, THE PALM.
          </p>
          <h1
            className="text-3xl font-extrabold sm:text-5xl"


          >
            CRYPTO EXPO DUBAI 2025
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            SHAPING THE FUTURE OF FINANCE IN THE CITY OF INNOVATION
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Buy Tickets
            </a>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero