import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
    const socialLinks = [
        { icon: <FaTwitter />, href: 'https://x.com/DarylFav3802', label: 'Twitter' },
        { icon: <FaLinkedin />, href: 'https://linkedin.com/in/daryle-favour-m-i-3b3b37290', label: 'LinkedIn' },
        { icon: <FaGithub />, href: 'https://github.com/daryl17fav', label: 'GitHub' },
        { icon: <FaWhatsapp />, href: 'https://wa.me/22944440251', label: 'WhatsApp' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-dark-footer py-8 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright */}
                    <div className="text-text-secondary">
                        © 2025 Daryl. All rights reserved.
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-text-secondary hover:text-primary transition-colors duration-300"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(31, 119, 255, 0.8)' }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <HiArrowUp className="text-2xl" />
            </motion.button>
        </footer>
    );
};

export default Footer;
