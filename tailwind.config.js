/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1F77FF',
                    dark: '#60A5FA', // Lighter blue for dark mode
                },
                secondary: {
                    DEFAULT: '#FFD700', // Gold
                },
                bg: {
                    default: '#FFFFFF',
                    dark: '#0F111A',
                    paper: '#F3F4F6', // Light gray for cards
                    'paper-dark': '#1A1D2E',
                },
                text: {
                    primary: '#111827', // Dark gray
                    'primary-dark': '#F9FAFB', // White
                    secondary: '#6B7280', // Medium gray
                    'secondary-dark': '#9CA3AF', // Lighter gray
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'fade-up': 'fadeUp 0.6s ease-in-out',
                'scale-in': 'scaleIn 0.4s ease-in-out',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(31, 119, 255, 0.5)' },
                    '100%': { boxShadow: '0 0 20px rgba(31, 119, 255, 0.8)' },
                },
            },
        },
    },
    plugins: [],
}
