import * as React from 'react';
import { cn } from '@/lib/design-system';
import { useOptimizedImage, useWebPSupport } from '@/hooks/useOptimizedImage';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  webpSrc?: string;
  fallbackSrc?: string;
  aspectRatio?: 'square' | 'video' | 'photo' | 'wide' | string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  shadow?: 'none' | 'soft' | 'medium' | 'large' | 'elegant' | 'gold' | 'premium';
  hover?: 'none' | 'scale' | 'lift' | 'glow';
  lazy?: boolean;
  onLoadComplete?: () => void;
  onError?: () => void;
}

const aspectRatioMap = {
  square: 'aspect-square',
  video: 'aspect-video',
  photo: 'aspect-[4/3]',
  wide: 'aspect-[16/9]',
};

const objectFitMap = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
  none: 'object-none',
  'scale-down': 'object-scale-down',
};

const roundedMap = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
};

const shadowMap = {
  none: '',
  soft: 'shadow-soft',
  medium: 'shadow-medium',
  large: 'shadow-large',
  elegant: 'shadow-elegant',
  gold: 'shadow-gold',
  premium: 'shadow-premium',
};

const hoverMap = {
  none: '',
  scale: 'hover:scale-105 transition-transform duration-300',
  lift: 'hover:-translate-y-2 transition-transform duration-300',
  glow: 'hover:shadow-gold transition-shadow duration-300',
};

const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({
    src,
    alt,
    width,
    height,
    quality = 90,
    priority = false,
    placeholder = 'empty',
    blurDataURL,
    sizes,
    webpSrc,
    fallbackSrc,
    aspectRatio,
    objectFit = 'cover',
    rounded = 'none',
    shadow = 'none',
    hover = 'none',
    lazy = true,
    className,
    onLoadComplete,
    onError,
    ...props
  }, ref) => {
    const supportsWebP = useWebPSupport();
    const { ref: intersectionRef, isVisible } = useIntersectionObserver({
      triggerOnce: true,
    });

    // Determine the source to use
    const imageSrc = React.useMemo(() => {
      if (supportsWebP && webpSrc) return webpSrc;
      return src;
    }, [supportsWebP, webpSrc, src]);

    const shouldLoad = priority || !lazy || isVisible;

    const {
      src: optimizedSrc,
      isLoading,
      hasError,
      reload,
    } = useOptimizedImage(shouldLoad ? imageSrc : '', {
      placeholder: blurDataURL,
      loadingStrategy: priority ? 'eager' : 'lazy',
      onLoad: onLoadComplete,
      onError: onError,
    });

    // Handle error fallback
    const finalSrc = hasError && fallbackSrc ? fallbackSrc : optimizedSrc;

    const imageClasses = cn(
      'transition-all duration-300',
      aspectRatio && (aspectRatioMap[aspectRatio as keyof typeof aspectRatioMap] || aspectRatio),
      objectFitMap[objectFit],
      roundedMap[rounded],
      shadowMap[shadow],
      hoverMap[hover],
      isLoading && 'animate-pulse bg-petalz-gray/20',
      className
    );

    const containerClasses = cn(
      'relative overflow-hidden',
      roundedMap[rounded],
      aspectRatio && 'block'
    );

    // Combine refs
    const combinedRef = React.useCallback((node: HTMLImageElement) => {
      intersectionRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [intersectionRef, ref]);

    return (
      <div className={containerClasses}>
        {/* Placeholder/Loading state */}
        {isLoading && placeholder === 'blur' && (
          <div className={cn(
            'absolute inset-0 bg-petalz-gray/10 backdrop-blur-sm',
            roundedMap[rounded]
          )}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-petalz-gold border-t-transparent rounded-full animate-spin" />
            </div>
          </div>
        )}

        {/* Main image */}
        <img
          ref={combinedRef}
          src={finalSrc}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className={imageClasses}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          {...props}
        />

        {/* Error state */}
        {hasError && !fallbackSrc && (
          <div className={cn(
            'absolute inset-0 bg-petalz-gray/10 flex items-center justify-center',
            roundedMap[rounded]
          )}>
            <div className="text-center">
              <div className="text-petalz-gray-medium text-sm mb-2">Failed to load image</div>
              <button
                onClick={reload}
                className="text-xs text-petalz-gold hover:text-petalz-gold-light transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

OptimizedImage.displayName = 'OptimizedImage';

export { OptimizedImage };