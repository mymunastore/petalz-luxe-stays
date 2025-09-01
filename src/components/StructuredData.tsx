import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "name": "Petalz Home",
      "alternateName": "Langkawi Lounge, Bar & Café",
      "description": "Luxury apartments and lounge in Uyo, Nigeria. Stay in Style, Relax in Comfort.",
      "url": window.location.origin,
      "telephone": "+2348144257874",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Uyo",
        "addressLocality": "Uyo",
        "addressRegion": "Akwa Ibom State",
        "addressCountry": "NG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "5.0378",
        "longitude": "7.9036"
      },
      "priceRange": "₦35,000 - ₦60,000",
      "amenityFeature": [
        "Free WiFi",
        "Air Conditioning", 
        "Fully Equipped Kitchen",
        "Laundry Service",
        "24/7 Security",
        "Parking",
        "Hair Salon",
        "Bar & Café"
      ],
      "sameAs": [
        "https://instagram.com/petalzhome",
        "https://facebook.com/petalzhome",
        "https://tiktok.com/@petalzhome",
        "https://youtube.com/@PetalzHome"
      ]
    };

    // Room Offers Schema
    const roomOffersSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Petalz Home Room Types",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Studio Executive",
          "description": "Modern studio apartment with all amenities",
          "price": "35000",
          "priceCurrency": "NGN",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer", 
          "name": "Self Contained Suite",
          "description": "Spacious self-contained suite with kitchen",
          "price": "45000",
          "priceCurrency": "NGN",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "One Bedroom Apartment", 
          "description": "Luxury one bedroom apartment with full amenities",
          "price": "60000",
          "priceCurrency": "NGN",
          "availability": "https://schema.org/InStock"
        }
      ]
    };

    // Reviews Schema
    const reviewsSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Petalz Home",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "6",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Adebayo Olumide"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Absolutely stunning place! The studio executive was perfect for my business trip."
        },
        {
          "@type": "Review", 
          "author": {
            "@type": "Person",
            "name": "Blessing Nkomo"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "My family and I had the most amazing stay at the one bedroom apartment."
        }
      ]
    };

    // Function to add or update script tag
    const addStructuredData = (schema: any, id: string) => {
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.textContent = JSON.stringify(schema);
      } else {
        const script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      }
    };

    // Add all schemas
    addStructuredData(localBusinessSchema, 'local-business-schema');
    addStructuredData(roomOffersSchema, 'room-offers-schema');
    addStructuredData(reviewsSchema, 'reviews-schema');

  }, []);

  return null;
};

export default StructuredData;