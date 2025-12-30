import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { slideInLeft, slideInRight } from '../../utils/animations';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark-lighter">
            <div className="container mx-auto px-6">
                <SectionTitle subtitle="Get to know me">
                    About Me
                </SectionTitle>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Profile Image */}
                    <motion.div
                        className="relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInLeft}
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20">
                                <img
                                    src="/me-pic.jpg"
                                    alt="Daryl"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
                        </div>
                    </motion.div>

                    {/* About Text */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInRight}
                        className="space-y-6"
                    >
                        <p className="text-text-secondary text-lg leading-relaxed">
                            I'm a <span className="text-primary font-semibold">Software Engineer</span> with
                            a strong foundation in mobile and web development. Recently graduated with a Bachelor's in Software Engineering,
                            I specialize in building performant applications using Flutter, Vue.js, and modern web technologies.
                        </p>

                        <p className="text-text-secondary text-lg leading-relaxed">
                            Currently working as a <span className="text-secondary font-semibold">Mobile Developer</span> at Monniz,
                            I focus on creating intuitive mobile experiences. My background includes full-stack internships where I've
                            honed my skills in agile workflows, DevOps with Docker, and cloud deployments on AWS.
                        </p>

                        <p className="text-text-secondary text-lg leading-relaxed">
                            Beyond coding, I have a creative side - managing social media strategies and photography.
                            I'm passionate about bridging the gap between technical functionality and aesthetic design.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
                            <motion.div
                                className="text-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-4xl font-bold text-primary mb-2">2+</div>
                                <div className="text-text-secondary text-sm">Years Experience</div>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-4xl font-bold text-secondary mb-2">10+</div>
                                <div className="text-text-secondary text-sm">Projects Done</div>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-4xl font-bold text-primary mb-2">BS</div>
                                <div className="text-text-secondary text-sm">Software Engineering</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
