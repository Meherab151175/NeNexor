
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative p-8 bg-card rounded-2xl shadow-lg">
                <div className="flex justify-center mb-6">
                 <svg width="64" height="64" viewBox="0 0 100 100" className="text-primary"><path fill="currentColor" d="M85.3,55.9c-2.8-5.3-7-9.5-12.3-12.3c-5.3-2.8-11.2-4.2-17.5-4.2s-12.3,1.4-17.5,4.2c-5.3,2.8-9.5,7-12.3,12.3c-2.8,5.3-4.2,11.2-4.2,17.5c0,6.4,1.4,12.3,4.2,17.5c2.8,5.3,7,9.5,12.3,12.3c5.3,2.8,11.2,4.2,17.5,4.2s12.3-1.4,17.5-4.2c5.3-2.8,9.5-7,12.3-12.3c2.8-5.3,4.2-11.2,4.2-17.5C89.5,67.1,88.1,61.2,85.3,55.9z M65.5,10.5c-5.3,2.8-9.5,7-12.3,12.3c-2.8,5.3-4.2,11.2-4.2,17.5c0,1,0,2.1,0.2,3.1c3.9-2.3,8.3-3.4,13.2-3.4c8.4,0,16.1,3.4,21.6,8.9c5.5,5.5,8.9,13.2,8.9,21.6c0,4.9-1.2,9.3-3.4,13.2c1,0.2,2.1,0.2,3.1,0.2c6.4,0,12.3-1.4,17.5-4.2c5.3-2.8,9.5-7,12.3-12.3c2.8-5.3,4.2-11.2,4.2-17.5c0-6.4-1.4-12.3-4.2-17.5C97.8,19,93.6,14.7,88.3,12C83.1,9.2,77.2,7.8,70.8,7.8C68.9,7.8,67.1,8,65.5,10.5z"></path></svg>
                <span className="text-4xl font-bold ml-4">Nexer</span>
                </div>
            </div>
             <div className="absolute -top-4 -left-4 w-full h-full bg-primary/50 rounded-2xl transform -rotate-3 z-0"></div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              About The <span className="text-primary">Company</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              neoNexor is an innovative IT solutions company dedicated to empower businesses through cutting-edge technology and smart digital transformation. We specialize in software design & development, digital marketing, IT operations, and advanced IT products.
            </p>
            <p className="mt-4 text-muted-foreground">
              Since our inception, we have been driven by a mission to deliver scalable, secure, and result-oriented solutions. By combining creativity, strategy, and technology, we ensure our clients stay ahead of the curve in an ever-evolving market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
