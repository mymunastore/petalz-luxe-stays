import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348144257874?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const quickMessages = [
    "Hi! I'd like to check room availability.",
    "What are your current room rates?", 
    "I need help with booking a room.",
    "Can I get directions to Petalz Home?",
    "Tell me about your amenities."
  ];

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          size="icon"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <MessageCircle className="h-6 w-6 text-white" />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[calc(100vw-3rem)]">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-scale-in">
            {/* Header */}
            <div className="bg-green-500 p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Petalz Home Support</h3>
                  <p className="text-sm opacity-90">Online now</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 max-h-80 overflow-y-auto">
              <div className="space-y-3">
                {/* Welcome Message */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    👋 Welcome to Petalz Home! How can we help you today?
                  </p>
                </div>

                {/* Quick Replies */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 font-medium">Quick replies:</p>
                  {quickMessages.map((message, index) => (
                    <button
                      key={index}
                      onClick={() => handleWhatsAppClick(message)}
                      className="w-full text-left p-2 text-sm bg-gray-50 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors duration-200 border border-transparent hover:border-green-200 dark:hover:border-green-700"
                    >
                      {message}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <Button
                onClick={() => handleWhatsAppClick("Hi! I'd like to speak with customer support.")}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Start WhatsApp Chat
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;