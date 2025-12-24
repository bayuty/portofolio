export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
  description?: string;
}

export interface Skill {
  name: string;
  icon: string; // Slug for simpleicons.org
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface Organization {
  id: string;
  role: string;
  name: string;
  duration: string;
  description: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}