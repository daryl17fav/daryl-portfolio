import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Button from '../ui/Button';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Hero = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate random particles for background effect
        const newParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 15,
            duration: 10 + Math.random() * 10,
        }));
        setParticles(newParticles);
    }, []);

    const socialIcons = [
        { icon: <FaTwitter />, href: 'https://x.com/DarylFav3802', label: 'Twitter' },
        { icon: <FaLinkedin />, href: 'https://linkedin.com/in/daryle-favour-m-i-3b3b37290', label: 'LinkedIn' },
        { icon: <FaGithub />, href: 'https://github.com/daryl17fav', label: 'GitHub' },
        { icon: <FaWhatsapp />, href: 'https://wa.me/22944440251', label: 'WhatsApp' },
    ];

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Particle Background */}
            {/* Particle Background - Only visible in dark mode or subtle in light */}
            <div className="particles opacity-50 dark:opacity-30 pointer-events-none">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="particle bg-primary dark:bg-white"
                        style={{
                            left: `${particle.left}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 z-10">
                <motion.div
                    className="text-center"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Greeting */}
                    <motion.p
                        variants={staggerItem}
                        className="text-text-secondary text-xl md:text-2xl mb-4"
                    >
                        Hi, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        variants={staggerItem}
                        className="text-6xl md:text-8xl font-bold mb-6 text-text-primary dark:text-text-primary-dark"
                    >
                        <span className="text-primary dark:text-primary-dark">
                            Daryl Favour
                        </span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        variants={staggerItem}
                        className="text-2xl md:text-3xl text-text-secondary mb-12 max-w-3xl mx-auto"
                    >
                        Mobile & Full Stack Developer
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={staggerItem}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                    >
                        <a href="/daryl-cv.pdf" download="daryl-cv.pdf" className="no-underline">
                            <Button variant="primary" icon={<HiDownload />}>
                                Download CV
                            </Button>
                        </a>
                        <Button variant="outline" icon={<HiMail />} onClick={scrollToContact}>
                            Contact Me
                        </Button>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        variants={staggerItem}
                        className="flex gap-6 justify-center"
                    >
                        {socialIcons.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-300"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
