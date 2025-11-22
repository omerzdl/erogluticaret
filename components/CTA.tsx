import React from 'react';
import { Phone } from 'lucide-react';

const CTA: React.FC = () => {
  const phoneNumber = "0 (534) 887 68 89";
  const phoneLink = "tel:+905348876889";

  return (
    <section className="py-20 bg-brand-bg">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-zinc-900 to-brand-surface rounded-3xl p-8 md:p-16 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              Bir Çayımızı İçmeye Bekleriz
            </h2>
            <p className="text-brand-secondary text-lg mb-10 max-w-2xl mx-auto relative z-10">
              EROĞLU TİCARET’te samimiyet ve güven yan yana durur. İhtiyaçlarınız için hemen bize ulaşın.
            </p>
            
            <a 
              href={phoneLink}
              className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors relative z-10 shadow-[0_0_15px_rgba(255,0,0,0.4)]"
            >
              <Phone size={20} />
              Hemen Ara: {phoneNumber}
            </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;