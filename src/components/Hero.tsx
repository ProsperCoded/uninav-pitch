import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronRight,
  BookOpen,
  Download,
  Users,
} from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center min-h-[90vh] overflow-hidden">
      {/* Theme-colored gradient background */}
      <div className="z-0 absolute inset-0 bg-gradient-to-br from-[#222959] via-[#2C3566] to-[#3D4780]"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="top-[10%] left-[5%] absolute bg-[#3399FF]/10 blur-3xl rounded-full w-64 h-64 animate-float"></div>
        <div className="right-[15%] bottom-[20%] absolute bg-[#FF9900]/10 blur-3xl rounded-full w-72 h-72 animate-float-delayed"></div>
        <div className="top-1/4 right-1/4 absolute bg-[#00B33C]/5 blur-2xl rounded-full w-40 h-40 animate-pulse-slow"></div>
      </div>

      <div className="z-10 relative px-6 md:px-12 lg:px-24 w-full">
        <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
          <div className="space-y-8 animate-fade-in">
            <h1 className="font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
              Your Academic Journey,
              <span className="relative">
                <span className="ml-2 text-[#FF9900]">Simplified</span>
                <svg
                  className="-bottom-1 left-2 absolute w-[calc(100%-0.5rem)] h-2 text-[#FF9900]/30"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q40,0 80,5 T160,5 T200,5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Transform your university experience with UNINAV. Find study
              materials, connect with peers, and earn through knowledge sharing
              - all in one platform.
            </p>

            <p className="text-white/90 text-lg leading-relaxed">
              Faculty-organized resources, course-specific updates, and WhatsApp
              study groups at your fingertips.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className="group bg-[#FF9900] hover:bg-[#FF9900]/90 px-6 py-3 h-auto text-white primary-button hover-scale"
                onClick={() => window.open("https://uninav.live", "_blank")}
              >
                Get Started
                <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1 duration-300" />
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 hover:bg-white/20 px-6 py-6 border-white h-auto text-white secondary-button hover-scale"
                onClick={() =>
                  window.open("https://uninav.live/about", "_blank")
                }
              >
                Learn More
                <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1 duration-300" />
              </Button>
            </div>
          </div>

          <div className="lg:pl-10 animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#222959] to-[#3399FF] opacity-40 rounded-2xl animate-pulse blur"></div>
              <div className="relative bg-white/90 shadow-2xl backdrop-blur-sm p-3 rounded-2xl">
                <img
                  src="/dashboard-laptop.png"
                  alt="UNINAV Dashboard"
                  className="shadow-lg rounded-xl w-full h-auto"
                />
                <div className="-top-4 -left-4 absolute bg-[#3399FF] shadow-lg p-3 rounded-full animate-bounce-slow">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="-right-6 -bottom-6 absolute bg-[#FF9900] shadow-lg p-4 rounded-full animate-pulse">
                  <Download className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Feature buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="flex items-center bg-[#3399FF]/90 px-5 py-3 rounded-full text-white glassmorphism">
                <BookOpen className="mr-2 w-5 h-5" />
                <span>Study Materials</span>
              </div>
              <div className="flex items-center bg-[#00B33C]/90 px-5 py-3 rounded-full text-white glassmorphism">
                <svg
                  className="mr-2 w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L14.5 9.5L20 12L14.5 14.5L12 20L9.5 14.5L4 12L9.5 9.5L12 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Academic Resources</span>
              </div>
              <div className="flex items-center bg-[#FF9900]/90 px-5 py-3 rounded-full text-white glassmorphism">
                <Users className="mr-2 w-5 h-5" />
                <span>Student Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
