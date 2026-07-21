/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // ── Tech-Minimalist Cyber Palette ─────────────────────────────
                obsidian: '#050505',
                cyber: {
                    cyan:    '#00E5FF',
                    'cyan-dim':   'rgba(0,229,255,0.15)',
                    'cyan-faint': 'rgba(0,229,255,0.06)',
                    'cyan-glow':  'rgba(0,229,255,0.35)',
                    purple: '#7B2FFF',
                    'purple-dim': 'rgba(123,47,255,0.15)',
                },
                // ── Monochromatic Grays ───────────────────────────────────────
                zinc: {
                    950: '#0a0a0a',
                    900: '#111111',
                    800: '#1a1a1a',
                    700: '#262626',
                    600: '#404040',
                    500: '#5a5a5a',
                    400: '#888888',
                    300: '#b0b0b0',
                    200: '#d0d0d0',
                    100: '#f0f0f0',
                },
                // ── Legacy (kept for backward compat) ────────────────────────
                primary: {
                    DEFAULT: '#00E5FF',
                    dark:    '#00B8D4',
                },
                secondary: {
                    DEFAULT: '#7B2FFF',
                },
                bg: {
                    default: '#050505',
                    dark:    '#050505',
                    paper:   'rgba(255,255,255,0.03)',
                    'paper-dark': 'rgba(255,255,255,0.03)',
                },
                text: {
                    primary:         '#F0F0F0',
                    'primary-dark':  '#F0F0F0',
                    secondary:       '#6B7280',
                    'secondary-dark':'#6B7280',
                },
            },

            fontFamily: {
                display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
                sans:    ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
                mono:    ['"JetBrains Mono"', '"Courier Prime"', 'Courier New', 'monospace'],
            },

            animation: {
                // Entry
                'fade-up':   'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
                'fade-in':   'fadeIn 0.6s ease-out forwards',
                'scale-in':  'scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
                // Ambient
                'aurora':        'aurora 4s ease-in-out infinite alternate',
                'node-drift':    'nodeDrift 12s ease-in-out infinite',
                'pulse-dot':     'pulseDot 2s ease-in-out infinite',
                'blink':         'blink 0.9s step-end infinite',
                'scan':          'scan 3s infinite linear',
                'glow-border':   'glowBorder 3s ease-in-out infinite',
                'terminal-glow': 'terminalGlow 2.5s ease-in-out infinite alternate',
            },

            keyframes: {
                fadeUp: {
                    '0%':   { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%':   { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleIn: {
                    '0%':   { opacity: '0', transform: 'scale(0.92)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                aurora: {
                    '0%':   { boxShadow: '0 0 12px rgba(0,229,255,0.25), 0 0 30px rgba(0,229,255,0.08)' },
                    '33%':  { boxShadow: '0 0 20px rgba(123,47,255,0.3), 0 0 50px rgba(123,47,255,0.1)' },
                    '66%':  { boxShadow: '0 0 18px rgba(0,229,255,0.35), 0 0 40px rgba(0,229,255,0.12)' },
                    '100%': { boxShadow: '0 0 24px rgba(123,47,255,0.25), 0 0 60px rgba(123,47,255,0.08)' },
                },
                nodeDrift: {
                    '0%,100%': { transform: 'translate(0,0) rotate(0deg)' },
                    '25%':     { transform: 'translate(30px,-20px) rotate(90deg)' },
                    '50%':     { transform: 'translate(-20px,30px) rotate(180deg)' },
                    '75%':     { transform: 'translate(20px,10px) rotate(270deg)' },
                },
                pulseDot: {
                    '0%,100%': { opacity: '1', transform: 'scale(1)' },
                    '50%':     { opacity: '0.3', transform: 'scale(0.7)' },
                },
                blink: {
                    '0%,100%': { opacity: '1' },
                    '50%':     { opacity: '0' },
                },
                scan: {
                    '0%':   { top: '0%', opacity: '0' },
                    '10%':  { opacity: '1' },
                    '90%':  { opacity: '1' },
                    '100%': { top: '100%', opacity: '0' },
                },
                glowBorder: {
                    '0%,100%': { borderColor: 'rgba(0,229,255,0.2)' },
                    '50%':     { borderColor: 'rgba(0,229,255,0.6)' },
                },
                terminalGlow: {
                    '0%':   { boxShadow: '0 0 8px rgba(0,229,255,0.15)' },
                    '100%': { boxShadow: '0 0 24px rgba(0,229,255,0.4)' },
                },
            },

            boxShadow: {
                'cyber':     '0 0 20px rgba(0,229,255,0.2)',
                'cyber-lg':  '0 0 40px rgba(0,229,255,0.3)',
                'aurora':    '0 0 30px rgba(0,229,255,0.15), 0 0 60px rgba(123,47,255,0.1)',
                'aurora-lg': '0 0 50px rgba(0,229,255,0.25), 0 0 100px rgba(123,47,255,0.15)',
            },
        },
    },
    plugins: [],
}
