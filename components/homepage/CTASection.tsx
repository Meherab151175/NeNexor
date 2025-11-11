
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl p-10 md:p-16 text-center shadow-lg relative overflow-hidden">
           <div className="absolute inset-0 bg-primary/10 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_0,transparent_70%)]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to start your next project?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Let's work together to build something amazing. Reach out to us today to discuss your ideas.
            </p>
            <div className="mt-8">
              <a href="#contact" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all transform hover:scale-105 inline-block">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
