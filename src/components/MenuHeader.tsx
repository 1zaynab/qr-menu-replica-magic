
import React from 'react';

const MenuHeader = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-6xl font-bold text-white mb-6 tracking-widest">
        MAISON
      </h1>
      <div className="flex justify-center items-center mb-6">
        <div className="w-16 h-px bg-amber-400"></div>
        <div className="mx-4">
          <div className="w-3 h-3 border-2 border-amber-400 rotate-45"></div>
        </div>
        <div className="w-16 h-px bg-amber-400"></div>
      </div>
      <p className="text-amber-400 text-xl font-light tracking-wide mb-2">
        RESTAURANT
      </p>
      <p className="text-gray-300 text-sm tracking-wide">
        FINE DINING EXPERIENCE
      </p>
    </div>
  );
};

export default MenuHeader;
