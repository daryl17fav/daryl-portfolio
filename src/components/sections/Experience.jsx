import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { fadeUp } from '../../utils/animations';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            year: 'Oct 2025 - Jan 2026',
            role: 'Mobile Developer',
            company: 'Monniz',
            description: 'Developing and maintaining mobile applications using Flutter and Dart. Collaborating with cross-functional teams to implement new features.',
            achievements: [
                'New feature implementation & code reviews',
                'Debugging & UI/UX optimization',
                'Agile development & GitLab workflow',
            ],
        },
        {
            id: 2,
            year: 'Jul 2025 - Sep 2025',
            role: 'Summer Intern (Full-Stack)',
            company: 'AZUR COURTAGE',
            description: 'Built responsive front-end interfaces using Vue.js and Nuxt. Supported DevOps processes with Docker and AWS.',
            achievements: [
                'Built responsive interfaces with Vue.js/Nuxt',
                'Containerized development with Docker',
                'Assisted with AWS cloud deployments',
            ],
        },
        {
            id: 3,
            year: 'Nov 2024 - Jun 2025',
            role: 'Software Engineering Intern',
            company: 'E4Afrika',
            description: 'Developed mobile application features using Flutter and implemented CRUD operations. Contributed to UI improvements and testing.',
            achievements: [
                'Implemented CRUD operations in Flutter',
                'UI improvements & bug fixing',
                'Collaborative front-end tasks with JavaScript',
            ],
        },
    ];

    return (
        <section id="experience" className="py-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <SectionTitle subtitle="My professional journey">
                    Experience
                </SectionTitle>

                <div className="relative max-w-6xl mx-auto mt-16">
                    {/* Central Timeline Line (Desktop) */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2"></div>

                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="relative mb-16 last:mb-0">
                            <motion.div
                                className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                transition={{ delay: index * 0.2 }}
                            >
                                {/* Spacer for opposite side on Desktop */}
                                <div className="hidden md:block w-1/2" />

                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-bg-default dark:border-bg-dark transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(31,119,255,0.5)] bg-bg-default dark:bg-bg-dark">
                                    <div className="w-full h-full bg-primary rounded-full animate-pulse"></div>
                                </div>

                                {/* Content Side */}
                                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                                    }`}>
                                    {/* Date - Positioned above card */}
                                    <div className={`text-lg font-bold text-primary mb-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                        }`}>
                                        {exp.year}
                                    </div>

                                    <motion.div
                                        className="bg-bg-paper dark:bg-bg-paper-dark rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-gray-100 dark:border-gray-800"
                                        whileHover={{ y: -5 }}
                                    >


                                        <h3 className="text-xl font-bold mb-1 text-text-primary dark:text-text-primary-dark">
                                            {exp.role}
                                        </h3>

                                        <h4 className="text-md text-text-secondary dark:text-text-secondary-dark font-medium mb-4">
                                            {exp.company}
                                        </h4>

                                        <p className="text-text-secondary dark:text-text-secondary-dark mb-4 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Achievements */}
                                        <div className="space-y-2">
                                            <p className="text-xs font-bold uppercase tracking-wider text-text-primary dark:text-text-primary-dark opacity-80">Key Achievements:</p>
                                            <ul className={`space-y-1 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="text-text-secondary dark:text-text-secondary-dark text-sm inline-flex items-center gap-2">
                                                        <span className="text-primary text-xs">●</span>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
