import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroBuilding from '@/assets/hero-building.jpg';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBuilding} 
          alt="Petalz Home Luxury Building" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-petalz-black/40 via-petalz-black/30 to-petalz-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-petalz-white mb-6">
            Stay in <span className="petalz-gradient-text">Style</span>
          </h1>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-petalz-white mb-8">
            Relax in <span className="petalz-gradient-text">Comfort</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-petalz-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience luxury living at Petalz Home. Elegant apartments in the heart of Uyo with world-class amenities and the exclusive Langkawi Lounge, Bar & Café.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="petalz-btn-primary text-lg px-12 py-4 font-heading"
            >
              Book Now
            </Button>
            <Button 
              onClick={() => scrollToSection('rooms')}
              variant="outline"
              className="petalz-btn-secondary text-lg px-12 py-4 font-heading"
            >
              Explore Apartments
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-petalz-white/70 hover:text-petalz-gold transition-colors duration-300"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-petalz-gold/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-petalz-gold/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;