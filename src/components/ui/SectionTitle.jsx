import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

// Section eyebrow + heading with cyan accent line
const SectionTitle = ({ children, subtitle, eyebrow, className = '', align = 'left' }) => {
    const alignClass = align === 'center'
        ? 'text-center items-center'
        : 'text-left items-start';

    return (
        <motion.div
            className={`flex flex-col ${alignClass} mb-16 ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
        >
            {/* Eyebrow label */}
            {eyebrow && (
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#00E5FF]/50 mb-3">
                    {eyebrow}
                </span>
            )}

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F0F0F0] tracking-tight leading-none mb-5">
                {children}
            </h2>

            {/* Cyan accent line — replaces the old blue bar */}
            <div className="flex items-center gap-3">
                <div
                    className="h-px w-12"
                    style={{
                        background: '#00E5FF',
                        boxShadow: '0 0 8px rgba(0,229,255,0.6)',
                    }}
                />
                <div className="h-px w-4 bg-[#00E5FF]/20" />
            </div>

            {/* Optional subtitle */}
            {subtitle && (
                <p className="mt-5 text-[#6B7280] text-lg max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default SectionTitle;
