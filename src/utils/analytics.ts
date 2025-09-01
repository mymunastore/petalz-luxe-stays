// Google Analytics 4 Integration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: {
      (...args: any[]): void;
      q?: any[];
    } & {
      loaded?: boolean;
      version?: string;
      push?: (args: any[]) => void;
    };
  }
}

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 ID
export const FB_PIXEL_ID = 'XXXXXXXXXX'; // Replace with your Facebook Pixel ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return;

  // Load GA4 script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false // Disable automatic page view tracking
  });
};

// Initialize Facebook Pixel
export const initFacebookPixel = () => {
  if (typeof window === 'undefined') return;

  window.fbq = window.fbq || function() {
    (window.fbq.q = window.fbq.q || []).push(arguments);
  };
  if (!window.fbq.loaded) {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);
    window.fbq.loaded = true;
  }
  
  window.fbq('init', FB_PIXEL_ID);
  window.fbq('track', 'PageView');
};

// Track page view
export const trackPageView = (path: string, title?: string) => {
  if (typeof window === 'undefined') return;
  
  // Google Analytics
  if (window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: title,
    });
  }
  
  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Track custom events
export const trackEvent = (
  eventName: string, 
  parameters: Record<string, any> = {}
) => {
  if (typeof window === 'undefined') return;
  
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, parameters);
  }
  
  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', eventName, parameters);
  }
  
  console.log('Analytics Event:', eventName, parameters);
};

// Predefined event tracking functions
export const analytics = {
  // Booking events
  bookingStarted: (roomType: string) => {
    trackEvent('booking_started', {
      room_type: roomType,
      currency: 'NGN'
    });
  },
  
  bookingCompleted: (roomType: string, value: number) => {
    trackEvent('purchase', {
      currency: 'NGN',
      value: value,
      room_type: roomType
    });
  },
  
  // User engagement
  scrolledToSection: (section: string) => {
    trackEvent('scroll_to_section', {
      section_name: section
    });
  },
  
  languageChanged: (language: string) => {
    trackEvent('language_changed', {
      language: language
    });
  },
  
  newsletterSignup: (email: string) => {
    trackEvent('newsletter_signup', {
      method: 'email',
      email_hash: btoa(email) // Hash for privacy
    });
  },
  
  whatsappClick: (context: string) => {
    trackEvent('contact_whatsapp', {
      context: context
    });
  },
  
  phoneClick: () => {
    trackEvent('contact_phone', {
      method: 'phone'
    });
  },
  
  socialMediaClick: (platform: string) => {
    trackEvent('social_media_click', {
      platform: platform
    });
  },
  
  roomImageView: (roomType: string) => {
    trackEvent('room_image_view', {
      room_type: roomType
    });
  },
  
  amenityInteraction: (amenity: string) => {
    trackEvent('amenity_interaction', {
      amenity_name: amenity
    });
  },
  
  reviewInteraction: (action: string) => {
    trackEvent('review_interaction', {
      action: action
    });
  },
  
  errorOccurred: (error: string, context: string) => {
    trackEvent('error_occurred', {
      error_message: error,
      context: context
    });
  }
};

// Performance tracking
export const trackPerformance = () => {
  if (typeof window === 'undefined') return;
  
  window.addEventListener('load', () => {
    // Track page load time
    const loadTime = performance.now();
    trackEvent('page_load_time', {
      load_time: Math.round(loadTime)
    });
    
    // Track Core Web Vitals
    try {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
        onCLS(({ value }) => trackEvent('core_web_vital', { metric: 'CLS', value }));
        onFCP(({ value }) => trackEvent('core_web_vital', { metric: 'FCP', value }));
        onLCP(({ value }) => trackEvent('core_web_vital', { metric: 'LCP', value }));
        onTTFB(({ value }) => trackEvent('core_web_vital', { metric: 'TTFB', value }));
      }).catch(() => {
        console.log('Web Vitals not available');
      });
    } catch (error) {
      console.log('Web Vitals import failed:', error);
    }
  });
};