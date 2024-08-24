import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'front-end development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building front-end web applications using React.JS and Next.js with Javascript, TailwindCSS, Chakra UI, Material UI and HTML/CSS',
        'Developing responsive single-page applications using React.js',
        'Integrating RESTful and GraphQL APIs',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        // {
        //   name: 'typeScript',
        //   icon: 'vscode-icons:file-type-typescript-official',
        // },
        // { name: 'nodejs', icon: 'logos:nodejs-icon' },
        // { name: 'prisma', icon: 'vscode-icons:file-type-prisma' },
        // { name: 'angularjs', icon: 'logos:angular-icon' },
        // { name: 'database', icon: 'vscode-icons:file-type-sql' },
        // { name: 'jest', icon: 'vscode-icons:file-type-jest' },
      ],
    },
    // {
    //   id: getId(),
    //   title: 'UI/UX designing',
    //   lottie: {
    //     light: '/lotties/designing.json',
    //     dark: '/lotties/designing-dark.json',
    //   },
    //   points: [
    //     'Experience in designing user-friendly interfaces with figma',
    //     'Experience in developing design systems and style guides',
    //     'Providing user-friendly design solutions',
    //   ],
    //   softwareSkills: [
    //     { name: 'figma', icon: 'logos:figma' },
    //     { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
    //     { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
    //   ],
    // },
  ],
};
