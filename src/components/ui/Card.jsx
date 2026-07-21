import React, { useState } from 'react';
import { motion } from 'framer-motion';

// ─── Corner bracket decorator ─────────────────────────────────────────────────
const CornerBracket = ({ position }) => {
    const posMap = {
        'tl': 'top-0 left-0 border-t border-l',
        'tr': 'top-0 right-0 border-t border-r',
        'bl': 'bottom-0 left-0 border-b border-l',
        'br': 'bottom-0 right-0 border-b border-r',
    };
    return (
        <span
            className={`absolute w-3 h-3 border-[#00E5FF]/30 group-hover:border-[#00E5FF]/70 transition-colors duration-500 ${posMap[position]}`}
        />
    );
};

// ─── Card ─────────────────────────────────────────────────────────────────────
const Card = ({
    children,
    className = '',
    hover = true,
    aurora = false,   // opt-in aurora border sweep on hover
    corners = true,   // corner bracket decorators
    padding = 'p-6',
    ...props
}) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!hover) return;
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            className={`group relative ${aurora ? 'aurora-border' : ''} ${className}`}
            onMouseMove={handleMouseMove}
            whileHover={
                hover
                    ? {
                        y: -5,
                        boxShadow: '0 0 40px rgba(0,229,255,0.12), 0 0 80px rgba(123,47,255,0.06)',
                        borderColor: 'rgba(0,229,255,0.25)',
                        transition: { duration: 0.35, ease: 'easeOut' },
                    }
                    : {}
            }
            transition={{ duration: 0.35 }}
            {...props}
        >
            {/* Glass background */}
            <div
                className={`relative h-full border border-white/[0.06] group-hover:border-[#00E5FF]/20 transition-colors duration-500 overflow-hidden ${padding}`}
                style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(4px)' }}
            >
                {/* Spotlight on hover */}
                {hover && (
                    <div
                        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]"
                        style={{
                            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,229,255,0.06), transparent 70%)`,
                        }}
                    />
                )}

                {children}
            </div>

            {/* Corner brackets */}
            {corners && (
                <>
                    <CornerBracket position="tl" />
                    <CornerBracket position="tr" />
                    <CornerBracket position="bl" />
                    <CornerBracket position="br" />
                </>
            )}
        </motion.div>
    );
};

export default Card;
