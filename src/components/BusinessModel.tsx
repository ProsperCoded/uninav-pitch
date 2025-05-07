
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BusinessModel: React.FC = () => {
  const financialData = [
    { 
      year: '2025', 
      users: 1000, 
      nativeAds: 100 * 2000, 
      premium: 0, 
      targetedAds: 0,
      total: 100 * 2000
    },
    { 
      year: '2026', 
      users: 2000, 
      nativeAds: 200 * 2000, 
      premium: 200 * 1000 * 12, 
      targetedAds: 200 * 5000,
      total: (200 * 2000) + (200 * 1000 * 12) + (200 * 5000)
    },
    { 
      year: '2027', 
      users: 3000, 
      nativeAds: 300 * 2000, 
      premium: 300 * 1000 * 12, 
      targetedAds: 400 * 5000,
      total: (300 * 2000) + (300 * 1000 * 12) + (400 * 5000)
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="business-model">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">Business Model</h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          A sustainable approach to creating value for students while building a viable business.
        </p>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <h3 className="text-2xl font-semibold text-uninav-primary mb-4">Market Opportunity</h3>
          <p className="text-gray-700 mb-4">
            As of March 2025, Nigeria has <span className="font-bold">283</span> universities (63 federal, 63 state, and 149 private). 
            The National Universities Commission (NUC) has stated that the current number of universities is 
            <span className="font-bold"> inadequate</span> for the country's over <span className="font-bold">200 million</span> population, 
            with over <span className="font-bold">1.5 million</span> candidates seeking university admission annually. 
            However, the total undergraduate enrollment capacity across these institutions is significantly lower, 
            estimated to be around <span className="font-bold">875,000</span>.
          </p>
          
          <div className="my-4 p-4 bg-gray-50 rounded-lg border-l-4 border-uninav-secondary">
            <p className="text-sm text-gray-600">
              <span className="font-bold">Source:</span> <a href="https://businessday.ng/editorial/article/n-assemblys-200-new-varsities-dream-amid-lecturers-shortage/" className="text-uninav-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Businessday NG, Published March 24, 2025
              </a>
            </p>
          </div>
          
          <div className="p-4 bg-uninav-light rounded-lg">
            <p className="text-gray-700">
              <span className="font-bold">Key Insight:</span> This significant disparity between the number of students 
              seeking admission and the available slots highlights a crucial pain point: students often struggle 
              to access necessary academic resources and peer support networks within the existing university structures. 
              UniNav directly addresses this gap by providing a centralized platform for resource sharing, collaboration, 
              and access to valuable peer insights, creating a substantial market opportunity across all 283 universities 
              and the large student population they serve. By streamlining access to materials and fostering a supportive 
              community, UniNav can become an indispensable tool for a vast number of Nigerian university students.
            </p>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold text-center text-uninav-primary mb-6">Revenue Streams</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="feature-card">
            <div className="text-3xl mb-4 text-uninav-accent">📢</div>
            <h4 className="text-xl font-semibold text-uninav-dark mb-2">Native Ads</h4>
            <p className="text-gray-600">
              An opportunity for students to display more adverts per material they publish, and to replace an advertisement 
              for a material (note that currently we offer 1 free advert per material, after which they can't remove the advert 
              only reupload another material). This will be especially useful during student campaigns for more political awareness 
              of candidates.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="text-3xl mb-4 text-uninav-accent">⭐</div>
            <h4 className="text-xl font-semibold text-uninav-dark mb-2">Premium Features</h4>
            <p className="text-gray-600">
              Premium features that would also be paid for by interested students. With lots of data of materials and blogs, 
              UniNav will create enhanced services such as inbuilt PDF reader with AI support for answering questions right within 
              the editor on the go, sticky notes within editor, generating quick quizzes for a specific course, AI-powered study plans, 
              and advanced analytics on study progress.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="text-3xl mb-4 text-uninav-accent">🎯</div>
            <h4 className="text-xl font-semibold text-uninav-dark mb-2">Targeted Ads & Sponsors</h4>
            <p className="text-gray-600">
              This will feature certain organizations' ads right within some search results, to provide better awareness and 
              visibility for businesses and event organizers. Partners can include student-focused businesses, educational 
              service providers, campus events, and career opportunities that align with student interests.
            </p>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold text-center text-uninav-primary mb-6">Financial Projection</h3>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="h-80 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={financialData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`₦${value.toLocaleString()}`, undefined]}
                  labelFormatter={(label) => `Year: ${label}`}
                />
                <Legend />
                <Bar dataKey="nativeAds" name="Native Ads Revenue" fill="#4F46E5" />
                <Bar dataKey="premium" name="Premium Features" fill="#9B87F5" />
                <Bar dataKey="targetedAds" name="Targeted Ads" fill="#F97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Native Ads</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Premium Features</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Targeted Ads</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Revenue</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {financialData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.year}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.users}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₦{item.nativeAds.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₦{item.premium.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₦{item.targetedAds.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">₦{item.total.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">
            <p>
              <span className="font-semibold">2025:</span> 1,000 users with approximately 10% (100 users) purchasing native ads at ₦2,000 each.
            </p>
            <p>
              <span className="font-semibold">2026:</span> 2,000 users with 200 native ads purchases, 200 premium subscriptions at ₦1,000/month, and 200 targeted ads at ₦5,000 each.
            </p>
            <p>
              <span className="font-semibold">2027:</span> 3,000 users with 300 native ads purchases, 300 premium subscriptions, and 400 targeted ads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
