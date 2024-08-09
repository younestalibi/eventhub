'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import team1 from '../../public/assets/team-1.webp';
import team2 from '../../public/assets/team-2.webp';
import team3 from '../../public/assets/team-3.webp';
import team4 from '../../public/assets/team-4.webp';

const speakersData = [
    {
        name: 'Russell Armand',
        role: 'Ledger Enterprise',
        imageUrl: team1,
    },
    {
        name: 'Danny Winn',
        role: 'CoinMENA',
        imageUrl: team2,
    },
    {
        name: 'Ilyas Vali',
        role: 'Bitget',
        imageUrl: team3,
    },
    {
        name: 'Lex Sokolin',
        role: 'Binance',
        imageUrl: team4,
    },
    {
        name: 'Pieter Vanhove',
        role: 'Fireblocks',
        imageUrl: team1,
    },
    {
        name: 'Adrian Zduńczyk',
        role: 'OneFootball Labs',
        imageUrl: team2,
    },
    {
        name: 'Daniel Antcliff',
        role: 'Lisk',
        imageUrl: team3,
    },
    {
        name: 'Delphine Forma',
        role: 'Dubai International Financial Centre Authority',
        imageUrl: team4,
    },
    {
        name: 'Fred Zhou',
        role: 'Alserkal Group',
        imageUrl: team1,
    },
    {
        name: 'Lennix Lai',
        role: 'OKX',
        imageUrl: team2,
    },
    {
        name: 'Victoria Scholar',
        role: 'Ripple',
        imageUrl: team3,
    },
    {
        name: 'Stephen Lindsay',
        role: 'Vechain',
        imageUrl: team4,
    }
];

const Speakers = () => {
    return (
        <div className='my-20 p-5'>
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
                        <Image
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
