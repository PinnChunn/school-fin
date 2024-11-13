import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CartSidebar = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCheckout = () => {
    setIsOpen(false);
    navigate('/checkout');
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-900 shadow-xl z-50 transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <h2 className="text-2xl font-serif text-[#B87333]">購物車</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-gray-400 space-y-4">
              <ShoppingBag className="h-16 w-16 text-gray-600" />
              <p>購物車是空的</p>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#B87333] hover:text-[#A66323] transition-colors flex items-center space-x-2"
              >
                <span>繼續購物</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <>
              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 backdrop-blur-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="flex-grow">
                      <h3 className="text-white font-serif mb-1">{item.name}</h3>
                      <p className="text-[#B87333] font-medium mb-3">{item.price}</p>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-400 hover:text-white p-1 bg-gray-700 rounded-full"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-white w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-400 hover:text-white p-1 bg-gray-700 rounded-full"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-400 ml-4 p-1 bg-red-500/10 rounded-full"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-800 p-6 space-y-4 bg-gray-900/95 backdrop-blur-sm">
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-400">
                    <span>小計:</span>
                    <span>NT$ {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>運費:</span>
                    <span>免運</span>
                  </div>
                  <div className="flex justify-between text-white font-medium pt-2 border-t border-gray-800">
                    <span>總計 ({totalItems} 件商品):</span>
                    <span className="text-[#B87333] font-semibold">
                      NT$ {totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
                <button 
                  className="w-full bg-[#B87333] text-white py-4 rounded-lg hover:bg-[#A66323] transition-colors flex items-center justify-center space-x-2 group"
                  onClick={handleCheckout}
                >
                  <span>前往結帳</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;