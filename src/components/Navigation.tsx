
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' 
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
                  className={`text-sm font-medium transition-colors ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-uninav-primary' 
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <Button 
              className={`${
                isScrolled 
                  ? 'bg-uninav-primary hover:bg-uninav-primary/90 text-white' 
                  : 'bg-white hover:bg-white/90 text-uninav-primary'
              }`}
            >
              Sign Up
            </Button>
          </div>
          
          <button 
            className="md:hidden z-20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isScrolled ? 'text-gray-900' : 'text-white'}>
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isScrolled ? 'text-gray-900' : 'text-white'}>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
          
          {/* Mobile Menu */}
          <div className={`fixed inset-0 bg-uninav-primary z-10 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col h-full justify-center items-center">
              <nav className="flex flex-col items-center space-y-6">
                {navItems.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="text-xl font-medium text-white hover:text-white/80 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button 
                  className="mt-8 bg-white hover:bg-white/90 text-uninav-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
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
