import React from "react";
import {
  CheckCircle,
  XCircle,
  CheckCircle2,
  Target,
  BookOpen,
  GraduationCap,
  Brain,
  FileText,
  MessagesSquare,
  Compass,
  Briefcase,
  Search,
  Smartphone,
} from "lucide-react";

const Competition: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-5 h-5 text-uninav-primary" />,
      label: "Targets University Students",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-uninav-primary" />,
      label: "Access to Past Questions & Materials",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-uninav-primary" />,
      label: "Course & Department-Based Organization",
    },
    {
      icon: <Brain className="w-5 h-5 text-uninav-primary" />,
      label: "Personalized Content by Level & Course",
    },
    {
      icon: <FileText className="w-5 h-5 text-uninav-primary" />,
      label: "Community Blog System",
    },
    // { icon: <MessagesSquare className="w-5 h-5 text-uninav-primary" />, label: 'Peer-Generated Content' },
    // { icon: <Compass className="w-5 h-5 text-uninav-primary" />, label: 'Event & Opportunity Awareness' },
    // { icon: <Briefcase className="w-5 h-5 text-uninav-primary" />, label: 'Monetization via Native Adverts' },
    // { icon: <Search className="w-5 h-5 text-uninav-primary" />, label: 'Powerful Filtered Search' },
    // { icon: <Smartphone className="w-5 h-5 text-uninav-primary" />, label: 'Modern, Student-Friendly Dashboard' }
  ];

  const competitors = [
    {
      name: "uLesson",
      features: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      name: "Myschool.ng",
      features: [
        true,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
      ],
    },
    {
      name: "Tuteria",
      features: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      name: "UniNav",
      features: [true, true, true, true, true, true, true, true, true, true],
    },
  ];

  return (
    <section className="relative section-padding" id="competition">
      {/* Background elements */}
      <div className="-z-10 absolute inset-0 overflow-hidden">
        <div className="top-[20%] right-[10%] absolute bg-uninav-primary/5 blur-3xl rounded-full w-96 h-96"></div>
        <div className="bottom-[20%] left-[10%] absolute bg-uninav-accent/5 blur-3xl rounded-full w-64 h-64"></div>
      </div>

      <div className="mx-auto container">
        <div className="mb-12 text-center">
          <h2 className="inline-block relative text-gradient">
            Competition Analysis
            <div className="right-0 -bottom-2 left-0 absolute bg-gradient-to-r from-uninav-primary to-uninav-accent rounded-full h-1"></div>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-lg">
            UniNav offers a unique, tailored solution for Nigerian University
            students, facing few direct competitors.
          </p>
        </div>

        <div className="bg-white shadow-xl backdrop-blur-sm mb-12 p-4 md:p-8 border border-gray-100 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="divide-y divide-gray-200 min-w-full">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th
                    scope="col"
                    className="px-6 py-4 rounded-tl-lg font-medium text-gray-500 text-xs uppercase tracking-wider whitespace-nowrap"
                  >
                    Feature / Platform
                  </th>
                  {competitors.map((competitor, i) => (
                    <th
                      key={i}
                      scope="col"
                      className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap ${
                        competitor.name === "UniNav"
                          ? "bg-uninav-primary/10 text-uninav-primary"
                          : "text-gray-500"
                      } ${i === competitors.length - 1 ? "rounded-tr-lg" : ""}`}
                    >
                      {competitor.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {features.map((feature, i) => (
                  <tr
                    key={i}
                    className={
                      i % 2 === 0
                        ? "bg-white hover:bg-gray-50"
                        : "bg-gray-50 hover:bg-gray-100"
                    }
                  >
                    <td className="flex items-center gap-2 px-6 py-4 font-medium text-gray-900 text-sm whitespace-nowrap">
                      {feature.icon}
                      {feature.label}
                    </td>
                    {competitors.map((competitor, j) => (
                      <td
                        key={j}
                        className={`px-6 py-4 whitespace-nowrap text-sm ${
                          competitor.name === "UniNav" && competitor.features[i]
                            ? "text-uninav-primary font-semibold"
                            : "text-gray-500"
                        }`}
                      >
                        {competitor.features[i] ? (
                          competitor.name === "Myschool.ng" && i === 5 ? (
                            <div className="flex items-center">
                              <CheckCircle className="mr-1 w-5 h-5 text-green-500" />
                              <span className="text-xs">(Forum)</span>
                            </div>
                          ) : competitor.name === "Myschool.ng" && i === 6 ? (
                            <div className="flex items-center">
                              <CheckCircle className="mr-1 w-5 h-5 text-green-500" />
                              <span className="text-xs">(limited)</span>
                            </div>
                          ) : (
                            // competitor.name === "UniNav" && (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          )
                        ) : (
                          <XCircle className="w-5 h-5 text-red-400" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-uninav-primary to-uninav-secondary shadow-xl p-8 rounded-2xl text-white">
          <h3 className="flex items-center mb-4 font-semibold text-2xl">
            <Target className="mr-2 w-6 h-6" />
            What Makes Us Different
          </h3>
          <p className="text-lg">
            UniNav uniquely integrates academic resources, community features,
            and monetization, specifically for Nigerian university students.
          </p>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mt-8">
            <div className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-lg transition-colors">
              <div className="mb-3 text-3xl group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-2 font-semibold text-xl">
                All-in-One Platform
              </h4>
              <p className="text-white/90">
                Combines resources, blogs, and community.
              </p>
            </div>

            <div className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-lg transition-colors">
              <div className="mb-3 text-3xl group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-2 font-semibold text-xl">Nigerian Context</h4>
              <p className="text-white/90">
                Tailored for Nigerian university challenges.
              </p>
            </div>

            <div className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-lg transition-colors">
              <div className="mb-3 text-3xl group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-2 font-semibold text-xl">Student-First</h4>
              <p className="text-white/90">
                Designed around real student needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competition;
