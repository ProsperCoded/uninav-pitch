
import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Check, Clock, CircleDot } from 'lucide-react';

const NextSteps: React.FC = () => {
  const phases = [
    {
      name: 'Phase 1 – Core MVP',
      status: 'Completed',
      icon: <Check className="h-5 w-5" />,
      items: [
        'User registration & department-level onboarding',
        'Material upload system (PDFs, images, etc.)',
        'Course & level-based organization',
        'Full-text + trigram search with filters',
        'Blog system with like-based earnings',
        'Native ad attachments via dashboard'
      ]
    },
    {
      name: 'Phase 2 – Refinement & Growth',
      status: 'In Progress',
      icon: <Clock className="h-5 w-5" />,
      items: [
        'Contributor credibility scores',
        'Blog review & curation system',
        'Notification system for new materials & blogs',
        'Analytics for uploads, views, downloads'
      ]
    },
    {
      name: 'Phase 3 – Awareness & Events',
      status: 'Upcoming',
      icon: <CircleDot className="h-5 w-5" />,
      items: [
        'University-wide announcement board',
        'Internship & event listings by ambassadors',
        'Verified badge for contributors & event posters',
        'Student rep dashboard'
      ]
    },
    {
      name: 'Phase 4 – Scale & Monetization',
      status: 'Future',
      icon: <CircleDot className="h-5 w-5" />,
      items: [
        'Multi-university support',
        'In-app ad payment & campaign system',
        'Blog earning withdrawal system',
        'Mobile App release (Android / iOS)'
      ]
    }
  ];

  return (
    <section 
      className="section-padding relative overflow-hidden" 
      style={{
        background: 'linear-gradient(135deg, #4F46E5 0%, #9B87F5 100%)',
      }}
      id="next-steps"
    >
      {/* Abstract shapes for background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white opacity-10 blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-uninav-accent opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-white opacity-10 blur-xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Join Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8 inline-block">
              <p className="text-xl md:text-2xl font-medium text-white italic">
                "UniNav: Your all-in-one platform for accessing, sharing, and monetizing academic resources."
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-12">
          <div className="flex items-center justify-center mb-6">
            <Rocket className="h-6 w-6 text-white mr-2" />
            <h3 className="text-2xl font-semibold text-white">UniNav Roadmap</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <div 
                key={index} 
                className={`rounded-lg p-5 transition-all duration-300 transform hover:-translate-y-2 ${
                  phase.status === 'Completed' ? 'bg-white/20' :
                  phase.status === 'In Progress' ? 'bg-uninav-accent/50' :
                  'bg-white/10'
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-white text-lg">{phase.name}</h4>
                  <span className={`text-xs px-3 py-1.5 rounded-full flex items-center gap-1 ${
                    phase.status === 'Completed' ? 'bg-green-500 text-white' :
                    phase.status === 'In Progress' ? 'bg-yellow-500 text-white' :
                    'bg-white/20 text-white'
                  }`}>
                    {phase.icon}
                    {phase.status}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/90 text-sm">
                      <div className={`mt-0.5 flex-shrink-0 ${
                        phase.status === 'Completed' ? 'text-green-300' :
                        phase.status === 'In Progress' && i < 2 ? 'text-yellow-300' :
                        'text-white/50'
                      }`}>
                        {phase.status === 'Completed' ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <CircleDot className="h-4 w-4" />
                        )}
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mb-8 animate-pulse-slow">
          <Button className="bg-uninav-accent hover:bg-uninav-accent/80 text-white px-8 py-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Rocket className="mr-2 h-5 w-5" />
            Get Early Access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
