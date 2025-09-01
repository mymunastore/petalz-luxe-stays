import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, Gift } from 'lucide-react';
import LoadingSpinner from '@/components/LoadingSpinner';

const NewsletterSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address.",
          variant: "destructive"
        });
        return;
      }

      // Simulate newsletter signup (in real app, this would call an API)
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Welcome to Petalz Home!",
        description: "You've been subscribed! Check your email for exclusive offers.",
      });

      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-petalz-gold/10 via-petalz-gold/5 to-transparent">
      <div className="petalz-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-petalz-gold/10 rounded-full mb-6">
              <Gift className="h-8 w-8 text-petalz-gold" />
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with <span className="petalz-gradient-text">Exclusive Offers</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our newsletter and be the first to know about special promotions, 
              seasonal discounts, and new amenities at Petalz Home.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="petalz-btn-primary h-12 px-8 whitespace-nowrap disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    Subscribing...
                  </>
                ) : (
                  'Subscribe Now'
                )}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-4">
              🎁 New subscribers get 10% off their first booking!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;