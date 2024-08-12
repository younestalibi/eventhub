'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import speaker1 from '../../public/assets/speakers/speaker1.jpg';
import speaker2 from '../../public/assets/speakers/speaker2.jpg';
import Container from './Container';
import Title from './Title';

const speakersData = [
    {
        name: 'Russell Armand',
        role: 'Ledger Enterprise',
        imageUrl: speaker1,
    },
    {
        name: 'Danny Winn',
        role: 'CoinMENA',
        imageUrl: speaker2,
    },
    {
        name: 'Ilyas Vali',
        role: 'Bitget',
        imageUrl: speaker1,
    },
    {
        name: 'Lex Sokolin',
        role: 'Binance',
        imageUrl: speaker2,
    },
    {
        name: 'Pieter Vanhove',
        role: 'Fireblocks',
        imageUrl: speaker1,
    },
    {
        name: 'Adrian Zduńczyk',
        role: 'OneFootball Labs',
        imageUrl: speaker2,
    },
    {
        name: 'Daniel Antcliff',
        role: 'Lisk',
        imageUrl: speaker1,
    },
    {
        name: 'Delphine Forma',
        role: 'Dubai International Financial Centre Authority',
        imageUrl: speaker2,
    },
    {
        name: 'Fred Zhou',
        role: 'Alserkal Group',
        imageUrl: speaker1,
    },
    {
        name: 'Lennix Lai',
        role: 'OKX',
        imageUrl: speaker2,
    },
    {
        name: 'Victoria Scholar',
        role: 'Ripple',
        imageUrl: speaker1,
    },
    {
        name: 'Stephen Lindsay',
        role: 'Vechain',
        imageUrl: speaker2,
    }
];

const Speakers = () => {
    return (
        <Container>
            <Title title={"MEET OUR SPEAKERS"}></Title>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mx-auto">
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
        </Container>
    );
};

export default Speakers;
