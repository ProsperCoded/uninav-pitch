import React from "react";
import {
  Check,
  Clock,
  School,
  Users,
  Smartphone,
  Target,
  Rocket,
} from "lucide-react";

const Traction: React.FC = () => {
  const milestones = [
    {
      title: "Platform Launched",
      status: "Completed",
      description:
        "Core functionality deployed and operational for initial user onboarding.",
    },
    {
      title: "Software Testing",
      status: "Completed",
      description:
        "Rigorous testing ensured stability, security, and optimal performance.",
    },
    {
      title: "Initial Material Gathering",
      status: "Ongoing",
      description:
        "Building our first collection of academic resources from early adopters.",
    },
  ];

  const marketingStrategies = [
    {
      icon: <School className="w-6 h-6 text-uninav-primary" />,
      title: "Campus Ambassador Program",
      description:
        "Recruiting students to champion UNINAV, organize events, and gather content.",
    },
    {
      icon: <Users className="w-6 h-6 text-uninav-primary" />,
      title: "Student Association Partnerships",
      description:
        "Collaborating with associations to promote the platform and contribute content.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-uninav-primary" />,
      title: "Mobile-First Approach",
      description:
        "Optimized for mobile devices, catering to Nigerian students' primary internet access.",
    },
    {
      icon: <Target className="w-6 h-6 text-uninav-primary" />,
      title: "Targeted Social Media Campaigns",
      description:
        "Leveraging popular platforms (WhatsApp, Instagram, Twitter) for awareness.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-uninav-primary" />,
      title: "Phased University Rollout",
      description:
        "Starting with key universities to ensure quality service and build reputation.",
    },
  ];

  return (
    <section className="bg-white section-padding" id="traction">
      <div className="mx-auto container">
        <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-bold text-gradient text-3xl md:text-4xl">
              Our Traction
            </h2>
            <p className="mb-8 text-gray-600 text-lg">
              Significant progress made, with key milestones achieved and more
              on the horizon.
            </p>

            <div className="bg-white shadow-md hover:shadow-lg p-6 rounded-xl transition-all hover:-translate-y-1 duration-300 transform">
              <h3 className="mb-6 font-semibold text-uninav-primary text-2xl">
                Key Milestones
              </h3>

              <div className="relative space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="roadmap-item">
                    <div className="flex md:flex-row flex-col md:items-center gap-2 md:gap-4">
                      <h4 className="font-semibold text-uninav-dark text-lg">
                        {milestone.title}
                      </h4>
                      <span
                        className={`text-sm px-3 py-1 rounded-full inline-flex items-center gap-1 ${
                          milestone.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {milestone.status === "Completed" ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          <Clock className="w-3.5 h-3.5" />
                        )}
                        {milestone.status}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-bold text-gradient text-3xl md:text-4xl">
              Go-To-Market Strategy
            </h2>
            <p className="mb-8 text-gray-600 text-lg">
              Our tailored approach to introduce UNINAV to Nigerian
              universities.
            </p>

            <div className="bg-white shadow-md hover:shadow-lg p-6 rounded-xl transition-all hover:-translate-y-1 duration-300 transform">
              <div className="space-y-6">
                {marketingStrategies.map((strategy, index) => (
                  <div key={index} className="group flex items-start gap-4">
                    <div className="group-hover:bg-uninav-primary/10 bg-uninav-light p-2 rounded-lg transition-colors">
                      {strategy.icon}
                    </div>
                    <div>
                      <h4 className="group-hover:text-uninav-primary mb-1 font-semibold text-uninav-dark text-lg transition-colors">
                        {strategy.title}
                      </h4>
                      <p className="text-gray-600">{strategy.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-uninav-light mt-8 p-4 rounded-lg">
                <h4 className="flex items-center mb-2 font-semibold text-uninav-primary text-lg">
                  <Target className="mr-2 w-4 h-4" />
                  Localization Focus
                </h4>
                <p className="text-gray-700">
                  Designed for the Nigerian educational ecosystem, addressing
                  local connectivity, data-saving, and academic structures.
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
