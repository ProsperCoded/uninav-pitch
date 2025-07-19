import React from "react";
import {
  Puzzle,
  Frown,
  Ban,
  Settings,
  Megaphone,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: <Puzzle className="w-6 h-6 text-uninav-primary" />,
      title: "Scattered & Unreliable Study Materials",
      quote:
        "\"I had to text three group chats, call a senior, and still didn't get last year's course outline.\"",
      description:
        "Students, especially newcomers, lack a central, reliable source for academic resources. Materials are often lost or spread across various platforms.",
      solutions: [
        "Organized materials by Faculty, Department, and Level.",
        "Verified uploads, ensuring quality and relevance.",
        "Easily searchable content with comprehensive filters.",
      ],
    },
    {
      icon: <Frown className="w-6 h-6 text-uninav-primary" />,
      title: "Academic Isolation for Fresh Students",
      quote:
        '"I didn\'t even know what topics to expect in 200-level Data Structures."',
      description:
        "New students often feel overwhelmed due to a lack of clear guidance and accessible academic roadmaps.",
      solutions: [
        "Student blogs for guidance, tips, and learning hacks.",
        "Seniors can share knowledge, earn, and help others.",
      ],
    },
    {
      icon: <Ban className="w-6 h-6 text-uninav-primary" />,
      title: "Broken Promises from Campus Associations",
      quote:
        '"The department said they\'ll upload past questions but… crickets."',
      description:
        "Promised materials are often undelivered, with no accountability, leaving students stranded.",
      solutions: [
        "Transparent uploading with contributor credits.",
        "Public materials, ending gatekeeping.",
        "Future: Associations build trust via official channels.",
      ],
    },
    {
      icon: <Settings className="w-6 h-6 text-uninav-primary" />,
      title: "No Personalized Learning Guidance",
      quote:
        '"I don\'t know what materials to read, and I keep downloading irrelevant ones."',
      description:
        "Students waste time on irrelevant materials due to a lack of tailored recommendations.",
      solutions: [
        "Smart search ranking by level, department, and courses.",
        "Future: AI recommendations and course planning.",
      ],
    },
    {
      icon: <Megaphone className="w-6 h-6 text-uninav-primary" />,
      title: "Unreachable Updates About School Life",
      quote: '"I only found out about that internship after the deadline."',
      description:
        "Crucial updates often get lost in WhatsApp groups, causing students to miss opportunities.",
      solutions: [
        "Dedicated section for updates, opportunities, and events.",
        "Future: Smart notifications for relevant information.",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 section-padding" id="problems">
      <div className="mx-auto container">
        <h2 className="mb-4 font-bold text-gradient text-3xl md:text-4xl text-center">
          Problems & Solutions
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-gray-600 text-lg text-center">
          UniNav addresses key student challenges with targeted solutions.
        </p>

        <div className="space-y-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className="problem-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-uninav-light p-2 rounded-lg text-uninav-primary">
                    {problem.icon}
                  </span>
                  <h3 className="font-semibold text-uninav-dark text-xl">
                    {problem.title}
                  </h3>
                </div>
                <blockquote className="bg-gray-100 my-4 p-4 border-uninav-primary border-l-4 rounded-lg text-gray-700 italic">
                  {problem.quote}
                </blockquote>
                <p className="text-gray-700">{problem.description}</p>
              </div>

              {/* Connector - Visible on desktop */}
              <div className="hidden top-1/2 left-1/2 z-10 absolute md:flex justify-center items-center -translate-x-1/2 -translate-y-1/2 transform">
                <div className="bg-white shadow-lg p-2 rounded-full">
                  <ArrowRight className="w-6 h-6 text-uninav-accent" />
                </div>
              </div>

              <div
                className="animate-fade-in solution-card"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-uninav-light p-2 rounded-lg text-uninav-accent">
                    <CheckCircle className="w-6 h-6" />
                  </span>
                  <h3 className="font-semibold text-uninav-dark text-xl">
                    How UniNav Solves This
                  </h3>
                </div>
                <ul className="space-y-2">
                  {problem.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="flex-shrink-0 mt-1 w-5 h-5 text-uninav-accent" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-uninav-primary to-uninav-secondary mt-16 p-6 rounded-xl text-white text-center">
          <p className="font-medium text-xl italic">
            "Born from our frustrations, UniNav is the tool we wished we had."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
