
import React from 'react';
import { PROCESSES } from '../../constants';

const OurProcessesSection: React.FC = () => {
  const previewProcesses = PROCESSES.slice(0, 3);

  return (
    <section id="processes-preview" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Development <span className="text-primary">Process</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We follow a structured and agile process to ensure quality and timely delivery of our projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewProcesses.map((process, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl shadow-lg border border-transparent hover:border-primary/50 transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 mb-6">
                {process.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{process.title}</h3>
              <p className="text-muted-foreground">
                {process.description.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#our-processes"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all transform hover:scale-105 inline-block"
          >
            For More
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurProcessesSection;
