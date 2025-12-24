import React, { useState } from 'react';
import Section from './ui/Section';
import { SOCIALS } from '../constants';
import { Mail, Send, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  // State to capture form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const IconMap: Record<string, any> = {
    Github: Github,
    Linkedin: Linkedin,
    Instagram: Instagram
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const phoneNumber = "6289674512271"; // Your WhatsApp number
    const text = `
Hello Bayu,

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-surface pt-32 md:pt-48 border-t border-panel/10">
      <Section id="contact" className="pb-10 md:pb-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Get in Touch</h2>
              <h3 className="text-4xl font-display font-bold text-content mb-6">Let's build something amazing together.</h3>
              <p className="text-muted text-lg">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-muted">
                <div className="w-12 h-12 rounded-full bg-panel/5 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted/70">Email</p>
                  <p className="font-medium text-content">bayuty3@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-muted">
                <div className="w-12 h-12 rounded-full bg-panel/5 flex items-center justify-center text-secondary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted/70">Location</p>
                  <p className="font-medium text-content">Jaten, Karanganyar, Jawa Tengah</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {SOCIALS.map((social) => {
                const Icon = IconMap[social.icon] || Github;
                return (
                  <motion.a 
                    key={social.platform} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      backgroundColor: "rgba(99, 102, 241, 0.15)",
                      borderColor: "rgba(99, 102, 241, 0.5)",
                      color: "#ffffff"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-12 h-12 rounded-full bg-panel/5 border border-panel/20 flex items-center justify-center text-muted transition-colors hover:text-white"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <form className="bg-background/50 p-8 rounded-2xl border border-panel/10 space-y-6 shadow-xl" onSubmit={handleWhatsAppRedirect}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-surface border border-panel/20 rounded-lg p-3 text-content focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50" 
                  placeholder="Bayu" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-surface border border-panel/20 rounded-lg p-3 text-content focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50" 
                  placeholder="bayu@example.com" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full bg-surface border border-panel/20 rounded-lg p-3 text-content focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50" 
                placeholder="Project Inquiry" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted">Message</label>
              <textarea 
                rows={4} 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full bg-surface border border-panel/20 rounded-lg p-3 text-content focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted/50" 
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-primary hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Send via WhatsApp <Send size={18} />
            </motion.button>
          </form>
        </div>
        
        <div className="mt-20 pt-8 border-t border-panel/10 text-center text-muted/60 text-sm">
          <p>© {new Date().getFullYear()} Bayu Triwicaksono Yulianto.</p>
        </div>
      </Section>
    </footer>
  );
};

export default Contact;