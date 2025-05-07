
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="bg-gradient-to-r from-uninav-primary to-uninav-secondary p-2 rounded-lg">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white"
        >
          <path d="M16 16v-8h-8v4.5A3.5 3.5 0 0 0 11.5 16H16z"/>
          <path d="M8 8v8h8v-4.5A3.5 3.5 0 0 0 12.5 8H8z"/>
        </svg>
      </div>
      <span className="text-2xl font-bold ml-2 text-gradient">UNINAV</span>
    </div>
  );
};

export default Logo;
