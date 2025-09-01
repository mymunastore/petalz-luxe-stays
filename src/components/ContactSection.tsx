import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Music,
  Youtube,
  CreditCard,
  Building
} from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your reservation.",
    });
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      checkIn: '',
      checkOut: '',
      roomType: '',
      guests: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      value: "+2348144257874",
      link: "tel:+2348144257874"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Uyo, Akwa Ibom State, Nigeria",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@petalzhome",
      link: "https://instagram.com/petalzhome"
    },
    {
      icon: Facebook,
      name: "Facebook", 
      handle: "@Petalz Home",
      link: "https://facebook.com/petalzhome"
    },
    {
      icon: Music,
      name: "TikTok",
      handle: "@petalzhome", 
      link: "https://tiktok.com/@petalzhome"
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "@PetalzHome",
      link: "https://youtube.com/@PetalzHome"
    }
  ];

  return (
    <section id="contact" className="petalz-section bg-gradient-to-b from-petalz-gray/20 to-background">
      <div className="petalz-container">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Book Your <span className="petalz-gradient-text">Stay</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience luxury? Contact us to make a reservation or get more information 
            about our accommodations and services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Booking Form */}
          <div className="scroll-reveal">
            <div className="petalz-card">
              <h3 className="font-heading text-2xl font-bold mb-6">Make a Reservation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="checkIn">Check-in Date *</Label>
                    <Input 
                      id="checkIn"
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => handleInputChange('checkIn', e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkOut">Check-out Date *</Label>
                    <Input 
                      id="checkOut"
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => handleInputChange('checkOut', e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="roomType">Room Type *</Label>
                    <Select value={formData.roomType} onValueChange={(value) => handleInputChange('roomType', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="studio">Studio Executive (₦35,000)</SelectItem>
                        <SelectItem value="suite">Self Contained Suite (₦45,000)</SelectItem>
                        <SelectItem value="apartment">One Bedroom Apartment (₦60,000)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="guests">Number of Guests *</Label>
                    <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Special Requests</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Any special requests or questions..."
                    className="mt-2"
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full petalz-btn-primary font-heading text-lg py-3">
                  Submit Booking Request
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="scroll-reveal space-y-8">
            {/* Contact Details */}
            <div className="petalz-card">
              <h3 className="font-heading text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-petalz-gold/10 p-3 rounded-xl">
                      <info.icon className="h-6 w-6 text-petalz-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-petalz-gold transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Information */}
            <div className="petalz-card">
              <h3 className="font-heading text-2xl font-bold mb-6">Payment Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-petalz-gold/10 p-3 rounded-xl">
                    <Building className="h-6 w-6 text-petalz-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Bank</h4>
                    <p className="text-muted-foreground">First Bank</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-petalz-gold/10 p-3 rounded-xl">
                    <CreditCard className="h-6 w-6 text-petalz-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Account Details</h4>
                    <p className="text-muted-foreground">Account No: 2045628775</p>
                    <p className="text-muted-foreground">Name: Petalz Home</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="petalz-card">
              <h3 className="font-heading text-2xl font-bold mb-6">Follow Us</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-xl border hover:bg-petalz-gold/5 hover:border-petalz-gold transition-all duration-200"
                  >
                    <social.icon className="h-5 w-5 text-petalz-gold" />
                    <div>
                      <div className="font-medium text-foreground">{social.name}</div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;