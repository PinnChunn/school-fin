import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartButton = () => {
  const { setIsOpen, totalItems } = useCart();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="relative bg-[#B87333] p-2 rounded-full hover:bg-[#A66323] transition-colors group"
    >
      <ShoppingBag className="h-5 w-5 text-white transform group-hover:scale-110 transition-transform" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default CartButton;