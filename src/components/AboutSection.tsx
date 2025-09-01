import { Building2, Users, Coffee, Shield } from 'lucide-react';
import studioRoom from '@/assets/studio-room.jpg';

const AboutSection = () => {
  const features = [
    {
      icon: Building2,
      title: "Premium Location",
      description: "Located in the heart of Uyo with easy access to major attractions"
    },
    {
      icon: Users,
      title: "5 Unique Options",
      description: "Carefully designed apartments to suit every guest's taste and needs"
    },
    {
      icon: Coffee,
      title: "Langkawi Lounge",
      description: "Exclusive bar and café for dining, drinks, and relaxation"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock armed security for your peace of mind"
    }
  ];

  return (
    <section id="about" className="petalz-section bg-gradient-to-b from-background to-petalz-gray/20">
      <div className="petalz-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="scroll-reveal">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
              Welcome to <span className="petalz-gradient-text">Petalz Home</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Where style meets serenity. At Petalz Home/Langkawi Lounge, Bar & Cafe, 
                we redefine luxury living in Uyo, Nigeria.
              </p>
              
              <p>
                <strong className="text-foreground">Stay in Style, Relax in Comfort.</strong> 
                Enjoy our elegant one-bedroom, studio suite & executive apartments, with five 
                unique options designed to suit your taste.
              </p>
              
              <p>
                Whether you're here for business or leisure, our fully furnished luxury 
                accommodations provide the perfect blend of comfort, convenience, and 
                sophistication.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-petalz-gold/10 p-3 rounded-xl">
                    <feature.icon className="h-6 w-6 text-petalz-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="scroll-reveal lg:pl-8">
            <div className="relative">
              <img 
                src={studioRoom} 
                alt="Luxury apartment interior at Petalz Home" 
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-petalz-black/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-soft border">
                <div className="text-3xl font-bold petalz-gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Room Types</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-card p-6 rounded-xl shadow-soft border">
                <div className="text-3xl font-bold petalz-gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Security</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;