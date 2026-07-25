import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ImpactStrip } from '@/components/impact/ImpactStrip';
import { ExperienceSection } from '@/components/experience/ExperienceSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { EducationSection } from '@/components/education/EducationSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { RoadmapSection } from '@/components/roadmap/RoadmapSection';

export default function Page() { const jsonLd = { '@context': 'https://schema.org', '@type': 'Person', name: 'Abdulbosit “Bosit” Anvarov', jobTitle: 'Software Engineer', url: 'https://www.bositanvarov.com' }; return <><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content"><RoadmapSection /><ImpactStrip /><ExperienceSection /><ProjectsSection /><EducationSection /><SkillsSection /><ContactSection /></main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></>; }
