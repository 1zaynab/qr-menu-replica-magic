
import React from 'react';
import MenuHeader from '../components/MenuHeader';
import MenuSection from '../components/MenuSection';
import QRCode from '../components/QRCode';

const appetizers = [
  {
    name: "Truffle Arancini",
    description: "Crispy risotto balls filled with wild mushrooms and truffle oil, served with parmesan cream",
    price: "$18"
  },
  {
    name: "Seared Scallops",
    description: "Pan-seared diver scallops with cauliflower purée, pancetta crisps, and micro greens",
    price: "$24"
  },
  {
    name: "Burrata & Prosciutto",
    description: "Fresh burrata cheese with aged prosciutto di Parma, fig compote, and arugula",
    price: "$22"
  }
];

const mains = [
  {
    name: "Dry-Aged Ribeye",
    description: "28-day dry-aged ribeye steak with roasted bone marrow, herb butter, and seasonal vegetables",
    price: "$65"
  },
  {
    name: "Pan-Roasted Halibut",
    description: "Fresh halibut with lemon risotto, braised fennel, and salmoriglio sauce",
    price: "$42"
  },
  {
    name: "Duck Confit",
    description: "Slow-cooked duck leg with cherry gastrique, roasted fingerlings, and wilted spinach",
    price: "$38"
  },
  {
    name: "Pasta Nero",
    description: "House-made squid ink linguine with fresh seafood, garlic, and white wine",
    price: "$32"
  }
];

const desserts = [
  {
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla bean ice cream and raspberry coulis",
    price: "$16"
  },
  {
    name: "Tiramisu",
    description: "Traditional Italian tiramisu with espresso-soaked ladyfingers and mascarpone",
    price: "$14"
  },
  {
    name: "Lemon Tart",
    description: "Tart lemon curd with torched meringue and fresh berry compote",
    price: "$12"
  }
];

const beverages = [
  {
    name: "House Wine Selection",
    description: "Curated selection of red and white wines from local vineyards",
    price: "$12-18"
  },
  {
    name: "Craft Cocktails",
    description: "Signature cocktails crafted with premium spirits and fresh ingredients",
    price: "$15-20"
  },
  {
    name: "Artisan Coffee",
    description: "Single-origin coffee beans roasted in-house, served with or without dessert",
    price: "$6"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <QRCode />
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <MenuHeader />
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <MenuSection title="APPETIZERS" items={appetizers} />
            <MenuSection title="DESSERTS" items={desserts} />
          </div>
          
          <div>
            <MenuSection title="MAIN COURSES" items={mains} />
            <MenuSection title="BEVERAGES" items={beverages} />
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm mb-2">
            All prices subject to change. Please inform us of any allergies.
          </p>
          <p className="text-amber-400 font-semibold">
            Thank you for dining with us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
