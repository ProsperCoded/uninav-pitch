import React from "react";

const ProductFeatures: React.FC = () => {
  const features = [
    {
      icon: "🚀",
      title: "Explore Materials",
      description:
        "Fast, personalized material lookup with intelligent search. Find exactly what you need based on your academic context.",
    },
    {
      icon: "📝",
      title: "Explore Blogs",
      description:
        "Craft and discover blogs with rich image & markdown support. Share knowledge and experiences with peers.",
    },
    {
      icon: "📁",
      title: "Collections",
      description:
        "Organize materials into nested collections (like folders). Visited materials show related content for comprehensive learning.",
    },
    {
      icon: "📤",
      title: "Material Upload",
      description:
        "Upload single or bulk materials with comprehensive tagging. Share resources with students who need them.",
    },
    {
      icon: "📢",
      title: "Native Adverts",
      description:
        "Attach a free advert per material. Material visitors see related ads, and owners get detailed analytics.",
    },
  ];

  return (
    <section className="bg-gray-50 section-padding" id="features">
      <div className="mx-auto container">
        <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-bold text-gradient text-3xl md:text-4xl">
              Product Features
            </h2>
            <p className="mb-8 text-gray-600 text-lg">
              UNINAV offers powerful features for university students, enhancing
              academic collaboration and resource sharing.
            </p>

            <div className="gap-6 grid grid-cols-1">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="animate-fade-in feature-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-uninav-light p-2 rounded-lg text-3xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-uninav-primary text-xl">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <h2 className="mb-4 font-bold text-gradient text-3xl md:text-4xl">
              Technology Stack
            </h2>
            <p className="mb-8 text-gray-600 text-lg">
              Built with modern, scalable technologies for a seamless user
              experience.
            </p>

            <div className="space-y-8">
              <div className="bg-white shadow-md p-6 rounded-xl">
                <h3 className="mb-4 font-semibold text-uninav-primary text-xl">
                  Frontend
                </h3>
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-3">
                  <div className="bg-gray-50 p-4 rounded-lg text-center hover-scale">
                    <div className="font-medium text-uninav-dark">NextJS</div>
                    <div className="text-gray-500 text-sm">React Framework</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center hover-scale">
                    <div className="font-medium text-uninav-dark">
                      React Quill
                    </div>
                    <div className="text-gray-500 text-sm">
                      Markdown Support
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center hover-scale">
                    <div className="font-medium text-uninav-dark">
                      Tailwind CSS
                    </div>
                    <div className="text-gray-500 text-sm">Styling</div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-md p-6 rounded-xl">
                <h3 className="mb-4 font-semibold text-uninav-primary text-xl">
                  Backend
                </h3>
                <div className="gap-4 grid grid-cols-2">
                  <div className="bg-gray-50 p-4 rounded-lg text-center hover-scale">
                    <div className="font-medium text-uninav-dark">NestJS</div>
                    <div className="text-gray-500 text-sm">
                      Backend Framework
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center hover-scale">
                    <div className="font-medium text-uninav-dark">Postgres</div>
                    <div className="text-gray-500 text-sm">
                      + Vector Web Search
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center hover-scale">
                    <div className="font-medium text-uninav-dark">
                      S3 Bucket
                    </div>
                    <div className="text-gray-500 text-sm">
                      Storage for Materials
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center hover-scale">
                    <div className="font-medium text-uninav-dark">
                      Nodemailer
                    </div>
                    <div className="text-gray-500 text-sm">Email Provider</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-uninav-primary to-uninav-secondary p-6 rounded-xl text-white">
                <h3 className="mb-2 font-semibold text-xl">
                  Uninav's Strategic Approach
                </h3>
                <p className="mb-4">
                  UniNav strategically gathers and delivers materials based on
                  preferences, department, and faculty, ensuring students find
                  what they need.
                </p>
                <div className="flex justify-center items-center gap-2 bg-white/20 p-2 rounded-lg font-medium text-sm">
                  <span className="text-xl">🎯</span>
                  <span>Smart Personalization</span>
                  <span>•</span>
                  <span className="text-xl">🔍</span>
                  <span>Intelligent Search</span>
                  <span>•</span>
                  <span className="text-xl">👥</span>
                  <span>Community Driven</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
