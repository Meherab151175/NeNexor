import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from './components/homepage/Header';
import Footer from './components/homepage/Footer';
import HomePage from './components/HomePage';
import OurProcessesPage from './components/OurProcessesPage';

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
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const PageComponent = route === '#our-processes' ? OurProcessesPage : HomePage;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="bg-background text-foreground font-sans antialiased">
        <Header />
        <PageComponent />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
