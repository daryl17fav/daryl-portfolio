import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { gsap } from 'gsap';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import SectionTitle from '../ui/SectionTitle';
import { slideUpStagger, staggerItem } from '../../utils/animations';

const Projects = () => {
    const cardElements = useRef([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [mousePositions, setMousePositions] = useState({});
    const [expandedProject, setExpandedProject] = useState(null);

    const projects = [
        {
            title: 'Digital School',
            subtitle: 'EdTech Ecosystem',
            role: 'Mobile Lead, QA Strategist, & Community Manager',
            tech: ['Flutter', 'GetX', 'Firebase'],
            problem: 'Students and parents across Benin lacked a unified, accessible digital portal, leading to poor academic tracking and engagement.',
            contributions: [
                'Mobile Engineering: Architected and developed the student mobile experience, integrating complex navigation flows (Primary, College, and University modules).',
                'Quality Assurance: Led end-to-end testing for both the Mobile and Web platforms, identifying and documenting critical functional bugs before deployment.',
                'Community Management: Orchestrated the product’s brand positioning, managed engagement strategies across social platforms, and translated user feedback from parents/students into actionable product improvements.'
            ],
            impact: 'Created a more reliable, user-friendly EdTech portal that bridges the gap between academic institutions and the families they serve.',
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
            gallery: [
                { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=800&fit=crop' }
            ]
        },
        {
            title: 'Wayi.bj',
            subtitle: 'InsurTech Platform',
            role: 'Frontend Engineer (MTN Innovation Lab)',
            tech: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
            problem: 'Simplifying the opaque, paper-heavy insurance sector in Benin.',
            impact: 'Built a transparent, digital-first interface allowing users to compare policies and file claims via smartphone. Developed a pixel-perfect frontend that streamlined the insurance purchasing journey, drastically reducing physical branch visits.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
            gallery: [
                { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop' }
            ]
        },
        {
            title: 'Raphael Sheyi',
            subtitle: 'System Architecture Showcase',
            role: 'Full-Stack Software Engineer',
            tech: ['Next.js', 'React', 'Django', 'FastAPI', 'PostgreSQL'],
            problem: 'Building a high-performance, scalable digital presence.',
            impact: 'Owned the end-to-end architecture. Designed a robust database schema using PostgreSQL and implemented a performant API-first backend using a hybrid Django/FastAPI approach, coupled with a lightning-fast Next.js frontend.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
            gallery: [
                { src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop' }
            ]
        },
        {
            title: 'Monniz',
            subtitle: 'FinTech Wallet',
            role: 'Mobile App Developer (MTN Innovation Lab)',
            tech: ['Flutter', 'Dart', 'GetX'],
            problem: 'Need for high-concurrency wallet transactions.',
            impact: 'Optimized state management for sub-second data synchronization during real-time transactions.',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
            gallery: [
                { src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop' }
            ]
        },
        {
            title: 'Sekurr Pay',
            subtitle: 'Payment Infrastructure (Rsync Lab)',
            role: 'Mobile App Developer',
            tech: ['Flutter', 'Firebase', 'REST APIs'],
            problem: 'Secure, reliable payment integration for remote teams.',
            impact: 'Engineered secure payment modules within a distributed agile environment, ensuring reliable handling of financial transactions.',
            image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop',
            gallery: [
                { src: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=800&fit=crop' }
            ]
        },
        {
            title: 'Compta ERP',
            subtitle: 'Enterprise Finance',
            role: 'Frontend Engineer',
            tech: ['Vue.js', 'Nuxt.js'],
            problem: 'Complex financial accounting interfaces were too cumbersome for admins.',
            impact: 'Revamped the admin dashboard UI/UX to simplify complex financial reporting, increasing usability for non-technical administrative users.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
            gallery: [
                { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop' }
            ]
        }
    ];

    const handleTilt = (e, index) => {
        const card = cardElements.current[index];
        if (!card) return;
        const rect    = card.getBoundingClientRect();
        const x       = e.clientX - rect.left;
        const y       = e.clientY - rect.top;
        const rotateX = (y - rect.height / 2) / 16;
        const rotateY = (rect.width / 2 - x) / 16;
        gsap.to(card, { rotateX, rotateY, scale: 1.02, duration: 0.5, ease: 'power2.out' });

        // Track mouse for spotlight
        setMousePositions(prev => ({ ...prev, [index]: { x, y } }));
    };

    const resetTilt = (index) => {
        const card = cardElements.current[index];
        if (!card) return;
        gsap.to(card, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.5, ease: 'power2.out' });
    };

    const toggleExpand = (index) => {
        setExpandedProject(expandedProject === index ? null : index);
    };

    return (
        <section id="projects" className="py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <SectionTitle eyebrow="// Deployment_Archives">
                        Projects
                    </SectionTitle>
                    <div className="hidden md:block font-mono text-[10px] text-[#00E5FF]/20 tracking-widest text-right pb-4">
                        TOTAL_RECORDS: {String(projects.length).padStart(2, '0')}<br />STATUS: ACTIVE
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={slideUpStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {projects.map((project, index) => {
                        const pos = mousePositions[index] || { x: 0, y: 0 };
                        const isExpanded = expandedProject === index;
                        return (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                className="group relative perspective-1000 flex flex-col"
                                onMouseMove={e => handleTilt(e, index)}
                                onMouseLeave={() => resetTilt(index)}
                            >
                                {/* Card Body */}
                                <div
                                    ref={el => (cardElements.current[index] = el)}
                                    className="relative border border-white/[0.07] overflow-hidden transition-all duration-300 group-hover:border-[#00E5FF]/25 flex flex-col flex-1"
                                    style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(6px)' }}
                                >
                                    {/* Aurora glow on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{ boxShadow: 'inset 0 0 40px rgba(0,229,255,0.05), 0 0 60px rgba(0,229,255,0.1), 0 0 100px rgba(123,47,255,0.06)' }}
                                    />

                                    {/* Mouse spotlight */}
                                    <div
                                        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10"
                                        style={{
                                            background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(0,229,255,0.06), transparent 70%)`
                                        }}
                                    />

                                    {/* Image */}
                                    <div className="aspect-video overflow-hidden relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                                        {/* Action buttons overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                            <button
                                                onClick={() => { setCurrentProject(project); setLightboxOpen(true); }}
                                                className="p-3 border border-[#00E5FF]/50 bg-[#050505]/80 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#050505] transition-all duration-200 backdrop-blur-sm"
                                            >
                                                <Eye size={18} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="p-5 flex flex-col flex-grow relative z-10">
                                        <div className="mb-2">
                                            <h4 className="text-xl font-bold text-[#F0F0F0] tracking-tight group-hover:text-[#00E5FF] transition-colors duration-300">
                                                {project.title}
                                            </h4>
                                            <p className="text-[#00E5FF]/60 font-mono text-[10px] tracking-widest uppercase mt-0.5">
                                                // {project.subtitle}
                                            </p>
                                        </div>

                                        <p className="text-[#888888] font-mono text-xs mb-4">
                                            Role: <span className="text-[#F0F0F0]">{project.role}</span>
                                        </p>

                                        {/* Tech stack */}
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {project.tech.map(t => (
                                                <span key={t}
                                                    className="text-[9px] px-2 py-0.5 border border-[#00E5FF]/15 text-[#00E5FF]/60 font-mono uppercase tracking-wider"
                                                    style={{ background: 'rgba(0,229,255,0.04)' }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Problem */}
                                        <div className="mb-4">
                                            <p className="font-mono text-[9px] uppercase tracking-widest text-[#6B7280] mb-1">
                                                // The Problem
                                            </p>
                                            <p className="text-[#6B7280] text-xs leading-relaxed">
                                                {project.problem}
                                            </p>
                                        </div>

                                        {/* Expandable Contributions (if any) or Impact */}
                                        <div className="mt-auto pt-4 border-t border-white/[0.05]">
                                            {project.contributions ? (
                                                <div>
                                                    <button
                                                        onClick={() => toggleExpand(index)}
                                                        className="flex items-center justify-between w-full text-left font-mono text-[10px] uppercase tracking-widest text-[#00E5FF] hover:opacity-80 transition-opacity"
                                                    >
                                                        <span>{isExpanded ? 'Hide Key Roles' : 'View Key Roles'}</span>
                                                        {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                                                    </button>
                                                    <AnimatePresence>
                                                        {isExpanded && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                className="overflow-hidden mt-3 space-y-2"
                                                            >
                                                                {project.contributions.map((contr, i) => (
                                                                    <p key={i} className="text-[#888888] text-[11px] leading-relaxed pl-2 border-l border-[#00E5FF]/30">
                                                                        {contr}
                                                                    </p>
                                                                ))}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ) : null}

                                            {/* Impact */}
                                            <div className={project.contributions ? 'mt-4' : ''}>
                                                <p className="font-mono text-[9px] uppercase tracking-widest text-[#00E5FF]/40 mb-1">
                                                    // The Impact
                                                </p>
                                                <p className="text-[#888888] text-xs leading-relaxed font-mono">
                                                    &gt; {project.impact}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* HUD corner dots */}
                                    <div className="absolute top-2.5 right-2.5 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-1 h-1 bg-[#00E5FF]" />
                                        <div className="w-1 h-1 bg-[#00E5FF]/40" />
                                        <div className="w-1 h-1 bg-[#00E5FF]/15" />
                                    </div>
                                </div>

                                {/* Corner brackets outside card */}
                                <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-[#00E5FF]/20 group-hover:border-[#00E5FF]/60 transition-colors duration-400" />
                                <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-[#00E5FF]/20 group-hover:border-[#00E5FF]/60 transition-colors duration-400" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Lightbox */}
            {currentProject && (
                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    slides={currentProject.gallery}
                />
            )}
        </section>
    );
};

export default Projects;
