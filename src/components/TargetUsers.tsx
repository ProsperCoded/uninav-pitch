
import React from 'react';

const TargetUsers: React.FC = () => {
  const users = [
    {
      icon: '🎓',
      title: 'University Students',
      description: 'Seeking organized academic resources and peer support. This includes undergraduates and postgraduates from all disciplines looking for a centralized platform to access study materials, share knowledge, and build connections.'
    },
    {
      icon: '🆕',
      title: 'Freshmen',
      description: 'Navigating new academic environments and requiring guidance. First-year students can find invaluable support through blogs, curated materials, and a welcoming community that helps them adapt quickly and excel in their studies.'
    },
    {
      icon: '👥',
      title: 'Student Associations',
      description: 'Looking for platforms to disseminate information and materials. Student groups can leverage UNINAV to efficiently communicate with members, share important announcements, and provide access to essential resources.'
    },
    {
      icon: '👨‍🏫',
      title: 'Educators',
      description: 'Wanting to share verified materials and updates. Lecturers and professors can use UNINAV to distribute course materials, announcements, and important updates, ensuring students have access to accurate information.'
    }
  ];

  const impacts = [
    {
      icon: '📈',
      title: 'Enhanced Academic Performance',
      description: 'Easy access to relevant materials boosts study efficiency. By providing a centralized and organized platform for academic resources, UNINAV empowers students to study more effectively, leading to improved grades and academic success.'
    },
    {
      icon: '🤝',
      title: 'Community Building',
      description: 'Blogs and shared resources foster a collaborative learning environment where students can connect, share knowledge, and support each other, creating a vibrant educational ecosystem that enhances the overall university experience.'
    },
    {
      icon: '🚪',
      title: 'Increased Opportunities',
      description: 'Centralized updates ensure students don\'t miss out on events or internships. UNINAV keeps students informed about important opportunities, helping them build their careers and achieve their professional goals.'
    },
    {
      icon: '💪',
      title: 'Empowerment',
      description: 'Students can contribute and monetize their knowledge, promoting a culture of sharing and support. UNINAV empowers students to share their expertise, earn rewards, and build a reputation within the academic community.'
    }
  ];

  return (
    <section className="section-padding bg-white" id="target-users">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Target Users & Impact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            UNINAV is designed to serve the academic community and create meaningful change in how students access and share resources.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-uninav-primary text-white p-4 rounded-t-xl font-semibold text-xl flex items-center">
              <span className="text-2xl mr-2">👥</span> Target Users
            </div>
            <div className="bg-white rounded-b-xl shadow-md p-6 divide-y divide-gray-100">
              {users.map((user, index) => (
                <div key={index} className={`py-6 ${index === 0 ? 'pt-0' : ''}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl p-2 bg-uninav-light rounded-lg">{user.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-uninav-dark mb-2">{user.title}</h3>
                      <p className="text-gray-600">{user.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="bg-uninav-accent text-white p-4 rounded-t-xl font-semibold text-xl flex items-center">
              <span className="text-2xl mr-2">💫</span> Social Impact
            </div>
            <div className="bg-white rounded-b-xl shadow-md p-6 divide-y divide-gray-100">
              {impacts.map((impact, index) => (
                <div key={index} className={`py-6 ${index === 0 ? 'pt-0' : ''}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl p-2 bg-uninav-light rounded-lg">{impact.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-uninav-dark mb-2">{impact.title}</h3>
                      <p className="text-gray-600">{impact.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetUsers;
