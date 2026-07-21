import React, { useEffect, useRef, useCallback } from 'react';

// ─── Config ───────────────────────────────────────────────────────────────────
const GRID_CELL   = 65;      // px between grid lines
const NODE_COUNT  = 32;      // floating data-point nodes
const CYAN        = '0,229,255';
const PURPLE      = '123,47,255';

// ─── Floating Node class ──────────────────────────────────────────────────────
class Node {
  constructor(w, h, i) {
    this.reset(w, h);
    // Stagger starting positions across the viewport
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.phase = Math.random() * Math.PI * 2;
    this.id = i;
  }

  reset(w, h) {
    this.w     = w;
    this.h     = h;
    this.vx    = (Math.random() - 0.5) * 0.35;
    this.vy    = (Math.random() - 0.5) * 0.35;
    this.size  = 1 + Math.random() * 2.5;
    // shape: 0 = dot, 1 = diamond, 2 = cross
    this.shape = Math.floor(Math.random() * 3);
    this.alpha = 0.08 + Math.random() * 0.18;
    this.color = Math.random() > 0.3 ? CYAN : PURPLE;
    this.driftAmp = 10 + Math.random() * 20;
    this.driftSpeed = 0.0003 + Math.random() * 0.0004;
  }

  update(t) {
    this.x += this.vx + Math.sin(this.phase + t * this.driftSpeed) * 0.2;
    this.y += this.vy + Math.cos(this.phase + t * this.driftSpeed * 0.7) * 0.15;

    // Wrap around edges
    if (this.x < -20)      this.x = this.w + 20;
    if (this.x > this.w + 20) this.x = -20;
    if (this.y < -20)      this.y = this.h + 20;
    if (this.y > this.h + 20) this.y = -20;
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.strokeStyle = `rgba(${this.color},${this.alpha * 2})`;
    ctx.fillStyle   = `rgba(${this.color},${this.alpha * 0.5})`;
    ctx.lineWidth   = 0.8;
    ctx.translate(this.x, this.y);

    const s = this.size;
    switch (this.shape) {
      case 0: // dot
        ctx.beginPath();
        ctx.arc(0, 0, s, 0, Math.PI * 2);
        ctx.fill();
        break;
      case 1: // diamond
        ctx.beginPath();
        ctx.moveTo(0, -s * 2);
        ctx.lineTo(s * 1.2, 0);
        ctx.lineTo(0, s * 2);
        ctx.lineTo(-s * 1.2, 0);
        ctx.closePath();
        ctx.stroke();
        break;
      case 2: // cross
        ctx.beginPath();
        ctx.moveTo(-s * 1.8, 0); ctx.lineTo(s * 1.8, 0);
        ctx.moveTo(0, -s * 1.8); ctx.lineTo(0, s * 1.8);
        ctx.stroke();
        break;
      default: break;
    }
    ctx.restore();
  }
}

// ─── Main Component ───────────────────────────────────────────────────────────
const InteractiveGridBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });
  const nodesRef  = useRef([]);
  const rafRef    = useRef(null);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w   = window.innerWidth;
    const h   = window.innerHeight;
    canvas.width  = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width  = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // Re-initialise nodes on resize
    nodesRef.current = Array.from({ length: NODE_COUNT }, (_, i) => new Node(w, h, i));
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove);

    // ── Render loop ──────────────────────────────────────────────────────────
    const draw = (timestamp) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w   = window.innerWidth;
      const h   = window.innerHeight;
      const mx  = mouseRef.current.x;
      const my  = mouseRef.current.y;

      ctx.clearRect(0, 0, w, h);

      // ── Grid lines ────────────────────────────────────────────────────────
      const cols = Math.ceil(w / GRID_CELL) + 1;
      const rows = Math.ceil(h / GRID_CELL) + 1;

      // Vertical lines
      for (let c = 0; c <= cols; c++) {
        const x = c * GRID_CELL;
        // How close is mouse to this vertical line?
        const dist = Math.abs(mx - x);
        const pulse = Math.max(0, 1 - dist / 160);
        const alpha = 0.04 + pulse * 0.14;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.strokeStyle = `rgba(${CYAN},${alpha})`;
        ctx.lineWidth   = 0.5 + pulse * 0.8;
        ctx.stroke();
      }

      // Horizontal lines
      for (let r = 0; r <= rows; r++) {
        const y = r * GRID_CELL;
        const dist  = Math.abs(my - y);
        const pulse = Math.max(0, 1 - dist / 160);
        const alpha = 0.04 + pulse * 0.14;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.strokeStyle = `rgba(${CYAN},${alpha})`;
        ctx.lineWidth   = 0.5 + pulse * 0.8;
        ctx.stroke();
      }

      // ── Intersection dots (pulse near cursor) ─────────────────────────────
      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          const ix   = c * GRID_CELL;
          const iy   = r * GRID_CELL;
          const dist = Math.hypot(mx - ix, my - iy);
          if (dist < 200) {
            const pulse = Math.pow(1 - dist / 200, 2);
            ctx.beginPath();
            ctx.arc(ix, iy, 1.5 + pulse * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${CYAN},${0.1 + pulse * 0.7})`;
            ctx.fill();
          } else {
            // Always draw a faint dot at intersections
            ctx.beginPath();
            ctx.arc(ix, iy, 0.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${CYAN},0.06)`;
            ctx.fill();
          }
        }
      }

      // ── Floating nodes ────────────────────────────────────────────────────
      nodesRef.current.forEach(node => {
        node.update(timestamp);
        node.draw(ctx);
      });

      // ── Cursor proximity glow ─────────────────────────────────────────────
      if (mx > 0 && my > 0) {
        const grd = ctx.createRadialGradient(mx, my, 0, mx, my, 280);
        grd.addColorStop(0,   `rgba(${CYAN},0.04)`);
        grd.addColorStop(0.5, `rgba(${PURPLE},0.015)`);
        grd.addColorStop(1,   'transparent');
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, w, h);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [resize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default InteractiveGridBackground;
