import React from 'react';
import { ShieldCheck, Clock, ThumbsUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-surface">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
               <img 
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop" 
                alt="About Workshop" 
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Hakkımızda
              <span className="block h-1 w-20 bg-brand-accent mt-2 rounded-full"></span>
            </h2>
            
            <p className="text-brand-secondary text-lg leading-relaxed">
              İzmir Bergama 2. Sanayi’de yıllardır otomotiv ve iş makinesi gruplarına kaliteli yağ ve filtrasyon çözümleri sunuyoruz. 
              Doğru yönlendirme, hızlı hizmet ve geniş ürün yelpazesi ile müşterilerimize değer katıyoruz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-bg rounded border border-white/10 text-brand-accent">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Orijinal Ürün</h4>
                  <p className="text-sm text-brand-secondary">Garantili marka ürünler.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                 <div className="p-2 bg-brand-bg rounded border border-white/10 text-brand-accent">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Hızlı Hizmet</h4>
                  <p className="text-sm text-brand-secondary">Zamanında teslimat.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                 <div className="p-2 bg-brand-bg rounded border border-white/10 text-brand-accent">
                  <ThumbsUp size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Güvenilir Esnaf</h4>
                  <p className="text-sm text-brand-secondary">Yılların tecrübesi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;