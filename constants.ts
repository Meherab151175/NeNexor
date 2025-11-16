
import React from 'react';
import { Project, TeamMember, ProcessStep } from './types';

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

// FIX: Rewrote icon components to use React.createElement instead of JSX to avoid parsing errors in a .ts file.
const CompassIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('circle', { cx: "12", cy: "12", r: "10" }), React.createElement('polygon', { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" }));
const PenToolIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('path', { d: "m12 19 7-7 3 3-7 7-3-3z" }), React.createElement('path', { d: "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" }), React.createElement('path', { d: "m2 2 7.586 7.586" }), React.createElement('circle', { cx: "11", cy: "11", r: "2" }));
const CodeBracketsIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('path', { d: "M16 18l6-6-6-6" }), React.createElement('path', { d: "M8 6l-6 6 6 6" }));
const CheckShieldIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('path', { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }), React.createElement('path', { d: "m9 12 2 2 4-4" }));
const RocketIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('path', { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.11.64-1.26 2-2.37 2-2.37.2-1.58.16-3.22-.09-4.8.48-1.05 1.43-2.48 1.43-2.48s-1.43.95-2.48 1.43c-1.58-.25-3.22-.3-4.8-.09 0 0-1.11.64-2.37 2-.81-.65-2.27-.66-3.11.05z" }), React.createElement('path', { d: "m21.5 21.5-5.3-5.3" }));
const WrenchIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement('path', { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }));

// FIX: Replaced JSX component instantiation with React.createElement to avoid JSX parsing errors in .ts file.
export const PROCESSES: ProcessStep[] = [
  { icon: React.createElement(CompassIcon), title: 'Discovery & Strategy', description: 'We begin by understanding your vision, goals, and target audience. Our team collaborates with you to define project scope, create a strategic roadmap, and set clear objectives for success.' },
  { icon: React.createElement(PenToolIcon), title: 'UX/UI Design', description: 'Our design phase focuses on creating intuitive and visually compelling user experiences. We develop wireframes, mockups, and interactive prototypes to ensure the final product is both beautiful and easy to use.' },
  { icon: React.createElement(CodeBracketsIcon), title: 'Development', description: 'With a solid design in place, our developers bring your project to life. We write clean, efficient, and scalable code, following industry best practices to build a robust and high-performance application.' },
  { icon: React.createElement(CheckShieldIcon), title: 'Testing & QA', description: 'Quality is paramount. Our dedicated QA team conducts rigorous testing across multiple devices and scenarios to identify and fix any issues, ensuring a bug-free and seamless user experience.' },
  { icon: React.createElement(RocketIcon), title: 'Deployment & Launch', description: 'After successful testing, we handle the entire deployment process. We ensure a smooth launch, deploying your application to production servers and making it available to your users.' },
  { icon: React.createElement(WrenchIcon), title: 'Support & Maintenance', description: 'Our partnership doesn\'t end at launch. We provide ongoing support, monitoring, and maintenance to ensure your application remains secure, up-to-date, and running at peak performance.' },
];
