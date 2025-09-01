import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Utensils, Coffee, Wine, Soup, Pizza, Sandwich, ChefHat } from 'lucide-react';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('proteins');

  const menuData = {
    proteins: {
      icon: ChefHat,
      title: "Proteins",
      items: [
        { name: "Peppered Goat Meat", price: "5,999" },
        { name: "Peppered Catfish", price: "6,999" },
        { name: "Peppered Beef", price: "5,999" },
        { name: "Peppered Chicken", price: "5,999" },
        { name: "Peppered Turkey", price: "9,999" },
        { name: "Peppered Snail", price: "5,999" },
        { name: "Peppered Gizzard", price: "5,999" },
        { name: "Nkworbi", price: "6,999" },
        { name: "Isi-Ewu", price: "7,999" },
        { name: "Mangala", price: "9,999" },
        { name: "Grilled Turkey", price: "9,999" },
        { name: "Grilled Tilapia", price: "9,999" },
        { name: "Grilled Croacker Fish", price: "14,999" },
        { name: "Grilled Chicken", price: "14,999" },
        { name: "Grilled Prawns", price: "9,999" },
        { name: "Turkey Wings", price: "9,999" },
        { name: "Grilled Catfish", price: "14,999" },
        { name: "Grilled Catfish (Big Size)", price: "19,999", featured: true },
        { name: "Extra Slice of Beef", price: "1,499" }
      ]
    },
    bowls: {
      icon: Utensils,
      title: "The Radiance Bowls",
      items: [
        { name: "Basmati Rice (White)", price: "4,999" },
        { name: "White & Pepper Soup", price: "9,999" },
        { name: "Dirty Rice", price: "11,999", featured: true },
        { name: "Jollof Rice", price: "4,999" },
        { name: "Oriental Rice", price: "9,999" },
        { name: "Fried Rice", price: "5,999" },
        { name: "White Rice & Stew", price: "8,999" },
        { name: "Coconut Rice", price: "6,999" },
        { name: "White Rice & Egg Sauce", price: "6,999" },
        { name: "Chinese Fried Rice", price: "9,999" },
        { name: "Gizdodo", price: "9,999" },
        { name: "Plantain Porridge", price: "8,999" },
        { name: "Plantain Frittata", price: "5,999" },
        { name: "Seafood Plantain Porridge", price: "11,999" },
        { name: "Smokey Party Rice", price: "4,999" },
        { name: "Suya Rice", price: "5,999" },
        { name: "Yam Porridge", price: "8,999" },
        { name: "Native Rice with Protein", price: "7,999" },
        { name: "Ekpangkukwo", price: "7,999" }
      ]
    },
    sides: {
      icon: Pizza,
      title: "The Petalz Side",
      items: [
        { name: "Sea Food Platter", price: "39,999", featured: true },
        { name: "Langkawi Hot Pot", price: "49,999", featured: true },
        { name: "Nigerian Platter", price: "49,999", featured: true },
        { name: "King Prawns", price: "19,999" },
        { name: "Petalz Salad", price: "9,999" },
        { name: "Shrimps", price: "9,999" },
        { name: "Abacha", price: "7,999" },
        { name: "Mashed Potatoes", price: "6,999" },
        { name: "Shrimp Spring Roll", price: "4,999" },
        { name: "Chicken Drumsticks", price: "3,999" },
        { name: "Roasted Plantain", price: "3,000" },
        { name: "Sweet Potato Fries", price: "2,999" },
        { name: "Yam Fries", price: "1,999" },
        { name: "Fried Plantain", price: "1,999" },
        { name: "Plantain", price: "1,999" }
      ]
    },
    pasta: {
      icon: Utensils,
      title: "Pasta",
      items: [
        { name: "Spaghetti Bolognese", price: "6,999" },
        { name: "Jellof Pasta", price: "5,999" },
        { name: "Seafood Pasta", price: "5,999" },
        { name: "Carbonara Pasta", price: "4,999" },
        { name: "Pasta Arrabiata", price: "4,999" },
        { name: "Pasta for Cheese", price: "4,999" },
        { name: "Penne Alfredo", price: "4,999" },
        { name: "Pesto Pasta", price: "4,999" }
      ]
    },
    soups: {
      icon: Soup,
      title: "Nigerian Soup & Pepper Soup",
      items: [
        { name: "Fisherman's Catch", price: "14,999", featured: true },
        { name: "Seafood Okra", price: "14,999", featured: true },
        { name: "Turkey Pepper Soup", price: "9,999" },
        { name: "Catfish Pepper Soup", price: "6,999" },
        { name: "Assorted Pepper Soup", price: "5,999" },
        { name: "Goat Meat Pepper Soup", price: "5,999" },
        { name: "Chicken Pepper Soup", price: "5,999" },
        { name: "Afang Delight", price: "3,999" },
        { name: "Egusi Royale", price: "3,999" },
        { name: "Oha Soup", price: "3,999" },
        { name: "Ogbono Bisque", price: "3,999" },
        { name: "White Soup", price: "3,999" },
        { name: "Okro Soup", price: "3,999" },
        { name: "Vegetable Soup", price: "3,999" },
        { name: "Bitterleaf Broth", price: "2,999" }
      ]
    },
    snacks: {
      icon: Sandwich,
      title: "Snacks & Sandwiches",
      items: [
        { name: "Special Cake", price: "19,999", featured: true },
        { name: "Sandwich", price: "7,999" },
        { name: "Pancake & Egg", price: "7,999" },
        { name: "Special Shawarma", price: "5,999" },
        { name: "Small Chops", price: "4,999" },
        { name: "Classic Burger", price: "4,999" },
        { name: "Suya Sandwich", price: "4,999" },
        { name: "Cheese Burger", price: "3,999" },
        { name: "Chicken Burger", price: "3,999" },
        { name: "Egg Roll", price: "999" },
        { name: "Fish Pie", price: "999" },
        { name: "Pop Corn", price: "999" }
      ]
    },
    beverages: {
      icon: Coffee,
      title: "Beverages",
      items: [
        { name: "Chinese Lemon Tea", price: "10,000" },
        { name: "Chinese Tea with Lime", price: "7,999" },
        { name: "Mix Fruit Smoothie", price: "6,999" },
        { name: "Chinese Tea", price: "5,999" },
        { name: "Fruit Punch", price: "5,999" },
        { name: "Banana Smoothie", price: "5,999" },
        { name: "Pineapple Smoothie", price: "5,999" },
        { name: "Water Melon Smoothie", price: "5,999" },
        { name: "Water Melon Fresh Juice", price: "4,999" },
        { name: "Pineapple Fresh Juice", price: "4,999" },
        { name: "Apple Fresh Juice", price: "4,999" },
        { name: "Ginger and Honey Tea", price: "4,999" },
        { name: "Green Tea", price: "4,999" },
        { name: "Lemon Grass Tea", price: "4,999" },
        { name: "Ginger and Green Tea", price: "4,999" },
        { name: "Orange Fresh Juice", price: "3,999" },
        { name: "Coffee", price: "3,999" }
      ]
    },
    spirits: {
      icon: Wine,
      title: "Premium Spirits",
      items: [
        { name: "Macallan 18 Years", price: "1,246,000", featured: true },
        { name: "Glenfiddich 21 Years", price: "569,999", featured: true },
        { name: "Macallan 15 Years", price: "510,999" },
        { name: "Glenfiddich 18 Years", price: "234,999" },
        { name: "Macallan 12 Years", price: "189,999" },
        { name: "Glenfiddich 15 Years", price: "174,999" },
        { name: "Monkey Shoulder Big", price: "129,999" },
        { name: "Glenfiddich 12 Years", price: "119,999" },
        { name: "Hennesy V.S", price: "99,999" },
        { name: "Monkey Shoulder", price: "89,999" },
        { name: "Jameson Black Barrel", price: "69,999" },
        { name: "Jameson Green", price: "49,999" },
        { name: "Jack Daniels", price: "49,999" },
        { name: "Baileys Irish Cream", price: "39,999" },
        { name: "Glen Silver", price: "39,999" },
        { name: "Wild Turkey 101", price: "39,999" },
        { name: "Claymore", price: "34,999" },
        { name: "Wild Turkey Bourbon", price: "34,999" },
        { name: "Golden Margarita", price: "34,999" },
        { name: "Campari Big", price: "34,999" },
        { name: "Mateus", price: "29,999" },
        { name: "Red Label", price: "29,999" },
        { name: "Campari Small", price: "24,999" },
        { name: "William Lawson", price: "19,999" }
      ]
    }
  };

  const categories = Object.keys(menuData);

  return (
    <section id="menu" className="petalz-section bg-gradient-to-b from-background to-muted/20">
      <div className="petalz-container">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="petalz-gradient-text">Langkawi</span> Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our exquisite selection of authentic Nigerian cuisine, international dishes, 
            and premium beverages crafted with passion and served with excellence.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-reveal">
          {categories.map((category) => {
            const categoryData = menuData[category as keyof typeof menuData];
            const IconComponent = categoryData.icon;
            const isActive = activeCategory === category;
            
            return (
              <Button
                key={category}
                variant={isActive ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-medium transition-all duration-300 ${
                  isActive 
                    ? "petalz-btn-primary scale-105" 
                    : "border-border hover:border-primary/50 hover:bg-primary/10"
                }`}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {categoryData.title}
              </Button>
            );
          })}
        </div>

        {/* Menu Items */}
        <div className="scroll-reveal">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="font-heading text-2xl md:text-3xl text-foreground flex items-center justify-center gap-3">
                {(() => {
                  const IconComponent = menuData[activeCategory as keyof typeof menuData].icon;
                  return <IconComponent className="h-8 w-8 text-primary" />;
                })()}
                {menuData[activeCategory as keyof typeof menuData].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:gap-6">
                {menuData[activeCategory as keyof typeof menuData].items.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-border/30 bg-background/30 hover:bg-background/50 hover:border-primary/30 transition-all duration-300">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </h4>
                          {item.featured && (
                            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 text-xs">
                              Special
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Separator orientation="vertical" className="h-6 bg-border/50" />
                        <span className="font-bold text-lg text-primary whitespace-nowrap">
                          ₦{item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Notice */}
        <div className="mt-12 text-center scroll-reveal">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="mb-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 px-4 py-1">
                Guest Benefits
              </Badge>
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
              Exclusive Petalz Guest Privileges
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>10% discount on all orders</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Priority table reservations</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Complimentary welcome drink</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;