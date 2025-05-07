
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="gradient-bg section-padding min-h-[80vh] flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Logo className="mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Academic Journey, <span className="text-uninav-accent">Simplified</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Welcome to UNINAV, a dynamic platform designed for university students to upload, access, and share academic resources. 📚 Imagine a world where finding the right study materials is effortless, where you can connect with peers, and where your knowledge can make a real difference.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Organize materials by Faculty, Department, and Course, share updates and information through blogs, and join study groups via WhatsApp recommendations! 🚀
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button className="primary-button hover-scale bg-uninav-accent hover:bg-uninav-accent/90">
                Get Started
              </Button>
              <Button className="secondary-button hover-scale bg-white/10 text-white border-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:pl-10 animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-uninav-primary to-uninav-secondary rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                <img 
                  src="/placeholder.svg" 
                  alt="UNINAV Dashboard" 
                  className="rounded-xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-uninav-accent rounded-full p-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                  <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
                  <path d="M3 16h3a2 2 0 0 1 2 2v3" />
                  <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
