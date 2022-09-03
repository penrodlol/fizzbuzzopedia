/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    textColor: { 1: 'var(--fg-1)', 2: 'var(--fg-2)' },
    backgroundColor: { 1: 'var(--bg-1)', 2: 'var(--bg-2)' },
    extend: {
      colors: { transparent: 'transparent', brand: 'var(--brand)' },
      maxWidth: { prose: '60ch' },
      fontSize: {
        'fluid-1': 'clamp(0.84rem, calc(0.7rem + 0.2vw), 0.84rem)',
        'fluid-2': 'clamp(0.99rem, calc(0.82rem + 0.32vw), 1.05rem)',
        'fluid-3': 'clamp(1.16rem, calc(0.96rem + 0.49vw), 1.31rem)',
        'fluid-4': 'clamp(1.38rem, calc(1.13rem + 0.71vw), 1.64rem)',
        'fluid-5': 'clamp(1.63rem, calc(1.33rem + 1.02vw), 2.05rem)',
        'fluid-6': 'clamp(1.94rem, calc(1.55rem + 1.42vw), 2.56rem)',
        'fluid-7': 'clamp(2.3rem, calc(1.81rem + 1.95vw), 3.2rem)',
        'fluid-8': 'clamp(2.6rem, calc(1.7rem + 3.05vw), 4.01rem)',
      },
      spacing: {
        'fluid-1': 'clamp(0.25rem, calc(-0.09rem + 1.71vw), 1.13rem)',
        'fluid-2': 'clamp(0.5rem, calc(0.11rem + 1.95vw), 1.5rem)',
        'fluid-3': 'clamp(0.75rem, calc(0.16rem + 2.93vw), 2.25rem)',
        'fluid-4': 'clamp(1rem, calc(0.22rem + 3.9vw), 3rem)',
        'fluid-5': 'clamp(1.5rem, calc(0.33rem + 5.85vw), 4.5rem)',
        'fluid-6': 'clamp(2rem, calc(0.44rem + 7.8vw), 6rem)',
        'fluid-7': 'clamp(3rem, calc(0.66rem + 11.71vw), 9rem)',
      },
    },
  },
  plugins: [],
};
