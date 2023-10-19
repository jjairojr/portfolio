import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiNodedotjs, SiTypescript } from 'react-icons/si'
import tipspaceImg from '@/public/tipspace.jpeg'
import crImg from '@/public/cr.jpeg'
import lifeappsImg from '@/public/lifeapps.jpeg'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
] as const

export const experiencesData = [
  {
    title: 'Full-Stack Developer',
    company: 'MáximaTech',
    location: 'Goiás, BR',
    description:
      'As a Fullstack JavaScript Developer, I specialized in Angular, Java, and Spring Boot for web application development, while incorporating Material-UI and Firebase libraries. My tasks included feature implementation, Google Maps integration for route planning, and server-side feature development. I also played a significant role in driver monitoring alongside the mobile application team.',
    icon: React.createElement(SiNodedotjs),
    date: '2019',
  },
  {
    title: 'Full-Stack Developer',
    company: 'Consulta Remédios',
    location: 'Paraná, BR',
    description:
      'I improved web performance, added features, and refactored Android/Swift to React Native as a Senior Software Engineer at Consulta Remédios, using technologies such as React, NodeJS, and Vue.js. Integrated delivery methods and utilized libraries like Styled components, Jest, Motion, and Firebase for efficient development.',
    icon: React.createElement(CgWorkAlt),
    date: '2020 - 2022',
  },
  {
    title: 'Full-Stack Developer',
    company: 'Tipspace',
    location: 'São Paulo, BR',
    description:
      'At Tipspace as a Senior Software Engineer, I spearheaded the architecture of the desktop application, utilizing React, Electron, NodeJS, TypeScript, and Next.js. Key achievements include establishing the application infrastructure and integrating with the League of Legends game. On the server side, I managed payment integration, executed monetary transactions, and orchestrated competitive matchmaking. My role also involved setting up robust CI/CD pipelines for testing and building the Electron application, leveraging libraries like Styled components, Prisma.js, Jest, Vitest, and Express.js.',
    icon: React.createElement(FaReact),
    date: '2022 - 2023',
  },
] as const

export const projectsData = [
  {
    title: 'Tipspace',
    description:
      'A desktop app thas was made for gamers earn money while the play League of Legends, i was the architect of the front-end developer team.',
    tags: ['React', 'Next.js', 'PostgreSQL', 'NodeJS', 'Prisma', 'Electron'],
    imageUrl: tipspaceImg,
  },
  {
    title: 'Consulta Remédios',
    description:
      'The biggest pharmaceutical ecommerce in America Latina. I worked on the web app and mobile app.',
    tags: ['React Native', 'TypeScript', 'Next.js', 'VueJs'],
    imageUrl: crImg,
  },
  {
    title: 'Lifeapps Venda+',
    description:
      'Mobile app thas was made to improve sellers with they sales, with a lot of features like: geolocation, push notifications, chat, etc.',
    tags: ['React', 'React Native', 'Nest.js', 'Graphql', 'Apollo'],
    imageUrl: lifeappsImg,
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Framer Motion',
  'Electron',
  'Redis',
] as const

export const mainSkills = [
  {
    name: 'Next.js',
    icon: SiNextdotjs,
  },
  {
    name: 'ReactJs',
    icon: FaReact,
  },
  {
    name: 'NodeJS',
    icon: SiNodedotjs,
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
  },
]
