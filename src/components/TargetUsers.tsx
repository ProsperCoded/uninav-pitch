import React from "react";

const TargetUsers: React.FC = () => {
  const users = [
    {
      icon: "🎓",
      title: "University Students",
      description:
        "Seeking organized academic resources, peer support, and a centralized platform for knowledge sharing.",
    },
    {
      icon: "🆕",
      title: "Freshmen",
      description:
        "Need guidance in new academic environments. UniNav offers support for quick adaptation and success.",
    },
    {
      icon: "👥",
      title: "Student Associations",
      description:
        "Require a platform to efficiently share information and materials with members.",
    },
    {
      icon: "👨‍🏫",
      title: "Educators",
      description:
        "Can use UNINAV to distribute verified course materials and updates, ensuring students access accurate info.",
    },
  ];

  const impacts = [
    {
      icon: "📈",
      title: "Enhanced Academic Performance",
      description:
        "Easy access to relevant materials boosts study efficiency and improves grades.",
    },
    {
      icon: "🤝",
      title: "Community Building",
      description:
        "Blogs and shared resources foster collaboration, connecting students and enhancing university experience.",
    },
    {
      icon: "🚪",
      title: "Increased Opportunities",
      description:
        "Centralized updates on events and internships help students build careers.",
    },
    {
      icon: "💪",
      title: "Empowerment",
      description:
        "Students can contribute, monetize knowledge, and build reputation, promoting sharing and support.",
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
            UNINAV serves the academic community, revolutionizing student
            resource access and sharing.
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
