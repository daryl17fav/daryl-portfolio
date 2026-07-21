import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { slideUpStagger, staggerItem } from '../../utils/animations';

const Education = () => {
    const education = [
        {
            id: 1,
            degree: "Bachelor's Degree in Software Engineering",
            institution: 'École Supérieure Sainte Félicité (ESSF)',
            year: '2022 – 2025',
            description: 'Focused on Software Development, Programming, and Systems & Information Technology. Program completed in French.',
            highlights: [
                'Software Development focus',
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
            highlights: [
                'Strong foundation in sciences',
                'Academic discipline',
                'Extracurricular activities',
            ],
        },
    ];

    return (
        <section id="education" className="py-24">
            <div className="max-w-5xl mx-auto px-6">
                <SectionTitle eyebrow="// Academic_Background">
                    Education
                </SectionTitle>

                <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    variants={slideUpStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {education.map(edu => (
                        <motion.div
                            key={edu.id}
                            variants={staggerItem}
                            className="group relative border border-white/[0.06] hover:border-[#00E5FF]/20 p-6 transition-all duration-400 overflow-hidden"
                            style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(4px)' }}
                            whileHover={{
                                y: -4,
                                boxShadow: '0 0 40px rgba(0,229,255,0.08), 0 0 80px rgba(123,47,255,0.04)',
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Corner brackets */}
                            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00E5FF]/20 group-hover:border-[#00E5FF]/60 transition-colors duration-300" />
                            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#00E5FF]/20 group-hover:border-[#00E5FF]/60 transition-colors duration-300" />

                            {/* Icon + Header */}
                            <div className="flex items-start gap-4 mb-5">
                                <div className="p-3 border border-[#00E5FF]/20 group-hover:border-[#00E5FF]/50 transition-colors duration-300 shrink-0">
                                    <GraduationCap className="w-5 h-5 text-[#00E5FF]/60 group-hover:text-[#00E5FF] transition-colors duration-300" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-bold text-[#F0F0F0] leading-snug mb-1">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-[#00E5FF]/60 font-mono text-xs tracking-widest">
                                        {edu.institution}
                                    </p>
                                    <p className="text-[#6B7280] font-mono text-[10px] tracking-widest mt-0.5">
                                        {edu.year}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-[#6B7280] text-sm leading-relaxed mb-5">
                                {edu.description}
                            </p>

                            {/* Highlights */}
                            <div className="border-t border-white/[0.05] pt-4 space-y-1.5">
                                <p className="font-mono text-[10px] uppercase tracking-widest text-[#00E5FF]/35 mb-3">
                                    {'// Highlights'}
                                </p>
                                {edu.highlights.map((h, i) => (
                                    <div key={i} className="flex items-center gap-3 text-[#6B7280] text-sm">
                                        <span className="w-1 h-1 bg-[#00E5FF] shrink-0"
                                            style={{ boxShadow: '0 0 4px rgba(0,229,255,0.5)' }}
                                        />
                                        {h}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
