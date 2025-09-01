import { 
  Wifi, 
  Car, 
  Utensils, 
  Shield, 
  Scissors, 
  Shirt,
  Snowflake,
  Coffee
} from 'lucide-react';

const AmenitiesSection = () => {
  const amenities = [
    {
      icon: Scissors,
      title: "In-house Haircut Saloon",
      description: "Professional grooming services available on-site"
    },
    {
      icon: Shirt,
      title: "Laundry Service",
      description: "Convenient laundry and dry cleaning services"
    },
    {
      icon: Wifi,
      title: "Free Wi-Fi",
      description: "High-speed internet access throughout the property"
    },
    {
      icon: Snowflake,
      title: "Air Conditioning",
      description: "Climate-controlled comfort in all rooms"
    },
    {
      icon: Utensils,
      title: "Fully Equipped Kitchen",
      description: "Modern kitchen facilities with premium appliances"
    },
    {
      icon: Coffee,
      title: "Langkawi Lounge, Bar & Café",
      description: "Exclusive dining and relaxation space"
    },
    {
      icon: Car,
      title: "Parking Space",
      description: "Secure parking available for all guests"
    },
    {
      icon: Shield,
      title: "24/7 Armed Security",
      description: "Round-the-clock professional security service"
    }
  ];

  return (
    <section id="amenities" className="petalz-section bg-gradient-to-b from-petalz-gray/20 to-background">
      <div className="petalz-container">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Amenities & <span className="petalz-gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience world-class amenities designed to make your stay comfortable, 
            convenient, and memorable.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="petalz-card text-center group hover:scale-105 scroll-reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="bg-gradient-to-br from-petalz-gold to-petalz-gold-light p-4 rounded-2xl w-16 h-16 mx-auto mb-6 shadow-gold group-hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <amenity.icon className="h-8 w-8 text-petalz-black" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-petalz-gold transition-colors duration-300">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 scroll-reveal">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-elegant border text-center">
            <h3 className="font-heading text-3xl font-bold mb-6">
              Everything You Need for a <span className="petalz-gradient-text">Perfect Stay</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From the moment you arrive, our comprehensive amenities and personalized service 
              ensure your comfort and satisfaction. Whether you're here for business or leisure, 
              we've thoughtfully designed every detail to exceed your expectations.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold petalz-gradient-text mb-2">100%</div>
                <div className="text-muted-foreground">Guest Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold petalz-gradient-text mb-2">24/7</div>
                <div className="text-muted-foreground">Concierge Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold petalz-gradient-text mb-2">5★</div>
                <div className="text-muted-foreground">Luxury Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;