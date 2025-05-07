
import React from 'react';
import { Puzzle, Frown, Ban, Settings, Megaphone, CheckCircle, ArrowRight } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: <Puzzle className="h-6 w-6 text-uninav-primary" />,
      title: 'Scattered & Unreliable Study Materials',
      quote: '"I had to text three group chats, call a senior, and still didn\'t get last year\'s course outline."',
      description: 'Students — especially newcomers — often have no central, reliable place to access essential academic resources. Materials are spread across group chats, random Google Drives, or worse — lost completely.',
      solutions: [
        'Organized course materials by Faculty, Department, and Level.',
        'Verified uploads, not random files from unknown sources.',
        'Easily searchable with full-text and course-based filters.'
      ]
    },
    {
      icon: <Frown className="h-6 w-6 text-uninav-primary" />,
      title: 'Academic Isolation for Fresh Students',
      quote: '"I didn\'t even know what topics to expect in 200-level Data Structures."',
      description: 'New students feel overwhelmed. No roadmaps, no proper handholding, just scattered whispers of advice — if they\'re lucky.',
      solutions: [
        'Student blogs where experienced students share guidance, tips, registration help, and learning hacks.',
        'Allows seniors to give back and earn while helping others navigate the same academic maze they once faced.'
      ]
    },
    {
      icon: <Ban className="h-6 w-6 text-uninav-primary" />,
      title: 'Broken Promises from Campus Associations',
      quote: '"The department said they\'ll upload past questions but… crickets."',
      description: 'Even when materials are promised, they\'re rarely delivered consistently — and no one is held accountable.',
      solutions: [
        'Transparent uploading system with contributor credits and engagement tracking.',
        'Materials are public — no more gatekeeping or secrecy.',
        'In the future, associations can use UniNav to earn trust by consistently delivering promised materials through an official channel.'
      ]
    },
    {
      icon: <Settings className="h-6 w-6 text-uninav-primary" />,
      title: 'No Personalized Learning Guidance',
      quote: '"I don\'t know what materials to read, and I keep downloading irrelevant ones."',
      description: 'Students often waste time downloading unrelated or low-quality materials because there\'s no tailored system.',
      solutions: [
        'Search ranking is smart — it prioritizes materials based on your level, department, and the courses you\'re taking.',
        'Future features: AI-powered material recommendations and course planning assistants.'
      ]
    },
    {
      icon: <Megaphone className="h-6 w-6 text-uninav-primary" />,
      title: 'Unreachable Updates About School Life',
      quote: '"I only found out about that internship after the deadline."',
      description: 'Most school updates — from department announcements to student-hosted events and niche internship opportunities — live and die in WhatsApp groups. If you\'re not in the right chat, you miss out.',
      solutions: [
        'A dedicated section for school updates, opportunities, and events.',
        'Future roadmap: smart notifications so you never miss things that matter.'
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="problems">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">Problems & Solutions</h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          We identified these key challenges faced by university students and built UniNav to address them directly.
        </p>
        
        <div className="space-y-16">
          {problems.map((problem, index) => (
            <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="problem-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2 rounded-lg bg-uninav-light text-uninav-primary">{problem.icon}</span>
                  <h3 className="text-xl font-semibold text-uninav-dark">{problem.title}</h3>
                </div>
                <blockquote className="bg-gray-100 p-4 rounded-lg italic text-gray-700 my-4 border-l-4 border-uninav-primary">
                  {problem.quote}
                </blockquote>
                <p className="text-gray-700">{problem.description}</p>
              </div>
              
              {/* Connector - Visible on desktop */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
                <div className="bg-white rounded-full p-2 shadow-lg">
                  <ArrowRight className="h-6 w-6 text-uninav-accent" />
                </div>
              </div>
              
              <div className="solution-card animate-fade-in" style={{animationDelay: `${index * 0.1 + 0.2}s`}}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2 rounded-lg bg-uninav-light text-uninav-accent">
                    <CheckCircle className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold text-uninav-dark">How UniNav Solves This</h3>
                </div>
                <ul className="space-y-2">
                  {problem.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-uninav-accent mt-1 flex-shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 rounded-xl bg-gradient-to-r from-uninav-primary to-uninav-secondary text-white text-center">
          <p className="text-xl italic font-medium">
            "UniNav was born out of our own frustration. Now, it's the tool we wish we had when we first walked into the university gates."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
