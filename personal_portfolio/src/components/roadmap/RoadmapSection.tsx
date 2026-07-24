'use client';

import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, FileText, Mail, Sparkles } from 'lucide-react';
import { animate } from 'animejs';
import { useEffect, useRef, useState } from 'react';

const milestones = [
  { number: '01', label: 'The foundation', title: 'A resume is a map, not a finish line.', description: 'Start with the through-line: computer science, systems thinking, and a bias toward making complicated things easier to operate.', icon: FileText, meta: 'CS → systems → software' },
  { number: '02', label: 'First signal', title: 'Learning to build for people.', description: 'Healthcare software made the stakes clear: reliable data, accessible experiences, and small details that genuinely change how someone works.', icon: Sparkles, meta: 'Sensoria Health · 2024' },
  { number: '03', label: 'At scale', title: 'From features to production systems.', description: 'Enterprise work sharpened the craft across APIs, automation, secure delivery, and the distributed systems underneath everyday workflows.', icon: BriefcaseBusiness, meta: 'Cencora · 2024—2025' },
  { number: '04', label: 'Current chapter', title: 'Making high-volume data actionable.', description: 'Today I build cloud and observability systems around millions of events—so teams can see what matters and act with confidence.', icon: Code2, meta: 'BNSF Railway · 2025—now' },
  { number: '05', label: 'What’s next', title: 'Let’s build the next chapter together.', description: 'If you’re solving an interesting backend, cloud, distributed-systems, or reliability problem, I’d like to hear about it.', icon: Mail, meta: 'Open to meaningful problems' },
];

export function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const steps = Array.from(section.querySelectorAll<HTMLElement>('.roadmap-step'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const runningAnimations: Array<{ pause: () => void }> = [];

    const revealStep = (step: HTMLElement, index: number) => {
      setActiveStep(index);
      if (reduceMotion) {
        line.style.height = `${(index / (steps.length - 1)) * 100}%`;
        return;
      }

      const card = step.querySelector<HTMLElement>('.roadmap-card');
      const marker = step.querySelector<HTMLElement>('.roadmap-marker');
      if (!card || !marker) return;

      runningAnimations.push(animate(line, {
        height: `${(index / (steps.length - 1)) * 100}%`,
        duration: 700,
        easing: 'easeOutCubic',
      }));
      runningAnimations.push(animate(card, {
        opacity: [0.45, 1],
        translateX: [index % 2 === 0 ? -18 : 18, 0],
        duration: 650,
        easing: 'easeOutCubic',
      }));
      runningAnimations.push(animate(marker, {
        scale: [0.75, 1],
        rotate: ['-12deg', '0deg'],
        duration: 500,
        easing: 'easeOutBack',
      }));
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number((entry.target as HTMLElement).dataset.step ?? 0);
          revealStep(entry.target as HTMLElement, index);
        }
      });
    }, { rootMargin: '-38% 0px -38% 0px', threshold: 0 });

    steps.forEach((step) => observer.observe(step));
    return () => {
      observer.disconnect();
      runningAnimations.forEach((animation) => animation.pause());
    };
  }, []);

  return (
    <section ref={sectionRef} id="journey" className="roadmap-section" aria-labelledby="roadmap-title">
      <div className="roadmap-heading">
        <div>
          <p className="section-kicker">03 / The journey</p>
          <h2 id="roadmap-title">A few signals<br /><span className="accent-text">along the way.</span></h2>
        </div>
        <p className="roadmap-lede">Scroll through the chapters that shaped how I approach software: curious first, rigorous when it matters, and always connected to the people using it.</p>
      </div>

      <div className="roadmap-progress" aria-hidden="true">
        <span>01</span><i><b ref={lineRef} /></i><span>05</span>
      </div>

      <div className="roadmap-track">
        {milestones.map(({ number, label, title, description, icon: Icon, meta }, index) => (
          <article className={`roadmap-step ${activeStep === index ? 'is-active' : ''}`} data-step={index} key={number}>
            <div className="roadmap-marker"><span>{number}</span><Icon size={15} strokeWidth={1.5} /></div>
            <div className="roadmap-card">
              <p className="roadmap-label">{label}</p>
              <h3>{title}</h3>
              <p className="roadmap-description">{description}</p>
              <div className="roadmap-meta"><span>{meta}</span>{index === 0 ? <a href="/resume/Abdulbosit-Anvarov-Resume.pdf">View resume <ArrowUpRight size={13} /></a> : index === milestones.length - 1 ? <a href="#contact">Start a conversation <ArrowUpRight size={13} /></a> : <span className="roadmap-index">chapter {number}</span>}</div>
            </div>
          </article>
        ))}
      </div>

      <a className="roadmap-scroll-cue" href="#experience"><ArrowDown size={14} /> Continue to the details</a>
    </section>
  );
}
