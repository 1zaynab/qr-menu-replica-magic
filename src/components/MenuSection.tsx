
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
    <div className="mb-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-amber-400 tracking-wide mb-4">
          {title}
        </h2>
        <div className="flex justify-center items-center">
          <div className="w-8 h-px bg-amber-400"></div>
          <div className="mx-3">
            <div className="w-2 h-2 border border-amber-400 rotate-45"></div>
          </div>
          <div className="w-8 h-px bg-amber-400"></div>
        </div>
      </div>
      
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center items-center mb-3">
              <div className="flex-1 border-b border-dotted border-gray-500"></div>
              <h3 className="px-4 text-lg font-semibold text-white tracking-wide">
                {item.name}
              </h3>
              <div className="flex-1 border-b border-dotted border-gray-500"></div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-2 max-w-md mx-auto">
              {item.description}
            </p>
            <span className="text-amber-400 font-bold text-lg tracking-wide">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
