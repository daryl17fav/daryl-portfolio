import React from 'react';
import { motion } from 'framer-motion';
import {
    SiReact,
    SiFlutter,
    SiDart,
    SiNextdotjs,
    SiVuedotjs,
    SiNuxtdotjs,
    SiAngular,
    SiNodedotjs,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiMysql,
    SiPhp,
    SiDocker,
    SiAmazonwebservices,
    SiGit,
    SiExpress,
} from 'react-icons/si';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Skills = () => {
    const skills = [
        { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
        { name: 'Dart', icon: <SiDart />, color: '#0175C2' },
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
        { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D' },
        { name: 'Nuxt', icon: <SiNuxtdotjs />, color: '#00C58E' },
        { name: 'Angular', icon: <SiAngular />, color: '#DD0031' },
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
        { name: 'SQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'PHP', icon: <SiPhp />, color: '#777BB4' },
        { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
        { name: 'AWS', icon: <SiAmazonwebservices />, color: '#232F3E' },
        { name: 'Git', icon: <SiGit />, color: '#F05032' },
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <SectionTitle subtitle="Technologies I work with">
                    My Skills
                </SectionTitle>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            variants={staggerItem}
                        >
                            <Card className="text-center group cursor-pointer">
                                <motion.div
                                    className="text-6xl mb-4 mx-auto"
                                    style={{ color: skill.color }}
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: 5,
                                        filter: 'drop-shadow(0 0 15px currentColor)'
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {skill.icon}
                                </motion.div>
                                <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark group-hover:text-primary dark:group-hover:text-primary-dark transition-colors duration-300">
                                    {skill.name}
                                </h3>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
