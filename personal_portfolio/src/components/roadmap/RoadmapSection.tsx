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

const avatarPositions = ['68%', '24%', '65%', '22%', '62%', '38%'];

export function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const avatarMoverRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const active = milestones[activeStep];
  const ActiveIcon = active.icon;

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const avatarMover = avatarMoverRef.current;
    const intro = introRef.current;
    if (!section || !stage || !avatarMover || !intro) return;

    const highlights = Array.from(section.querySelectorAll<HTMLElement>('.journey-highlight'));
    const avatarFrames = Array.from(avatarMover.querySelectorAll<HTMLElement>('.journey-avatar-frame'));
    const ambientLines = Array.from(stage.querySelectorAll<HTMLElement>('.journey-ambient-line'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const slotDuration = 1000;
    const totalDuration = milestones.length * slotDuration;
    const masterTimeline = createTimeline({ autoplay: false });

    masterTimeline
      .add(intro, { opacity: [1, 0], translateY: [0, -28], duration: 340, ease: 'inOutCubic' }, 0)
      .add(ambientLines, { rotate: [-4, 8, -6, 10, 0], opacity: [0.22, 0.5, 0.3], duration: totalDuration, ease: 'inOutSine' }, 0);

    milestones.forEach((_, index) => {
      const slotStart = index * slotDuration;
      const highlight = highlights[index];

      masterTimeline.add(highlight, {
        opacity: [0, 1],
        translateY: [28, 0],
        duration: 280,
        ease: 'outCubic',
      }, slotStart + (index === 0 ? 180 : 140));

      if (index < milestones.length - 1) {
        masterTimeline
          .add(highlight, { opacity: [1, 0], translateY: [0, -18], duration: 200, ease: 'inCubic' }, slotStart + 720)
          .add(avatarMover, { left: [avatarPositions[index], avatarPositions[index + 1]], duration: 280, ease: 'inOutCubic' }, slotStart + 700)
          .add(avatarFrames[index], { opacity: [1, 0], duration: 300, ease: 'inOutQuad' }, slotStart + 850)
          .add(avatarFrames[index + 1], { opacity: [0, 1], duration: 300, ease: 'inOutQuad' }, slotStart + 850);
      }
    });

    // Keeps the final milestone visible through the end of the scroll track.
    masterTimeline.add(stage, { opacity: [1, 1], duration: totalDuration, ease: 'linear' }, 0);
    masterTimeline.pause();

    let frame = 0;
    let targetProgress = 0;
    let renderedProgress = 0;
    let previousStep = -1;

    const readScrollProgress = () => {
      const bounds = section.getBoundingClientRect();
      const scrollableDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      return Math.min(1, Math.max(0, -bounds.top / scrollableDistance));
    };

    const updateDiscreteState = (progress: number) => {
      const nextStep = Math.min(milestones.length - 1, Math.floor(progress * milestones.length));
      if (nextStep !== previousStep) {
        previousStep = nextStep;
        setActiveStep(nextStep);
        setActivePhase(Math.floor(nextStep / 2));
      }
    };

    const renderScene = () => {
      frame = 0;
      const distance = targetProgress - renderedProgress;
      renderedProgress = reduceMotion || Math.abs(distance) < 0.0001
        ? targetProgress
        : renderedProgress + distance * 0.14;

      stage.style.setProperty('--journey-progress', `${renderedProgress * 100}%`);

      if (!reduceMotion) {
        masterTimeline.seek(renderedProgress * totalDuration, true);
      } else {
        const nextStep = Math.min(milestones.length - 1, Math.floor(renderedProgress * milestones.length));
        intro.style.opacity = renderedProgress < 0.025 ? '1' : '0';
        highlights.forEach((highlight, index) => { highlight.style.opacity = index === nextStep ? '1' : '0'; });
        avatarFrames.forEach((avatarFrame, index) => { avatarFrame.style.opacity = index === nextStep ? '1' : '0'; });
        avatarMover.style.left = avatarPositions[nextStep];
      }

      updateDiscreteState(renderedProgress);
      if (Math.abs(targetProgress - renderedProgress) >= 0.0001) {
        frame = window.requestAnimationFrame(renderScene);
      }
    };

    const requestSceneUpdate = () => {
      targetProgress = readScrollProgress();
      if (!frame) frame = window.requestAnimationFrame(renderScene);
    };

    targetProgress = readScrollProgress();
    renderedProgress = targetProgress;
    renderScene();
    window.addEventListener('scroll', requestSceneUpdate, { passive: true });
    window.addEventListener('resize', requestSceneUpdate);

    return () => {
      window.removeEventListener('scroll', requestSceneUpdate);
      window.removeEventListener('resize', requestSceneUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      masterTimeline.revert();
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
          <div className="journey-avatar-stack">
            {milestones.map((milestone, index) => <div className="journey-avatar-frame" data-stage={milestone.stage} data-avatar-index={index} key={milestone.stage} />)}
          </div>
          <div className="journey-avatar-shadow" />
        </div>

        <div className="journey-highlights" aria-live="polite">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <article className={`journey-highlight journey-highlight-${milestone.side} ${activeStep === index ? 'is-current' : ''}`} data-step={index} aria-hidden={activeStep !== index} key={milestone.number}>
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
