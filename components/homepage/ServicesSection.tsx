
import React from 'react';
import { Service } from '../../types';

const ChartBarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>);
const CodeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
const ServerIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>);
const ShieldIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);
const RadioTowerIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.6 16.6C8 17.9 12 20 12 20s4-2.1 7.4-3.4"/><path d="M12 20V4"/><path d="M12 4h.01"/><path d="M8 4.5a4 4 0 0 1 8 0"/><path d="M12 8c-2.5 0-2.5 3-5 3"/><path d="M12 8c2.5 0 2.5 3 5 3"/></svg>);
const BrainCircuitIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v2a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M12 14a3 3 0 0 0-3 3v2a3 3 0 0 0 6 0v-2a3 3 0 0 0-3-3Z"/><path d="M2 12a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3Z"/><path d="M22 12a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3Z"/><path d="M15 12h-6"/><path d="M12 9v3"/><path d="M12 19v-3"/></svg>);

const services: Service[] = [
  { icon: <ChartBarIcon />, title: 'Media Management & Marketing', description: 'Driving growth with impactful, data-driven digital marketing and media strategies.' },
  { icon: <CodeIcon />, title: 'Software Design & Development', description: 'Crafting intelligent, user-focused, and scalable software solutions for digital leadership.' },
  { icon: <ServerIcon />, title: 'IT Operations', description: 'Optimizing and securing IT environments with expert consultancy and managed services.' },
  { icon: <ShieldIcon />, title: 'IT Products & Surveillance', description: 'Providing robust network devices and advanced surveillance systems for complete security.' },
  { icon: <RadioTowerIcon />, title: 'Communications', description: 'Ensuring secure, high-speed connectivity with advanced network and communication solutions.' },
  { icon: <BrainCircuitIcon />, title: 'Artificial Intelligence', description: 'Leveraging AI to build smart solutions that redefine personal and professional productivity.' },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="group relative p-8 bg-card rounded-2xl shadow-lg hover:shadow-primary/20 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 transition-all duration-500 group-hover:h-full"></div>
    <div className="relative z-10">
      <div className="text-primary mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:text-primary-foreground transition-colors duration-500">{service.icon}</div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-foreground transition-colors duration-500">{service.title}</h3>
      <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-500">{service.description}</p>
    </div>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our <span className="text-primary">Expertise</span></h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">We provide a wide range of services to empower your business in the digital world.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
