import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Adebayo Olumide",
      location: "Lagos, Nigeria",
      rating: 5,
      comment: "Absolutely stunning place! The studio executive was perfect for my business trip. Clean, modern, and the staff were incredibly welcoming. The Langkawi Lounge is a great spot to unwind after a long day.",
      stayType: "Studio Executive"
    },
    {
      id: 2,
      name: "Blessing Nkomo",
      location: "Port Harcourt, Nigeria",
      rating: 5,
      comment: "My family and I had the most amazing stay at the one bedroom apartment. The location is perfect, and the amenities exceeded our expectations. Will definitely be returning!",
      stayType: "One Bedroom Apartment"
    },
    {
      id: 3,
      name: "Chukwudi Okafor",
      location: "Abuja, Nigeria",
      rating: 5,
      comment: "The self contained suite was spacious and beautifully decorated. The kitchen was fully equipped and the WiFi was excellent for my work. Highly recommend Petalz Home for both business and leisure.",
      stayType: "Self Contained Suite"
    },
    {
      id: 4,
      name: "Fatima Ibrahim",
      location: "Kano, Nigeria",
      rating: 5,
      comment: "Exceptional service and beautiful accommodation! The gold accents throughout the property give it such an elegant feel. The lounge area is perfect for relaxing with friends.",
      stayType: "Studio Executive"
    },
    {
      id: 5,
      name: "Emmanuel Udoh",
      location: "Uyo, Nigeria",
      rating: 5,
      comment: "As a local, I can confidently say Petalz Home sets the standard for luxury accommodation in Uyo. The security is top-notch and the location is very convenient. Perfect for hosting visiting family.",
      stayType: "One Bedroom Apartment"
    },
    {
      id: 6,
      name: "Ngozi Okonkwo",
      location: "Enugu, Nigeria",
      rating: 5,
      comment: "The attention to detail is incredible! From the comfortable bedding to the stylish decor, everything was perfect. The laundry service was very convenient during our extended stay.",
      stayType: "Self Contained Suite"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating 
            ? 'text-petalz-gold fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="petalz-section bg-gradient-to-b from-background to-petalz-gray/10">
      <div className="petalz-container">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="petalz-gradient-text">Guests</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our valued guests across Nigeria who have made Petalz Home their home away from home.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className="scroll-reveal bg-card rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 border border-petalz-gold/10 relative group hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6">
                <div className="bg-petalz-gold/10 backdrop-blur-sm p-2 rounded-full border border-petalz-gold/20">
                  <Quote className="h-4 w-4 text-petalz-gold fill-current" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4 pt-4">
                {renderStars(review.rating)}
              </div>

              {/* Comment */}
              <blockquote className="text-foreground/90 mb-6 leading-relaxed italic">
                "{review.comment}"
              </blockquote>

              {/* Guest Info */}
              <div className="border-t border-petalz-gold/10 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground font-heading">
                      {review.name}
                    </h4>
                    <p className="text-sm text-muted-foreground flex items-center">
                      📍 {review.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-petalz-gold bg-petalz-gold/10 px-2 py-1 rounded-full">
                      {review.stayType}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-petalz-gold/0 group-hover:border-petalz-gold/20 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="bg-gradient-to-r from-petalz-gold/5 to-transparent p-8 rounded-2xl border border-petalz-gold/10">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Ready to Create Your Own Story?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Join hundreds of satisfied guests who have experienced the Petalz Home difference.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="petalz-btn-primary font-heading"
            >
              Book Your Stay Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;