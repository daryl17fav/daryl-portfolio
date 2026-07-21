import React from 'react';
import { motion } from 'framer-motion';

// ─── Button ───────────────────────────────────────────────────────────────────
// variant: 'primary' | 'outline' | 'ghost'
const Button = ({
    children,
    variant = 'primary',
    icon,
    onClick,
    className = '',
    type = 'button',
    ...props
}) => {
    const base = [
        'relative inline-flex items-center justify-center gap-2',
        'px-7 py-3.5',
        'font-mono text-sm tracking-widest uppercase',
        'overflow-hidden',
        'transition-all duration-300',
        'cursor-pointer',
        'select-none',
    ].join(' ');

    // ── Primary: solid cyan fill ──────────────────────────────────────────────
    if (variant === 'primary') {
        return (
            <motion.button
                type={type}
                className={`${base} bg-[#00E5FF] text-[#050505] font-bold hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] ${className}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClick}
                {...props}
            >
                {/* Inner sweep */}
                <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                {icon && <span className="relative z-10">{icon}</span>}
                <span className="relative z-10">{children}</span>
            </motion.button>
        );
    }

    // ── Outline: fill slide on hover ──────────────────────────────────────────
    if (variant === 'outline') {
        return (
            <motion.button
                type={type}
                className={`${base} border border-[#00E5FF]/40 text-[#00E5FF]/70 hover:text-[#050505] group ${className}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClick}
                {...props}
            >
                {/* Fill slide */}
                <span className="absolute inset-0 bg-[#00E5FF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                {icon && <span className="relative z-10">{icon}</span>}
                <span className="relative z-10">{children}</span>
            </motion.button>
        );
    }

    // ── Ghost: text only with underline ──────────────────────────────────────
    return (
        <motion.button
            type={type}
            className={`${base} text-[#00E5FF]/60 hover:text-[#00E5FF] underline underline-offset-4 decoration-[#00E5FF]/30 ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            {...props}
        >
            {icon && <span>{icon}</span>}
            <span>{children}</span>
        </motion.button>
    );
};

export default Button;
