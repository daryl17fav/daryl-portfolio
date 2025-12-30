import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * Returns whether the element is in viewport
 */
export const useScrollAnimation = (threshold = 0.1) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    // Once animated, keep it visible
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return [ref, isInView];
};
