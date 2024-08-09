import React from 'react';
import topic1 from '../../public/assets/topics/topic1.jpg';
import topic2 from '../../public/assets/topics/topic2.jpg';
import Image from 'next/image';

const discussionTopics = [
    {
        title: 'WHAT WEB 3.0 MEANS FOR ENTERPRISES',
        speaker: 'Fred Zhou',
        image: topic1
    },
    {
        title: 'VALUE CREATION IN THE METAVERSE',
        speaker: 'Adrian Zduńczyk',
        image: topic2
    },
    {
        title: 'THE ROLE OF STABLECOINS IN A DECENTRALIZED ECOSYSTEM',
        speaker: 'Victoria Scholar',
        image: topic1,
    },
    {
        title: 'DAOS: NEW BREED OF INTERNET-NATIVE ORGANIZATIONS',
        speaker: 'Stephen Lindsay',
        image: topic1,
    },
    {
        title: 'MAXIMIZING ESG IMPACT WITH BLOCKCHAIN',
        speaker: 'Daniel Antcliff',
        image: topic1,
    },
    {
        title: 'BRIDGING DEFI AND CEFI',
        speaker: 'Ilyas Vali',
        image: topic1,
    },
    {
        title: 'WEB 3 GAMING: THE NEW FRONTIER?',
        speaker: 'Russell Armand',
        image: topic1,
    },
    {
        title: 'DECRYPTING THE REGULATORY LANDSCAPE OF VIRTUAL ASSETS',
        speaker: 'Danny Winn',
        image: topic1,
    },
    {
        title: 'CENTRAL BANK DIGITAL CURRENCIES, AND CROSS-BORDER PAYMENTS',
        speaker: 'Lex Sokolin',
        image: topic1,
    },
    {
        title: 'WEB 3: THE FUTURE IS HERE AND NOW',
        speaker: 'Pieter Vanhove',
        image: topic1,
    },
    {
        title: 'NFT MARKET OVERVIEW: TRENDS & OPPORTUNITIES',
        speaker: 'Lennix Lai',
        image: topic1,
    },
    {
        title: 'INTEROPERABILITY - CHALLENGES AND OPPORTUNITIES',
        speaker: 'Delphine Forma',
        image: topic1,
    }
];

const DiscussionTopics = () => {
    return (
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {discussionTopics.map((topic, index) => (
                    <article key={index} className="flex flex-col bg-white transition-shadow shadow hover:shadow-lg rounded-lg overflow-hidden">
                        <Image
                            width={'500'}
                            height={'500'}
                            alt={topic.title}
                            src={topic.image}
                            className="w-full h-48 object-cover"
                            loading='eager'
                            placeholder='blur'
                        />
                        <div className="p-4 flex flex-col flex-1">
                            <h3 className="font-bold text-gray-900 text-lg">{topic.title}</h3>
                            <p className="mt-2 text-gray-700 text-sm">'Speaker: {topic.speaker}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default DiscussionTopics;
