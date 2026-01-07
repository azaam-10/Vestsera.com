
import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 splash-bg z-[100] flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center">
        {/* Animated Circular Outline */}
        <div className="absolute w-[280px] h-[280px] rounded-full border-2 border-white/20"></div>
        <div className="absolute w-[280px] h-[280px] rounded-full border-t-2 border-white animate-rotate"></div>
        
        {/* Logo Text Content */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-7xl font-black leading-none tracking-tight">
            Vest
          </h1>
          <h2 className="text-[#F5A623] text-7xl font-black leading-none tracking-tight">
            Sera
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
