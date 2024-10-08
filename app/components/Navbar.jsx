'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Announcement from './Announcement';
import { appName } from '../config/Constant';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        const announcementHeight = document.querySelector('.announcement')?.offsetHeight || 0;
        console.log(announcementHeight)
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
        <>
            {!isFixed && <Announcement />}
            <header className={`transition-all duration-300 ${isFixed ? 'sticky w-screen top-0 z-50 shadow-lg bg-white' : 'relative'}`}>
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="md:flex md:items-center md:gap-12">
                            <a className="block text-teal-600" href="#">
                                <span className="sr-only">Home</span>
                                <span className="">{appName}</span>
                                {/* <Image
                                    src={logo}
                                    alt='logo'
                                    width={120}
                                /> */}
                            </a>
                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#hero">Home</a></li>
                                    <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#speakers">Speakers</a></li>
                                    <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#sponsors">Sponsors</a></li>
                                    <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#about-us">About Us</a></li>
                                    <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#discussion-topics">Discussion Topics</a></li>
                                    <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#pricing">Pricing</a></li>
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
                                <button
                                    className="z-50 rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                    onClick={toggleMenu}
                                >
                                    <motion.div
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: isMenuOpen ? 90 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {isMenuOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
                                    </motion.div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden fixed top-16 inset-x-0 bg-white shadow-lg z-40"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.3 }}
                        >
                            <nav aria-label="Global">
                                <ul className="mt-4 space-y-2 px-4 text-sm">
                                    <li><a className="block rounded-lg px-4 py-2 text-gray-500 transition hover:bg-gray-100" href="#hero" onClick={toggleMenu}>Home</a></li>
                                    <li><a className="block rounded-lg px-4 py-2 text-gray-500 transition hover:bg-gray-100" href="#speakers" onClick={toggleMenu}>Speakers</a></li>
                                    <li><a className="block rounded-lg px-4 py-2 text-gray-500 transition hover:bg-gray-100" href="#sponsors" onClick={toggleMenu}>Sponsors</a></li>
                                    <li><a className="block rounded-lg px-4 py-2 text-gray-500 transition hover:bg-gray-100" href="#about-us" onClick={toggleMenu}>About Us</a></li>
                                    <li><a className="block rounded-lg px-4 py-2 text-gray-500 transition hover:bg-gray-100" href="#discussion-topics" onClick={toggleMenu}>Discussion Topics</a></li>
                                    <li><a className="block rounded-lg px-4 py-2 text-gray-500 transition hover:bg-gray-100" href="#pricing" onClick={toggleMenu}>Pricing</a></li>
                                </ul>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Navbar;
