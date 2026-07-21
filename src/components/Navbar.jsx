import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

// ─── Constants ────────────────────────────────────────────────────────────────
const GLITCH_CHARS = '!@#$%^&*<>[]{}|/\\~`?ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// ─── NavLinkItem (defined BEFORE Navbar to avoid no-undef) ───────────────────
const NavLinkItem = ({ link, index, onClick }) => {
  const spanRef    = useRef(null);
  const intervalRef = useRef(null);

  const triggerGlitch = () => {
    if (!spanRef.current) return;
    const original = link.name;
    let itr = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      spanRef.current.textContent = original
        .split('')
        .map((ch, idx) => {
          if (ch === ' ') return ' ';
          if (idx < itr) return original[idx];
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        })
        .join('');
      itr += 0.6;
      if (itr >= original.length) {
        spanRef.current.textContent = original;
        clearInterval(intervalRef.current);
      }
    }, 38);
  };

  useEffect(() => () => clearInterval(intervalRef.current), []);

  return (
    <motion.button
      onClick={() => onClick(link.href)}
      onHoverStart={triggerGlitch}
      className="group relative flex items-center gap-1.5 text-[#6B7280] hover:text-[#00E5FF] transition-colors duration-200 cursor-pointer"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.08, type: 'spring', stiffness: 200 }}
    >
      <span className="text-[#00E5FF]/20 group-hover:text-[#00E5FF]/60 font-mono text-xs transition-colors duration-200">
        ./
      </span>
      <span ref={spanRef} className="font-mono text-sm tracking-widest uppercase">
        {link.name}
      </span>
      <motion.span className="absolute -bottom-1 left-0 h-px bg-[#00E5FF] w-0 group-hover:w-full"
        transition={{ duration: 0.25 }}
      />
    </motion.button>
  );
};

// ─── Navbar ───────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cmdTime,  setCmdTime]  = useState('');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 60));

  useEffect(() => {
    const tick = () => {
      const n  = new Date();
      const hh = String(n.getHours()).padStart(2, '0');
      const mm = String(n.getMinutes()).padStart(2, '0');
      const ss = String(n.getSeconds()).padStart(2, '0');
      setCmdTime(`${hh}:${mm}:${ss}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const navLinks = [
    { name: 'About',      href: '#about'      },
    { name: 'Skills',     href: '#skills'     },
    { name: 'Projects',   href: '#projects'   },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact',    href: '#contact'    },
  ];

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-4 left-1/2 z-50 w-[95%] max-w-5xl"
      style={{ x: '-50%' }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
    >
      {/* Floating command bar */}
      <div
        className={`relative border transition-all duration-500 ${
          scrolled
            ? 'border-[#00E5FF]/30 bg-[#050505]/85 backdrop-blur-xl'
            : 'border-white/[0.06] bg-[#050505]/60 backdrop-blur-md'
        }`}
        style={scrolled ? { boxShadow: '0 0 30px rgba(0,229,255,0.06)' } : {}}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-[#00E5FF]/30" />

        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo / Prompt */}
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
            <span className="font-mono text-xs tracking-widest">
              <span className="text-[#00E5FF]/30">root@</span>
              <span className="text-[#00E5FF] font-bold">daryl</span>
              <span className="text-[#00E5FF]/30">:~$</span>
            </span>
            <motion.span
              className="inline-block w-2 h-4 bg-[#00E5FF]"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            />
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <NavLinkItem key={link.name} link={link} index={i} onClick={scrollToSection} />
            ))}
          </div>

          {/* Clock / Status */}
          <div className="hidden md:flex items-center gap-3">
            <motion.span
              className="inline-block w-2 h-2 rounded-full bg-[#00E5FF]"
              animate={{ opacity: [1, 0.2, 1], scale: [1, 0.8, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="font-mono text-[10px] text-[#00E5FF]/40 tracking-widest">
              {cmdTime}
            </span>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 border border-[#00E5FF]/20 hover:border-[#00E5FF]/60 transition-colors duration-200"
            onClick={() => setIsOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <motion.span className="block w-5 h-px bg-[#00E5FF]"
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span className="block w-5 h-px bg-[#00E5FF]"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span className="block w-5 h-px bg-[#00E5FF]"
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>

        {/* Bottom faint line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00E5FF]/10" />
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden mt-1 border border-[#00E5FF]/15 bg-[#050505]/95 backdrop-blur-xl overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex flex-col p-4 gap-1">
              <p className="font-mono text-[10px] text-[#00E5FF]/25 tracking-widest mb-3 border-b border-white/[0.04] pb-2">
                // NAVIGATION_MENU :: LOADED
              </p>
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="group flex items-center gap-3 p-3 hover:bg-[#00E5FF]/[0.03] border border-transparent hover:border-[#00E5FF]/15 transition-all duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <span className="font-mono text-[10px] text-[#00E5FF]/25 w-6">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-sm text-[#6B7280] group-hover:text-[#00E5FF] tracking-widest uppercase transition-colors duration-200">
                    {link.name}
                  </span>
                </motion.button>
              ))}
              <p className="font-mono text-[10px] text-[#00E5FF]/25 tracking-widest mt-3 border-t border-white/[0.04] pt-2 flex items-center gap-2">
                <motion.span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-[#00E5FF]"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                {cmdTime} — SYSTEM_ONLINE
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
