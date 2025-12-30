import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { HiEye, HiExternalLink } from 'react-icons/hi';

const Projects = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Monniz App',
            description: 'Mobile application on Play Store. Implemented new features, improved performance, and optimized UI/UX.',
            thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
            images: [
                { src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop' },
                { src: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=800&fit=crop' },
            ],
            tags: ['Flutter', 'Dart', 'Agile'],
            link: 'https://play.google.com/store/apps/details?id=com.monniz.monniz',
        },
        {
            id: 2,
            title: 'Enoteexam App',
            description: 'Platform for sending grades and exam papers between teachers and admin staff. Features dashboards for multiple roles.',
            thumbnail: '/enoteexam/enote-1.jpeg',
            images: [
                { src: '/enoteexam/enote-1.jpeg' },
                { src: '/enoteexam/enote-2.jpeg' },
                { src: '/enoteexam/enote-3.jpeg' },
                { src: '/enoteexam/enote-4.jpeg' },
                { src: '/enoteexam/enote-5.jpeg' },
                { src: '/enoteexam/enote-6.jpeg' },
                { src: '/enoteexam/enote-7.jpeg' },
                { src: '/enoteexam/enote-8.jpeg' },
                { src: '/enoteexam/enote-9.jpeg' },
                { src: '/enoteexam/enote-10.jpeg' },
                { src: '/enoteexam/enote-11.jpeg' },
                { src: '/enoteexam/enote-12.jpeg' },
                { src: '/enoteexam/enote-13.jpeg' },
                { src: '/enoteexam/enote-14.jpeg' },
                { src: '/enoteexam/enote-15.jpeg' },
                { src: '/enoteexam/enote-16.jpeg' },
                { src: '/enoteexam/enote-17.jpeg' },
                { src: '/enoteexam/enote-18.jpeg' },
            ],
            tags: ['Flutter', 'Node.js', 'SQL'],
        },

        {
            id: 4,
            title: 'Wayi.bj',
            description: 'Full-stack web app with responsive front-end interfaces. Built with DevOps support using Docker and AWS.',
            thumbnail: '/wayi/wayi-1.png',
            images: [
                { src: '/wayi/wayi-1.png' },
                { src: '/wayi/wayi-2.png' },
                { src: '/wayi/wayi-3.png' },
                { src: '/wayi/wayi-4.png' },
                { src: '/wayi/wayi-5.png' },
            ],
            tags: ['Vue.js', 'Nuxt', 'AWS'],
        },

    ];

    const openLightbox = (project) => {
        setCurrentProject(project);
        setLightboxOpen(true);
    };

    return (
        <section id="projects" className="py-20 bg-dark-lighter">
            <div className="container mx-auto px-6">
                <SectionTitle subtitle="Check out my recent work">
                    My Projects
                </SectionTitle>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={staggerItem}
                        >
                            <Card className="overflow-hidden cursor-pointer group" hover={false}>
                                {/* Project Image */}
                                <div className="relative overflow-hidden rounded-lg mb-4">
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4"
                                    >
                                        <div
                                            className="text-center cursor-pointer hover:scale-110 transition-transform"
                                            onClick={() => openLightbox(project)}
                                        >
                                            <HiEye className="text-4xl text-white mx-auto mb-1" />
                                            <p className="text-white text-sm font-semibold">View Gallery</p>
                                        </div>

                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-center cursor-pointer hover:scale-110 transition-transform"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <HiExternalLink className="text-4xl text-white mx-auto mb-1" />
                                                <p className="text-white text-sm font-semibold">Visit App</p>
                                            </a>
                                        )}
                                    </motion.div>
                                </div>

                                {/* Project Info */}
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-text-secondary mb-4">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            {currentProject && (
                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    slides={currentProject.images}
                />
            )}
        </section>
    );
};

export default Projects;
