
import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from './components/homepage/Header';
import HeroSection from './components/homepage/HeroSection';
import AboutSection from './components/homepage/AboutSection';
import ServicesSection from './components/homepage/ServicesSection';
import MissionVisionSection from './components/homepage/MissionVisionSection';
import GoalsSection from './components/homepage/GoalsSection';
import ProjectsSection from './components/homepage/ProjectsSection';
import TeamSection from './components/homepage/TeamSection';
import CTASection from './components/homepage/CTASection';
import Footer from './components/homepage/Footer';

type Theme = 'dark' | 'light';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="bg-background text-foreground font-sans antialiased">
        <Header />
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
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
