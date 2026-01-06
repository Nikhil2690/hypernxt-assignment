import React from "react";
import { X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {

const cartItems = [
  {
    id: 1,
    name: "Growers cider",
    description: "Brief description",
    price: 12.99,
  },
  {
    id: 2,
    name: "Fresh grapes",
    description: "Brief description",
    price: 8.5,
  },
  {
    id: 3,
    name: "Heinz tomato ketchup",
    description: "Brief description",
    price: 5.25,
  },
];

const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`absolute right-0 top-0 h-full w-95 bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose} className="text-xl">✕</button>
        </div>

         {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black"
        >
          <X size={24} />
        </button>

        {/* Content */}
<div className="p-4 space-y-4">
  {cartItems.map((item) => (
    <div key={item.id} className="flex justify-between items-start">
      {/* Left */}
      <div>
        <p className="text-gray-700 font-medium">{item.name}</p>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>

      {/* Right (price) */}
      <p className="text-gray-900 font-semibold">
        ${item.price.toFixed(2)}
      </p>
    </div>
  ))}

  {/* Total */}
  <div className="flex justify-between items-center border-t pt-4 mt-4">
    <p className="text-gray-700 font-semibold">Total (USD)</p>
    <p className="text-black font-bold text-lg">
      ${total.toFixed(2)}
    </p>
  </div>
</div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
