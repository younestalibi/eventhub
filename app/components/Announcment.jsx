import React from 'react';

const Announcement = () => {
    
    return (
        <div className="bg-black px-4 py-3 text-white">
            <p className="text-center text-sm font-medium sm:flex sm:justify-center sm:space-x-4 sm:gap-8">
                <span className="block sm:inline"><span className='text-blue-500 font-bold mr-2'>Date:</span> September 30, 2024 at 5:30 PM.</span>
                <span className="block sm:inline"><span className='text-blue-500 font-bold mr-2'>Place:</span> Dubai, ATLANTIS, THE PALM.</span>
            </p>
        </div>
    );
};

export default Announcement;
