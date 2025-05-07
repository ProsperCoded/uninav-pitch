
import React from 'react';
import { CheckCircle, XCircle, CheckCircle2 } from 'lucide-react';

const Competition: React.FC = () => {
  const features = [
    { icon: '🎯', label: 'Targets University Students' },
    { icon: '📚', label: 'Access to Past Questions & Materials' },
    { icon: '🎓', label: 'Course & Department-Based Organization' },
    { icon: '🧠', label: 'Personalized Content by Level & Course' },
    { icon: '📝', label: 'Community Blog System' },
    { icon: '💬', label: 'Peer-Generated Content' },
    { icon: '🧭', label: 'Event & Opportunity Awareness' },
    { icon: '💼', label: 'Monetization via Native Adverts' },
    { icon: '🔍', label: 'Powerful Filtered Search' },
    { icon: '📱', label: 'Modern, Student-Friendly Dashboard' }
  ];

  const competitors = [
    { name: 'uLesson', features: [false, false, false, false, false, false, false, false, false, false] },
    { name: 'Myschool.ng', features: [true, false, false, false, false, true, true, false, false, false] },
    { name: 'Tuteria', features: [true, false, false, false, false, false, false, false, false, false] },
    { name: 'UniNav', features: [true, true, true, true, true, true, true, true, true, true] }
  ];

  return (
    <section className="section-padding relative" id="competition">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="bg-uninav-primary/5 absolute top-[20%] right-[10%] h-96 w-96 rounded-full blur-3xl"></div>
        <div className="bg-uninav-accent/5 absolute bottom-[20%] left-[10%] h-64 w-64 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-gradient relative inline-block">
            Competition Analysis
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-uninav-primary to-uninav-accent rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We have researched tirelessly, and there is close to no solution like UniNav, especially in Nigerian Universities.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 mb-12 border border-gray-100 backdrop-blur-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th scope="col" className="px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">
                    Feature / Platform
                  </th>
                  {competitors.map((competitor, i) => (
                    <th 
                      key={i} 
                      scope="col" 
                      className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                        competitor.name === 'UniNav' 
                          ? 'bg-uninav-primary/10 text-uninav-primary' 
                          : 'text-gray-500'
                      } ${i === competitors.length - 1 ? 'rounded-tr-lg' : ''}`}
                    >
                      <div className="flex items-center">
                        {competitor.name}
                        {competitor.name === 'UniNav' && (
                          <span className="ml-1 bg-uninav-accent text-white text-xs px-1 py-0.5 rounded">Winner</span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {features.map((feature, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                      <span className="text-xl mr-2">{feature.icon}</span>
                      {feature.label}
                    </td>
                    {competitors.map((competitor, j) => (
                      <td 
                        key={j} 
                        className={`px-6 py-4 whitespace-nowrap text-sm ${
                          competitor.name === 'UniNav' && competitor.features[i] 
                            ? 'text-uninav-primary font-semibold' 
                            : 'text-gray-500'
                        }`}
                      >
                        {competitor.features[i] ? (
                          competitor.name === 'Myschool.ng' && i === 5 ? (
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-1" />
                              <span className="text-xs">(Forum)</span>
                            </div>
                          ) : competitor.name === 'Myschool.ng' && i === 6 ? (
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-1" />
                              <span className="text-xs">(limited)</span>
                            </div>
                          ) : competitor.name === 'UniNav' ? (
                            <CheckCircle2 className="h-5 w-5 text-uninav-accent" />
                          ) : (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )
                        ) : (
                          <XCircle className="h-5 w-5 text-red-400" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-uninav-primary to-uninav-secondary text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="mr-2">⭐</span>
            What Makes Us Different
          </h3>
          <p className="text-lg">
            We integrate academic resources, community engagement, and monetization opportunities in one platform, 
            creating a comprehensive ecosystem that addresses the unique needs of Nigerian university students.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🔄</div>
              <h4 className="text-xl font-semibold mb-2">All-in-One Platform</h4>
              <p className="text-white/90">Combining resources, blogs, and community in a single integrated ecosystem</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🎯</div>
              <h4 className="text-xl font-semibold mb-2">Built for Nigerian Context</h4>
              <p className="text-white/90">Designed specifically for the unique challenges of Nigerian universities</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">💡</div>
              <h4 className="text-xl font-semibold mb-2">Student-First Innovation</h4>
              <p className="text-white/90">Every feature is built around actual student workflows and needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competition;
