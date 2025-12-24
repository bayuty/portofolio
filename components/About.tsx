import React from 'react';
import Section from './ui/Section';
import { BIO, PORTFOLIO_OWNER } from '../constants';
import { Code, Coffee, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  // UNTUK MENGGUNAKAN FILE LOKAL:
  // 1. Simpan foto Anda dengan nama "bayu-profile.jpg" di folder utama (sejajar dengan index.html).
  // 2. Panggil nama file tersebut di sini.
  const profileImg = './bayu-profile.jpg';

  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden bg-surface border-2 border-panel/10 relative z-10 group shadow-2xl shadow-primary/10">
             <img 
               src={profileImg} 
               alt={PORTFOLIO_OWNER} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               onError={(e) => {
                 const parent = e.currentTarget.parentElement;
                 if (parent) {
                    e.currentTarget.style.display = 'none';
                    // Pesan jika file tidak ditemukan
                    parent.innerText = 'Foto tidak ditemukan. Pastikan file "bayu-profile.jpg" ada di folder root.';
                    parent.className = "aspect-square rounded-2xl bg-panel/5 border-2 border-panel/10 relative z-10 flex items-center justify-center text-muted text-center p-6 text-xs font-mono";
                 }
               }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm">About Me</h2>
            <h3 className="text-4xl font-display font-bold text-content mt-2">
              Transforming complex problems into <span className="text-secondary">simple solutions</span>.
            </h3>
            <p className="text-muted leading-relaxed text-lg mt-4">
              {BIO}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {[
              { icon: Code, title: "Clean Code", subtitle: "Maintainable & Scalable", color: "text-primary", border: "hover:border-primary/30" },
              { icon: Globe, title: "Modern Web", subtitle: "Latest Technologies", color: "text-secondary", border: "hover:border-secondary/30" },
              { icon: Coffee, title: "Dedicated", subtitle: "Always Learning", color: "text-accent", border: "hover:border-accent/30" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className={`p-4 rounded-xl bg-panel/5 border border-panel/10 ${item.border} transition-colors group cursor-default shadow-sm`}
              >
                <item.icon className={`${item.color} mb-3 group-hover:scale-110 transition-transform`} />
                <h4 className="font-semibold text-content mb-1">{item.title}</h4>
                <p className="text-xs text-muted">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;