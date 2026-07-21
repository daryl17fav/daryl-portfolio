import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { slideUpStagger, staggerItem } from '../../utils/animations';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            year: '2026 – Present',
            role: 'Full-Stack Developer & Community Manager',
            company: 'IT Service and Solutions',
            description: 'Leading key product operations and quality assurance strategies across mobile and web ecosystems while translating user insights into feature roadmaps.',
            achievements: [
                'Product Operations: Lead developer for Digital School (Mobile) and Compta ERP (Frontend); bridged the gap between development and end-user requirements.',
                'Quality Assurance: Engineered the QA strategy for the entire ecosystem; led UAT and regression testing cycles across Web and Mobile, reducing post-launch critical bugs by 40%.',
                'Growth Strategy: Manage the digital ecosystem community; translate user analytics and feedback into actionable product feature roadmaps and brand engagement campaigns.'
            ],
            tech: ['Flutter', 'Vue.js', 'Nuxt.js', 'PostgreSQL']
        },
        {
            id: 2,
            year: '2025 – Present',
            role: 'Full-Stack Software Engineer (Remote)',
            company: 'Rysnc Lab',
            description: 'Architecting distributed systems, databases, and high-concurrency payment integrations.',
            achievements: [
                'System Architecture: Architecting and maintaining distributed backend systems and high-concurrency mobile payment infrastructure.',
                'Engineering Ownership: Lead developer for Sekurr Pay, ensuring secure transaction pipelines and API reliability within a distributed agile environment.'
            ],
            tech: ['Flutter', 'Firebase', 'RESTful APIs', 'AWS']
        },
        {
            id: 3,
            year: 'Oct 2025 — Jan 2026',
            role: 'Mobile Developer',
            company: 'Monniz',
            description: 'Developing and maintaining mobile applications using Flutter and Dart. Collaborating with cross-functional teams to implement new features.',
            achievements: [
                'New feature implementation & code reviews',
                'Debugging & UI/UX optimization',
                'Agile development & GitLab workflow',
            ],
            tech: ['Flutter', 'Dart', 'GitLab']
        },
        {
            id: 4,
            year: 'Jul 2025 — Sep 2025',
            role: 'Summer Intern (Full-Stack)',
            company: 'AZUR COURTAGE',
            description: 'Built responsive front-end interfaces using Vue.js and Nuxt. Supported DevOps processes with Docker and AWS.',
            achievements: [
                'Built responsive interfaces with Vue.js/Nuxt',
                'Containerized development with Docker',
                'Assisted with AWS cloud deployments',
            ],
            tech: ['Vue.js', 'Nuxt.js', 'Docker', 'AWS']
        },
        {
            id: 5,
            year: 'Nov 2024 — Jun 2025',
            role: 'Software Engineering Intern',
            company: 'E4Afrika',
            description: 'Developed mobile application features using Flutter and implemented CRUD operations. Contributed to UI improvements and testing.',
            achievements: [
                'Implemented CRUD operations in Flutter',
                'UI improvements & bug fixing',
                'Collaborative front-end tasks with JavaScript',
            ],
            tech: ['Flutter', 'Dart', 'JavaScript']
        },
    ];

    return (
        <section id="experience" className="py-24">
            <div className="max-w-5xl mx-auto px-6">
                <SectionTitle eyebrow="// Professional_Journey">
                    Experience
                </SectionTitle>

                <div className="relative">
                    {/* Vertical timeline line */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
                        style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,229,255,0.3) 10%, rgba(0,229,255,0.3) 90%, transparent)' }}
                    />

                    <motion.div
                        className="space-y-12"
                        variants={slideUpStagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                variants={staggerItem}
                                className="md:pl-12 relative group"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-5 -translate-x-1/2 w-3 h-3 hidden md:flex items-center justify-center">
                                    <motion.div
                                        className="w-2 h-2 bg-[#00E5FF]"
                                        animate={{ opacity: [1, 0.3, 1], scale: [1, 0.7, 1] }}
                                        transition={{ duration: 2 + index * 0.4, repeat: Infinity }}
                                        style={{ boxShadow: '0 0 8px rgba(0,229,255,0.8)' }}
                                    />
                                </div>

                                {/* Card */}
                                <motion.div
                                    className="relative border border-white/[0.06] group-hover:border-[#00E5FF]/20 p-6 transition-all duration-400 overflow-hidden"
                                    style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(4px)' }}
                                    whileHover={{
                                        y: -3,
                                        boxShadow: '0 0 40px rgba(0,229,255,0.08), 0 0 80px rgba(123,47,255,0.04)',
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {/* Corner brackets */}
                                    <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00E5FF]/20 group-hover:border-[#00E5FF]/50 transition-colors duration-300" />
                                    <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#00E5FF]/20 group-hover:border-[#00E5FF]/50 transition-colors duration-300" />

                                    {/* Header row */}
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#F0F0F0] tracking-tight">
                                                {exp.role}
                                            </h3>
                                            <p className="text-[#00E5FF]/70 font-mono text-sm tracking-widest mt-0.5">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <span className="font-mono text-[10px] text-[#6B7280] tracking-widest border border-white/[0.07] px-3 py-1.5 whitespace-nowrap self-start"
                                            style={{ background: 'rgba(255,255,255,0.02)' }}>
                                            {exp.year}
                                        </span>
                                    </div>

                                    <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                                        {exp.description}
                                    </p>

                                    {/* Tech environment chips */}
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {exp.tech.map(t => (
                                            <span key={t}
                                                className="text-[9px] px-2 py-0.5 border border-[#00E5FF]/15 text-[#00E5FF]/50 font-mono uppercase tracking-wider"
                                                style={{ background: 'rgba(0,229,255,0.03)' }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Achievements */}
                                    <div className="space-y-2 border-t border-white/[0.05] pt-4">
                                        <p className="font-mono text-[10px] uppercase tracking-widest text-[#00E5FF]/40 mb-3">
                                            {'// Key Achievements'}
                                        </p>
                                        <ul className="space-y-1.5">
                                            {exp.achievements.map((ach, i) => (
                                                <li key={i} className="flex items-start gap-3 text-[#6B7280] text-sm">
                                                    <span className="w-1.5 h-1.5 bg-[#00E5FF] shrink-0 mt-1.5"
                                                        style={{ boxShadow: '0 0 4px rgba(0,229,255,0.6)' }}
                                                    />
                                                    <span>{ach}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
