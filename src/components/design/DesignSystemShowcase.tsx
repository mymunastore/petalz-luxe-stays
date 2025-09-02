import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/enhanced-card';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { PerformanceMonitor } from '@/components/ui/performance-monitor';
import { useAnimationOnScroll, useStaggeredAnimations } from '@/hooks/useIntersectionObserver';
import { cn, tokens, designUtils, animationUtils } from '@/lib/design-system';
import { Palette, Zap, Layout, MousePointer, Eye, Layers } from 'lucide-react';

interface DesignShowcaseProps {
  className?: string;
}

export function DesignSystemShowcase({ className }: DesignShowcaseProps) {
  const { ref: headerRef, className: headerAnimation } = useAnimationOnScroll();
  const { ref: cardsRef, staggerClasses } = useStaggeredAnimations(6, 150);

  return (
    <div className={cn('petalz-section', className)}>
      <PerformanceMonitor />
      
      {/* Header */}
      <div ref={headerRef as any} className={cn('text-center mb-16', headerAnimation)}>
        <h2 className="text-display text-6xl mb-6 petalz-gradient-text">
          Design System
        </h2>
        <p className="text-xl text-petalz-gray-medium max-w-3xl mx-auto">
          A comprehensive design system optimized for performance, accessibility, and beautiful user experiences.
        </p>
      </div>

      {/* Feature Grid */}
      <div ref={cardsRef as any} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {/* Colors */}
        <Card 
          variant="premium" 
          className={cn(staggerClasses[0]?.className)} 
          style={staggerClasses[0]?.style}
        >
          <CardHeader align="center">
            <Palette className="h-12 w-12 text-petalz-gold mb-4" />
            <CardTitle size="lg" gradient="gold">Colors</CardTitle>
            <CardDescription>
              Sophisticated HSL color palette with semantic tokens and accessibility compliance.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-5 gap-2">
              {Object.entries(tokens.colors).slice(0, 10).map(([name, value]) => (
                <div key={name} className="text-center">
                  <div 
                    className="w-8 h-8 rounded-full border-2 border-white shadow-soft mx-auto mb-1"
                    style={{ backgroundColor: value }}
                  />
                  <span className="text-xs text-petalz-gray-medium">{name.replace('petalz-', '')}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance */}
        <Card 
          variant="elegant" 
          className={cn(staggerClasses[1]?.className)} 
          style={staggerClasses[1]?.style}
        >
          <CardHeader align="center">
            <Zap className="h-12 w-12 text-petalz-gold mb-4" />
            <CardTitle size="lg" gradient="champagne">Performance</CardTitle>
            <CardDescription>
              Optimized animations, lazy loading, and GPU acceleration for smooth experiences.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Bundle Size</span>
                <span className="text-sm font-semibold text-green-600">Optimized</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">GPU Acceleration</span>
                <span className="text-sm font-semibold text-green-600">Enabled</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Lazy Loading</span>
                <span className="text-sm font-semibold text-green-600">Active</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Layout */}
        <Card 
          variant="default" 
          className={cn(staggerClasses[2]?.className)} 
          style={staggerClasses[2]?.style}
        >
          <CardHeader align="center">
            <Layout className="h-12 w-12 text-petalz-gold mb-4" />
            <CardTitle size="lg">Layout System</CardTitle>
            <CardDescription>
              Responsive grids, flexible containers, and consistent spacing utilities.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-petalz-gold/20 h-6 rounded"></div>
              <div className="bg-petalz-gold/30 h-6 rounded"></div>
              <div className="bg-petalz-gold/40 h-6 rounded"></div>
              <div className="bg-petalz-gold/30 h-4 rounded col-span-2"></div>
              <div className="bg-petalz-gold/20 h-4 rounded"></div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive */}
        <Card 
          variant="premium" 
          className={cn(staggerClasses[3]?.className)} 
          style={staggerClasses[3]?.style}
        >
          <CardHeader align="center">
            <MousePointer className="h-12 w-12 text-petalz-gold mb-4" />
            <CardTitle size="lg" gradient="gold">Interactive</CardTitle>
            <CardDescription>
              Smooth hover effects, focus states, and accessible interactions.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-3">
            <Button variant="primary" size="sm" className="w-full">
              Primary Action
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Secondary Action
            </Button>
            <Button variant="elegant" size="sm" className="w-full">
              Elegant Style
            </Button>
          </CardContent>
        </Card>

        {/* Accessibility */}
        <Card 
          variant="elegant" 
          className={cn(staggerClasses[4]?.className)} 
          style={staggerClasses[4]?.style}
        >
          <CardHeader align="center">
            <Eye className="h-12 w-12 text-petalz-gold mb-4" />
            <CardTitle size="lg" gradient="champagne">Accessibility</CardTitle>
            <CardDescription>
              WCAG compliant colors, keyboard navigation, and screen reader support.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Color Contrast</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AAA</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Keyboard Nav</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Full</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Screen Reader</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Ready</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Components */}
        <Card 
          variant="default" 
          className={cn(staggerClasses[5]?.className)} 
          style={staggerClasses[5]?.style}
        >
          <CardHeader align="center">
            <Layers className="h-12 w-12 text-petalz-gold mb-4" />
            <CardTitle size="lg">Components</CardTitle>
            <CardDescription>
              Reusable, customizable components with consistent styling and behavior.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-petalz-gray/20 p-2 rounded text-center">Cards</div>
              <div className="bg-petalz-gray/20 p-2 rounded text-center">Buttons</div>
              <div className="bg-petalz-gray/20 p-2 rounded text-center">Forms</div>
              <div className="bg-petalz-gray/20 p-2 rounded text-center">Images</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Color Palette */}
      <div className="mb-20">
        <h3 className="text-heading text-3xl mb-8 text-center">Color Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {Object.entries(tokens.colors).map(([name, value]) => (
            <div key={name} className="text-center">
              <div 
                className="w-20 h-20 rounded-2xl shadow-medium hover:shadow-elegant transition-shadow duration-300 mx-auto mb-3 border-2 border-white"
                style={{ backgroundColor: value }}
              />
              <h4 className="font-heading font-medium text-sm mb-1">
                {name.replace('petalz-', '').replace('-', ' ')}
              </h4>
              <p className="text-xs text-petalz-gray-medium font-mono">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div className="mb-20">
        <h3 className="text-heading text-3xl mb-8 text-center">Typography</h3>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div>
            <h1 className="text-display text-6xl mb-2">Display Heading</h1>
            <p className="text-sm text-petalz-gray-medium">Cormorant Garamond - Display font</p>
          </div>
          <div>
            <h2 className="text-heading text-4xl mb-2">Section Heading</h2>
            <p className="text-sm text-petalz-gray-medium">Crimson Text - Heading font</p>
          </div>
          <div>
            <p className="text-base mb-2">
              This is body text using the Inter font family. It provides excellent readability 
              and works well across all devices and screen sizes.
            </p>
            <p className="text-sm text-petalz-gray-medium">Inter - Body font</p>
          </div>
        </div>
      </div>

      {/* Buttons Showcase */}
      <div>
        <h3 className="text-heading text-3xl mb-8 text-center">Button Variants</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" size="lg">Primary</Button>
          <Button variant="premium" size="lg">Premium</Button>
          <Button variant="elegant" size="lg">Elegant</Button>
          <Button variant="outline" size="lg">Outline</Button>
          <Button variant="secondary" size="lg">Secondary</Button>
          <Button variant="ghost" size="lg">Ghost</Button>
        </div>
      </div>
    </div>
  );
}

export default DesignSystemShowcase;