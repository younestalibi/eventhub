'use client'

import React, { useEffect, useState } from 'react';
import { calculateTimeLeft } from '../utils/functions';
import { motion } from 'framer-motion';
const Countdown = ({ eventDate }) => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const updateCountdown = () => {
            setTimeLeft(calculateTimeLeft(eventDate));
        };

        updateCountdown();

        const timer = setInterval(updateCountdown, 1000);

        return () => clearInterval(timer);
    }, [eventDate]);

    if (!timeLeft) {
        return null; // Render nothing during the server-side render
    }

    return (
        <motion.div
            className="z-30 fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4 opacity-90 "
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{delay:0.5,duration:0.4,type:'spring'}}
            whileHover={{ opacity: 1, backgroundColor: 'black' }}
        >
            <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                    <span className="text-lg font-semibold">{timeLeft.days || '0'}</span> <span className="text-sm">Days</span>
                </div>
                <div className="text-center">
                    <span className="text-lg font-semibold">{timeLeft.hours || '0'}</span> <span className="text-sm">Hours</span>
                </div>
                <div className="text-center">
                    <span className="text-lg font-semibold">{timeLeft.minutes || '0'}</span> <span className="text-sm">Minutes</span>
                </div>
                <div className="text-center">
                    <span className="text-lg font-semibold">{timeLeft.seconds || '0'}</span> <span className="text-sm">Seconds</span>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <motion.a
                    href="#"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                    whileHover={{
                        scale: 1.1
                    }}
                >
                    BUY TICKET
                </motion.a>
            </div>
        </motion.div>
    );
};

export default Countdown;
