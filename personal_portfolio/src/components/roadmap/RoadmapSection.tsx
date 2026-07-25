'use client';

import { BriefcaseBusiness, Code2, FileText, GraduationCap, Mail, Sparkles } from 'lucide-react';
import { createTimeline } from 'animejs';
import { useEffect, useRef, useState } from 'react';
import { profile } from '@/data/portfolio';

const milestones = [
  { number: '01', phase: 'High School', year: 'The beginning', label: 'A curious mind', title: 'Every story starts somewhere.', description: 'A kid who asked too many questions discovered that ideas could become things—and that learning could be its own kind of adventure.', icon: FileText, meta: 'Curiosity became the starting point', stage: 'kid', side: 'left' },
  { number: '02', phase: 'High School', year: 'High school years', label: 'The first signal', title: 'Technology became a language.', description: 'Classes, experiments, and early projects revealed that a computer could turn an idea into something useful for other people.', icon: Sparkles, meta: 'The first real pull toward software', stage: 'student', side: 'right' },
  { number: '03', phase: 'College', year: 'University', label: 'Learning the craft', title: 'Curiosity met discipline.', description: 'Hard problems, long nights, new people, and the freedom to fail forward built the foundations of an engineer.', icon: BriefcaseBusiness, meta: 'Computer science · systems · teamwork', stage: 'college', side: 'left' },
  { number: '04', phase: 'College', year: '2023', label: 'A defining checkpoint', title: 'Graduation opened the next door.', description: 'Years of study became a Computer Science degree—and an important reminder that progress is made one difficult chapter at a time.', icon: GraduationCap, meta: 'B.S. Computer Science · 2023', stage: 'graduation', side: 'right' },
  { number: '05', phase: 'Career', year: 'The first roles', label: 'The work became real', title: 'Knowledge turned into responsibility.', description: 'Internships and production systems introduced real users, real teammates, real failures, and software that had to hold up.', icon: Code2, meta: 'Healthcare · enterprise · production', stage: 'engineer', side: 'left' },
  { number: '06', phase: 'Career', year: 'Today', label: 'Still becoming', title: 'Building systems that matter.', description: 'Now the work spans cloud platforms, distributed systems, and observability—while the curiosity that started everything keeps growing.', icon: Mail, meta: 'Software Engineer · the story continues', stage: 'future', side: 'right' },
];

const phases = ['High School', 'College', 'Career'];

const phaseMotion = [
  { entry: '68%', first: '68%', second: '24%' },
  { entry: '24%', first: '65%', second: '22%' },
  { entry: '22%', first: '62%', second: '38%' },
];

