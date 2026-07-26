import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function Footer() { return <footer className="site-footer"><span>© {new Date().getFullYear()} {profile.name}</span><a href="#top">Back to top <ArrowUpRight size={14} /></a><span>Built with intention.</span></footer>; }
