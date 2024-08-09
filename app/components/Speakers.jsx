'use client';

import React from 'react';
import { motion } from 'framer-motion';

const speakersData = [
    {
        name: 'Russell Armand',
        role: 'Ledger Enterprise',
        imageUrl: 'https://readymadeui.com/team-1.webp',
    },
    {
        name: 'Danny Winn',
        role: 'CoinMENA',
        imageUrl: 'https://readymadeui.com/team-2.webp',
    },
    {
        name: 'Ilyas Vali',
        role: 'Bitget',
        imageUrl: 'https://readymadeui.com/team-3.webp',
    },
    {
        name: 'Lex Sokolin',
        role: 'Binance',
        imageUrl: 'https://readymadeui.com/team-4.webp',
    },
    {
        name: 'Pieter Vanhove',
        role: 'Fireblocks',
        imageUrl: 'https://readymadeui.com/team-1.webp',
    },
    {
        name: 'Adrian Zduńczyk',
        role: 'OneFootball Labs',
        imageUrl: 'https://readymadeui.com/team-2.webp',
    },
    {
        name: 'Daniel Antcliff',
        role: 'Lisk',
        imageUrl: 'https://readymadeui.com/team-3.webp',
    },
    {
        name: 'Delphine Forma',
        role: 'Dubai International Financial Centre Authority',
        imageUrl: 'https://readymadeui.com/team-4.webp',
    },
    {
        name: 'Fred Zhou',
        role: 'Alserkal Group',
        imageUrl: 'https://readymadeui.com/team-1.webp',
    },
    {
        name: 'Lennix Lai',
        role: 'OKX',
        imageUrl: 'https://readymadeui.com/team-2.webp',
    },
    {
        name: 'Victoria Scholar',
        role: 'Ripple',
        imageUrl: 'https://readymadeui.com/team-3.webp',
    },
    {
        name: 'Stephen Lindsay',
        role: 'Vechain',
        imageUrl: 'https://readymadeui.com/team-4.webp',
    }
];

const Speakers = () => {
    return (
        <div>
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-4xl font-extrabold">MEET OUR SPEAKERS</h2>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mt-16 max-w-5xl mx-auto">
                {speakersData.map((speaker, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-4 rounded-lg shadow-md border cursor-pointer"
                    >
                        <img
                            src={speaker.imageUrl}
                            alt={speaker.name}
                            width={128}
                            height={128}
                            className="w-32 h-32 rounded-full mx-auto"
                        />

                        <div className="py-4">
                            <h4 className="text-gray-800 text-base font-bold">{speaker.name}</h4>
                            <p className="text-gray-800 text-xs mt-1">{speaker.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Speakers;
