
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../App';
import { NAV_LINKS } from '../../constants';

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
);

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-2 text-2xl font-bold">
               <svg width="32" height="32" viewBox="0 0 100 100" className="text-primary"><path fill="currentColor" d="M85.3,55.9c-2.8-5.3-7-9.5-12.3-12.3c-5.3-2.8-11.2-4.2-17.5-4.2s-12.3,1.4-17.5,4.2c-5.3,2.8-9.5,7-12.3,12.3c-2.8,5.3-4.2,11.2-4.2,17.5c0,6.4,1.4,12.3,4.2,17.5c2.8,5.3,7,9.5,12.3,12.3c5.3,2.8,11.2,4.2,17.5,4.2s12.3-1.4,17.5-4.2c5.3-2.8,9.5-7,12.3-12.3c2.8-5.3,4.2-11.2,4.2-17.5C89.5,67.1,88.1,61.2,85.3,55.9z M65.5,10.5c-5.3,2.8-9.5,7-12.3,12.3c-2.8,5.3-4.2,11.2-4.2,17.5c0,1,0,2.1,0.2,3.1c3.9-2.3,8.3-3.4,13.2-3.4c8.4,0,16.1,3.4,21.6,8.9c5.5,5.5,8.9,13.2,8.9,21.6c0,4.9-1.2,9.3-3.4,13.2c1,0.2,2.1,0.2,3.1,0.2c6.4,0,12.3-1.4,17.5-4.2c5.3-2.8,9.5-7,12.3-12.3c2.8-5.3,4.2-11.2,4.2-17.5c0-6.4-1.4-12.3-4.2-17.5C97.8,19,93.6,14.7,88.3,12C83.1,9.2,77.2,7.8,70.8,7.8C68.9,7.8,67.1,8,65.5,10.5z"></path></svg>
              <span className="text-foreground">Nexer</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a href="#contact" className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all">
              Contact Us
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 p-2 rounded-md text-muted-foreground">
              <MenuIcon />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4 items-center">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full text-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all">
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
