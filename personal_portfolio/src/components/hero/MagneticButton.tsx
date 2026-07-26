'use client';

import { ArrowUpRight, Download } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import { smoothSpring } from '@/components/ui/AnimatedSection';

export function MagneticButton({ href, children, secondary = false, download = false }: { href: string; children: React.ReactNode; secondary?: boolean; download?: boolean }) {
  const [enabled, setEnabled] = useState(false);
  const x = useSpring(useMotionValue(0), smoothSpring); const y = useSpring(useMotionValue(0), smoothSpring);
  useEffect(() => { const media = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)'); const update = () => setEnabled(media.matches); update(); media.addEventListener('change', update); return () => media.removeEventListener('change', update); }, []);
  const handleMove = (event: React.PointerEvent<HTMLAnchorElement>) => { if (!enabled) return; const rect = event.currentTarget.getBoundingClientRect(); x.set((event.clientX - (rect.left + rect.width / 2)) * 0.12); y.set((event.clientY - (rect.top + rect.height / 2)) * 0.12); };
  return <motion.a href={href} download={download || undefined} className={`button ${secondary ? 'button-secondary' : 'button-primary'}`} onPointerMove={handleMove} onPointerLeave={() => { x.set(0); y.set(0); }} whileTap={{ scale: 0.98 }}><motion.span style={{ x, y }} className="inline-flex items-center gap-2">{download && <Download size={16} />}{children}{!download && <ArrowUpRight size={16} />}</motion.span></motion.a>;
}
