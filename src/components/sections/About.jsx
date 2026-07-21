import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { slideInLeft, slideInRight, staggerContainer, staggerItem } from '../../utils/animations';

const About = () => {
    const stats = [
        { label: 'Yrs Experience', value: '02+' },
        { label: 'Projects Shipped', value: '10+' },
        { label: 'Degree', value: 'B.Sc' },
    ];

    return (
        <section id="about" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* ── LEFT: Profile Image ── */}
                    <motion.div
                        className="relative shrink-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={slideInLeft}
                    >
                        {/* Outer frame */}
                        <div className="absolute -inset-4 border border-[#00E5FF]/10 scale-95 group-hover:scale-100 transition-transform duration-700" />
                        <div className="absolute -inset-1 border border-[#00E5FF]/20 opacity-0 hover:opacity-100 transition-opacity duration-700" />

                        {/* Scan line */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00E5FF] z-20 animate-scan"
                            style={{ boxShadow: '0 0 12px rgba(0,229,255,0.8)' }}
                        />

                        {/* Image */}
                        <div className="relative w-64 h-80 md:w-72 md:h-[420px] overflow-hidden border border-white/[0.07] grayscale hover:grayscale-0 transition-all duration-700">
                            <img
                                src="/me-pic.jpg"
                                alt="Daryl Favour"
                                className="w-full h-full object-cover"
                            />
                            {/* HUD overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-[#00E5FF]/70 space-y-0.5">
                                <p>ID: DF_992</p>
                                <p>LOC: COTONOU, BN</p>
                                <p>STATUS: <span className="text-[#00E5FF]">ACTIVE</span></p>
                            </div>
                        </div>

                        {/* Corner accents */}
                        <div className="absolute -top-2 -left-2 w-5 h-5 border-t border-l border-[#00E5FF]/50" />
                        <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b border-r border-[#00E5FF]/50" />
                    </motion.div>

                    {/* ── RIGHT: Bio ── */}
                    <motion.div
                        className="flex-1 space-y-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={slideInRight}
                    >
                        <SectionTitle eyebrow="// Identity_Manifest">
                            Daryl Favour
                        </SectionTitle>

                        <div className="space-y-5 text-[#6B7280] leading-relaxed text-[1.05rem] max-w-xl">
                            <p>
                                <span className="text-[#F0F0F0] font-medium italic">
                                    "The future isn't coded; it's engineered."
                                </span>
                            </p>
                            <p>
                                I am a{' '}
                                <span className="text-[#00E5FF]">Software Engineer</span>{' '}
                                specialized in synthesizing high-performance mobile ecosystems and
                                scalable web architectures. By merging the fluid precision of{' '}
                                <span className="text-[#F0F0F0] border-b border-[#00E5FF]/30">Flutter</span>{' '}
                                with the reactive power of Vue and Next.js, I build interfaces that
                                bridge the gap between human intuition and machine efficiency.
                            </p>
                        </div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-6 pt-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {stats.map(stat => (
                                <motion.div
                                    key={stat.label}
                                    variants={staggerItem}
                                    className="border-l border-[#00E5FF]/25 pl-4 hover:border-[#00E5FF]/70 transition-colors duration-300"
                                >
                                    <div className="text-3xl font-bold text-[#F0F0F0] tracking-tight"
                                        style={{ textShadow: '0 0 20px rgba(0,229,255,0.2)' }}>
                                        {stat.value}
                                    </div>
                                    <div className="text-[10px] uppercase tracking-widest text-[#00E5FF]/50 font-mono mt-1">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Download CTA */}
                        <motion.div variants={staggerItem}>
                            <a
                                href="/daryll-cv.pdf"
                                download
                                className="group inline-flex items-center gap-3 px-6 py-3 border border-[#00E5FF]/30 text-[#00E5FF]/60 hover:text-[#050505] hover:border-[#00E5FF] font-mono text-sm uppercase tracking-widest transition-all duration-300 overflow-hidden relative"
                            >
                                <span className="absolute inset-0 bg-[#00E5FF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                                <Download size={16} className="relative z-10" />
                                <span className="relative z-10">Download Resume</span>
                            </a>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
