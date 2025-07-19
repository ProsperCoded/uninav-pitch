import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9900]/0 to-[#FF9900]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src="/uninav-logo-image.png"
          alt="Logo"
          className="w-10 h-10 object-contain"
        />
      </div>
      <div className="ml-2">
        <span className="bg-clip-text bg-gradient-to-r from-[#222959] to-[#3399FF] font-bold text-transparent text-2xl tracking-wider">
          UNINAV
        </span>
        <div className="bg-gradient-to-r from-[#222959] to-[#FF9900] rounded-full w-full h-0.5 group-hover:scale-x-110 origin-left transition-all duration-300 transform"></div>
      </div>
    </div>
  );
};

export default Logo;
