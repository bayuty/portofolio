import React, { useState } from 'react';
import Section from './ui/Section';
import { SKILLS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories = ['all', 'frontend', 'backend', 'tools', 'design'];

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === activeCategory);

  return (
    <Section id="skills" className="bg-surface/5 border-t border-panel/5">
      <div className="text-center mb-12">
        <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Expertise</h2>
        <h3 className="text-4xl font-display font-bold text-content mb-8">My Technical Skills</h3>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                  : 'bg-panel/5 text-muted hover:text-content hover:bg-panel/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode='popLayout'>
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              whileHover={{ 
                y: -5, 
                scale: 1.05,
                borderColor: "rgba(99, 102, 241, 0.5)",
                backgroundColor: "rgba(var(--surface), 0.8)"
              }}
              className="group flex flex-col items-center justify-center p-6 bg-surface/50 border border-panel/10 rounded-2xl backdrop-blur-sm cursor-pointer transition-colors relative overflow-hidden shadow-sm"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="w-12 h-12 mb-4 relative z-10 transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={skill.icon.startsWith('http') ? skill.icon : `https://cdn.simpleicons.org/${skill.icon}`}
                  alt={skill.name}
                  className="w-full h-full object-contain transition-all duration-300 filter brightness-0 opacity-50 dark:invert group-hover:filter-none group-hover:opacity-100"
                />
              </div>
              
              <h4 className="text-lg font-bold text-muted group-hover:text-content transition-colors relative z-10">
                {skill.name}
              </h4>
              <span className="text-xs text-muted/70 uppercase tracking-wider mt-1 font-medium group-hover:text-primary transition-colors relative z-10">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};

export default Skills;