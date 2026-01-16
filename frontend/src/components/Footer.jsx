import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">PS</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground leading-tight">Playstation Game</h3>
                <p className="text-xs text-muted-foreground">& Services</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pusat terlengkap untuk kebutuhan Playstation Anda di Tangerang. Berkualitas dan terpercaya.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">Layanan Kami</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Jual Playstation PS2/PS3/PS4</li>
              <li>Isi & Install Game</li>
              <li>Service & Repair</li>
              <li>Aksesoris Original</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>087734038834</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p>Buka Setiap Hari</p>
                  <p>Tutup pukul 22:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Alamat */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">Lokasi</h4>
            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p>Jl. Slapang Raya No.66</p>
                <p>RT.002/RW.003</p>
                <p>Kedaung Barat, Kec. Sepatan Timur</p>
                <p>Kabupaten Tangerang</p>
                <p>Banten 15520</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Playstation Game & Services. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.open('https://wa.me/6287734038834', '_blank')}
                className="text-sm text-primary hover:text-primary-glow transition-colors duration-300"
              >
                WhatsApp
              </button>
              <span className="text-muted-foreground">•</span>
              <button
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=VJF7+RC+Kedaung+Bar.,+Kabupaten+Tangerang,+Banten', '_blank')}
                className="text-sm text-primary hover:text-primary-glow transition-colors duration-300"
              >
                Google Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};