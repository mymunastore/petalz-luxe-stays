import { Instagram, Facebook, Music, Youtube, Phone, MapPin } from 'lucide-react';
import petalzLogo from '@/assets/petalz-logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, link: "https://instagram.com/petalzhome", label: "Instagram" },
    { icon: Facebook, link: "https://facebook.com/petalzhome", label: "Facebook" },
    { icon: Music, link: "https://tiktok.com/@petalzhome", label: "TikTok" },
    { icon: Youtube, link: "https://youtube.com/@PetalzHome", label: "YouTube" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-petalz-black text-petalz-white">
      {/* Main Footer */}
      <div className="petalz-container py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={petalzLogo} alt="Petalz Home" className="h-12 w-auto rounded-lg" />
              <div>
                <h3 className="font-heading text-2xl font-bold text-petalz-gold">
                  Petalz Home
                </h3>
                <p className="text-petalz-white/70">Langkawi Lounge, Bar & Café</p>
              </div>
            </div>
            
            <p className="text-petalz-white/80 leading-relaxed mb-6 max-w-md">
              Where style meets serenity. Stay in Style, Relax in Comfort. 
              Experience luxury living in the heart of Uyo with our elegantly 
              designed accommodations and world-class amenities.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-petalz-white/10 hover:bg-petalz-gold hover:text-petalz-black p-3 rounded-full transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-petalz-gold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Rooms & Pricing', id: 'rooms' },
                { label: 'Amenities', id: 'amenities' },
                { label: 'Langkawi Lounge', id: 'lounge' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-petalz-white/70 hover:text-petalz-gold transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-petalz-gold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-petalz-gold mt-1" />
                <div>
                  <p className="text-petalz-white/80">Phone & WhatsApp</p>
                  <a 
                    href="tel:+2348144257874" 
                    className="text-petalz-white hover:text-petalz-gold transition-colors duration-200"
                  >
                    +2348144257874
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-petalz-gold mt-1" />
                <div>
                  <p className="text-petalz-white/80">Location</p>
                  <p className="text-petalz-white">Uyo, Akwa Ibom State</p>
                  <p className="text-petalz-white">Nigeria</p>
                </div>
              </div>
            </div>

            {/* Room Types Quick Reference */}
            <div className="mt-8">
              <h5 className="font-semibold text-petalz-gold mb-3">Room Types</h5>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-petalz-white/70">Studio Executive</span>
                  <span className="text-petalz-gold">₦35,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-petalz-white/70">Self Contained Suite</span>
                  <span className="text-petalz-gold">₦45,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-petalz-white/70">One Bedroom Apartment</span>
                  <span className="text-petalz-gold">₦60,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-petalz-white/20">
        <div className="petalz-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-petalz-white/60 text-sm">
              © {currentYear} Petalz Home. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-petalz-white/60">
                Built with ❤️ for luxury hospitality
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;