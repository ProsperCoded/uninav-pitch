
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Menu, X, LogIn } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Target Users', href: '#target-users' },
    { label: 'Business Model', href: '#business-model' },
    { label: 'Competition', href: '#competition' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-md ${
        isScrolled 
          ? 'bg-white/80 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo className="z-20" />
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-uninav-primary' 
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-uninav-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            
            <Button 
              className={`group ${
                isScrolled 
                  ? 'bg-uninav-primary hover:bg-uninav-primary/90 text-white' 
                  : 'bg-white hover:bg-white/90 text-uninav-primary'
              }`}
            >
              <LogIn className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              Sign Up
            </Button>
          </div>
          
          <button 
            className="md:hidden z-20 p-2 rounded-full bg-uninav-primary/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
          
          {/* Mobile Menu */}
          <div className={`fixed inset-0 bg-gradient-to-br from-uninav-primary to-uninav-secondary z-10 transform transition-transform duration-500 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col h-full justify-center items-center relative">
              <div className="absolute top-5 right-5 z-20">
                <button 
                  className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="text-white" />
                </button>
              </div>
              <nav className="flex flex-col items-center space-y-8">
                {navItems.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="text-xl font-medium text-white hover:text-uninav-accent transition-colors relative group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
                <Button 
                  className="mt-8 bg-white hover:bg-white/90 text-uninav-primary px-8 py-6 h-auto"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign Up
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
