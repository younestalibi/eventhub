'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import logo from '../../public/assets/hubber-expo-high-resolution-logo-transparent.svg';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        const announcementHeight = document.querySelector('.sticky')?.offsetHeight || 0;
        if (window.scrollY > announcementHeight) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`shadow-lg bg-white transition-all duration-300 ${isFixed ? 'fixed top-0 left-0 right-0 z-50' : 'relative'}`}>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="#">
                            <span className="sr-only">Home</span>
                            <Image
                                src={logo}
                                alt='logo'
                                width={"120"}
                            />
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">Home</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                href="#"
                            >
                                BUY TICKET
                            </a>
                        </div>

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                onClick={toggleMenu}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <motion.div
                    className="md:hidden"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1, padding: 10 }}
                >
                    <nav aria-label="Global">
                        <ul className="mt-4 space-y-2 px-4 text-sm">
                            <li>
                                <a className="block rounded-lg px-4 py-2 text-gray-500 transition hover:bg-gray-100" href="#">Home</a>
                            </li>
                        </ul>
                    </nav>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;
