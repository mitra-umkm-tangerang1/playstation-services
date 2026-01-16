import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad2, Download, Wrench, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Services = () => {
  const services = [
    {
      icon: Gamepad2,
      title: 'Jual Playstation',
      description: 'Konsol PS2, PS3, dan PS4 berkualitas dengan garansi. Kondisi original dan terawat.',
      features: ['PS2 Slim & Fat', 'PS3 Slim & Super Slim', 'PS4 Slim & Pro', 'Garansi Toko'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Download,
      title: 'Isi Game',
      description: 'Instalasi game lengkap untuk semua konsol. Koleksi game terbaru dan terpopuler.',
      features: ['Game PS2 Lengkap', 'Game PS3 Update', 'Game PS4 Terbaru', 'Proses Cepat'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Wrench,
      title: 'Service & Repair',
      description: 'Perbaikan semua jenis kerusakan Playstation oleh teknisi berpengalaman.',
      features: ['Cleaning & Maintenance', 'Ganti Optical', 'Repair Board', 'Konsultasi Gratis'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: ShoppingBag,
      title: 'Aksesoris',
      description: 'Berbagai aksesoris original dan compatible untuk Playstation Anda.',
      features: ['Stik & Controller', 'Kabel & Charger', 'Memory & Storage', 'Casing & Skin'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-sm sm:text-base font-semibold uppercase tracking-wider">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Solusi Lengkap <span className="text-gradient">Playstation</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan layanan terlengkap untuk semua kebutuhan Playstation Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 card-hover group overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Icon with Gradient Background */}
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <span className="text-primary mr-2 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary group-hover:shadow-elegant transition-all duration-300"
                  onClick={() => window.open('https://wa.me/6287734038834', '_blank')}
                >
                  Tanya Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Punya pertanyaan tentang layanan kami?</p>
          <Button
            size="lg"
            onClick={() => window.open('https://wa.me/6287734038834', '_blank')}
            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow"
          >
            Konsultasi Gratis
          </Button>
        </div>
      </div>
    </section>
  );
};