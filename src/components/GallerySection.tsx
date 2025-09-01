import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import studioRoom from '@/assets/studio-room.jpg';
import suiteRoom from '@/assets/suite-room.jpg';
import oneBedroomRoom from '@/assets/one-bedroom.jpg';
import langkawiLounge from '@/assets/langkawi-lounge.jpg';
import heroBuilding from '@/assets/hero-building.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: heroBuilding,
      alt: "Petalz Home exterior view",
      title: "Building Exterior"
    },
    {
      src: studioRoom,
      alt: "Studio Executive room interior",
      title: "Studio Executive"
    },
    {
      src: suiteRoom,
      alt: "Self Contained Suite interior",
      title: "Self Contained Suite"
    },
    {
      src: oneBedroomRoom,
      alt: "One Bedroom Apartment interior",
      title: "One Bedroom Apartment"
    },
    {
      src: langkawiLounge,
      alt: "Langkawi Lounge Bar & Café",
      title: "Langkawi Lounge"
    },
    // Duplicate some images for a fuller gallery
    {
      src: studioRoom,
      alt: "Studio room detail view",
      title: "Room Details"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="petalz-section bg-background">
      <div className="petalz-container">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Photo <span className="petalz-gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a visual tour of our luxury accommodations and amenities. 
            See what makes Petalz Home special.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-xl scroll-reveal ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? 'h-96 lg:h-full' : 'h-64'
                }`}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-petalz-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-xl font-semibold text-petalz-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-petalz-white/80 text-sm">Click to view full size</p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-petalz-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-petalz-black/95 flex items-center justify-center z-50 p-4">
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-petalz-white/10 hover:bg-petalz-white/20 rounded-full p-2 transition-colors duration-200"
            >
              <X className="h-6 w-6 text-petalz-white" />
            </button>

            {/* Navigation */}
            <button 
              onClick={prevImage}
              className="absolute left-4 bg-petalz-white/10 hover:bg-petalz-white/20 rounded-full p-2 transition-colors duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-petalz-white" />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 bg-petalz-white/10 hover:bg-petalz-white/20 rounded-full p-2 transition-colors duration-200"
            >
              <ChevronRight className="h-6 w-6 text-petalz-white" />
            </button>

            {/* Image */}
            <div className="max-w-4xl max-h-full">
              <img 
                src={images[selectedImage].src} 
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-xl"
              />
              
              {/* Image Info */}
              <div className="text-center mt-4">
                <h3 className="font-heading text-xl font-semibold text-petalz-white mb-2">
                  {images[selectedImage].title}
                </h3>
                <p className="text-petalz-white/70">
                  {selectedImage + 1} of {images.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="bg-gradient-to-r from-petalz-gold/10 to-petalz-gold/5 rounded-2xl p-8 border">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Experience <span className="petalz-gradient-text">Luxury Living</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ready to experience the comfort and elegance of Petalz Home? 
              Book your stay today and discover why we're Uyo's premier luxury accommodation.
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="petalz-btn-primary font-heading px-8"
            >
              Book Your Stay
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;