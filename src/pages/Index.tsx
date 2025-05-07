
import React from 'react';
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

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <ProductFeatures />
      <TargetUsers />
      <BusinessModel />
      <Traction />
      <Competition />
      <NextSteps />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
