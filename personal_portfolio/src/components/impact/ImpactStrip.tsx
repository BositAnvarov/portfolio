'use client';

import { motion } from 'motion/react';
import { impact } from '@/data/portfolio';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function ImpactStrip() { return <section id="impact" className="impact-strip"><AnimatedSection className="impact-inner">{impact.map((item, index) => <motion.div className="impact-item" key={item.value} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: index * 0.08, duration: 0.4 }}><strong>{item.value}</strong><span>{item.label}</span></motion.div>)}</AnimatedSection></section>; }
