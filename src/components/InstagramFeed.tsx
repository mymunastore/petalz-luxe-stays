import { useState, useEffect } from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';
import { analytics } from '@/utils/analytics';

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In production, you would fetch from Instagram Basic Display API
    // For now, we'll use mock data that represents typical hotel posts
    const fetchInstagramPosts = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock Instagram posts data
      const mockPosts: InstagramPost[] = [
        {
          id: '1',
          caption: '✨ Experience luxury at its finest in our Studio Executive rooms. Perfect for business travelers who want comfort and style. Book now! #PetalzHome #LuxuryStay #Uyo',
          media_url: '/assets/studio-room.jpg',
          permalink: 'https://instagram.com/petalzhome',
          timestamp: '2024-01-10T10:00:00Z',
          like_count: 245,
          comments_count: 18
        },
        {
          id: '2',
          caption: '🍸 Unwind at Langkawi Lounge with our signature cocktails and stunning ambiance. The perfect spot for evening relaxation! #LangkawiLounge #Cocktails #NightLife',
          media_url: '/assets/langkawi-lounge.jpg',
          permalink: 'https://instagram.com/petalzhome',
          timestamp: '2024-01-08T18:30:00Z',
          like_count: 189,
          comments_count: 12
        },
        {
          id: '3',
          caption: '🏠 Our One Bedroom Apartments offer the perfect blend of comfort and elegance. Fully equipped kitchen, spacious living area, and premium amenities await you! #OneBedroomApartment #HomeAwayFromHome',
          media_url: '/assets/one-bedroom.jpg',
          permalink: 'https://instagram.com/petalzhome',
          timestamp: '2024-01-06T14:15:00Z',
          like_count: 312,
          comments_count: 25
        },
        {
          id: '4',
          caption: '🌟 Self Contained Suites designed for the modern traveler. Every detail crafted to ensure your comfort and satisfaction. #SelfContainedSuite #ModernLiving #PetalzExperience',
          media_url: '/assets/suite-room.jpg',
          permalink: 'https://instagram.com/petalzhome',
          timestamp: '2024-01-04T12:00:00Z',
          like_count: 156,
          comments_count: 9
        },
        {
          id: '5',
          caption: '🏢 Welcome to Petalz Home - where luxury meets comfort in the heart of Uyo. Your home away from home awaits! #WelcomeToPetalzHome #LuxuryHotel #Uyo',
          media_url: '/assets/hero-building.jpg',
          permalink: 'https://instagram.com/petalzhome',
          timestamp: '2024-01-02T09:00:00Z',
          like_count: 428,
          comments_count: 35
        },
        {
          id: '6',
          caption: '✂️ Treat yourself at our in-house salon! Professional styling services available for all our guests. Look and feel your best during your stay. #InHouseSalon #Beauty #Grooming',
          media_url: '/assets/studio-room.jpg', // Placeholder - in real app would be salon image
          permalink: 'https://instagram.com/petalzhome',
          timestamp: '2023-12-30T16:20:00Z',
          like_count: 198,
          comments_count: 14
        }
      ];
      
      setPosts(mockPosts);
      setLoading(false);
    };

    fetchInstagramPosts();
  }, []);

  const handlePostClick = (post: InstagramPost) => {
    analytics.socialMediaClick('instagram');
    window.open(post.permalink, '_blank', 'noopener,noreferrer');
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const truncateCaption = (caption: string, maxLength: number = 100) => {
    if (caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength).trim() + '...';
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-b from-background to-petalz-gray/10">
        <div className="petalz-container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Follow Us on <span className="petalz-gradient-text">Instagram</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="petalz-card animate-pulse">
                <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-background to-petalz-gray/10">
      <div className="petalz-container">
        {/* Header */}
        <div className="text-center mb-12 scroll-reveal">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-6">
            <Instagram className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Follow Us on <span className="petalz-gradient-text">Instagram</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Get a glimpse of the luxury experience awaiting you. Follow our journey and stay updated with our latest offerings.
          </p>
          
          <Button 
            onClick={() => {
              analytics.socialMediaClick('instagram');
              window.open('https://instagram.com/petalzhome', '_blank', 'noopener,noreferrer');
            }}
            className="petalz-btn-primary inline-flex items-center space-x-2"
          >
            <Instagram className="h-5 w-5" />
            <span>Follow @petalzhome</span>
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post, index) => (
            <div 
              key={post.id}
              className="scroll-reveal petalz-card hover:shadow-xl cursor-pointer group transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handlePostClick(post)}
            >
              {/* Image */}
              <div className="aspect-square rounded-lg overflow-hidden mb-4 relative">
                <LazyImage
                  src={post.media_url}
                  alt="Instagram post"
                  className="w-full h-full"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Instagram className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">View on Instagram</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {truncateCaption(post.caption)}
                </p>
                
                {/* Engagement stats */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>{post.like_count}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MessageCircle className="h-3 w-3" />
                      <span>{post.comments_count}</span>
                    </span>
                  </div>
                  <span>{formatDate(post.timestamp)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="text-center scroll-reveal bg-gradient-to-r from-petalz-gold/5 to-transparent p-8 rounded-2xl border border-petalz-gold/10">
          <h3 className="font-heading text-2xl font-bold mb-4">
            Share Your Petalz Experience
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Tag us @petalzhome in your posts and use #PetalzExperience for a chance to be featured!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                analytics.socialMediaClick('instagram');
                window.open('https://instagram.com/petalzhome', '_blank', 'noopener,noreferrer');
              }}
              className="petalz-btn-primary"
            >
              Follow Us
            </Button>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline" 
              className="border-petalz-gold text-petalz-gold hover:bg-petalz-gold hover:text-petalz-black"
            >
              Book Your Stay
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;