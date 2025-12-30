import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { fadeUp } from '../../utils/animations';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            year: 'Oct 2025 - Present',
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
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <SectionTitle subtitle="My professional journey">
                    Experience
                </SectionTitle>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="relative pl-8 md:pl-32 pb-12 last:pb-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            transition={{ delay: index * 0.2 }}
                        >
                            {/* Timeline Line */}
                            {index !== experiences.length - 1 && (
                                <div className="absolute left-[11px] md:left-[107px] top-8 w-0.5 h-full bg-primary/30"></div>
                            )}

                            {/* Timeline Dot */}
                            <motion.div
                                className="absolute left-0 md:left-24 top-0 w-6 h-6 bg-primary rounded-full border-4 border-bg-default dark:border-bg-dark shadow-lg shadow-primary/50"
                                whileHover={{ scale: 1.5, boxShadow: '0 0 20px rgba(31, 119, 255, 0.8)' }}
                            ></motion.div>

                            {/* Year Badge */}
                            <div className="hidden md:block absolute left-0 top-0 text-text-secondary font-semibold">
                                {exp.year}
                            </div>

                            {/* Content Card */}
                            <motion.div
                                className="bg-bg-paper dark:bg-bg-paper-dark rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                                whileHover={{ x: 10 }}
                            >
                                <div className="md:hidden text-primary font-semibold mb-2">
                                    {exp.year}
                                </div>

                                <h3 className="text-2xl font-bold mb-2 text-text-primary dark:text-text-primary-dark">
                                    {exp.role}
                                </h3>

                                <h4 className="text-lg text-primary mb-4">
                                    {exp.company}
                                </h4>

                                <p className="text-text-secondary dark:text-text-secondary-dark mb-4">
                                    {exp.description}
                                </p>

                                {/* Achievements */}
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold text-text-primary dark:text-text-primary-dark">Key Achievements:</p>
                                    <ul className="space-y-1">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="text-text-secondary dark:text-text-secondary-dark text-sm flex items-start">
                                                <span className="text-secondary mr-2">▸</span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
