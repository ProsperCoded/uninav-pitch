
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="gradient-bg section-padding min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-uninav-primary/10 blur-3xl"></div>
        <div className="animate-float-delayed absolute bottom-[20%] right-[15%] w-72 h-72 rounded-full bg-uninav-accent/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <Logo className="mb-6 hover-scale transform transition-all duration-500" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Academic Journey, 
              <span className="relative">
                <span className="text-uninav-accent ml-2">Simplified</span>
                <svg className="absolute -bottom-1 left-2 w-[calc(100%-0.5rem)] h-2 text-uninav-accent/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 Q40,0 80,5 T160,5 T200,5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Welcome to UNINAV, a dynamic platform designed for university students to upload, access, and share academic resources. Imagine a world where finding the right study materials is effortless, where you can connect with peers, and where your knowledge can make a real difference.
            </p>
            
            <p className="text-lg text-white/90 leading-relaxed">
              Organize materials by Faculty, Department, and Course, share updates and information through blogs, and join study groups via WhatsApp recommendations!
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Button className="primary-button hover-scale group bg-uninav-accent hover:bg-uninav-accent/90 text-white px-6 py-6 h-auto">
                Get Started
                <ArrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="secondary-button hover-scale bg-white/10 text-white border-white hover:bg-white/20 px-6 py-6 h-auto">
                Learn More
                <ChevronRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="lg:pl-10 animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-uninav-primary to-uninav-secondary rounded-2xl blur opacity-40 animate-pulse"></div>
              <div className="relative bg-white/90 p-3 rounded-2xl shadow-2xl backdrop-blur-sm">
                <img 
                  src="/placeholder.svg" 
                  alt="UNINAV Dashboard" 
                  className="rounded-xl w-full h-auto shadow-lg"
                />
                <div className="absolute -top-4 -left-4 bg-uninav-primary rounded-full p-3 shadow-lg animate-bounce-slow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                    <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
                    <path d="M3 16h3a2 2 0 0 1 2 2v3" />
                    <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-uninav-accent rounded-full p-4 shadow-lg animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
