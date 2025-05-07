import React from "react";

const TargetUsers: React.FC = () => {
  const users = [
    {
      icon: "🎓",
      title: "University Students",
      description:
        "Undergraduates and postgraduates seeking organized academic resources, peer support, and a centralized platform for materials and knowledge sharing.",
    },
    {
      icon: "🆕",
      title: "Freshmen",
      description:
        "New students needing guidance in new academic environments. UniNav offers support via blogs, curated materials, and a welcoming community for quick adaptation and academic success.",
    },
    {
      icon: "👥",
      title: "Student Associations",
      description:
        "Groups needing a platform to share information and materials. UNINAV helps them efficiently communicate with members and provide essential resources.",
    },
    {
      icon: "👨‍🏫",
      title: "Educators",
      description:
        "Lecturers and professors can use UNINAV to distribute verified course materials, announcements, and updates, ensuring students access accurate information.",
    },
  ];

  const impacts = [
    {
      icon: "📈",
      title: "Enhanced Academic Performance",
      description:
        "Easy access to relevant materials boosts study efficiency and improves grades by providing a centralized, organized resource platform.",
    },
    {
      icon: "🤝",
      title: "Community Building",
      description:
        "Blogs and shared resources foster a collaborative learning environment, connecting students and enhancing the university experience.",
    },
    {
      icon: "🚪",
      title: "Increased Opportunities",
      description:
        "Centralized updates on events and internships help students build careers and achieve professional goals.",
    },
    {
      icon: "💪",
      title: "Empowerment",
      description:
        "Students can contribute, monetize their knowledge, and build a reputation, promoting a culture of sharing and support.",
    },
  ];

  return (
    <section className="bg-white section-padding" id="target-users">
      <div className="mx-auto container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gradient text-3xl md:text-4xl">
            Target Users & Impact
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-lg">
            UNINAV serves the academic community, aiming to revolutionize how
            students access and share resources.
          </p>
        </div>

        <div className="gap-12 grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="flex items-center bg-uninav-primary p-4 rounded-t-xl font-semibold text-white text-xl">
              <span className="mr-2 text-2xl">👥</span> Target Users
            </div>
            <div className="bg-white shadow-md p-6 rounded-b-xl divide-y divide-gray-100">
              {users.map((user, index) => (
                <div
                  key={index}
                  className={`py-6 ${index === 0 ? "pt-0" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-uninav-light p-2 rounded-lg text-3xl">
                      {user.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-uninav-dark text-xl">
                        {user.title}
                      </h3>
                      <p className="text-gray-600">{user.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center bg-uninav-accent p-4 rounded-t-xl font-semibold text-white text-xl">
              <span className="mr-2 text-2xl">💫</span> Social Impact
            </div>
            <div className="bg-white shadow-md p-6 rounded-b-xl divide-y divide-gray-100">
              {impacts.map((impact, index) => (
                <div
                  key={index}
                  className={`py-6 ${index === 0 ? "pt-0" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-uninav-light p-2 rounded-lg text-3xl">
                      {impact.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-uninav-dark text-xl">
                        {impact.title}
                      </h3>
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
