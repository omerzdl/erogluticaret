import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-brand-bg/90 backdrop-blur-md border-brand-surface py-4 shadow-lg'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-start">
        <a href="#" className="text-2xl md:text-3xl font-black tracking-tighter text-white select-none hover:opacity-90 transition-opacity">
          EROĞLU<span className="text-brand-accent">.</span>
        </a>
      </div>
    </header>
  );
};

export default Header;