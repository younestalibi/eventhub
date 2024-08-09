'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import adrianZdunczyk from '../../public/assets/speakers/adrianZdunczyk.jpg';
import danielAntcliff from '../../public/assets/speakers/danielAntcliff.jpg';
import dannyWinn from '../../public/assets/speakers/dannyWinn.jpg';
import delphineForma from '../../public/assets/speakers/delphineForma.jpg';
import russellArmand from '../../public/assets/speakers/russellArmand.jpg';
import ilyasVali from '../../public/assets/speakers/ilyasVali.jpg';
import lexSokolin from '../../public/assets/speakers/lexSokolin.jpg';
import pieterVanhove from '../../public/assets/speakers/pieterVanhove.jpg';
import fredZhou from '../../public/assets/speakers/fredZhou.jpg';
import lennixLai from '../../public/assets/speakers/lennixLai.jpg';
import victoriaScholar from '../../public/assets/speakers/victoriaScholar.jpg';
import stephenLindsay from '../../public/assets/speakers/stephenLindsay.jpg';

const speakersData = [
    {
        name: 'Russell Armand',
        role: 'Ledger Enterprise',
        imageUrl: russellArmand,
    },
    {
        name: 'Danny Winn',
        role: 'CoinMENA',
        imageUrl: dannyWinn,
    },
    {
        name: 'Ilyas Vali',
        role: 'Bitget',
        imageUrl: ilyasVali,
    },
    {
        name: 'Lex Sokolin',
        role: 'Binance',
        imageUrl: lexSokolin,
    },
    {
        name: 'Pieter Vanhove',
        role: 'Fireblocks',
        imageUrl: pieterVanhove,
    },
    {
        name: 'Adrian Zduńczyk',
        role: 'OneFootball Labs',
        imageUrl: adrianZdunczyk,
    },
    {
        name: 'Daniel Antcliff',
        role: 'Lisk',
        imageUrl: danielAntcliff,
    },
    {
        name: 'Delphine Forma',
        role: 'Dubai International Financial Centre Authority',
        imageUrl: delphineForma,
    },
    {
        name: 'Fred Zhou',
        role: 'Alserkal Group',
        imageUrl: fredZhou,
    },
    {
        name: 'Lennix Lai',
        role: 'OKX',
        imageUrl: lennixLai,
    },
    {
        name: 'Victoria Scholar',
        role: 'Ripple',
        imageUrl: victoriaScholar,
    },
    {
        name: 'Stephen Lindsay',
        role: 'Vechain',
        imageUrl: stephenLindsay,
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
