import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-bg-default/80 dark:bg-bg-dark/80 backdrop-blur-md shadow-md py-4'
                : 'bg-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    className="text-2xl font-bold text-text-primary dark:text-text-primary-dark"
                    whileHover={{ scale: 1.05 }}
                >
                    <img src="/logo2.png" alt="Logo" className="h-16 w-auto object-contain" />
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className="text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-dark cursor-pointer transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {link.name}
                        </motion.button>
                    ))}

                    {/* Theme Toggle */}
                    <motion.button
                        onClick={toggleTheme}
                        className="text-2xl text-text-primary dark:text-text-primary-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        {theme === 'dark' ? <HiSun /> : <HiMoon />}
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="text-2xl text-text-primary dark:text-text-primary-dark hover:text-primary transition-colors"
                    >
                        {theme === 'dark' ? <HiSun /> : <HiMoon />}
                    </button>
                    <button
                        className="text-3xl text-primary dark:text-primary-dark"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <motion.div
                    className="md:hidden bg-bg-default dark:bg-bg-dark shadow-lg absolute top-full left-0 right-0 border-t border-gray-200 dark:border-gray-800"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    <div className="flex flex-col gap-4 p-6">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-dark cursor-pointer transition-colors duration-300 text-lg text-left w-full"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
