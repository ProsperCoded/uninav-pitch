
import React from 'react';

const Traction: React.FC = () => {
  const milestones = [
    {
      title: 'Platform Launched',
      status: 'Completed',
      description: 'Core functionality deployed and tested in production environment. The platform is now operational and ready for initial user onboarding.'
    },
    {
      title: 'Software Testing',
      status: 'Completed',
      description: 'Rigorous testing conducted to ensure stability, security, and optimal performance across different devices and browsers.'
    },
    {
      title: 'Initial Material Gathering',
      status: 'Ongoing',
      description: 'Building our first collection of high-quality academic resources from early adopters and campus ambassadors.'
    }
  ];

  const marketingStrategies = [
    {
      icon: '🏫',
      title: 'Campus Ambassador Program',
      description: 'Recruiting enthusiastic students from each university to champion UNINAV on campus, organize awareness events, and gather initial content.'
    },
    {
      icon: '👥',
      title: 'Student Association Partnerships',
      description: 'Collaborating with departmental associations to promote the platform and contribute verified academic content.'
    },
    {
      icon: '📱',
      title: 'Mobile-First Approach',
      description: 'Recognizing that most Nigerian students access the internet via mobile phones, our platform is optimized for mobile devices first.'
    },
    {
      icon: '🎯',
      title: 'Targeted Social Media Campaigns',
      description: 'Leveraging platforms popular among Nigerian students like WhatsApp, Instagram, and Twitter for targeted awareness campaigns.'
    },
    {
      icon: '🚀',
      title: 'Phased University Rollout',
      description: 'Starting with key universities in major cities before expanding nationwide to ensure quality service and build reliable reputation.'
    }
  ];

  return (
    <section className="section-padding bg-white" id="traction">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Traction</h2>
            <p className="text-lg text-gray-600 mb-8">
              We've made significant progress in bringing UNINAV to life, with key milestones achieved and more on the horizon.
            </p>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-uninav-primary mb-6">Key Milestones</h3>
              
              <div className="space-y-8 relative">
                {milestones.map((milestone, index) => (
                  <div key={index} className="roadmap-item">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <h4 className="text-lg font-semibold text-uninav-dark">{milestone.title}</h4>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        milestone.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {milestone.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Go-To-Market Strategy</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our tailored approach for successfully introducing UNINAV to the Nigerian university ecosystem.
            </p>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="space-y-6">
                {marketingStrategies.map((strategy, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-3xl p-2 bg-uninav-light rounded-lg">{strategy.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-uninav-dark mb-1">{strategy.title}</h4>
                      <p className="text-gray-600">{strategy.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-uninav-light rounded-lg">
                <h4 className="text-lg font-semibold text-uninav-primary mb-2">Localization Focus</h4>
                <p className="text-gray-700">
                  We recognize the unique challenges of the Nigerian educational ecosystem. Our platform is specifically 
                  designed to address local connectivity issues, provide data-saving options, and support academic structures 
                  specific to Nigerian universities. By building for our local context first, we ensure UNINAV truly meets 
                  the needs of Nigerian students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;
