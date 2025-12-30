import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

const SectionTitle = ({ children, subtitle, className = '' }) => {
    return (
        <motion.div
            className={`text-center mb-12 ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {children}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            {subtitle && (
                <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default SectionTitle;
