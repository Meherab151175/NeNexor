
import React from 'react';
import { PROCESSES } from '../../constants';

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
              {PROCESSES.map((process, index) => (
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
