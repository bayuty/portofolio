import React, { useState, useEffect } from 'react';
import Section from './ui/Section';
import { PROJECTS } from '../constants';
import { Github, Folder, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Section id="projects" className="bg-surface/5 border-t border-panel/5">
      <div className="mb-16">
         <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Portfolio</h2>
         <h3 className="text-4xl font-display font-bold text-content">Featured Projects</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {isLoading ? (
          // Skeleton Loader
          Array.from({ length: 4 }).map((_, index) => (
            <div 
              key={index} 
              className="rounded-2xl overflow-hidden bg-surface/50 border border-panel/10 h-full flex flex-col"
            >
              {/* Image Skeleton */}
              <div className="h-64 bg-panel/5 animate-pulse relative">
                <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent" />
              </div>
              
              {/* Content Skeleton */}
              <div className="p-8 flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-3 w-full">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-sm bg-panel/10 animate-pulse" />
                      <div className="h-3 w-24 bg-panel/10 rounded animate-pulse" />
                    </div>
                    <div className="h-8 w-3/4 bg-panel/10 rounded animate-pulse" />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="h-4 w-full bg-panel/5 rounded animate-pulse" />
                  <div className="h-4 w-full bg-panel/5 rounded animate-pulse" />
                  <div className="h-4 w-2/3 bg-panel/5 rounded animate-pulse" />
                </div>
                
                <div className="pt-6 mt-auto flex gap-2">
                   <div className="h-6 w-16 bg-panel/5 rounded-md animate-pulse" />
                   <div className="h-6 w-20 bg-panel/5 rounded-md animate-pulse" />
                   <div className="h-6 w-14 bg-panel/5 rounded-md animate-pulse" />
                </div>
              </div>
            </div>
          ))
        ) : (
          PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px -5px rgba(99, 102, 241, 0.2)"
              }}
              className="group relative flex flex-col bg-surface/50 rounded-2xl overflow-hidden border border-panel/10 hover:border-primary/50 transition-colors backdrop-blur-sm"
            >
              {/* Image Container with Overlay */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Links - Always visible on mobile, visible on hover for desktop */}
                <div className="absolute top-4 right-4 flex gap-2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 bg-surface/90 backdrop-blur border border-panel/20 rounded-full text-content hover:text-primary hover:border-primary transition-colors shadow-lg"
                      title="Visit Website"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 bg-surface/90 backdrop-blur border border-panel/20 rounded-full text-content hover:text-primary hover:border-primary transition-colors shadow-lg"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                     <div className="flex items-center gap-2 text-primary text-xs font-bold tracking-wider uppercase mb-2">
                        <Folder size={14} /> 
                        <span>Featured Project</span>
                     </div>
                     <h4 className="text-2xl font-display font-bold text-content group-hover:text-primary transition-colors duration-300">
                       {project.title}
                     </h4>
                  </div>
                </div>

                <p className="text-muted text-base leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-md bg-panel/5 text-muted border border-panel/10 group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Bottom highlight bar */}
              <div className="h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))
        )}
      </div>
    </Section>
  );
};

export default Projects;