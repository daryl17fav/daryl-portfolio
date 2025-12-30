import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    icon,
    onClick,
    className = '',
    ...props
}) => {
    const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer';

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/50 hover:scale-105',
        secondary: 'bg-secondary text-dark hover:bg-secondary-dark hover:shadow-lg hover:shadow-secondary/50 hover:scale-105',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/50'
    };

    return (
        <motion.button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            {...props}
        >
            {icon && <span>{icon}</span>}
            {children}
        </motion.button>
    );
};

export default Button;