export function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const avatarMoverRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const active = milestones[activeStep];
  const ActiveIcon = active.icon;

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const avatarMover = avatarMoverRef.current;
    const avatar = avatarRef.current;
    const intro = introRef.current;
    if (!section || !stage || !avatarMover || !avatar || !intro) return;

    const highlights = Array.from(section.querySelectorAll<HTMLElement>('.journey-highlight'));
    const triggers = Array.from(section.querySelectorAll<HTMLElement>('.journey-trigger'));
    const ambientLines = Array.from(stage.querySelectorAll<HTMLElement>('.journey-ambient-line'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const buildPhaseTimeline = (phaseIndex: number) => {
      const firstHighlight = highlights[phaseIndex * 2];
      const secondHighlight = highlights[phaseIndex * 2 + 1];
      const motion = phaseMotion[phaseIndex];
      const timeline = createTimeline({ autoplay: false });

      timeline
        .add(avatarMover, { left: [motion.entry, motion.first], duration: 220, ease: 'outCubic' }, 0)
        .add(avatarMover, { left: motion.second, duration: 780, ease: 'inOutCubic' }, 220)
        .add(ambientLines, { rotate: [0, phaseIndex % 2 ? -8 : 8], opacity: [0.22, 0.52], duration: 1000, ease: 'inOutSine' }, 0)
        .add(firstHighlight, { opacity: [0, 1], translateY: [34, 0], duration: 260, ease: 'outCubic' }, 80)
        .add(firstHighlight, { opacity: [1, 0], translateY: [0, -22], duration: 180, ease: 'inCubic' }, 400)
        .add(secondHighlight, { opacity: [0, 1], translateY: [34, 0], duration: 300, ease: 'outCubic' }, 520);

      if (phaseIndex === 0) {
        timeline.add(intro, { opacity: [1, 0], translateY: [0, -28], duration: 220, ease: 'inCubic' }, 0);
      }

      timeline.pause();
      return timeline;
    };

    const highSchoolTimeline = buildPhaseTimeline(0);
    const collegeTimeline = buildPhaseTimeline(1);
    const careerTimeline = buildPhaseTimeline(2);
    const timelines = [highSchoolTimeline, collegeTimeline, careerTimeline];

    const triggerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-in-view', entry.isIntersecting));
    }, { rootMargin: '-46% 0px -46% 0px', threshold: 0 });
    triggers.forEach((trigger) => triggerObserver.observe(trigger));

    let frame = 0;
    let previousStep = -1;
    let previousPhase = -1;

    const updateScene = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const scrollableDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -bounds.top / scrollableDistance));
      const phaseFloat = Math.min(2.9999, progress * 3);
      const phaseIndex = Math.floor(phaseFloat);
      const phaseProgress = phaseFloat - phaseIndex;
      const nextStep = Math.min(5, phaseIndex * 2 + (phaseProgress < 0.5 ? 0 : 1));

      stage.style.setProperty('--journey-progress', `${progress * 100}%`);
      stage.style.setProperty('--phase-progress', String(phaseProgress));

      if (!reduceMotion) {
        timelines[phaseIndex].seek(phaseProgress * timelines[phaseIndex].duration, true);
      } else {
        intro.style.opacity = progress < 0.05 ? '1' : '0';
        highlights.forEach((highlight, index) => { highlight.style.opacity = index === nextStep ? '1' : '0'; });
        avatarMover.style.left = phaseProgress < 0.5 ? phaseMotion[phaseIndex].first : phaseMotion[phaseIndex].second;
      }

      if (phaseIndex !== previousPhase) {
        previousPhase = phaseIndex;
        highlights.forEach((highlight, index) => {
          if (Math.floor(index / 2) !== phaseIndex) highlight.style.opacity = '0';
        });
        if (phaseIndex > 0) intro.style.opacity = '0';
        setActivePhase(phaseIndex);
      }

      if (nextStep !== previousStep) {
        previousStep = nextStep;
        avatar.dataset.stage = milestones[nextStep].stage;
        setActiveStep(nextStep);
      }
    };

    const requestSceneUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScene);
    };

    updateScene();
    window.addEventListener('scroll', requestSceneUpdate, { passive: true });
    window.addEventListener('resize', requestSceneUpdate);

    return () => {
      triggerObserver.disconnect();
      window.removeEventListener('scroll', requestSceneUpdate);
      window.removeEventListener('resize', requestSceneUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      timelines.forEach((timeline) => timeline.revert());
    };
  }, []);

  return (
    <section ref={sectionRef} id="top" className={`journey-hero journey-phase-${activePhase}`} aria-labelledby="journey-title">
      <span id="journey" className="journey-anchor" />
      <div ref={stageRef} className="journey-stage">
        <div className="journey-grid" aria-hidden="true" />
        <div className="journey-glow" aria-hidden="true" />
        <span className="journey-ambient-line ambient-line-a" aria-hidden="true" />
        <span className="journey-ambient-line ambient-line-b" aria-hidden="true" />

        <div className="journey-topline">
          <span>{profile.shortName}</span>
          <span>{phases[activePhase]} · {active.number} / 06</span>
        </div>

        <div ref={introRef} className="journey-intro">
          <p className="journey-kicker">Software engineer · A life in motion</p>
          <h1 id="journey-title">Every system<br />has a <span>story.</span></h1>
          <p>Scroll through the moments that shaped the person behind the code—from a curious kid to an engineer building reliable systems at scale.</p>
        </div>

        <div ref={avatarMoverRef} className="journey-avatar-mover" aria-hidden="true">
          <div className="journey-avatar-halo" />
          <div ref={avatarRef} className="journey-avatar" data-stage={active.stage} />
          <div className="journey-avatar-shadow" />
        </div>

        <div className="journey-highlights" aria-live="polite">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <article className={`journey-highlight journey-highlight-${milestone.side} ${activeStep === index ? 'is-current' : ''}`} data-step={index} key={milestone.number}>
                <div className="journey-highlight-head">
                  <span className="journey-highlight-icon"><Icon size={17} strokeWidth={1.5} /></span>
                  <span>{milestone.number} / {milestone.year}</span>
                </div>
                <p className="journey-highlight-label">{milestone.phase} · {milestone.label}</p>
                <h2>{milestone.title}</h2>
                <p className="journey-highlight-copy">{milestone.description}</p>
                <p className="journey-highlight-meta">{milestone.meta}</p>
              </article>
            );
          })}
        </div>

        <div className="journey-status" aria-hidden="true">
          <span className="journey-status-icon"><ActiveIcon size={15} strokeWidth={1.5} /></span>
          <span>{active.label}</span>
        </div>

        <div className="journey-progress" aria-hidden="true">
          <div className="journey-progress-track"><i /></div>
          <div className="journey-progress-dots">
            {milestones.map((milestone, index) => <span className={index <= activeStep ? 'is-passed' : ''} key={milestone.number}>{milestone.number}</span>)}
          </div>
        </div>

        <div className="journey-scroll-cue" aria-hidden="true"><span>Scroll to move the story</span><i /></div>
      </div>

      <div className="journey-scroll-track" aria-hidden="true">
        {milestones.map((milestone) => <div className="journey-trigger" data-step={milestone.number} key={milestone.number} />)}
      </div>
    </section>
  );
}
