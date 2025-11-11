
import React from 'react';
import { DUMMY_PROJECTS } from '../../constants';
import { Project } from '../../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 transform hover:-translate-y-2 transition-all duration-300 border border-border">
      <div className="overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground mb-4 h-20">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our <span className="text-primary">Projects</span></h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into the innovative solutions and successful projects we've delivered.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUMMY_PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
