'use client';

import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, FileText, Mail, Sparkles } from 'lucide-react';
import { animate, stagger } from 'animejs';
import { useEffect, useRef, useState } from 'react';

const milestones = [
  { number: '01', label: 'The beginning', title: 'Every story starts somewhere.', description: 'A curious kid starts school, asks too many questions, and learns that the things worth building usually begin as a rough sketch.', icon: FileText, meta: 'School · a first spark', stage: 'kid' },
  { number: '02', label: 'Learning the language', title: 'Finding a place in the world of ideas.', description: 'Classes, experiments, and the first moments of realizing that a computer can turn an idea into something other people can use.', icon: Sparkles, meta: 'High school · curiosity compounds', stage: 'student' },
  { number: '03', label: 'The leap', title: 'College turns curiosity into craft.', description: 'Hard problems, long nights, new people, and the freedom to fail forward while learning how systems fit together.', icon: BriefcaseBusiness, meta: 'University · foundations', stage: 'college' },
  { number: '04', label: 'The work', title: 'Turning knowledge into responsibility.', description: 'Internships and production systems make the work real: users, teammates, deadlines, failures, and software that has to hold up.', icon: Code2, meta: 'Engineering · production', stage: 'engineer' },
  { number: '05', label: 'The person today', title: 'Still growing. Still building.', description: 'The kid is still in there—now carrying more context, more responsibility, and a bigger curiosity about what comes next.', icon: Mail, meta: 'Software Engineer · today', stage: 'future' },
];

export function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);
  const personRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const active = milestones[activeStep];
  const ActiveIcon = active.icon;

  useEffect(() => {
    const section = sectionRef.current;
    const object = objectRef.current;
    const person = personRef.current;
    if (!section || !object || !person) return;

    const steps = Array.from(section.querySelectorAll<HTMLElement>('.roadmap-step'));
    const particles = Array.from(object.querySelectorAll<HTMLElement>('.roadmap-particle'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const runningAnimations: Array<{ pause: () => void }> = [];

    const activate = (index: number) => {
      setActiveStep(index);
      person.dataset.stage = milestones[index].stage;
      if (reduceMotion) return;

      runningAnimations.push(animate(object, {
        scale: [0.86, 1.12, 1],
        rotate: [-8, 8, 0],
        duration: 950,
        easing: 'easeOutElastic(1, .7)',
      }));
      const positions = ['-32%', '0%', '30%', '-25%', '25%'];
      runningAnimations.push(animate(person, {
        left: [positions[Math.max(0, index - 1)], positions[index]],
        scale: [0.96, 1],
        duration: 1000,
        easing: 'easeOutCubic',
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
          <h2 id="roadmap-title">A life in<br /><span className="accent-text">motion.</span></h2>
        </div>
        <p className="roadmap-lede">Scroll through the chapters that shaped who I am. Watch one small character grow through school, college, work, and everything in between.</p>
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
          <div className="roadmap-stage-top"><span>LIFE / IN PROGRESS</span><span>0{activeStep + 1} / 05</span></div>
          <div ref={objectRef} className="roadmap-object" aria-hidden="true">
            <div className="roadmap-orbit roadmap-orbit-a" />
            <div className="roadmap-orbit roadmap-orbit-b" />
            <div className="roadmap-orbit roadmap-orbit-c" />
            <div className="roadmap-core-glow" />
            <div ref={personRef} className="roadmap-person" data-stage={active.stage} />
            <div className="roadmap-person-badge"><ActiveIcon size={16} strokeWidth={1.6} /></div>
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
