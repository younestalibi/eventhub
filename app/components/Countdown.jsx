'use client'

import React, { useEffect, useState } from 'react';
import { calculateTimeLeft } from '../utils/functions';

const Countdown = ({ eventDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(eventDate));

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(eventDate));
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, eventDate]);

    return (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4">
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
                <a
                    href="#"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                >
                    Buy Tickets
                </a>
            </div>
        </div>
    );
};

export default Countdown;
