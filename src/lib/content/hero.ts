import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Sagar Panchal.',
  tagline: 'I create feature-rich, scalable interfaces for the web.',
  description:
    "I'm a passionate Front-End web developer with hands-on 3+ years of experience in building web applications using React.js & Next.js with Javascript (ES5/ES6), TailwindCSS, and Redux.",
  specialText: 'Currently available for new opportunity ',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
