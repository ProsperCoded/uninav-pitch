import React, { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import ProductFeatures from '@/components/ProductFeatures';
import TargetUsers from '@/components/TargetUsers';
import BusinessModel from '@/components/BusinessModel';
import Traction from '@/components/Traction';
import Competition from '@/components/Competition';
import NextSteps from '@/components/NextSteps';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { Toaster } from '@/components/ui/toaster';

const Index: React.FC = () => {
  // Enhanced Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Only add the class if the element is intersecting
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Don't unobserve to keep the animation state when scrolling back
        }
      });
    }, { 
      threshold: 0.15, // Slightly higher threshold for better timing
      rootMargin: "0px 0px -100px 0px" // Trigger before element is fully visible
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      <main className="relative">
        <div className="absolute top-0 right-0 w-full h-full max-w-5xl mx-auto pointer-events-none -z-10">
          <div className="absolute top-40 right-[10%] w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
          <div className="absolute top-[60%] left-[5%] w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>

        <Hero />
        <section id="content-sections" className="relative">
          {/* Staggered animation with improved timing and reduced delay for better UX */}
          <div id="problem-solution" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
            <ProblemSolution />
          </div>
          <div id="how-it-works" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-75">
            <HowItWorks />
          </div>
          <div id="product-features" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-150">
            <ProductFeatures />
          </div>
          <div id="target-users" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-225">
            <TargetUsers />
          </div>
          <div id="business-model" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-300">
            <BusinessModel />
          </div>
          <div id="traction" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-375">
            <Traction />
          </div>
          <div id="competition" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-450">
            <Competition />
          </div>
          <div id="next-steps" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-525">
            <NextSteps />
          </div>
          <div id="contact" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-600">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
