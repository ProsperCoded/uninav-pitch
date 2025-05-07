
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="bg-gradient-to-r from-[#222959] to-[#3399FF] p-2 rounded-lg shadow-lg relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9900]/0 to-[#FF9900]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
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
      <div className="ml-2">
        <span className="text-2xl font-bold bg-gradient-to-r from-[#222959] to-[#3399FF] bg-clip-text text-transparent tracking-wider">UNINAV</span>
        <div className="h-0.5 w-full bg-gradient-to-r from-[#222959] to-[#FF9900] rounded-full transform origin-left transition-all duration-300 group-hover:scale-x-110"></div>
      </div>
    </div>
  );
};

export default Logo;
