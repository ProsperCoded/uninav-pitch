
import React from 'react';

const Competition: React.FC = () => {
  const features = [
    '🎯 Targets University Students',
    '📚 Access to Past Questions & Materials',
    '🎓 Course & Department-Based Organization',
    '🧠 Personalized Content by Level & Course',
    '📝 Community Blog System',
    '💬 Peer-Generated Content',
    '🧭 Event & Opportunity Awareness',
    '💼 Monetization via Native Adverts',
    '🔍 Powerful Filtered Search',
    '📱 Modern, Student-Friendly Dashboard'
  ];

  const competitors = [
    { name: 'uLesson', features: [false, false, false, false, false, false, false, false, false, false] },
    { name: 'Myschool.ng', features: [true, false, false, false, false, true, true, false, false, false] },
    { name: 'Tuteria', features: [true, false, false, false, false, false, false, false, false, false] },
    { name: 'UniNav', features: [true, true, true, true, true, true, true, true, true, true] }
  ];

  return (
    <section className="section-padding bg-gray-50" id="competition">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">Competition Analysis</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We have researched tirelessly, and there is close to no solution like UniNav, especially in Nigerian Universities.
        </p>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Feature / Platform
                  </th>
                  {competitors.map((competitor, i) => (
                    <th 
                      key={i} 
                      scope="col" 
                      className={`px-6 py-3 text-left text-xs font-medium ${
                        competitor.name === 'UniNav' ? 'text-uninav-primary' : 'text-gray-500'
                      } uppercase tracking-wider`}
                    >
                      {competitor.name} {competitor.name === 'UniNav' && '✅'}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {features.map((feature, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {feature}
                    </td>
                    {competitors.map((competitor, j) => (
                      <td 
                        key={j} 
                        className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${
                          competitor.name === 'UniNav' && competitor.features[i] ? 'text-uninav-primary font-semibold' : ''
                        }`}
                      >
                        {competitor.features[i] ? 
                          competitor.name === 'Myschool.ng' && i === 5 ? '✅ (Forum)' :
                          competitor.name === 'Myschool.ng' && i === 6 ? '✅ (limited)' :
                          '✅' : 
                          '❌'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-uninav-primary to-uninav-secondary text-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">What Makes Us Different</h3>
          <p className="text-lg">
            We integrate academic resources, community engagement, and monetization opportunities in one platform, 
            creating a comprehensive ecosystem that addresses the unique needs of Nigerian university students.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-2xl mb-2">🔄</div>
              <h4 className="text-lg font-semibold mb-1">All-in-One Platform</h4>
              <p className="text-white/80">Combining resources, blogs, and community in a single integrated ecosystem</p>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="text-lg font-semibold mb-1">Built for Nigerian Context</h4>
              <p className="text-white/80">Designed specifically for the unique challenges of Nigerian universities</p>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-2xl mb-2">💡</div>
              <h4 className="text-lg font-semibold mb-1">Student-First Innovation</h4>
              <p className="text-white/80">Every feature is built around actual student workflows and needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competition;
