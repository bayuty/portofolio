import React from 'react';
import Section from './ui/Section';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-surface/5 border-t border-panel/5">
      <div className="mb-16">
         <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Career Path</h2>
         <h3 className="text-4xl font-display font-bold text-content">Work Experience</h3>
      </div>

      <div className="relative border-l border-panel/20 ml-3 md:ml-6 space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 md:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] md:-left-[11px] top-0 p-1 bg-background border border-panel/30 rounded-full group-hover:border-primary transition-colors">
               <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-muted group-hover:bg-primary transition-colors"></div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h4 className="text-2xl font-bold text-content group-hover:text-primary transition-colors">
                {exp.role}
              </h4>
              <span className="text-sm font-mono text-muted bg-panel/5 px-3 py-1 rounded-full border border-panel/10 mt-2 sm:mt-0 w-fit">
                {exp.duration}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-secondary mb-4">
              <Briefcase size={16} />
              <span className="font-medium">{exp.company}</span>
            </div>

            <ul className="space-y-2">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-muted leading-relaxed flex items-start gap-3">
                  <span className="block w-1.5 h-1.5 rounded-full bg-muted mt-2.5 flex-shrink-0"></span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;