import React from 'react';

const Title = ({ title, children }) => {
    return (
        <div className="mb-20 relative flex justify-center">
            <div
                className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
            ></div>
            <div className="relative z-10 bg-white px-6 text-center text-xl font-semibold">
                <h2 className="text-3xl text-gray-900 sm:text-4xl font-extrabold">
                    {title}
                </h2>
            </div>
            <div className="mt-4 text-center">
                {children}
            </div>
        </div>
    );
};

export default Title;
