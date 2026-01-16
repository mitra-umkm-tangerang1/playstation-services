import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Send, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error('Mohon lengkapi semua field!');
      return;
    }

    // Format WhatsApp message
    const message = `Halo, saya ${formData.name}%0A%0ATelepon: ${formData.phone}%0A%0APesan: ${formData.message}`;
    const whatsappUrl = `https://wa.me/6287734038834?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', phone: '', message: '' });
    toast.success('Mengarahkan ke WhatsApp...');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-sm sm:text-base font-semibold uppercase tracking-wider">
            Hubungi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Ada <span className="text-gradient">Pertanyaan?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami siap membantu Anda. Kirim pesan atau langsung hubungi via WhatsApp!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Kirim Pesan</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Nama Lengkap
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Nomor Telepon / WhatsApp
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Pesan
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tulis pertanyaan atau pesan Anda..."
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-input border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Kirim via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Kenapa Pilih Kami?</h3>
                  <div className="space-y-4">
                    {[
                      'Berpengalaman bertahun-tahun di bidang Playstation',
                      'Teknisi profesional dan bersertifikat',
                      'Harga kompetitif dan terjangkau',
                      'Garansi untuk setiap produk dan service',
                      'Pelayanan ramah dan cepat',
                      'Lokasi mudah dijangkau',
                    ].map((reason, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">{reason}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <CardContent className="p-6 sm:p-8 text-center">
                  <h4 className="text-xl font-bold text-foreground mb-3">Butuh Bantuan Cepat?</h4>
                  <p className="text-muted-foreground mb-6">
                    Langsung hubungi kami via WhatsApp untuk respons yang lebih cepat
                  </p>
                  <Button
                    size="lg"
                    onClick={() => window.open('https://wa.me/6287734038834', '_blank')}
                    className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    087734038834
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};