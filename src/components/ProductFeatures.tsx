
import React from 'react';

const ProductFeatures: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Explore Materials',
      description: 'Fast lookup for materials, personalized based on app activity. Find exactly what you need with intelligent search algorithms that understand your academic context.'
    },
    {
      icon: '📝',
      title: 'Explore Blogs',
      description: 'Craft and get updates on blogs with rich image & markdown support. Share your knowledge, experiences, and insights with fellow students.'
    },
    {
      icon: '📁',
      title: 'Collections',
      description: 'Create a pool of knowledge by linking materials using Collections which operate like folders (collections can have nested collections). When a material is visited, it shows related content for comprehensive learning.'
    },
    {
      icon: '📤',
      title: 'Material Upload',
      description: 'Uploading of single or bulk materials with comprehensive tagging and categorization. Share your resources with students who need them most.'
    },
    {
      icon: '📢',
      title: 'Native Adverts',
      description: 'An incentive feature where users can attach a free advert per material. Any user that visits that material sees the related adverts, and the owner gets detailed analytics.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="features">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Product Features</h2>
            <p className="text-lg text-gray-600 mb-8">
              UNINAV combines powerful features designed specifically for university students, creating an ecosystem that enhances academic collaboration and resource sharing.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="feature-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl p-2 bg-uninav-light rounded-lg">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-uninav-primary mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Technology Stack</h2>
            <p className="text-lg text-gray-600 mb-8">
              Built with modern, scalable technologies to deliver a seamless and robust user experience.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-uninav-primary mb-4">Frontend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg text-center hover-scale">
                    <div className="font-medium text-uninav-dark">NextJS</div>
                    <div className="text-sm text-gray-500">React Framework</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg text-center hover-scale">
                    <div className="font-medium text-uninav-dark">React Quill</div>
                    <div className="text-sm text-gray-500">Markdown Support</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg text-center hover-scale">
                    <div className="font-medium text-uninav-dark">Tailwind CSS</div>
                    <div className="text-sm text-gray-500">Styling</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-uninav-primary mb-4">Backend</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg text-center hover-scale">
                    <div className="font-medium text-uninav-dark">NestJS</div>
                    <div className="text-sm text-gray-500">Backend Framework</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg text-center hover-scale">
                    <div className="font-medium text-uninav-dark">Postgres</div>
                    <div className="text-sm text-gray-500">+ Vector Web Search</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg text-center hover-scale">
                    <div className="font-medium text-uninav-dark">S3 Bucket</div>
                    <div className="text-sm text-gray-500">Storage for Materials</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg text-center hover-scale">
                    <div className="font-medium text-uninav-dark">Nodemailer</div>
                    <div className="text-sm text-gray-500">Email Provider</div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-r from-uninav-primary to-uninav-secondary text-white">
                <h3 className="text-xl font-semibold mb-2">Uninav's Strategic Approach</h3>
                <p className="mb-4">
                  Uninav has a strategic way of gathering materials from students and delivering them based on certain preferences, department, and faculty, ensuring that students get exactly what they need.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm font-medium bg-white/20 p-2 rounded-lg">
                  <span className="text-xl">🎯</span>
                  <span>Smart Personalization</span>
                  <span>•</span>
                  <span className="text-xl">🔍</span>
                  <span>Intelligent Search</span>
                  <span>•</span>
                  <span className="text-xl">👥</span>
                  <span>Community Driven</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
