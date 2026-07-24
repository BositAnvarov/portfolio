'use client';

import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, FileText, Mail, Sparkles } from 'lucide-react';
import { animate, stagger } from 'animejs';
import { useEffect, useRef, useState } from 'react';

const milestones = [
  { number: '01', label: 'The foundation', title: 'A resume is a map, not a finish line.', description: 'Computer science, systems thinking, and a bias toward making complicated things easier to operate.', icon: FileText, meta: 'CS → systems → software', shape: 'foundation' },
  { number: '02', label: 'First signal', title: 'Learning to build for people.', description: 'Healthcare software made the stakes clear: reliable data, accessible experiences, and small details that change how someone works.', icon: Sparkles, meta: 'Sensoria Health · 2024', shape: 'people' },
  { number: '03', label: 'At scale', title: 'From features to production systems.', description: 'Enterprise work sharpened the craft across APIs, automation, secure delivery, and the distributed systems underneath everyday workflows.', icon: BriefcaseBusiness, meta: 'Cencora · 2024—2025', shape: 'scale' },
  { number: '04', label: 'Current chapter', title: 'Making high-volume data actionable.', description: 'Cloud and observability systems around millions of events—so teams can see what matters and act with confidence.', icon: Code2, meta: 'BNSF Railway · 2025—now', shape: 'signal' },
  { number: '05', label: 'What’s next', title: 'Let’s build the next chapter together.', description: 'An interesting backend, cloud, distributed-systems, or reliability problem is always worth a conversation.', icon: Mail, meta: 'Open to meaningful problems', shape: 'future' },
];

export function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const active = milestones[activeStep];
  const ActiveIcon = active.icon;

  useEffect(() => {
    const section = sectionRef.current;
    const object = objectRef.current;
    if (!section || !object) return;

    const steps = Array.from(section.querySelectorAll<HTMLElement>('.roadmap-step'));
    const particles = Array.from(object.querySelectorAll<HTMLElement>('.roadmap-particle'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const runningAnimations: Array<{ pause: () => void }> = [];

    const activate = (index: number) => {
      setActiveStep(index);
      object.dataset.shape = milestones[index].shape;
      if (reduceMotion) return;

      runningAnimations.push(animate(object, {
        scale: [0.86, 1.12, 1],
        rotate: [-8, 8, 0],
        duration: 950,
        easing: 'easeOutElastic(1, .7)',
      }));
      const glow = object.querySelector<HTMLElement>('.roadmap-core-glow');
      if (glow) runningAnimations.push(animate(glow, {
        scale: [0.7, 1.7],
        opacity: [0.8, 0],
        duration: 850,
        easing: 'easeOutCubic',
      }));
      runningAnimations.push(animate(particles, {
        rotate: [0, 180],
        scale: [0.7, 1.25],
        delay: stagger(35),
        duration: 750,
        easing: 'easeOutCubic',
      }));
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activate(Number((entry.target as HTMLElement).dataset.step ?? 0));
      });
    }, { rootMargin: '-42% 0px -42% 0px', threshold: 0 });

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
          <h2 id="roadmap-title">The object<br /><span className="accent-text">is the story.</span></h2>
        </div>
        <p className="roadmap-lede">Scroll through the chapters that shaped how I approach software. Watch the signal in the middle change with each one.</p>
      </div>

      <div className="roadmap-lab">
        <div className="roadmap-story">
          {milestones.map(({ number, label, title, description, meta }, index) => (
            <article className={`roadmap-step ${activeStep === index ? 'is-active' : ''}`} data-step={index} key={number}>
              <span className="roadmap-step-number">{number}</span>
              <div>
                <p className="roadmap-label">{label}</p>
                <h3>{title}</h3>
                <p className="roadmap-description">{description}</p>
                <p className="roadmap-step-meta">{meta}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="roadmap-stage" aria-live="polite">
          <div className="roadmap-stage-top"><span>LIVE SYSTEM</span><span>0{activeStep + 1} / 05</span></div>
          <div ref={objectRef} className="roadmap-object" data-shape={active.shape} aria-hidden="true">
            <div className="roadmap-orbit roadmap-orbit-a" />
            <div className="roadmap-orbit roadmap-orbit-b" />
            <div className="roadmap-orbit roadmap-orbit-c" />
            <div className="roadmap-core-glow" />
            <div className="roadmap-core"><ActiveIcon size={32} strokeWidth={1.1} /></div>
            <span className="roadmap-particle particle-a" />
            <span className="roadmap-particle particle-b" />
            <span className="roadmap-particle particle-c" />
            <span className="roadmap-particle particle-d" />
          </div>
          <div className="roadmap-stage-bottom"><span>{active.label}</span><span className="status-live"><i /> tracking</span></div>
        </div>

        <aside className="roadmap-readout">
          <p className="roadmap-readout-kicker">Current readout</p>
          <ActiveIcon size={18} strokeWidth={1.5} />
          <p className="roadmap-readout-label">{active.label}</p>
          <p className="roadmap-readout-meta">{active.meta}</p>
          {activeStep === 0 && <a href="/resume/Abdulbosit-Anvarov-Resume.pdf">Open resume <ArrowUpRight size={13} /></a>}
          {activeStep === milestones.length - 1 && <a href="#contact">Start a conversation <ArrowUpRight size={13} /></a>}
        </aside>
      </div>

      <a className="roadmap-scroll-cue" href="#experience"><ArrowDown size={14} /> Continue to the details</a>
    </section>
  );
}
