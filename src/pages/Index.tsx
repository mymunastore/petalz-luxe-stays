import { lazy, Suspense } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useAnimationOnScroll } from '@/hooks/useIntersectionObserver';

// Lazy load sections for better performance
const AboutSection = lazy(() => import('@/components/AboutSection'));
const RoomsSection = lazy(() => import('@/components/RoomsSection'));
const AmenitiesSection = lazy(() => import('@/components/AmenitiesSection'));
const LangkawiSection = lazy(() => import('@/components/LangkawiSection'));
const MenuSection = lazy(() => import('@/components/MenuSection'));
const GallerySection = lazy(() => import('@/components/GallerySection'));
const ReviewsSection = lazy(() => import('@/components/ReviewsSection'));
const NewsletterSection = lazy(() => import('@/components/NewsletterSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <LoadingSpinner size="lg" />
  </div>
);

const Index = () => {
  // Use the custom hook for scroll animations
  useAnimationOnScroll('.scroll-reveal', {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <RoomsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <AmenitiesSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <LangkawiSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <MenuSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <GallerySection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ReviewsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <NewsletterSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </main>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;