import React from 'react';
import { Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const phoneNumber = "0 (534) 887 68 89";
  const phoneLink = "tel:+905348876889";

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2832&auto=format&fit=crop"
          alt="Industrial Automotive Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-brand-bg/50 to-brand-bg"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 backdrop-blur-sm">
          <span className="text-brand-accent font-semibold tracking-wide text-sm uppercase">Bergama 2. Sanayi</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Madeni Yağ & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Otomotiv Çözümleri
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-brand-secondary mb-10 max-w-2xl mx-auto font-light">
          Aracınız ve iş makineniz için en doğru performans çözümleri. Güvenilir tedarik, kaliteli hizmet.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={phoneLink}
            className="group flex items-center gap-3 px-8 py-4 bg-brand-accent hover:bg-red-700 text-white rounded-lg font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,0,0,0.3)]"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Hemen Ara: {phoneNumber}</span>
          </a>
          {/* Directions button removed as requested */}
        </div>
      </div>
    </section>
  );
};

export default Hero;