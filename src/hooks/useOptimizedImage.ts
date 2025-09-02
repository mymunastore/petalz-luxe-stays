import { useState, useEffect, useRef } from 'react';

interface UseOptimizedImageOptions {
  placeholder?: string;
  loadingStrategy?: 'lazy' | 'eager';
  quality?: number;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function useOptimizedImage(
  src: string,
  options: UseOptimizedImageOptions = {}
) {
  const {
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=',
    loadingStrategy = 'lazy',
    onLoad,
    onError,
  } = options;

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const imageRef = useRef<HTMLImageElement>();

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    imageRef.current = img;

    img.onload = () => {
      setIsLoading(false);
      setHasError(false);
      setCurrentSrc(src);
      onLoad?.();
    };

    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
      onError?.();
    };

    // Start loading the image
    if (loadingStrategy === 'eager') {
      img.src = src;
    } else {
      // For lazy loading, we'll load when the component mounts
      const timer = setTimeout(() => {
        img.src = src;
      }, 100);

      return () => clearTimeout(timer);
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.onload = null;
        imageRef.current.onerror = null;
      }
    };
  }, [src, loadingStrategy, onLoad, onError]);

  return {
    src: currentSrc,
    isLoading,
    hasError,
    reload: () => {
      if (imageRef.current && src) {
        setIsLoading(true);
        setHasError(false);
        imageRef.current.src = src;
      }
    },
  };
}

// Hook for responsive images
export function useResponsiveImage(
  srcSet: Record<string, string>,
  defaultSrc: string,
  options: UseOptimizedImageOptions = {}
) {
  const [currentBreakpoint, setCurrentBreakpoint] = useState('default');
  
  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1280 && srcSet.xl) setCurrentBreakpoint('xl');
      else if (width >= 1024 && srcSet.lg) setCurrentBreakpoint('lg');
      else if (width >= 768 && srcSet.md) setCurrentBreakpoint('md');
      else if (width >= 640 && srcSet.sm) setCurrentBreakpoint('sm');
      else setCurrentBreakpoint('default');
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);

    return () => window.removeEventListener('resize', updateBreakpoint);
  }, [srcSet]);

  const currentSrc = srcSet[currentBreakpoint] || defaultSrc;
  const optimizedImage = useOptimizedImage(currentSrc, options);

  return {
    ...optimizedImage,
    breakpoint: currentBreakpoint,
  };
}

// Hook for WebP support detection
export function useWebPSupport() {
  const [supportsWebP, setSupportsWebP] = useState<boolean | null>(null);

  useEffect(() => {
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      
      const dataURL = canvas.toDataURL('image/webp');
      setSupportsWebP(dataURL.indexOf('data:image/webp') === 0);
    };

    checkWebPSupport();
  }, []);

  return supportsWebP;
}