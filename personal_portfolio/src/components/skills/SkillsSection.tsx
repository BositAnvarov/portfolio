import { Cloud, Code2, Database, Gauge, Globe2, Network } from 'lucide-react';
import { skillGroups } from '@/data/portfolio';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const icons = [Code2, Cloud, Network, Gauge, Globe2, Database];
export function SkillsSection() { return <section id="skills" className="section-wrap"><AnimatedSection><p className="section-kicker">05 / Capabilities</p><div className="section-intro"><h2>The engineering foundation behind intelligent products.</h2><p>Backend, cloud, distributed systems, observability, and applied machine learning—the layers I’m bringing together to build dependable, production-ready AI.</p></div></AnimatedSection><div className="skills-grid">{skillGroups.map((group, index) => { const Icon = icons[index]; return <AnimatedSection className="skill-card" key={group.title}><div className="skill-head"><Icon size={20} /><span>{group.icon}</span></div><h3>{group.title}</h3><div className="tag-row">{group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></AnimatedSection>; })}</div></section>; }
