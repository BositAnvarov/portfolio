'use client';

import { ArrowDown, BriefcaseBusiness, Code2, FileText, GraduationCap, Mail, Sparkles } from 'lucide-react';
import { createTimeline } from 'animejs';
import { useEffect, useRef, useState } from 'react';

const milestones = [
  { number: '01', label: 'The beginning', title: 'Every story starts somewhere.', description: 'A curious kid starts school, asks too many questions, and learns that the things worth building usually begin as a rough sketch.', icon: FileText, meta: 'School · a first spark', stage: 'kid' },
  { number: '02', label: 'High school', title: 'Finding a place in the world of ideas.', description: 'Classes, experiments, and the first moments of realizing that a computer can turn an idea into something other people can use.', icon: Sparkles, meta: 'High school · curiosity compounds', stage: 'student' },
  { number: '03', label: 'College', title: 'Curiosity becomes a craft.', description: 'Hard problems, long nights, new people, and the freedom to fail forward while learning how systems fit together.', icon: BriefcaseBusiness, meta: 'University · foundations', stage: 'college' },
  { number: '04', label: 'Graduation', title: 'Graduation — 2023.', description: 'A milestone worth pausing for: years of study became a degree, and the next chapter started to feel real.', icon: GraduationCap, meta: 'B.S. Computer Science · 2023', stage: 'graduation' },
  { number: '05', label: 'Career', title: 'Turning knowledge into responsibility.', description: 'Internships and production systems make the work real: users, teammates, deadlines, failures, and software that has to hold up.', icon: Code2, meta: 'Engineering · production', stage: 'engineer' },
  { number: '06', label: 'The person today', title: 'Still growing. Still building.', description: 'The kid is still in there—now carrying more context, more responsibility, and a bigger curiosity about what comes next.', icon: Mail, meta: 'Software Engineer · today', stage: 'future' },
];

const phases = [
  { id: 'high-school', eyebrow: 'Phase 01', title: 'High School', milestoneIndexes: [0, 1] },
  { id: 'college', eyebrow: 'Phase 02', title: 'College', milestoneIndexes: [2, 3] },
  { id: 'career', eyebrow: 'Phase 03', title: 'Career', milestoneIndexes: [4, 5] },
];

const phasePositions = [
  { entry: '-32%', first: '-32%', second: '-6%' },
  { entry: '-6%', first: '30%', second: '-24%' },
  { entry: '-24%', first: '5%', second: '28%' },
];

