import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const phoneNumberDisplay = "0 (534) 887 68 89";
  const phoneNumberLink = "tel:+905348876889";

  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">EROĞLU TİCARET</h2>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
              Bergama 2. Sanayi Sitesi'nde güvenilir madeni yağ ve otomotiv yedek parça tedarikçiniz. Kalite ve güvenin adresi.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">İletişim</h3>
            <div className="space-y-4">
              <a href={phoneNumberLink} className="flex items-start gap-4 group">
                <div className="bg-brand-surface p-3 rounded-lg group-hover:bg-brand-accent transition-colors">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telefon</p>
                  <p className="text-white font-medium">{phoneNumberDisplay}</p>
                </div>
              </a>
              
              <a href="https://maps.google.com/?q=Bergama+2.+Sanayi" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="bg-brand-surface p-3 rounded-lg group-hover:bg-brand-accent transition-colors">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Adres</p>
                  <p className="text-white font-medium">İzmir – Bergama 2. Sanayi Sitesi</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            ©️ 2025 EROĞLU TİCARET - Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;