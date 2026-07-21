import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { slideUpStagger, staggerItem } from '../../utils/animations';

// ─── Data ─────────────────────────────────────────────────────────────────────
const PILLARS = [
    {
        id: '01',
        title: 'Engineering',
        subtitle: 'The Foundation',
        accent: '#00E5FF',
        description: 'Building scalable systems, interfaces, and infrastructure.',
        groups: [
            {
                label: 'Languages',
                skills: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'Dart'],
            },
            {
                label: 'Frameworks',
                skills: ['Flutter', 'Vue.js', 'Nuxt.js', 'Node.js', 'FastAPI', 'Laravel'],
            },
            {
                label: 'DevOps / Cloud',
                skills: ['AWS', 'Docker', 'Git / CI-CD', 'Linux', 'Postman'],
            },
        ],
    },
    {
        id: '02',
        title: 'Product & QA',
        subtitle: 'The Reliability',
        accent: '#7B2FFF',
        description: 'Ensuring quality, clarity, and a user-first delivery standard.',
        groups: [
            {
                label: 'Testing',
                skills: ['Functional Testing', 'Regression Testing', 'User Acceptance Testing (UAT)'],
            },
            {
                label: 'Quality',
                skills: ['Bug Reporting & Validation', 'API Design', 'Technical Documentation'],
            },
        ],
    },
    {
        id: '03',
        title: 'Growth & Strategy',
        subtitle: 'The Impact',
        accent: '#00E5FF',
        description: 'Translating technical work into measurable business outcomes.',
        groups: [
            {
                label: 'Marketing',
                skills: ['Community Management', 'Digital Marketing Strategy', 'Brand Positioning'],
            },
            {
                label: 'Analytics',
                skills: ['Metrics Tracking', 'Analytics Interpretation', 'Stakeholder Communication'],
            },
        ],
    },
];

// ─── Skill Tag ────────────────────────────────────────────────────────────────
const SkillTag = ({ name, accent }) => (
    <motion.span
        className="inline-flex items-center gap-1.5 px-3 py-1.5 border font-mono text-[11px] tracking-widest uppercase cursor-default transition-all duration-300"
        style={{
            borderColor: 'rgba(255,255,255,0.07)',
            background: 'rgba(255,255,255,0.02)',
            color: '#6B7280',
        }}
        whileHover={{
            borderColor: `${accent}40`,
            color: '#F0F0F0',
            background: `${accent}08`,
            y: -2,
            transition: { duration: 0.2 },
        }}
    >
        <span
            className="w-1 h-1 shrink-0"
            style={{ background: accent, boxShadow: `0 0 4px ${accent}` }}
        />
        {name}
    </motion.span>
);

// ─── Pillar Card ──────────────────────────────────────────────────────────────
const PillarCard = ({ pillar, index }) => {
    const [hovered, setHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            variants={staggerItem}
            className="group relative flex flex-col"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Card shell */}
            <div
                className="relative flex flex-col flex-1 border border-white/[0.06] overflow-hidden transition-all duration-500"
                style={{
                    background: 'rgba(255,255,255,0.02)',
                    backdropFilter: 'blur(6px)',
                    borderColor: hovered ? `${pillar.accent}25` : 'rgba(255,255,255,0.06)',
                    boxShadow: hovered
                        ? `0 0 50px ${pillar.accent}10, 0 0 100px rgba(123,47,255,0.05)`
                        : 'none',
                }}
            >
                {/* Spotlight */}
                <div
                    className="pointer-events-none absolute -inset-px transition-opacity duration-500"
                    style={{
                        opacity: hovered ? 1 : 0,
                        background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, ${pillar.accent}07, transparent 65%)`,
                    }}
                />

                {/* Top accent bar */}
                <div
                    className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${pillar.accent}60, transparent)`,
                        opacity: hovered ? 1 : 0.3,
                    }}
                />

                {/* ── Pillar Header ── */}
                <div className="p-7 pb-5 border-b border-white/[0.05]">
                    <div className="flex items-start justify-between mb-4">
                        {/* Pillar number */}
                        <span
                            className="font-mono text-5xl font-black leading-none select-none"
                            style={{
                                color: hovered ? pillar.accent : 'rgba(255,255,255,0.06)',
                                textShadow: hovered ? `0 0 30px ${pillar.accent}40` : 'none',
                                transition: 'color 0.4s ease, text-shadow 0.4s ease',
                            }}
                        >
                            {pillar.id}
                        </span>
                        {/* Index dots */}
                        <div className="flex gap-1 mt-2">
                            {PILLARS.map((_, i) => (
                                <span
                                    key={i}
                                    className="w-1 h-1 transition-all duration-300"
                                    style={{
                                        background: i === index
                                            ? pillar.accent
                                            : 'rgba(255,255,255,0.12)',
                                        boxShadow: i === index ? `0 0 6px ${pillar.accent}` : 'none',
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <h3
                        className="text-2xl font-bold tracking-tight leading-none mb-1 transition-colors duration-400"
                        style={{ color: hovered ? '#F0F0F0' : '#C0C0C0' }}
                    >
                        {pillar.title}
                    </h3>
                    <p className="font-mono text-[11px] tracking-widest mb-3"
                        style={{ color: pillar.accent, opacity: 0.7 }}>
                        {'// '}{pillar.subtitle}
                    </p>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                        {pillar.description}
                    </p>
                </div>

                {/* ── Skill Groups ── */}
                <div className="p-7 pt-6 flex flex-col gap-6 flex-1">
                    {pillar.groups.map(group => (
                        <div key={group.label}>
                            <p className="font-mono text-[10px] tracking-[0.35em] uppercase mb-3"
                                style={{ color: `${pillar.accent}50` }}>
                                {group.label}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map(skill => (
                                    <SkillTag key={skill} name={skill} accent={pillar.accent} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Corner brackets */}
                <span className="absolute top-0 left-0 w-4 h-4 border-t border-l transition-colors duration-400"
                    style={{ borderColor: hovered ? `${pillar.accent}60` : 'rgba(255,255,255,0.12)' }} />
                <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r transition-colors duration-400"
                    style={{ borderColor: hovered ? `${pillar.accent}60` : 'rgba(255,255,255,0.12)' }} />
            </div>
        </motion.div>
    );
};

// ─── Skills Section ───────────────────────────────────────────────────────────
const Skills = () => (
    <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
            <SectionTitle eyebrow="// Core_Capabilities">
                Skills
            </SectionTitle>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-5"
                variants={slideUpStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
            >
                {PILLARS.map((pillar, i) => (
                    <PillarCard key={pillar.id} pillar={pillar} index={i} />
                ))}
            </motion.div>

            {/* Bottom legend */}
            <motion.div
                className="flex items-center gap-6 mt-10 justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                {PILLARS.map(p => (
                    <div key={p.id} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5"
                            style={{ background: p.accent, boxShadow: `0 0 6px ${p.accent}` }}
                        />
                        <span className="font-mono text-[10px] tracking-widest text-[#6B7280] uppercase">
                            {p.title}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
);

export default Skills;
