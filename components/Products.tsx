import React from 'react';
import { Droplets, Truck, Filter, Gauge, Settings } from 'lucide-react';

interface ProductItem {
  name: string;
  icon: React.ElementType;
  desc: string;
}

const Products: React.FC = () => {
  const items: ProductItem[] = [
    { name: "Madeni Yağlar", icon: Droplets, desc: "Yüksek performanslı motor yağları." },
    { name: "Kepçe & Traktör Yağları", icon: Truck, desc: "Ağır vasıta ve iş makineleri için." },
    { name: "Hava ve Yağ Filtreleri", icon: Filter, desc: "Motor ömrünü uzatan filtrasyon." },
    { name: "Motor ve Hidrolik Yağlar", icon: Gauge, desc: "Sistem koruyucu özel sıvılar." },
    { name: "Endüstriyel Gresler", icon: Settings, desc: "Yüksek ısıya dayanıklı gresler." }
  ];

  return (
    <section id="products" className="py-24 bg-brand-bg relative">
       {/* Decorative background elements */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>
       <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ürün ve Hizmetler</h2>
          <p className="text-brand-secondary max-w-2xl mx-auto">
            İhtiyacınız olan tüm bakım ürünleri tek bir çatı altında.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 bg-brand-surface rounded-2xl border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-brand-bg rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-300">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.name}</h3>
              <p className="text-brand-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;