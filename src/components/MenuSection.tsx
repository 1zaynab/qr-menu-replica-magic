
import React from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

const MenuSection = ({ title, items }: MenuSectionProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-amber-400 mb-8 text-center border-b border-amber-400 pb-2">
        {title}
      </h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-700 pb-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <span className="text-amber-400 font-bold text-lg">{item.price}</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
