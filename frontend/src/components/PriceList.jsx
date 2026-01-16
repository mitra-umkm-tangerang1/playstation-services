import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export const PriceList = () => {
  const priceCategories = [
    {
      title: 'Konsol PS2',
      popular: false,
      items: [
        { name: 'PS2 Slim', price: 'Rp 330.000', note: 'Include 1 stik + MC 16GB' },
        { name: 'PS2 Fat', price: 'Rp 250.000', note: 'Include 1 stik + MC 8GB' },
        { name: 'Isi Game PS2', price: 'Rp 2.000/game', note: 'Tidak ada minimum' },
      ],
    },
    {
      title: 'Konsol PS3',
      popular: true,
      items: [
        { name: 'PS3 Slim 160GB', price: 'Rp 1.100.000', note: 'Include 1 stik + 10 game' },
        { name: 'PS3 Slim 320GB', price: 'Rp 1.300.000', note: 'Include 1 stik + 20 game' },
        { name: 'PS3 Super Slim 500GB', price: 'Rp 1.700.000', note: 'Include 1 stik + 30 game' },
        { name: 'Isi Game PS3', price: 'Rp 5.000/game', note: 'Install langsung' },
      ],
    },
    {
      title: 'Konsol PS4',
      popular: false,
      items: [
        { name: 'PS4 Slim 500GB', price: 'Rp 2.500.000', note: 'Include 1 stik + 5 game' },
        { name: 'PS4 Slim 1TB', price: 'Rp 2.900.000', note: 'Include 1 stik + 10 game' },
        { name: 'PS4 Pro 1TB', price: 'Rp 4.400.000', note: 'Include 1 stik + 10 game' },
        { name: 'Isi Game PS4', price: 'Mulai Rp 20.000', note: 'Tergantung size game' },
      ],
    },
    {
      title: 'Service & Repair',
      popular: false,
      items: [
        { name: 'Cleaning + Ganti Pasta', price: 'Rp 40.000 - 100.000', note: 'Tergantung tipe konsol' },
        { name: 'Ganti Optical PS2/PS3', price: 'Rp 120.000 - 300.000', note: 'Include pasang' },
        { name: 'Service Board', price: 'Mulai Rp 180.000', note: 'Cek dulu kondisi' },
        { name: 'Upgrade HDD', price: 'Mulai Rp 300.000', note: 'Belum include HDD' },
      ],
    },
  ];

  return (
    <section id="prices" className="py-16 sm:py-20 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-sm sm:text-base font-semibold uppercase tracking-wider">
            Daftar Harga
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Harga <span className="text-gradient">Terjangkau</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Harga dapat berubah sewaktu-waktu. Hubungi kami untuk info terbaru dan promo spesial!
          </p>
        </div>

        {/* Price Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {priceCategories.map((category, index) => (
            <Card
              key={index}
              className={`bg-card border-border hover:border-primary/50 transition-all duration-300 flex flex-col ${
                category.popular ? 'border-primary shadow-elegant scale-105' : ''
              }`}
            >
              <CardHeader className="text-center pb-4">
                {category.popular && (
                  <Badge className="mb-3 bg-primary text-primary-foreground w-fit mx-auto">
                    Terpopuler
                  </Badge>
                )}
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="border-b border-border pb-4 last:border-0">
                      <div className="flex items-start justify-between mb-1">
                        <span className="text-sm font-medium text-foreground flex-1">{item.name}</span>
                      </div>
                      <p className="text-lg font-bold text-primary mb-1">{item.price}</p>
                      <p className="text-xs text-muted-foreground">{item.note}</p>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-4">
                <Button
                  variant={category.popular ? 'default' : 'outline'}
                  className={`w-full ${
                    category.popular
                      ? 'bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow'
                      : 'border-primary/30 hover:bg-primary/10'
                  }`}
                  onClick={() => window.open('https://wa.me/6287734038834', '_blank')}
                >
                  Tanya Harga
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 bg-card border border-border rounded-lg p-6 max-w-3xl mx-auto">
          <div className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-2">Catatan Penting:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Semua konsol sudah include kabel power, AV/HDMI, dan garansi toko</li>
                <li>• Harga dapat berubah sewaktu-waktu tergantung kondisi pasar</li>
                <li>• Tersedia paket bundling dengan harga lebih hemat</li>
                <li>• Service bergaransi, jika masalah sama terulang dalam 7 hari gratis service</li>
                <li>• Hubungi kami via WhatsApp untuk info stok dan harga terbaru</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};