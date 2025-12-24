import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { PORTFOLIO_OWNER, ROLE_TITLE, TAGLINE } from '../constants';

const Hero: React.FC = () => {
  
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      // Offset for fixed navbar (approx 80px)
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Available for Work
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-content mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">{PORTFOLIO_OWNER}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted font-light mb-6">
              {ROLE_TITLE}
            </h2>
            <p className="text-lg text-muted max-w-lg leading-relaxed">
              {TAGLINE}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="px-8 py-3 bg-content text-background rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              View Work <ArrowRight size={18} />
            </a>
            <a
              href="./CV ATS Bayu Triwicaksono Yulianto.pdf"
              download="Resume_Bayu_Triwicaksono.pdf"
              className="px-8 py-3 bg-transparent border border-panel/20 text-content rounded-full font-semibold hover:bg-panel/5 transition-colors flex items-center gap-2 group"
            >
              Download CV <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Abstract 3D-like graphic placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden md:block h-[500px]"
        >
           <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 rounded-2xl rotate-6 blur-2xl"></div>
              <div className="absolute inset-0 bg-surface border border-panel/10 rounded-2xl p-6 shadow-2xl overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                 {/* Mock Code Interface */}
                 <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <div className="space-y-3 font-mono text-sm">
                    <div className="flex">
                       <span className="text-pink-500 mr-2">const</span>
                       <span className="text-blue-400">developer</span>
                       <span className="text-content mx-2">=</span>
                       <span className="text-yellow-500 dark:text-yellow-300">{`{`}</span>
                    </div>
                    <div className="pl-6">
                       <span className="text-sky-400 dark:text-sky-300">name</span>: <span className="text-green-600 dark:text-green-400">"{PORTFOLIO_OWNER}"</span>,
                    </div>
                    <div className="pl-6">
                       <span className="text-sky-400 dark:text-sky-300">role</span>: <span className="text-green-600 dark:text-green-400">"{ROLE_TITLE}"</span>,
                    </div>
                    <div className="pl-6">
                       <span className="text-sky-400 dark:text-sky-300">traits</span>: [<span className="text-green-600 dark:text-green-400">"Creative"</span>, <span className="text-green-600 dark:text-green-400">"Logical"</span>, <span className="text-green-600 dark:text-green-400">"Long Life Learning"</span>],
                    </div>
                    <div className="pl-6">
                       <span className="text-sky-400 dark:text-sky-300">hardWorker</span>: <span className="text-purple-500 dark:text-purple-400">true</span>
                    </div>
                    <div className="text-yellow-500 dark:text-yellow-300">{`}`}</div>
                    
                    <div className="mt-8 animate-pulse text-muted">
                       // Building the future, one line of code at a time...
                    </div>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted"
      >
        <span className="text-xs tracking-widest uppercase mb-2 block text-center">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;