
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-black text-white w-full border-b border-gray-800">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-sm border-b border-gray-900">
        <div className="flex items-center">
           <button className="p-1">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col items-end space-y-1">
          {/* Login and Register links removed as requested */}
          <div className="relative">
            <select className="bg-white text-gray-800 text-xs px-2 py-1 rounded focus:outline-none w-44">
              <option>Select Language</option>
              <option>English</option>
              <option>Spanish</option>
            </select>
            <p className="text-[10px] text-right mt-0.5 text-[#B5B5B5]">
              Powered by <span className="text-blue-500 font-bold">G</span><span className="text-red-500 font-bold">o</span><span className="text-yellow-500 font-bold">o</span><span className="text-blue-500 font-bold">g</span><span className="text-green-500 font-bold">l</span><span className="text-red-500 font-bold">e</span> Translate
            </p>
          </div>
        </div>
      </div>

      {/* Main Nav / Logo Area */}
      <div className="px-4 py-4 flex items-center">
        <div className="flex items-center space-x-2">
           <div className="relative w-10 h-10 flex items-center justify-center">
             <div className="absolute w-full h-full bg-[#F5A623] rounded-full opacity-20"></div>
             <svg className="w-8 h-8 text-[#F5A623]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
             </svg>
           </div>
           <span className="text-2xl font-bold tracking-tight">VestSera</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
