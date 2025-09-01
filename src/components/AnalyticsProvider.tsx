import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, initFacebookPixel, trackPageView, trackPerformance } from '@/utils/analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize analytics on first load
    initGA();
    initFacebookPixel();
    trackPerformance();
  }, []);

  useEffect(() => {
    // Track page views on route changes
    const title = document.title;
    trackPageView(location.pathname, title);
  }, [location]);

  // Add global error tracking
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Global error:', event.error);
      // Track errors in analytics (in production)
      if (process.env.NODE_ENV === 'production') {
        import('@/utils/analytics').then(({ analytics }) => {
          analytics.errorOccurred(
            event.error?.message || 'Unknown error',
            'global_error_handler'
          );
        });
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      if (process.env.NODE_ENV === 'production') {
        import('@/utils/analytics').then(({ analytics }) => {
          analytics.errorOccurred(
            event.reason?.message || 'Unhandled promise rejection',
            'promise_rejection'
          );
        });
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;