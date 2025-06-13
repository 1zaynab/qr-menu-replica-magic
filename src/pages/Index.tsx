
import React from 'react';
import MenuHeader from '../components/MenuHeader';
import MenuSection from '../components/MenuSection';
import QRCode from '../components/QRCode';

const appetizers = [
  {
    name: "TRUFFLE ARANCINI",
    description: "Crispy risotto balls filled with wild mushrooms and truffle oil, served with parmesan cream",
    price: "$18"
  },
  {
    name: "SEARED SCALLOPS",
    description: "Pan-seared diver scallops with cauliflower purée, pancetta crisps, and micro greens",
    price: "$24"
  },
  {
    name: "BURRATA & PROSCIUTTO",
    description: "Fresh burrata cheese with aged prosciutto di Parma, fig compote, and arugula",
    price: "$22"
  }
];

const mains = [
  {
    name: "DRY-AGED RIBEYE",
    description: "28-day dry-aged ribeye steak with roasted bone marrow, herb butter, and seasonal vegetables",
    price: "$65"
  },
  {
    name: "PAN-ROASTED HALIBUT",
    description: "Fresh halibut with lemon risotto, braised fennel, and salmoriglio sauce",
    price: "$42"
  },
  {
    name: "DUCK CONFIT",
    description: "Slow-cooked duck leg with cherry gastrique, roasted fingerlings, and wilted spinach",
    price: "$38"
  },
  {
    name: "PASTA NERO",
    description: "House-made squid ink linguine with fresh seafood, garlic, and white wine",
    price: "$32"
  }
];

const desserts = [
  {
    name: "CHOCOLATE SOUFFLÉ",
    description: "Warm chocolate soufflé with vanilla bean ice cream and raspberry coulis",
    price: "$16"
  },
  {
    name: "TIRAMISU",
    description: "Traditional Italian tiramisu with espresso-soaked ladyfingers and mascarpone",
    price: "$14"
  },
  {
    name: "LEMON TART",
    description: "Tart lemon curd with torched meringue and fresh berry compote",
    price: "$12"
  }
];

const beverages = [
  {
    name: "HOUSE WINE SELECTION",
    description: "Curated selection of red and white wines from local vineyards",
    price: "$12-18"
  },
  {
    name: "CRAFT COCKTAILS",
    description: "Signature cocktails crafted with premium spirits and fresh ingredients",
    price: "$15-20"
  },
  {
    name: "ARTISAN COFFEE",
    description: "Single-origin coffee beans roasted in-house, served with or without dessert",
    price: "$6"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <QRCode />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m20 20 20 20-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}>
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-8 py-16 max-w-5xl">
        <MenuHeader />
        
        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          <div className="space-y-16">
            <MenuSection title="STARTERS" items={appetizers} />
            <MenuSection title="DESSERTS" items={desserts} />
          </div>
          
          <div className="space-y-16">
            <MenuSection title="MAIN COURSES" items={mains} />
            <MenuSection title="BEVERAGES" items={beverages} />
          </div>
        </div>
        
        <div className="text-center mt-20 pt-12">
          <div className="flex justify-center items-center mb-6">
            <div className="w-20 h-px bg-amber-400"></div>
            <div className="mx-4">
              <div className="w-3 h-3 border-2 border-amber-400 rotate-45"></div>
            </div>
            <div className="w-20 h-px bg-amber-400"></div>
          </div>
          
          <p className="text-gray-400 text-sm mb-4 tracking-wide">
            ALL PRICES SUBJECT TO CHANGE • PLEASE INFORM US OF ANY ALLERGIES
          </p>
          <p className="text-amber-400 font-semibold text-lg tracking-wide">
            THANK YOU FOR DINING WITH US
          </p>
          
          <div className="flex justify-center items-center mt-6">
            <div className="w-16 h-px bg-amber-400"></div>
            <div className="mx-3">
              <div className="w-2 h-2 border border-amber-400 rotate-45"></div>
            </div>
            <div className="w-16 h-px bg-amber-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
