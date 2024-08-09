'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const sponsorsData = [
    {
        name: 'a16z Crypto',
        logoUrl: 'https://a16zcrypto.com/_nuxt/img/a16zcrypto_Logo.c061c73.svg',
        link: 'https://a16zcrypto.com/'
    },
    {
        name: 'Casper Network',
        logoUrl: 'https://seeklogo.com/images/C/casper-network-cspr-logo-C99CE67F4C-seeklogo.com.png',
        link: 'https://casper.network/'
    },
    {
        name: 'IOHK',
        logoUrl: 'https://ucarecdn.com/0a28215f-a3f0-40e2-ac7e-d7dc93288d16/-/resize/200/-/format/webp/-/quality/best/-/progressive/yes/',
        link: 'https://iohk.io/'
    },
    {
        name: 'JPMorgan Chase',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/07/J_P_Morgan_Chase_Logo_2008_1.svg',
        link: 'https://www.jpmorganchase.com/'
    },
    {
        name: 'PQShield',
        logoUrl: 'https://thequantuminsider.com/wp-content/uploads/PQSHIELD.png',
        link: 'https://pqshield.com/'
    },
    {
        name: 'IBM',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png?20220104162604',
        link: 'https://www.ibm.com/'
    },
    {
        name: 'NTT Research',
        logoUrl: 'https://ntt-research.com/wp-content/uploads/2020/07/Untitled.png',
        link: 'https://ntt-research.com/'
    },
    {
        name: 'Hyperledger',
        logoUrl: 'https://fintechtime.com/wp-content/uploads/2023/10/Hyperledger_Foundation_Logo.jpg',
        link: 'https://www.hyperledger.org/'
    }
];

const Sponsors = () => {
    return (
        <div className='my-20 p-5'>
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-4xl font-extrabold">Our Sponsors</h2>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mt-16 max-w-5xl mx-auto">
                {sponsorsData.map((sponsor, index) => (
                    <motion.a
                        key={index}
                        href={sponsor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-4 rounded-lg shadow-md border cursor-pointer"
                    >
                        <Image
                            src={sponsor.logoUrl}
                            alt={sponsor.name}
                            width={128}
                            height={128}
                            className="w-32 h-32 mx-auto object-contain"
                        />

                        <div className="py-4">
                            <h4 className="text-gray-800 text-base font-bold">{sponsor.name}</h4>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Sponsors;
