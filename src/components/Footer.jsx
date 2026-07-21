import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <FaTwitter />,  href: 'https://x.com/DarylFav3802',                         label: 'Twitter'  },
        { icon: <FaLinkedin />, href: 'https://linkedin.com/in/daryle-favour-m-i-3b3b37290', label: 'LinkedIn' },
        { icon: <FaGithub />,   href: 'https://github.com/daryl17fav',                       label: 'GitHub'   },
        { icon: <FaWhatsapp />, href: 'https://wa.me/2290163035022',                          label: 'WhatsApp' },
    ];

    return (
        <footer className="relative border-t border-white/[0.05] py-8">
            {/* Faint top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.3), transparent)' }}
            />

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Copyright */}
                    <p className="font-mono text-[11px] text-[#6B7280] tracking-widest">
                        <span className="text-[#00E5FF]/40">// </span>
                        © 2025 Daryl Favour. All rights reserved.
                    </p>

                    {/* Social icons */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((s, i) => (
                            <motion.a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="p-2.5 border border-white/[0.07] text-[#6B7280] hover:text-[#00E5FF] hover:border-[#00E5FF]/35 transition-all duration-300 text-lg"
                                style={{ background: 'rgba(255,255,255,0.02)' }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -2, boxShadow: '0 0 16px rgba(0,229,255,0.15)' }}
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Status */}
                    <div className="hidden md:flex items-center gap-2 font-mono text-[10px] text-[#6B7280] tracking-widest">
                        <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"
                            animate={{ opacity: [1, 0.2, 1], scale: [1, 0.7, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        SYSTEM_ONLINE
                    </div>
                </div>
            </div>

            {/* Back to top */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 p-3.5 border border-[#00E5FF]/25 text-[#00E5FF]/60 hover:text-[#00E5FF] hover:border-[#00E5FF]/60 transition-all duration-300"
                style={{ background: 'rgba(5,5,5,0.8)', backdropFilter: 'blur(12px)' }}
                whileHover={{ y: -3, boxShadow: '0 0 24px rgba(0,229,255,0.2)' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                aria-label="Back to top"
            >
                <ArrowUp size={18} />
            </motion.button>
        </footer>
    );
};

export default Footer;
