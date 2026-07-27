import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Abdulbosit Anvarov | Software Engineer', description: 'Software engineer specializing in Java, Spring Boot, AWS, distributed systems, cloud infrastructure, and observability.', metadataBase: new URL('https://www.bositanvarov.com'), alternates: { canonical: '/' }, openGraph: { title: 'Abdulbosit Anvarov | Software Engineer', description: 'Backend, cloud infrastructure, distributed systems, and observability.', url: 'https://www.bositanvarov.com', siteName: 'Abdulbosit Anvarov', type: 'website' }, twitter: { card: 'summary_large_image', title: 'Abdulbosit Anvarov | Software Engineer', description: 'Backend, cloud infrastructure, distributed systems, and observability.' }, icons: { icon: '/portfolio/favicon.ico' } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
