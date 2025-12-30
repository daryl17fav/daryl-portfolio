import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Education = () => {
    const education = [
        {
            id: 1,
            degree: 'Bachelor’s Degree in Software Engineering',
            institution: 'École Supérieure Sainte Félicité (ESSF)',
            year: '2022 - 2025',
            description: 'Focused on Software Development, Programming, and Systems & Information Technology. Program completed in French.',
            achievements: [
                'Focus on Software Development',
                'Systems & IT',
                'Completed in French',
            ],
        },
        {
            id: 2,
            degree: 'Senior Secondary Certificate Examination (SSCE)',
            institution: 'Newcastle International Christian School',
            year: '2021',
            description: 'Completed a well-rounded secondary education with emphasis on academic discipline and sciences.',
            achievements: [
                'Strong Foundation in Sciences',
                'Academic Discipline',
                'Extracurricular Activities',
            ],
        },
    ];

    return (
        <section id="education" className="py-20 bg-dark-lighter">
            <div className="container mx-auto px-6">
                <SectionTitle subtitle="My academic background">
                    Education
                </SectionTitle>

                <motion.div
                    className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {education.map((edu) => (
                        <motion.div
                            key={edu.id}
                            variants={staggerItem}
                        >
                            <Card className="h-full">
                                {/* Icon */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="bg-primary/20 p-4 rounded-lg">
                                        <HiAcademicCap className="text-4xl text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-1">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-secondary font-semibold">
                                            {edu.institution}
                                        </p>
                                        <p className="text-text-secondary text-sm">
                                            {edu.year}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-text-secondary mb-4">
                                    {edu.description}
                                </p>

                                {/* Achievements */}
                                <div className="space-y-2 pt-4 border-t border-white/10">
                                    <p className="text-sm font-semibold text-text-primary">Highlights:</p>
                                    <ul className="space-y-1">
                                        {edu.achievements.map((achievement, i) => (
                                            <li key={i} className="text-text-secondary text-sm flex items-start">
                                                <span className="text-primary mr-2">✓</span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
