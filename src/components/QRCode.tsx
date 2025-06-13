
import React from 'react';

const QRCode = () => {
  return (
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
      <div className="w-24 h-24 bg-gray-900 flex items-center justify-center">
        <div className="grid grid-cols-8 gap-px">
          {/* Simple QR code pattern */}
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
            />
          ))}
        </div>
      </div>
      <p className="text-xs text-center mt-2 text-gray-800">Scan for menu</p>
    </div>
  );
};

export default QRCode;