export function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);
  const personRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const active = milestones[activeStep];
  const ActiveIcon = active.icon;

  useEffect(() => {
    const section = sectionRef.current;
    const object = objectRef.current;
    const person = personRef.current;
    if (!section || !object || !person) return;

    const phaseSections = Array.from(section.querySelectorAll<HTMLElement>('.journey-phase'));
    const particles = Array.from(object.querySelectorAll<HTMLElement>('.roadmap-particle'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const buildPhaseTimeline = (phaseIndex: number) => {
      const textBlocks = Array.from(phaseSections[phaseIndex].querySelectorAll<HTMLElement>('.milestone-text'));
      const positions = phasePositions[phaseIndex];
      const timeline = createTimeline({ autoplay: false });

      timeline
        .add(person, { left: [positions.entry, positions.first], scale: [0.97, 1], duration: 320, ease: 'outCubic' }, 0)
        .add(person, { left: positions.second, scale: [1, 1.02], duration: 680, ease: 'inOutCubic' }, 320)
        .add(object, { rotate: [-2, 2, 0], scale: [0.985, 1.015, 1], duration: 1000, ease: 'inOutSine' }, 0)
        .add(particles, { rotate: [0, 150], scale: [0.8, 1.2], duration: 1000, ease: 'inOutQuad' }, 0)
        .add(textBlocks[0], { opacity: [0, 1], translateY: [36, 0], duration: 300, ease: 'outCubic' }, 20)
        .add(textBlocks[0], { opacity: [1, 0.28], translateY: [0, -14], duration: 220, ease: 'inCubic' }, 390)
        .add(textBlocks[1], { opacity: [0, 1], translateY: [36, 0], duration: 350, ease: 'outCubic' }, 500);

      timeline.pause();
      return timeline;
    };

    // Three independent paused timelines. Scroll progress seeks each timeline.
    const highSchoolTimeline = buildPhaseTimeline(0);
    const collegeTimeline = buildPhaseTimeline(1);
    const careerTimeline = buildPhaseTimeline(2);
    const phaseTimelines = [highSchoolTimeline, collegeTimeline, careerTimeline];

    const phaseObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-in-view', entry.isIntersecting));
    }, { rootMargin: '-15% 0px -15% 0px', threshold: 0.08 });
    phaseSections.forEach((phase) => phaseObserver.observe(phase));

    let frame = 0;
    let previousStep = -1;
    let previousPhase = -1;

    const updateFromScroll = () => {
      frame = 0;
      const viewportAnchor = window.innerHeight * 0.5;
      let closestPhase = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      phaseSections.forEach((phase, index) => {
        const bounds = phase.getBoundingClientRect();
        const distance = Math.abs(bounds.top + bounds.height / 2 - viewportAnchor);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestPhase = index;
        }
      });

      const activeSection = phaseSections[closestPhase];
      const bounds = activeSection.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (viewportAnchor - bounds.top) / bounds.height));
      const timeline = phaseTimelines[closestPhase];

      if (!reduceMotion) {
        timeline.seek(progress * timeline.duration, true);
      } else {
        activeSection.querySelectorAll<HTMLElement>('.milestone-text').forEach((text) => {
          text.style.opacity = '1';
          text.style.transform = 'none';
        });
      }

      const localMilestone = progress < 0.5 ? 0 : 1;
      const nextStep = phases[closestPhase].milestoneIndexes[localMilestone];
      if (nextStep !== previousStep) {
        previousStep = nextStep;
        person.dataset.stage = milestones[nextStep].stage;
        setActiveStep(nextStep);
      }
      if (closestPhase !== previousPhase) {
        previousPhase = closestPhase;
        setActivePhase(closestPhase);
      }
    };

    const requestScrollUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    window.addEventListener('resize', requestScrollUpdate);

    return () => {
      phaseObserver.disconnect();
      window.removeEventListener('scroll', requestScrollUpdate);
      window.removeEventListener('resize', requestScrollUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      phaseTimelines.forEach((timeline) => timeline.revert());
    };
  }, []);

  return (
    <section ref={sectionRef} id="journey" className="roadmap-section" aria-labelledby="roadmap-title">
      <div className="roadmap-heading">
        <div>
          <p className="section-kicker">03 / The journey</p>
          <h2 id="roadmap-title">A life in<br /><span className="accent-text">motion.</span></h2>
        </div>
        <p className="roadmap-lede">Three chapters, one continuous story. Scroll to move through high school, college, graduation, and the start of a career.</p>
      </div>

      <div className="roadmap-lab">
        <div className="roadmap-story">
          {phases.map((phase, phaseIndex) => (
            <section className={`journey-phase ${activePhase === phaseIndex ? 'is-active' : ''}`} data-phase={phase.id} key={phase.id} aria-labelledby={`${phase.id}-title`}>
              <header className="journey-phase-heading">
                <p>{phase.eyebrow}</p>
                <h3 id={`${phase.id}-title`}>{phase.title}</h3>
              </header>
              {phase.milestoneIndexes.map((milestoneIndex) => {
                const milestone = milestones[milestoneIndex];
                return (
                  <article className={`roadmap-step milestone-text ${activeStep === milestoneIndex ? 'is-active' : ''}`} data-step={milestoneIndex} key={milestone.number}>
                    <span className="roadmap-step-number">{milestone.number}</span>
                    <div>
                      <p className="roadmap-label">{milestone.label}</p>
                      <h3>{milestone.title}</h3>
                      <p className="roadmap-description">{milestone.description}</p>
                      <p className="roadmap-step-meta">{milestone.meta}</p>
                    </div>
                  </article>
                );
              })}
            </section>
          ))}
        </div>

        <div className="roadmap-stage" aria-live="polite">
          <div className="roadmap-stage-top"><span>{phases[activePhase].title} / SCROLL SYNC</span><span>0{activeStep + 1} / 06</span></div>
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
          <div className="roadmap-stage-bottom"><span>{active.label}</span><span className="status-live"><i /> scroll driven</span></div>
        </div>
      </div>

      <a className="roadmap-scroll-cue" href="#experience"><ArrowDown size={14} /> Continue to the details</a>
    </section>
  );
}
