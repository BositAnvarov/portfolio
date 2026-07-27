'use client';

import { FileText, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '@/data/portfolio';

const nav = [['Journey', 'top'], ['Experience', 'experience'], ['Projects', 'projects'], ['Education', 'education'], ['Skills', 'skills'], ['Contact', 'contact']];

export function Header() {
  const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false); const [active, setActive] = useState('top');
  useEffect(() => { const onScroll = () => { setScrolled(window.scrollY > 20); const current = nav.map(([, id]) => id).reverse().find((id) => { const el = document.getElementById(id); return el && el.getBoundingClientRect().top < 180; }); if (current) setActive(current); }; onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}><a className="brand" href="#top" aria-label="Back to top"><span className="brand-mark">BA</span><span>{profile.shortName}</span></a><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-nav" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button><nav id="primary-nav" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">{nav.map(([label, id]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="resume-link" href="/portfolio/resume/Abdulbosit-Anvarov-Resume.pdf"><FileText size={15} /> Resume</a></nav></header>;
}
