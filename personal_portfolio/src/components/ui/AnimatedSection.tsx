'use client';

import { motion, type Variants } from 'motion/react';

const fadeUp: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } };

export function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>{children}</motion.div>;
}

export const smoothSpring = { type: 'spring' as const, stiffness: 260, damping: 28, mass: 0.8 };
