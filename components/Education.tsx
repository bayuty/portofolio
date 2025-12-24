import React from 'react';
import Section from './ui/Section';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section id="education" className="bg-surface/5 border-t border-panel/5">
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 bg-primary/10 rounded-xl text-primary">
          <GraduationCap size={28} />
        </div>
        <h3 className="text-3xl font-display font-bold text-content">Education</h3>
      </div>

      <div className="grid gap-6">
        {EDUCATION.map((edu) => (
          <div key={edu.id} className="p-6 md:p-8 rounded-2xl bg-panel/5 border border-panel/10 hover:border-primary/20 transition-all hover:bg-panel/10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h4 className="text-xl font-bold text-content">{edu.school}</h4>
              <span className="text-primary font-mono text-sm">{edu.year}</span>
            </div>
            <h5 className="text-lg text-muted font-medium mb-4">{edu.degree}</h5>
            {edu.description && (
              <p className="text-muted text-sm leading-relaxed">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;