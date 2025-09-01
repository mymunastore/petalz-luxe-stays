import { Button } from '@/components/ui/button';
import { Wine, Coffee, Users, Clock } from 'lucide-react';
import langkawiLounge from '@/assets/langkawi-lounge.jpg';

const LangkawiSection = () => {
  const features = [
    {
      icon: Coffee,
      title: "Premium Café",
      description: "Artisanal coffee and gourmet breakfast options"
    },
    {
      icon: Wine,
      title: "Full Bar",
      description: "Extensive selection of wines, spirits, and cocktails"
    },
    {
      icon: Users,
      title: "Social Hub",
      description: "Perfect space for meetings and social gatherings"
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Open throughout the day for your convenience"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="lounge" className="petalz-section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={langkawiLounge} 
          alt="Langkawi Lounge Bar & Café" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-petalz-black/80 via-petalz-black/60 to-petalz-black/80"></div>
      </div>

      <div className="petalz-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="scroll-reveal">
            <div className="mb-8">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-petalz-white mb-6">
                <span className="petalz-gradient-text">Langkawi</span> Lounge
              </h2>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-petalz-white/90 mb-8">
                Bar & Café
              </h3>
            </div>

            <div className="bg-petalz-white/10 backdrop-blur-md rounded-2xl p-8 border border-petalz-white/20">
              <p className="text-xl text-petalz-white mb-8 leading-relaxed">
                Your cozy spot for drinks, dining, and relaxation. Experience the perfect 
                blend of comfort and sophistication at our exclusive lounge.
              </p>

              <p className="text-petalz-white/80 mb-8 leading-relaxed">
                Whether you're starting your day with premium coffee, enjoying a business lunch, 
                or unwinding with evening cocktails, Langkawi Lounge provides the perfect 
                ambiance for every occasion.
              </p>

              <Button 
                onClick={scrollToContact}
                className="petalz-btn-primary font-heading px-8"
              >
                Reserve a Table
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="scroll-reveal">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-petalz-white/10 backdrop-blur-md rounded-xl p-6 border border-petalz-white/20 hover:bg-petalz-white/20 transition-all duration-300"
                >
                  <div className="bg-petalz-gold/20 p-3 rounded-xl w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-petalz-gold" />
                  </div>
                  <h4 className="font-semibold text-petalz-white mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-petalz-white/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Special Offer */}
            <div className="mt-8 bg-gradient-to-r from-petalz-gold/20 to-petalz-gold/10 backdrop-blur-md rounded-xl p-6 border border-petalz-gold/30">
              <h4 className="font-heading text-xl font-semibold text-petalz-white mb-3">
                Guest Exclusive Benefits
              </h4>
              <div className="space-y-2 text-petalz-white/80">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-petalz-gold rounded-full mr-3"></div>
                  <span>10% discount on all food and beverages</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-petalz-gold rounded-full mr-3"></div>
                  <span>Priority seating and reservations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-petalz-gold rounded-full mr-3"></div>
                  <span>Complimentary welcome drink</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-petalz-gold/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-petalz-gold/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default LangkawiSection;