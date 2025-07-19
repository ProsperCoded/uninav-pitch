import React, { useState, useRef } from "react";
import {
  Upload,
  Search,
  Download,
  FileText,
  ArrowRight,
  Target,
  Crosshair,
  Briefcase,
  Play,
  X,
} from "lucide-react";
import demoVideo from "../assents/uninav-demo.mp4";

const HowItWorks: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
    // Ensure body doesn't scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = "";
    // Pause the video when closing
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const steps = [
    {
      icon: <Upload className="w-6 h-6 text-uninav-primary" />,
      title: "Upload & Share",
      description: "Students upload materials via their dashboard.",
      details: [
        "Add course details, tags, optional native ads.",
        "Instantly available to peers in relevant departments/levels.",
        "Gain recognition and rewards for contributions.",
      ],
    },
    {
      icon: <Search className="w-6 h-6 text-uninav-primary" />,
      title: "Discover & Filter",
      description: "Students search using smart filters (course, type, tags).",
      details: [
        "Personalized results by level, department, and courses.",
        "Find needed content without irrelevant results.",
        "Save time with intelligent search and popular materials.",
      ],
    },
    {
      icon: <Download className="w-6 h-6 text-uninav-primary" />,
      title: "Download & Interact",
      description: "One-click downloads or in-app previews.",
      details: [
        "Like, confirm authenticity, and support uploaders.",
        "Leave helpful comments and feedback.",
        "Build an organized academic library.",
      ],
    },
    {
      icon: <FileText className="w-6 h-6 text-uninav-primary" />,
      title: "Explore Blogs",
      description: "Peer-written guides for navigating school processes.",
      details: [
        "Stay informed, contribute, and gain recognition.",
        "Share experiences and insights with peers.",
        "Access academic and social guidance from seniors.",
      ],
    },
  ];

  return (
    <section className="bg-white section-padding" id="how-it-works">
      <div className="mx-auto container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gradient text-3xl md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-lg">
            Share your valuable content and earn from it with UNINAV.
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step-card transition-all duration-300 ${
                  expandedStep === index
                    ? "scale-105 border-uninav-primary shadow-lg"
                    : "hover-scale"
                } cursor-pointer`}
                onClick={() =>
                  setExpandedStep(expandedStep === index ? null : index)
                }
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-full flex items-center justify-center transition-colors ${
                      expandedStep === index
                        ? "bg-uninav-primary text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-semibold ${
                        expandedStep === index
                          ? "text-uninav-primary"
                          : "text-gray-800"
                      } transition-colors`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  <div className="ml-auto">
                    <ArrowRight
                      className={`h-5 w-5 transform transition-transform ${
                        expandedStep === index ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </div>

                {expandedStep === index && (
                  <div className="mt-4 pl-16 animate-fade-in">
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ArrowRight className="flex-shrink-0 mt-1 w-4 h-4 text-uninav-accent" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-8 bg-gray-50 shadow-inner p-6 rounded-xl">
            <h3 className="font-bold text-uninav-primary text-2xl">
              What Makes This Flow Special
            </h3>
            <p className="text-gray-700">
              Built around actual student needs and challenges for a practical,
              effective platform.
            </p>

            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2">
              <div className="group bg-white shadow-md p-4 border-uninav-primary border-l-4 rounded-lg transition-transform hover:-translate-y-1">
                <div className="mb-2 text-uninav-primary group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <h4 className="mb-1 font-semibold text-lg">Bi-directional</h4>
                <p className="text-gray-600">
                  Give and get, fostering academic collaboration.
                </p>
              </div>

              <div className="group bg-white shadow-md p-4 border-uninav-secondary border-l-4 rounded-lg transition-transform hover:-translate-y-1">
                <div className="mb-2 text-uninav-secondary group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="mb-1 font-semibold text-lg">Personalized</h4>
                <p className="text-gray-600">
                  Content adapts to your context, delivering what you need.
                </p>
              </div>

              <div className="group col-span-1 sm:col-span-2 bg-white shadow-md p-4 border-uninav-accent border-l-4 rounded-lg transition-transform hover:-translate-y-1">
                <div className="mb-2 text-uninav-accent group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h4 className="mb-1 font-semibold text-lg">
                  Opportunity-oriented
                </h4>
                <p className="text-gray-600">
                  Ads & blogs create launchpads for events and businesses.
                </p>
              </div>
            </div>

            {/* Custom Video Preview Card */}
            <div
              onClick={openVideoModal}
              className="bg-white shadow-md hover:shadow-lg mt-6 p-4 rounded-lg transition-shadow cursor-pointer group"
            >
              <h3 className="flex items-center mb-4 font-semibold text-xl">
                <Play className="mr-2 w-5 h-5 text-uninav-accent" />
                Demo
              </h3>
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video group-hover:shadow-xl transition-shadow">
                {/* Video thumbnail/preview */}
                <video
                  className="w-full h-full object-cover"
                  muted
                  preload="metadata"
                  poster=""
                >
                  <source src={demoVideo} type="video/mp4" />
                </video>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Play
                        className="w-6 h-6 text-gray-800 ml-0.5"
                        fill="currentColor"
                      />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 border-2 border-white/60 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Bottom gradient with text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">
                    Watch UNINAV in Action
                  </p>
                  <p className="text-white/80 text-xs">
                    See how students share and discover academic materials
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Video Modal */}
            {isVideoModalOpen && (
              <div
                className="fixed inset-0 flex items-center justify-center z-50"
                onClick={closeVideoModal}
              >
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" />
                <div
                  className="bg-black rounded-lg shadow-xl w-[90vw] max-w-5xl relative animate-in fade-in zoom-in-95 duration-300"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                >
                  <button
                    onClick={closeVideoModal}
                    className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors"
                    aria-label="Close video"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="aspect-video">
                    <video
                      ref={videoRef}
                      className="w-full h-full rounded-lg"
                      controls
                      autoPlay
                      preload="metadata"
                      controlsList="nodownload"
                    >
                      <source src={demoVideo} type="video/mp4" />
                      <p className="text-white p-8 text-center">
                        Your browser does not support the video tag.
                      </p>
                    </video>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
