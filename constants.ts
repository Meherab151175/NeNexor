import { Project, TeamMember } from './types';

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#projects', label: 'Projects' },
  { href: '#our-processes', label: 'Our Processes' },
];

export const DUMMY_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'QuantumLeap SaaS',
    description: 'A cutting-edge analytics platform for enterprise customers, providing real-time data insights.',
    tags: ['SaaS', 'Web App', 'UI/UX'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
  },
  {
    id: 2,
    title: 'Nova E-commerce',
    description: 'A scalable e-commerce solution with a focus on user experience and mobile-first design.',
    tags: ['E-commerce', 'Web', 'Mobile'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
  },
  {
    id: 3,
    title: 'Synapse AI',
    description: 'An AI-powered digital marketing tool that automates campaigns and optimizes ad spend.',
    tags: ['AI', 'Digital Marketing', 'Software'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
  },
  {
    id: 4,
    title: 'Helios Mobile App',
    description: 'A cross-platform mobile application for surveillance systems management and monitoring.',
    tags: ['Mobile App', 'Surveillance', 'iOS & Android'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
  },
    {
    id: 5,
    title: 'Orbit CRM',
    description: 'A comprehensive Customer Relationship Management system designed for modern sales teams.',
    tags: ['CRM', 'Software', 'Business'],
    imageUrl: 'https://picsum.photos/seed/project5/600/400',
  },
  {
    id: 6,
    title: 'Zenith Ops Dashboard',
    description: 'An IT operations dashboard providing full visibility and control over network infrastructure.',
    tags: ['IT Operations', 'Dashboard', 'Data Viz'],
    imageUrl: 'https://picsum.photos/seed/project6/600/400',
  },
];


export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Shah Md Istiaque',
    role: 'Managing Director',
    imageUrl: 'https://picsum.photos/seed/shah/200',
  },
  {
    name: 'Mahjabin Shahnaz',
    role: 'Chief Executive Officer',
    imageUrl: 'https://picsum.photos/seed/mahjabin/200',
  },
  {
    name: 'Seyam Hossain',
    role: 'Business Developer (Media & Marketing)',
    imageUrl: 'https://picsum.photos/seed/seyam/200',
  },
  {
    name: 'Sabbir Alam',
    role: 'Business Developer (IT & Communications)',
    imageUrl: 'https://picsum.photos/seed/sabbir/200',
  },
];
