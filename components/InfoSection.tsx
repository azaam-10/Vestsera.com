
import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <section className="bg-[#F5A623] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase leading-tight">
          INVEST IN DIGITAL ASSETS.
        </h2>
        <div className="w-20 h-1 bg-white"></div>
        <p className="text-white text-xl md:text-2xl font-normal leading-relaxed text-justify opacity-95">
          The platform carries over 100 tradable assets, unique risk management tools, 
          advanced security protocols and 5 trading options: 60 sec, Speed trading, 24 hrs, 
          and Long term. Merit Invest Minner gives clients an exceptional trading experience 
          and the adequate support they need in order to enhance their chances of success.
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
