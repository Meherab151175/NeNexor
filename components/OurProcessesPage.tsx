import React from 'react';

const CompassIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>);
const PenToolIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>);
const CodeBracketsIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6"></path><path d="M8 6l-6 6 6 6"></path></svg>);
const CheckShieldIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>);
const RocketIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.11.64-1.26 2-2.37 2-2.37.2-1.58.16-3.22-.09-4.8.48-1.05 1.43-2.48 1.43-2.48s-1.43.95-2.48 1.43c-1.58-.25-3.22-.3-4.8-.09 0 0-1.11.64-2.37 2-.81-.65-2.27-.66-3.11.05z"></path><path d="m21.5 21.5-5.3-5.3"></path></svg>);
const WrenchIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>);

const processes = [
  { step: '01', icon: <CompassIcon />, title: 'Discovery & Strategy', description: 'We begin by understanding your vision, goals, and target audience. Our team collaborates with you to define project scope, create a strategic roadmap, and set clear objectives for success.' },
  { step: '02', icon: <PenToolIcon />, title: 'UX/UI Design', description: 'Our design phase focuses on creating intuitive and visually compelling user experiences. We develop wireframes, mockups, and interactive prototypes to ensure the final product is both beautiful and easy to use.' },
  { step: '03', icon: <CodeBracketsIcon />, title: 'Development', description: 'With a solid design in place, our developers bring your project to life. We write clean, efficient, and scalable code, following industry best practices to build a robust and high-performance application.' },
  { step: '04', icon: <CheckShieldIcon />, title: 'Testing & QA', description: 'Quality is paramount. Our dedicated QA team conducts rigorous testing across multiple devices and scenarios to identify and fix any issues, ensuring a bug-free and seamless user experience.' },
  { step: '05', icon: <RocketIcon />, title: 'Deployment & Launch', description: 'After successful testing, we handle the entire deployment process. We ensure a smooth launch, deploying your application to production servers and making it available to your users.' },
  { step: '06', icon: <WrenchIcon />, title: 'Support & Maintenance', description: 'Our partnership doesn\'t end at launch. We provide ongoing support, monitoring, and maintenance to ensure your application remains secure, up-to-date, and running at peak performance.' },
];

const OurProcessesPage: React.FC = () => {
  return (
    <main>
      <section id="our-processes" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Our <span className="text-primary">Process</span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              A systematic and transparent approach to delivering excellence, from initial concept to final completion and beyond.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-0 h-full w-0.5 bg-border left-4 md:left-1/2 md:-translate-x-1/2" aria-hidden="true"></div>
            
            <div className="space-y-16">
              {processes.map((process, index) => (
                <div key={process.title} className="relative flex items-start md:grid md:grid-cols-2 md:gap-x-16 md:items-center">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary ring-4 ring-secondary flex items-center justify-center text-primary-foreground font-bold text-sm md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 z-10`}>
                    {index + 1}
                  </div>
                  <div className={`ml-8 md:ml-0 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <div className="bg-card p-8 rounded-2xl shadow-lg border border-border transform hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">{process.icon}</div>
                        <h3 className="text-2xl font-bold">{process.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{process.description}</p>
                    </div>
                  </div>
                   {/* Empty div for spacing on grid */}
                  <div className="hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurProcessesPage;
