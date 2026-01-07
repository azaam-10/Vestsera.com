
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[450px] bg-black overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 opacity-40 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://picsum.photos/id/180/1200/800')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Navigation Arrows (Visual only as per screenshot) */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer hidden md:block">
           <svg className="w-10 h-10 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
           </svg>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hidden md:block">
           <svg className="w-10 h-10 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
           </svg>
        </div>

        {/* Text Area */}
        <div className="md:w-1/2 space-y-4 pt-10">
          <div className="flex items-center space-x-2">
            <div className="w-1 h-8 bg-[#F5A623]"></div>
            <h1 className="text-3xl md:text-5xl font-black tracking-wider leading-tight">
              <span className="text-[#F5A623]">DIGITAL ASSET</span><br />
              <span className="text-white">EASY WAY TO TRADE</span>
            </h1>
          </div>
          <p className="text-gray-300 max-w-sm text-lg font-medium leading-relaxed">
            Start earning with our stable and goal-oriented investment program
          </p>
          <button className="bg-[#F5A623] hover:bg-[#d98f1e] text-black font-black py-2 px-8 uppercase tracking-widest text-xs transition-colors mt-6 shadow-lg">
            START EARNING
          </button>
        </div>

        {/* Character/Illustration Area */}
        <div className="md:w-1/2 flex justify-end relative mt-12 md:mt-0">
          <div className="relative">
            {/* The character sitting on an island mockup */}
            <div className="relative z-20 w-64 md:w-80">
               {/* This is a visual stand-in for the complex character art in the screenshot */}
               <img 
                 src="https://picsum.photos/id/201/400/400" 
                 alt="Trade Illustration" 
                 className="rounded-full border-4 border-[#F5A623] shadow-2xl opacity-80"
               />
               {/* Floating elements overlay simulation */}
               <div className="absolute -top-10 -right-5 flex flex-col space-y-2">
                  <div className="w-12 h-12 bg-[#F5A623] rounded-full flex items-center justify-center text-black font-bold text-xl">$</div>
                  <div className="w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
               </div>
               <div className="absolute -bottom-5 left-0 w-full h-10 bg-green-900/40 blur-xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
