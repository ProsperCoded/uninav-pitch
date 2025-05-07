
import React, { useState } from 'react';

const HowItWorks: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  
  const steps = [
    {
      icon: '📤',
      title: 'Upload & Share',
      description: 'Students upload materials through their dashboard',
      details: [
        'Add course details, tags, and optional native ads',
        'Materials become instantly available to peers in relevant departments/levels',
        'Get recognition and rewards for your contributions'
      ]
    },
    {
      icon: '🔍',
      title: 'Discover & Filter',
      description: 'Students search using smart filters (course, type, tags)',
      details: [
        'Results are personalized based on level, department, and selected courses',
        'Find exactly what you need without wading through irrelevant content',
        'Save time with intelligent search suggestions and popular materials'
      ]
    },
    {
      icon: '📥',
      title: 'Download & Interact',
      description: 'One-click downloads or in-app previews',
      details: [
        'Students like, confirm authenticity, and support uploaders',
        'Leave helpful comments and feedback for other students',
        'Build your academic library organized by course and semester'
      ]
    },
    {
      icon: '📝',
      title: 'Explore Blogs',
      description: 'Peer-written guides help students navigate school processes',
      details: [
        'Students stay informed, contribute, and gain recognition',
        'Share your experiences and insights with fellow students',
        'Access valuable academic and social guidance from seniors'
      ]
    }
  ];
  
  return (
    <section className="section-padding bg-white" id="how-it-works">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            You have valuable content — we help you share it and earn from it
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`step-card transition-all duration-300 ${expandedStep === index ? 'scale-105 border-uninav-primary shadow-lg' : 'hover-scale'}`}
                onClick={() => setExpandedStep(expandedStep === index ? null : index)}
              >
                <div className="flex items-center gap-4 cursor-pointer">
                  <div className={`text-3xl p-2 rounded-full ${expandedStep === index ? 'bg-uninav-primary text-white' : 'bg-gray-100'}`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold ${expandedStep === index ? 'text-uninav-primary' : 'text-gray-800'}`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                {expandedStep === index && (
                  <div className="mt-4 pl-16 animate-fade-in">
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-uninav-accent mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="space-y-8 p-6 bg-gray-50 rounded-xl shadow-inner">
            <h3 className="text-2xl font-bold text-uninav-primary">What Makes This Flow Special</h3>
            <p className="text-gray-700">
              It's built around what students actually do, and what they actually need. Our platform is designed with real student challenges in mind.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-md border-l-4 border-uninav-primary">
                <div className="text-2xl mb-2">🔄</div>
                <h4 className="font-semibold text-lg mb-1">Bi-directional</h4>
                <p className="text-gray-600">You give, you get - fostering a collaborative academic environment</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow-md border-l-4 border-uninav-secondary">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold text-lg mb-1">Personalized</h4>
                <p className="text-gray-600">Content adapts to your context, delivering exactly what you need</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow-md border-l-4 border-uninav-accent col-span-1 sm:col-span-2">
                <div className="text-2xl mb-2">💼</div>
                <h4 className="font-semibold text-lg mb-1">Opportunity-oriented</h4>
                <p className="text-gray-600">Ads + blogs become launchpads for events, businesses, and awareness</p>
              </div>
            </div>
            
            <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Demo</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500 flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                  <span>Video Demo Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
