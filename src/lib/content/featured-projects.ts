import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Dispatch',
      description: 'A Dashboard of luxurious cab booking web and mobile app.',
      tasks:
        "As a freelancer, I understood the client's requirements and executed a plan to develop new design. My key contribution has been transforming the legacy React.js codebase into Next.js, significantly enhancing performance and the overall user experience.",
      url: 'https://vert.london/',
      img: '/Dispatch-Main-site.png',
      tags: [
        'NextJs 14',
        'React JS',
        'TailwindCSS',
        'Chakra UI',
        'Javascript',
        'Apollo GraphQL',
      ],
    },
    {
      id: getId(),
      name: 'DreamNav (LMS)',
      description:
        'DreamNav is an online learning platform that provides an interactive and collaborative environment for everyone.',
      tasks:
        'I\'ve worked on fixing existing bugs those are not identidied by previous developer, and Implemented new features like quiz, rewards and yearly subscription modules.',
      url: 'https://dreamnav.com/',
      img: '/Dream-nav-main-site.png',
      tags: ['ReactJs', 'Redux', 'Material UI', 'Rest API Integration'],
    },
    {
      id: getId(),
      name: 'Book My Agenda (Event booking platform)',
      description: 'Book My Agenda is an online platform designed to streamline the process of booking various services',
      tasks:
        'I worked on this project from scratch, gather key feature requirements and design as clients need, transform it in Reusable React JS components and ensured smooth API integration.',
      url: 'https://bookmyagenda.com/',
      img: '/BMA-main-site.png',
      tags: ['ReactJs', 'Javascript', 'Material UI', 'HTML5/CSS3', 'API integration'],
    },
    // {
    //   id: getId(),
    //   name: 'Drafton',
    //   description: 'The AI-powered platform that simplifies proposal creation.',
    //   tasks:
    //     'Implemented NextAuth authentication, integrated Mailchimp for newsletter subscription, developed a custom hook for dark mode, created UI components in the Dashboard, and used Notion as a CMS for the blogs page.',
    //   url: 'https://www.drafton.io/',
    //   img: 'https://i.postimg.cc/4N6dsGcm/Screenshot-2024-06-17-at-11-05-22-PM.png',
    //   tags: ['Open AI', 'NextJs', 'TypeScript', 'TailwindCSS', 'Prisma'],
    // },
  ],
};

export default featuredProjectsSection;
