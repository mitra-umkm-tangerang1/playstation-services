import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export const Location = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Jl. Slapang Raya No.66, RT.002/RW.003',
      subContent: 'Kedaung Barat, Kec. Sepatan Timur, Kab. Tangerang, Banten 15520',
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Buka Setiap Hari',
      subContent: 'Tutup pukul 22:00 WIB',
    },
    {
      icon: Phone,
      title: 'Kontak',
      content: '087734038834',
      subContent: 'WhatsApp / Telepon',
    },
  ];

  return (
    <section id="location" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-sm sm:text-base font-semibold uppercase tracking-wider">
            Lokasi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Kunjungi <span className="text-gradient">Toko Kami</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami berlokasi di Tangerang, Banten. Mudah dijangkau dan strategis!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-border card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-base text-muted-foreground">{info.content}</p>
                      <p className="text-sm text-muted-foreground mt-1">{info.subContent}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Google Plus Code */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">Google Plus Code</h3>
                    <p className="text-base text-primary font-mono">VJF7+RC</p>
                    <p className="text-sm text-muted-foreground mt-1">Kedaung Bar., Kabupaten Tangerang, Banten</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => window.open('https://wa.me/6287734038834', '_blank')}
                className="flex-1 bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=VJF7+RC+Kedaung+Bar.,+Kabupaten+Tangerang,+Banten', '_blank')}
                className="flex-1 border-primary/50 hover:bg-primary/10"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Buka di Maps
              </Button>
            </div>
          </div>

          {/* Google Maps Embed */}
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full h-[400px] lg:h-[600px]">
                <iframe
                  src="https://www.google.com/maps?q=-6.125687,106.614687&hl=es;z=14&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Playstation Game & Services Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};