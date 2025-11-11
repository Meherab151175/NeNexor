import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-primary/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-[-50%] right-[-20%] w-[700px] h-[700px] bg-secondary/30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        {/* FIX: The 'jsx' prop on the <style> tag is not standard in React and was causing a TypeScript error. It has been removed. */}
        <style>{`
            .animate-blob {
                animation: blob 8s infinite;
            }
            .animation-delay-2000 {
                animation-delay: 2s;
            }
            .animation-delay-4000 {
                animation-delay: 4s;
            }
            @keyframes blob {
                0% {
                    transform: translate(0px, 0px) scale(1);
                }
                33% {
                    transform: translate(30px, -50px) scale(1.1);
                }
                66% {
                    transform: translate(-20px, 20px) scale(0.9);
                }
                100% {
                    transform: translate(0px, 0px) scale(1);
                }
            }
        `}</style>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
            Company <span className="text-primary">Profile</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted friend in cutting-edge technology. We deliver scalable, secure, and result-oriented solutions to help businesses thrive in the digital era.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all transform hover:scale-105">
              Explore Projects
            </a>
            <a href="#services" className="w-full sm:w-auto px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-semibold text-lg hover:bg-accent transition-all transform hover:scale-105">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
