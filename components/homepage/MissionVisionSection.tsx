
import React from 'react';

const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Mission <span className="text-primary">&</span> Vision</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Guided by purpose, driven by passion, aiming for excellence.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-card rounded-xl shadow-lg border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
            <p className="text-muted-foreground">
              Empowering businesses and individuals with cutting-edge, secure, and scalable technology solutions that spark growth, boost efficiency, and accelerate the journey towards digital transformation.
            </p>
          </div>
          <div className="p-8 bg-card rounded-xl shadow-lg border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
            <p className="text-muted-foreground">
              To lead globally in delivering transformative IT solutions that make the digital world smarter, safer, and seamlessly connected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
