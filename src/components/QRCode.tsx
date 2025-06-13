
import React from 'react';

const QRCode = () => {
  return (
    <div className="fixed top-6 right-6 bg-white p-3 rounded-lg shadow-2xl">
      <div className="w-20 h-20 bg-black relative">
        {/* Corner squares */}
        <div className="absolute top-1 left-1 w-4 h-4 bg-black border-2 border-white">
          <div className="w-2 h-2 bg-black m-auto mt-1"></div>
        </div>
        <div className="absolute top-1 right-1 w-4 h-4 bg-black border-2 border-white">
          <div className="w-2 h-2 bg-black m-auto mt-1"></div>
        </div>
        <div className="absolute bottom-1 left-1 w-4 h-4 bg-black border-2 border-white">
          <div className="w-2 h-2 bg-black m-auto mt-1"></div>
        </div>
        
        {/* Random pattern */}
        <div className="absolute inset-2 grid grid-cols-8 gap-px">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 ${
                [0,1,2,6,7,8,14,15,16,22,23,24,30,31,32,38,39,40,46,47,48,54,55,56,62,63].includes(i) 
                  ? 'bg-white' 
                  : Math.random() > 0.6 ? 'bg-white' : 'bg-black'
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-xs text-center mt-2 text-gray-800 font-medium">
        SCAN FOR MENU
      </p>
    </div>
  );
};

export default QRCode;
