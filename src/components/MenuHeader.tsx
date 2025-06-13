
import React from 'react';

const MenuHeader = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold text-white mb-4 tracking-wide">
        MAISON
      </h1>
      <div className="w-24 h-1 bg-amber-400 mx-auto mb-4"></div>
      <p className="text-amber-100 text-lg font-light">
        Fine Dining Experience
      </p>
      <p className="text-gray-300 text-sm mt-2">
        Scan QR code for digital menu
      </p>
    </div>
  );
};

export default MenuHeader;
