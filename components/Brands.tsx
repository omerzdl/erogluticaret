import React from 'react';

const Brands: React.FC = () => {
  const brands = [
    "Castrol", 
    "Petrol Ofisi", 
    "Shell", 
    "Mobil", 
    "Fil Filtre",
    "Motul",
    "Liqui Moly"
  ];

  return (
    <section className="py-16 bg-brand-surface border-y border-white/5">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-brand-secondary uppercase tracking-widest text-sm font-bold mb-10">
          Çalıştığımız Güçlü Markalar
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          {brands.map((brand, idx) => (
            <div key={idx} className="text-xl md:text-3xl font-extrabold text-white/40 hover:text-brand-accent transition-colors duration-300 cursor-default select-none">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;