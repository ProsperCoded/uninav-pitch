
import React, { useEffect } from 'react';
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
  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.15 });

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
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <ProblemSolution />
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <HowItWorks />
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <ProductFeatures />
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <TargetUsers />
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <BusinessModel />
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <Traction />
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <Competition />
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <NextSteps />
        </div>
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <ContactForm />
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
