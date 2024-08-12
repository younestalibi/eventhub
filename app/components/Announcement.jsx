'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { date, place } from '../config/Constant';

const Announcement = () => {
    return (
        <div className="announcement z-30 bg-black px-4 py-3 text-white">
            <motion.p 
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                className="text-center text-sm font-medium sm:flex sm:justify-center sm:space-x-4 sm:gap-8"
            >
                <span className="block sm:inline">
                    <span className='text-blue-500 font-bold mr-2'>Date:</span> {date}
                </span>
                <span className="block sm:inline">
                    <span className='text-blue-500 font-bold mr-2'>Place:</span> {place}
                </span>
            </motion.p>
        </div>
    );
};

export default Announcement;
