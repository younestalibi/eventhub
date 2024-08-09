'use client';

import React from 'react';
import CountUp from 'react-countup';

const statsData = [
    { label: 'Visitor', end: 5000, duration: 3 },
    { label: 'Companies', end: 24, duration: 2.7 },
    { label: 'Speakers', end: 12, duration: 2.5 },
    { label: 'Countries', end: 15, duration: 2.5 },
    { label: 'Sponsors', end: 8, duration: 2 }
];

const Stats = () => {
    return (
        <section
            className="text-white bg-cover bg-center bg-no-repeat bg-fixed my-20"
            style={{
                backgroundImage: 'url(/assets/world-map.jpg)',
            }}
        >
            <div className="bg-black bg-opacity-50">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:divide-x sm:divide-gray-100">
                            {statsData.map((stat, index) => (
                                <div key={index} className="flex flex-col px-4 py-8 text-center">
                                    <dt className="order-last text-lg font-medium">{stat.label}</dt>
                                    <dd className="text-4xl font-extrabold md:text-5xl">
                                        <CountUp end={stat.end} duration={stat.duration} suffix='+' />
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
