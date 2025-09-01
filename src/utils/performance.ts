// Performance optimization utilities

// Debounce function for scroll and resize events
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for frequent events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Intersection Observer with performance optimizations
export const createOptimizedObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '50px 0px',
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Preload critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Lazy load images with better performance
export const lazyLoadImages = () => {
  const imageObserver = createOptimizedObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        if (src) {
          img.src = src;
          img.classList.remove('lazy-loading');
          img.classList.add('lazy-loaded');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });

  return imageObserver;
};

// Web Vitals tracking
export const trackWebVitals = () => {
  if (typeof window !== 'undefined') {
    import('web-vitals').then((webVitals) => {
      if (webVitals.onCLS) webVitals.onCLS(console.log);
      if (webVitals.onFCP) webVitals.onFCP(console.log);
      if (webVitals.onLCP) webVitals.onLCP(console.log);
      if (webVitals.onTTFB) webVitals.onTTFB(console.log);
      if (webVitals.onINP) webVitals.onINP(console.log);
    }).catch(() => {
      // Web vitals not available
    });
  }
};

// Memory management for event listeners
export class EventManager {
  private listeners: Array<{
    element: EventTarget;
    event: string;
    handler: EventListener;
  }> = [];

  addEventListener(
    element: EventTarget,
    event: string,
    handler: EventListener,
    options?: AddEventListenerOptions
  ) {
    element.addEventListener(event, handler, options);
    this.listeners.push({ element, event, handler });
  }

  removeAllListeners() {
    this.listeners.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });
    this.listeners = [];
  }
}