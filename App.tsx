
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import InfoSection from './components/InfoSection';
import SplashScreen from './components/SplashScreen';
import MultiStepModal from './components/MultiStepModal';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div className="relative min-h-screen bg-black">
          {/* الصفحة الرئيسية مع تأثير ضبابية خفيف جداً جداً (blur-[0.5px] بدلاً من blur-[1.5px]) */}
          <div className={`flex flex-col min-h-screen transition-all duration-500 ${showModal ? 'blur-[0.5px] pointer-events-none opacity-95' : 'animate-fade-in'}`}>
            <Navbar />
            <main>
              <Hero />
              <Ticker />
              <InfoSection />
            </main>
          </div>

          {/* المربع الحواري متعدد الخطوات */}
          {showModal && <MultiStepModal onClose={() => setShowModal(false)} />}
        </div>
      )}
    </>
  );
};

export default App;
