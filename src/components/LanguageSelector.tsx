import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/translations';

const LanguageSelector = () => {
  // Default values for when context is not available
  let language: Language = 'en';
  let setLanguage = (lang: Language) => {
    console.warn('Language context not available, language change ignored');
  };

  // Try to use context with fallback
  try {
    const context = useLanguage();
    language = context.language;
    setLanguage = context.setLanguage;
  } catch (error) {
    console.warn('Language context not available, using fallback');
  }

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'ig' as Language, name: 'Igbo', flag: '🇳🇬' },
    { code: 'yo' as Language, name: 'Yorùbá', flag: '🇳🇬' },
    { code: 'ha' as Language, name: 'Hausa', flag: '🇳🇬' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Languages className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage?.flag} {currentLanguage?.name}</span>
          <span className="sm:hidden">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-2 ${
              language === lang.code ? 'bg-petalz-gold/10 text-petalz-gold' : ''
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;