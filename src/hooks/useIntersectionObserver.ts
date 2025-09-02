import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px 0px -50px 0px',
    freezeOnceVisible = false,
    triggerOnce = true,
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    if (frozen) return;
    
    setEntry(entry);
    setIsVisible(entry.isIntersecting);
    
    if (entry.isIntersecting && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(updateEntry, {
      threshold,
      root,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, frozen]);

  // Cleanup when triggerOnce is true and element has been visible
  useEffect(() => {
    if (triggerOnce && hasBeenVisible && elementRef.current) {
      const observer = new IntersectionObserver(() => {});
      observer.disconnect();
    }
  }, [triggerOnce, hasBeenVisible]);

  return {
    ref: elementRef,
    entry,
    isVisible: triggerOnce ? hasBeenVisible || isVisible : isVisible,
    hasBeenVisible,
  };
}

// Specialized hook for animations
export function useAnimationOnScroll(
  animationClass: string = 'animate-fade-in-up',
  options: UseIntersectionObserverOptions = {}
) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  });

  return {
    ref,
    className: isVisible ? animationClass : 'opacity-0 translate-y-4',
    isVisible,
  };
}

// Hook for staggered animations
export function useStaggeredAnimations(
  count: number,
  delay: number = 100,
  options: UseIntersectionObserverOptions = {}
) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  });

  const staggerClasses = Array.from({ length: count }, (_, index) => ({
    className: isVisible 
      ? `animate-fade-in-up` 
      : 'opacity-0 translate-y-4',
    style: isVisible 
      ? { animationDelay: `${index * delay}ms` } 
      : {},
  }));

  return {
    ref,
    staggerClasses,
    isVisible,
  };
}