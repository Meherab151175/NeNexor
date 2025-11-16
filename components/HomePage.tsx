import React from 'react';
import HeroSection from './homepage/HeroSection';
import AboutSection from './homepage/AboutSection';
import ServicesSection from './homepage/ServicesSection';
import MissionVisionSection from './homepage/MissionVisionSection';
import GoalsSection from './homepage/GoalsSection';
import ProjectsSection from './homepage/ProjectsSection';
import TeamSection from './homepage/TeamSection';
import CTASection from './homepage/CTASection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MissionVisionSection />
      <GoalsSection />
      <ProjectsSection />
      <TeamSection />
      <CTASection />
    </main>
  );
};

export default HomePage;
