import React from 'react';
import { ShoppingBag } from 'lucide-react';
import type { Product } from '../data/categories';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={handleAddToCart}
            className="bg-[#B87333] text-white px-6 py-3 rounded-full hover:bg-[#A66323] transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 flex items-center space-x-2 group/btn"
          >
            <ShoppingBag className="w-5 h-5 transform group-hover/btn:scale-110 transition-transform" />
            <span>加入購物車</span>
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif text-[#B87333] mb-2">{product.name}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{product.description}</p>
        {product.ingredients && (
          <div className="mb-4">
            <p className="text-gray-400 text-sm mb-2">主要食材：</p>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="text-white font-semibold">{product.price}</span>
          <span className="text-gray-400 text-sm">庫存充足</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;