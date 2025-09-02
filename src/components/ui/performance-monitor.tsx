import * as React from 'react';
import { cn } from '@/lib/design-system';

interface PerformanceMonitorProps {
  enabled?: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

interface PerformanceMetrics {
  fps: number;
  memory: number;
  loadTime: number;
  paintTime: number;
}

export function PerformanceMonitor({ 
  enabled = process.env.NODE_ENV === 'development',
  position = 'top-right' 
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics>({
    fps: 0,
    memory: 0,
    loadTime: 0,
    paintTime: 0,
  });
  const [isVisible, setIsVisible] = React.useState(false);
  const frameRef = React.useRef(0);
  const lastTimeRef = React.useRef(performance.now());
  const framesRef = React.useRef(0);

  // FPS calculation
  React.useEffect(() => {
    if (!enabled) return;

    const calculateFPS = () => {
      const now = performance.now();
      framesRef.current++;

      if (now - lastTimeRef.current >= 1000) {
        const fps = Math.round(framesRef.current * 1000 / (now - lastTimeRef.current));
        
        setMetrics(prev => ({
          ...prev,
          fps,
          memory: (performance as any).memory?.usedJSHeapSize 
            ? Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024)
            : 0,
        }));

        framesRef.current = 0;
        lastTimeRef.current = now;
      }

      frameRef.current = requestAnimationFrame(calculateFPS);
    };

    frameRef.current = requestAnimationFrame(calculateFPS);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [enabled]);

  // Load time and paint metrics
  React.useEffect(() => {
    if (!enabled) return;

    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as any;
      const paint = performance.getEntriesByType('paint');
      
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          loadTime: Math.round(navigation.loadEventEnd - navigation.fetchStart),
        }));
      }

      if (paint.length > 0) {
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
        if (fcp) {
          setMetrics(prev => ({
            ...prev,
            paintTime: Math.round(fcp.startTime),
          }));
        }
      }
    };

    // Wait for page load
    if (document.readyState === 'complete') {
      updateMetrics();
    } else {
      window.addEventListener('load', updateMetrics);
      return () => window.removeEventListener('load', updateMetrics);
    }
  }, [enabled]);

  if (!enabled) return null;

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  const getFPSColor = (fps: number) => {
    if (fps >= 55) return 'text-green-500';
    if (fps >= 30) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className={cn(
      'fixed z-50 bg-black/80 text-white rounded-lg backdrop-blur-sm',
      positionClasses[position]
    )}>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-3 py-2 text-xs font-mono hover:bg-white/10 rounded-lg transition-colors"
      >
        {isVisible ? '📊 Hide' : '📊 Perf'}
      </button>

      {isVisible && (
        <div className="absolute top-full mt-2 right-0 bg-black/90 rounded-lg p-3 min-w-48 backdrop-blur-sm border border-white/10">
          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between">
              <span>FPS:</span>
              <span className={getFPSColor(metrics.fps)}>{metrics.fps}</span>
            </div>
            
            {metrics.memory > 0 && (
              <div className="flex justify-between">
                <span>Memory:</span>
                <span className="text-blue-400">{metrics.memory}MB</span>
              </div>
            )}
            
            {metrics.loadTime > 0 && (
              <div className="flex justify-between">
                <span>Load:</span>
                <span className="text-purple-400">{metrics.loadTime}ms</span>
              </div>
            )}
            
            {metrics.paintTime > 0 && (
              <div className="flex justify-between">
                <span>FCP:</span>
                <span className="text-orange-400">{metrics.paintTime}ms</span>
              </div>
            )}

            <div className="pt-2 mt-2 border-t border-white/20">
              <div className="text-xs text-white/60">
                {navigator.userAgent.includes('Chrome') ? 'Chrome' : 
                 navigator.userAgent.includes('Firefox') ? 'Firefox' : 
                 navigator.userAgent.includes('Safari') ? 'Safari' : 'Unknown'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Hook for performance monitoring
export function usePerformanceMonitor() {
  const [metrics, setMetrics] = React.useState({
    renderTime: 0,
    reRenderCount: 0,
  });

  const renderCountRef = React.useRef(0);
  const renderStartRef = React.useRef(0);

  React.useEffect(() => {
    renderCountRef.current++;
    setMetrics(prev => ({
      ...prev,
      reRenderCount: renderCountRef.current,
    }));
  });

  const startRenderMeasure = React.useCallback(() => {
    renderStartRef.current = performance.now();
  }, []);

  const endRenderMeasure = React.useCallback(() => {
    if (renderStartRef.current > 0) {
      const renderTime = performance.now() - renderStartRef.current;
      setMetrics(prev => ({
        ...prev,
        renderTime: Math.round(renderTime * 100) / 100,
      }));
    }
  }, []);

  return {
    metrics,
    startRenderMeasure,
    endRenderMeasure,
  };
}