// Reusable Framer Motion animation variants — Tech-Minimalist Design System
// Easing: cubic-bezier(0.16, 1, 0.3, 1) — Expo Out for that snappy feel

const EXPO_OUT = [0.16, 1, 0.3, 1];

export const fadeIn = {
    hidden:  { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: EXPO_OUT }
    }
};

export const fadeUp = {
    hidden:  { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: EXPO_OUT }
    }
};

export const fadeDown = {
    hidden:  { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: EXPO_OUT }
    }
};

export const scaleIn = {
    hidden:  { opacity: 0, scale: 0.90 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.55, ease: EXPO_OUT }
    }
};

export const slideInLeft = {
    hidden:  { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.75, ease: EXPO_OUT }
    }
};

export const slideInRight = {
    hidden:  { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.75, ease: EXPO_OUT }
    }
};

// Stagger container — wraps a list of staggered children
export const staggerContainer = {
    hidden:  { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren:   0.15,
        }
    }
};

// Stagger container with slide-up children (use with staggerItem)
export const slideUpStagger = {
    hidden:  {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren:   0.1,
        }
    }
};

export const staggerItem = {
    hidden:  { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: EXPO_OUT }
    }
};

// ── Hover utilities (used directly in whileHover) ────────────────────────────

export const hoverScale = {
    scale: 1.03,
    transition: { duration: 0.3, ease: 'easeOut' }
};

// Cyan aurora glow — updated from blue to cyan
export const hoverGlow = {
    boxShadow: '0 0 30px rgba(0,229,255,0.25), 0 0 60px rgba(123,47,255,0.12)',
    transition: { duration: 0.4, ease: 'easeOut' }
};

export const hoverLift = {
    y: -6,
    transition: { duration: 0.3, ease: 'easeOut' }
};
