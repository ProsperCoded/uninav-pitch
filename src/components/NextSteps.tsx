import React from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Check, Clock, CircleDot } from "lucide-react";

const NextSteps: React.FC = () => {
  const phases = [
    {
      name: "Phase 1 – Core MVP",
      status: "Completed",
      icon: <Check className="w-5 h-5" />,
      items: [
        "User registration & department-level onboarding",
        "Material upload system (PDFs, images, etc.)",
        "Course & level-based organization",
        "Full-text + trigram search with filters",
        "Blog system with like-based earnings",
        "Native ad attachments via dashboard",
      ],
    },
    {
      name: "Phase 2 – Refinement & Growth",
      status: "In Progress",
      icon: <Clock className="w-5 h-5" />,
      items: [
        "Contributor credibility scores",
        "Blog review & curation system",
        "Notification system for new materials & blogs",
        "Analytics for uploads, views, downloads",
      ],
    },
    {
      name: "Phase 3 – Awareness & Events",
      status: "Upcoming",
      icon: <CircleDot className="w-5 h-5" />,
      items: [
        "University-wide announcement board",
        "Internship & event listings by ambassadors",
        "Verified badge for contributors & event posters",
        "Student rep dashboard",
      ],
    },
    {
      name: "Phase 4 – Scale & Monetization",
      status: "Future",
      icon: <CircleDot className="w-5 h-5" />,
      items: [
        "Multi-university support",
        "In-app ad payment & campaign system",
        "Blog earning withdrawal system",
        "Mobile App release (Android / iOS)",
      ],
    },
  ];

  return (
    <section
      className="relative overflow-hidden section-padding"
      style={{
        background: "linear-gradient(135deg, #4F46E5 0%, #9B87F5 100%)",
      }}
      id="next-steps"
    >
      {/* Abstract shapes for background */}
      <div className="top-0 left-0 z-0 absolute w-full h-full overflow-hidden">
        <div className="top-10 left-10 absolute bg-white opacity-10 blur-xl rounded-full w-32 h-32"></div>
        <div className="right-20 bottom-10 absolute bg-uninav-accent opacity-20 blur-3xl rounded-full w-64 h-64"></div>
        <div className="top-1/2 left-1/4 absolute bg-white opacity-10 blur-xl rounded-full w-48 h-48"></div>
      </div>

      <div className="z-10 relative mx-auto container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-white text-3xl md:text-4xl">
            Join Our Journey
          </h2>
          <div className="mx-auto max-w-3xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm mb-8 p-4 rounded-xl">
              <p className="font-medium text-white text-xl md:text-2xl italic">
                "UniNav: Access, share, and monetize academic resources
                seamlessly."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm mb-12 p-6 rounded-xl">
          <div className="flex justify-center items-center mb-6">
            <Rocket className="mr-2 w-6 h-6 text-white" />
            <h3 className="font-semibold text-white text-2xl">
              UniNav Roadmap
            </h3>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`rounded-lg p-5 transition-all duration-300 transform hover:-translate-y-2 ${
                  phase.status === "Completed"
                    ? "bg-white/20"
                    : phase.status === "In Progress"
                    ? "bg-uninav-accent/50"
                    : "bg-white/10"
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-white text-lg">
                    {phase.name}
                  </h4>
                  <span
                    className={`text-xs px-3 py-1.5 rounded-full flex items-center gap-1 ${
                      phase.status === "Completed"
                        ? "bg-green-500 text-white"
                        : phase.status === "In Progress"
                        ? "bg-yellow-500 text-white"
                        : "bg-white/20 text-white"
                    }`}
                  >
                    {phase.icon}
                    {phase.status}
                  </span>
                </div>

                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-white/90 text-sm"
                    >
                      <div
                        className={`mt-0.5 flex-shrink-0 ${
                          phase.status === "Completed"
                            ? "text-green-300"
                            : phase.status === "In Progress" && i < 2
                            ? "text-yellow-300"
                            : "text-white/50"
                        }`}
                      >
                        {phase.status === "Completed" ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <CircleDot className="w-4 h-4" />
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
          <Button className="bg-uninav-accent hover:bg-uninav-accent/80 shadow-lg hover:shadow-xl px-8 py-6 rounded-xl text-white text-lg transition-all hover:-translate-y-1 duration-300">
            <Rocket className="mr-2 w-5 h-5" />
            Get Early Access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
