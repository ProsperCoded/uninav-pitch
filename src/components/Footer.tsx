
import React from 'react';
import Logo from './Logo';
import { Facebook, Instagram, Twitter, Send, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-uninav-accent text-white p-3 rounded-full shadow-lg hover:bg-uninav-accent/90 transition-colors z-10 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* Wave decoration */}
      <div className="absolute -top-10 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-10 text-gray-900">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
        </svg>
      </div>
      
      <div className="container mx-auto pt-20 pb-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <Logo className="mb-6" />
            <p className="text-gray-300 text-sm">
              The all-in-one platform for university students to access, share, and monetize academic resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-uninav-primary p-2 rounded-full text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-uninav-primary p-2 rounded-full text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-uninav-primary p-2 rounded-full text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Quick Links
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-uninav-accent rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-uninav-accent transition-colors"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-uninav-accent transition-colors"></span>
                  Features
                </a>
              </li>
              <li>
                <a href="#traction" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-uninav-accent transition-colors"></span>
                  Traction
                </a>
              </li>
              <li>
                <a href="#business-model" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-uninav-accent transition-colors"></span>
                  Business Model
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-uninav-accent transition-colors"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Resources
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-uninav-accent rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-uninav-accent transition-colors"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-uninav-accent transition-colors"></span>
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-uninav-accent transition-colors"></span>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2 group-hover:bg-uninav-accent transition-colors"></span>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Subscribe
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-uninav-accent rounded-full"></div>
            </h3>
            <p className="text-gray-300 mb-4">Stay updated with our latest news and features</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2.5 w-full rounded-l-lg focus:outline-none bg-gray-800 text-white border-0 focus:ring-2 focus:ring-uninav-primary/50"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-uninav-primary text-white rounded-r-lg hover:bg-uninav-primary/90 transition-colors"
                aria-label="Subscribe"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} UniNav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
