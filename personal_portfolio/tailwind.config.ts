import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#090b0f', panel: '#10141b', line: '#252c36', cyan: '#83d5e8' } } },
  plugins: [],
};

export default config;
