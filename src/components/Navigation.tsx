import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import petalzLogo from '@/assets/petalz-official-logo.png';

const Navigation = () => {
  // Fallback function for translations when context is not available
  const fallbackT = (key: string): string => {
    const fallbackTranslations: Record<string, string> = {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.rooms': 'Rooms',
      'nav.amenities': 'Amenities',
      'nav.lounge': 'Lounge',
      'nav.menu': 'Menu',
      'nav.gallery': 'Gallery',
      'nav.reviews': 'Reviews',
      'nav.contact': 'Contact'
    };
    return fallbackTranslations[key] || key;
  };

  // Use context with fallback
  let t = fallbackT;
  try {
    const context = useLanguage();
    t = context.t;
  } catch (error) {
    console.warn('Language context not available, using fallback translations');
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: t('nav.home'), id: 'hero' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.rooms'), id: 'rooms' },
    { label: t('nav.amenities'), id: 'amenities' },
    { label: t('nav.lounge'), id: 'lounge' },
    { label: t('nav.menu'), id: 'menu' },
    { label: t('nav.gallery'), id: 'gallery' },
    { label: t('nav.reviews'), id: 'reviews' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="petalz-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={petalzLogo} alt="Petalz Home" className="h-12 w-auto rounded-lg" />
            <div className="hidden sm:block">
              <h1 className="font-heading text-xl font-bold petalz-gradient-text">
                Petalz Home
              </h1>
              <p className="text-xs text-muted-foreground">Langkawi Lounge, Bar & Café</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle, Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <LanguageSelector />
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t shadow-soft">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;