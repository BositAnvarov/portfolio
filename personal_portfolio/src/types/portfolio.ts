export type ProjectCategory = 'Cloud & Infrastructure' | 'Distributed Systems' | 'Machine Learning' | 'Full Stack';

export type Experience = {
  company: string; role: string; dates: string; location?: string; focus: string; impact: string;
  accomplishments: string[]; technologies: string[];
};

export type Project = {
  id: string; title: string; category: ProjectCategory; summary: string; challenge: string; approach: string;
  details: string[]; technologies: string[]; metric?: string; featured?: boolean; github: string; demo: string;
};

export type SkillGroup = { title: string; icon: string; skills: string[] };
