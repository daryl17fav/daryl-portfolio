import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// ─── Constants ────────────────────────────────────────────────────────────────
const HERO_NAME     = 'MUAIKEI DARYL FAVOUR M.I';
const HERO_SUBTITLE = 'Software Engineer | Product Operations | Systems Architect';
const GLITCH_CHARS  = '!<>-_\\/[]{}—=+*^?#________';

// ─── Typewriter Hook ──────────────────────────────────────────────────────────
const useTypewriter = (text, speed = 60, startDelay = 800) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0, timeout;
    const type = () => {
      if (i <= text.length) { setDisplayed(text.slice(0, i)); i++; timeout = setTimeout(type, speed); }
      else setDone(true);
    };
    const start = setTimeout(type, startDelay);
    return () => { clearTimeout(start); clearTimeout(timeout); };
  }, [text, speed, startDelay]);

  return { displayed, done };
};

// ─── Glitch Text Component (cyan accent) ─────────────────────────────────────
const GlitchText = ({ text, className = '' }) => {
  const [glitched, setGlitched] = useState(text);
  const [active, setActive]     = useState(false);
  const iRef = useRef(null);

  const runGlitch = useCallback(() => {
    let frame = 0; const maxFrames = 18;
    clearInterval(iRef.current);
    setActive(true);
    iRef.current = setInterval(() => {
      setGlitched(
        text.split('').map((ch, idx) => {
          if (ch === ' ' || ch === '|') return ch;
          if (idx < frame * (text.length / maxFrames)) return ch;
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        }).join('')
      );
      frame++;
      if (frame > maxFrames) { setGlitched(text); setActive(false); clearInterval(iRef.current); }
    }, 50);
  }, [text]);

  useEffect(() => {
    const loop = setInterval(runGlitch, 3800);
    const init = setTimeout(runGlitch, 300);
    return () => { clearInterval(loop); clearTimeout(init); clearInterval(iRef.current); };
  }, [runGlitch]);

  return (
    <span className={`relative inline-block ${className}`}>
      {active && (
        <>
          <span className="absolute inset-0 select-none pointer-events-none text-red-500/40"
            style={{ transform: 'translate(3px,-1px)', clipPath: 'inset(20% 0 60% 0)' }} aria-hidden="true">
            {glitched}
          </span>
          <span className="absolute inset-0 select-none pointer-events-none text-[#00E5FF]/40"
            style={{ transform: 'translate(-3px,1px)', clipPath: 'inset(60% 0 20% 0)' }} aria-hidden="true">
            {glitched}
          </span>
        </>
      )}
      <span>{glitched}</span>
    </span>
  );
};

// ─── Cursor Glow (cyan) ────────────────────────────────────────────────────────
const CursorGlow = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const h = (e) => { mx.set(e.clientX - 300); my.set(e.clientY - 300); };
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, [mx, my]);

  return (
    <motion.div
      className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0"
      style={{
        x: sx, y: sy,
        background: 'radial-gradient(circle at center, rgba(0,229,255,0.03) 0%, transparent 70%)',
      }}
    />
  );
};

// ─── Stagger variants ─────────────────────────────────────────────────────────
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};
const item = {
  hidden:  { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 14 } },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const { displayed: typedName, done: nameDone } = useTypewriter(HERO_NAME, 55, 500);
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Scanlines overlay */}
      <div className="scanlines absolute inset-0 z-10 pointer-events-none opacity-40" />
      <CursorGlow />

      {/* Corner decorators */}
      {['top-6 left-6', 'top-6 right-6', 'bottom-6 left-6', 'bottom-6 right-6'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-8 h-8 z-20 pointer-events-none`}>
          <div className="w-full h-full border-[#00E5FF]/20"
            style={{
              borderTopWidth:    i < 2 ? 1 : 0,
              borderBottomWidth: i >= 2 ? 1 : 0,
              borderLeftWidth:   i % 2 === 0 ? 1 : 0,
              borderRightWidth:  i % 2 !== 0 ? 1 : 0,
            }}
          />
        </div>
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2 border border-[#00E5FF]/15 px-4 py-1.5 text-[10px] md:text-xs tracking-[0.35em] uppercase font-mono text-[#00E5FF]/50"
            style={{ background: 'rgba(0,229,255,0.03)' }}>
            <motion.span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00E5FF]"
              animate={{ opacity: [1, 0.2, 1], scale: [1, 0.7, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name — Typewriter */}
        <motion.div variants={item} className="mb-5">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F0F0F0] leading-none"
            style={{ textShadow: '0 0 60px rgba(0,229,255,0.08)' }}
          >
            {typedName}
            <motion.span
              className="inline-block w-[3px] md:w-1 h-10 md:h-16 bg-[#00E5FF] ml-1.5 align-middle"
              animate={nameDone ? { opacity: [1, 0, 1] } : { opacity: 1 }}
              transition={nameDone ? { duration: 0.85, repeat: Infinity } : {}}
            />
          </h1>
        </motion.div>

        {/* Subtitle — Glitch */}
        <motion.div variants={item} className="mb-10">
          <p className="text-sm md:text-lg font-mono tracking-widest">
            <GlitchText text={HERO_SUBTITLE} className="text-[#00E5FF]/70" />
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div variants={item} className="flex items-center gap-4 justify-center mb-12">
          <div className="h-px w-16 md:w-28" style={{ background: 'rgba(0,229,255,0.12)' }} />
          <span className="font-mono text-[10px] text-[#00E5FF]/25 tracking-[0.4em]">{'// PORTFOLIO_OS v2.0'}</span>
          <div className="h-px w-16 md:w-28" style={{ background: 'rgba(0,229,255,0.12)' }} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary */}
          <motion.button
            onClick={() => scrollTo('#projects')}
            className="group relative w-full sm:w-auto px-8 py-4 font-mono text-sm tracking-widest uppercase overflow-hidden bg-[#00E5FF] text-[#050505] font-bold hover:shadow-[0_0_40px_rgba(0,229,255,0.35)] transition-shadow duration-300"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <span>▶</span> Initialize System
            </span>
          </motion.button>

          {/* Secondary */}
          <motion.button
            onClick={() => scrollTo('#experience')}
            className="group relative w-full sm:w-auto px-8 py-4 font-mono text-sm tracking-widest uppercase border border-[#00E5FF]/25 text-[#00E5FF]/50 hover:text-[#050505] hover:border-[#00E5FF] transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-[#00E5FF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <span className="text-[10px]">{'{ }'}</span> View Logs
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div variants={item} className="mt-20 flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] text-[#00E5FF]/20 tracking-[0.4em] uppercase">Scroll to explore</span>
          <motion.div
            className="w-px h-12 bg-[#00E5FF]/15 origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
