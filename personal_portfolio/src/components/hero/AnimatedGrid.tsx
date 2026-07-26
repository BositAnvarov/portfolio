'use client';

import { motion } from 'motion/react';

export function AnimatedGrid() {
  const nodes = Array.from({ length: 12 });
  return <div className="hero-visual" aria-hidden="true"><div className="grid-plane" /><div className="visual-label label-a">telemetry.stream</div><div className="visual-label label-b">/ systems / healthy</div><svg className="data-lines" viewBox="0 0 600 500" fill="none"><path d="M60 350 190 250 310 320 445 140 540 180" /><path d="M190 250 190 100M310 320V470M445 140V60" /></svg>{nodes.map((_, index) => <motion.span key={index} className="data-node" style={{ left: `${12 + (index % 4) * 25}%`, top: `${18 + Math.floor(index / 4) * 25}%` }} animate={{ opacity: [0.25, 0.9, 0.25] }} transition={{ duration: 3.4, delay: index * 0.16, repeat: Infinity, ease: 'easeInOut' }} />)}</div>;
}
