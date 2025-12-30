import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
    return (
        <motion.div
            className={`bg-bg-paper dark:bg-bg-paper-dark rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800 ${className}`}
            whileHover={hover ? { scale: 1.05, boxShadow: '0 0 25px rgba(31, 119, 255, 0.15)' } : {}}
            transition={{ duration: 0.3 }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
