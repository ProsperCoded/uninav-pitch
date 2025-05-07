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
  // Improved Intersection Observer for animations
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
      threshold: 0.1, // Lower threshold to trigger animations sooner
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
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <section id="content-sections">
          {/* Added specific IDs, improved animation classes, and longer animation delays for staggered effect */}
          <div id="problem-solution" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
            <ProblemSolution />
          </div>
          <div id="how-it-works" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100">
            <HowItWorks />
          </div>
          <div id="product-features" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200">
            <ProductFeatures />
          </div>
          <div id="target-users" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-300">
            <TargetUsers />
          </div>
          <div id="business-model" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-400">
            <BusinessModel />
          </div>
          <div id="traction" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-500">
            <Traction />
          </div>
          <div id="competition" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-600">
            <Competition />
          </div>
          <div id="next-steps" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-700">
            <NextSteps />
          </div>
          <div id="contact" className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out delay-800">
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
