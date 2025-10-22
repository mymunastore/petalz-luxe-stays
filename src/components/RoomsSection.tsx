import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wifi, Car, Utensils, Shield, Users, Bath } from 'lucide-react';
import studioRoom from '@/assets/studio-room.jpg';
import suiteRoom from '@/assets/suite-room.jpg';
import oneBedroomRoom from '@/assets/one-bedroom.jpg';

const RoomsSection = () => {
  const rooms = [
    {
      id: 'studio',
      name: 'Studio Executive',
      price: '₦35,000',
      image: studioRoom,
      features: ['Free Wi-Fi', 'Air Conditioning', 'Kitchenette', 'Private Bath'],
      description: 'Perfect for solo travelers and business guests seeking comfort and style.',
      capacity: '1-2 Guests'
    },
    {
      id: 'suite',
      name: 'Self Contained Suite',
      price: '₦45,000',
      image: suiteRoom,
      features: ['Full Kitchen', 'Living Area', 'Free Wi-Fi', 'Premium Furnishing'],
      description: 'Spacious suite with separate living area and premium amenities.',
      capacity: '2-3 Guests'
    },
    {
      id: 'apartment',
      name: 'One Bedroom Apartment',
      price: '₦60,000',
      image: oneBedroomRoom,
      features: ['Separate Bedroom', 'Full Kitchen', 'Living Room', 'Premium Location'],
      description: 'Luxury one-bedroom apartment with separate living and sleeping areas.',
      capacity: '2-4 Guests'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="rooms" className="petalz-section bg-background">
      <div className="petalz-container">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Apartments & <span className="petalz-gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our elegantly designed accommodations, each fully furnished 
            with luxury amenities for your comfort and convenience.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={room.id} className="room-card scroll-reveal" style={{ animationDelay: `${index * 200}ms` }}>
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-petalz-gold text-petalz-black font-semibold">
                    {room.capacity}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-petalz-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {room.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold petalz-gradient-text">
                      {room.price}
                    </div>
                    <div className="text-sm text-muted-foreground">per night</div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {room.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-petalz-gold rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={scrollToContact}
                  className="w-full petalz-btn-primary font-heading"
                >
                  Book This Room
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="bg-gradient-to-r from-petalz-gold/10 to-petalz-gold/5 rounded-2xl p-8 border">
            <h3 className="font-heading text-2xl font-bold mb-4">
              All Rooms Are <span className="petalz-gradient-text">Fully Furnished & Luxury</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every accommodation includes premium amenities, elegant furnishing, and access to 
              our exclusive Langkawi Lounge, Bar & Café.
            </p>
            <Button 
              onClick={scrollToContact}
              className="petalz-btn-primary font-heading px-8"
            >
              Check Availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;