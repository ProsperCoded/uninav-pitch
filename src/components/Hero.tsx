
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, BookOpen, Download, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Theme-colored gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#222959] via-[#2C3566] to-[#3D4780] z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-[#3399FF]/10 blur-3xl"></div>
        <div className="animate-float-delayed absolute bottom-[20%] right-[15%] w-72 h-72 rounded-full bg-[#FF9900]/10 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-[#00B33C]/5 blur-2xl animate-pulse-slow"></div>
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
                <span className="text-[#FF9900] ml-2">Simplified</span>
                <svg className="absolute -bottom-1 left-2 w-[calc(100%-0.5rem)] h-2 text-[#FF9900]/30" viewBox="0 0 200 8" preserveAspectRatio="none">
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
              <Button className="primary-button hover-scale group bg-[#FF9900] hover:bg-[#FF9900]/90 text-white px-6 py-6 h-auto">
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
              <div className="absolute -inset-1 bg-gradient-to-r from-[#222959] to-[#3399FF] rounded-2xl blur opacity-40 animate-pulse"></div>
              <div className="relative bg-white/90 p-3 rounded-2xl shadow-2xl backdrop-blur-sm">
                <img 
                  src="/placeholder.svg" 
                  alt="UNINAV Dashboard" 
                  className="rounded-xl w-full h-auto shadow-lg"
                />
                <div className="absolute -top-4 -left-4 bg-[#3399FF] rounded-full p-3 shadow-lg animate-bounce-slow">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#FF9900] rounded-full p-4 shadow-lg animate-pulse">
                  <Download className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            {/* Feature buttons */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <div className="glassmorphism px-5 py-3 rounded-full flex items-center bg-[#3399FF]/90 text-white">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>Study Materials</span>
              </div>
              <div className="glassmorphism px-5 py-3 rounded-full flex items-center bg-[#00B33C]/90 text-white">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L14.5 9.5L20 12L14.5 14.5L12 20L9.5 14.5L4 12L9.5 9.5L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Academic Resources</span>
              </div>
              <div className="glassmorphism px-5 py-3 rounded-full flex items-center bg-[#FF9900]/90 text-white">
                <Users className="w-5 h-5 mr-2" />
                <span>Student Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
