import React from 'react';
import Section from './ui/Section';
import { ORGANIZATIONS } from '../constants';
import { Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Organization() {
  return (
    <Section id="organization">
      <div className="mb-12 md:mb-16">
         <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
              <Users size={24} />
            </div>
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Community</h2>
         </div>
         <h3 className="text-3xl md:text-4xl font-display font-bold text-content">Organization Experience</h3>
      </div>

      <div className="relative border-l-2 border-panel/10 ml-4 md:ml-6 space-y-12 pb-4">
        {/* Gradient Line Overlay for Fade Effect at bottom */}
        <div className="absolute bottom-0 left-[-2px] w-[2px] h-24 bg-gradient-to-t from-background to-transparent z-10"></div>

        {ORGANIZATIONS.map((org, index) => (
          <motion.div 
            key={org.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-8 w-5 h-5 rounded-full bg-background border-4 border-panel/10 group-hover:border-primary transition-colors z-10 flex items-center justify-center">
               <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary animate-pulse transition-colors"></div>
            </div>

            {/* Content Card */}
            <div className="group relative p-6 md:p-8 rounded-2xl bg-panel/5 border border-panel/10 hover:border-primary/30 transition-all hover:bg-panel/10 hover:shadow-2xl hover:shadow-primary/5">
               {/* Glowing effect on hover */}
               <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

               <div className="relative z-10">
                 <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-content group-hover:text-primary transition-colors">
                        {org.name}
                      </h4>
                      <div className="flex items-center gap-2 text-lg text-content/80 mt-2 font-medium">
                         <span>{org.role}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 self-start shrink-0">
                      <Calendar size={14} />
                      {org.duration}
                    </div>
                 </div>

                 <div className="h-px w-full bg-panel/10 mb-6 group-hover:bg-primary/20 transition-colors"></div>

                 <ul className="space-y-2">
                    {org.description.map((desc, i) => (
                      <li key={i} className="text-muted leading-relaxed flex items-start gap-3">
                        <span className="block w-1.5 h-1.5 rounded-full bg-muted mt-2.5 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                 </ul>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}