import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Check } from 'lucide-react';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      clearCart();
      
      // Redirect to home after showing success message
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-24 bg-gray-900 flex items-center justify-center px-4">
        <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-serif text-[#B87333] mb-4">訂單已成功送出</h2>
          <p className="text-gray-300 mb-6">感謝您的訂購，我們將盡快為您處理訂單。</p>
          <p className="text-gray-400">系統將在幾秒後自動返回首頁...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-gray-900 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-serif text-[#B87333]">訂單確認</h1>
          
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 border-b border-gray-700 pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-grow">
                  <h3 className="text-white font-serif">{item.name}</h3>
                  <p className="text-[#B87333]">{item.price} × {item.quantity}</p>
                </div>
                <p className="text-white font-medium">
                  NT$ {(parseInt(item.price.replace(/[^\d]/g, '')) * item.quantity).toLocaleString()}
                </p>
              </div>
            ))}
            
            <div className="pt-4">
              <div className="flex justify-between text-gray-400 mb-2">
                <span>小計</span>
                <span>NT$ {totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-400 mb-2">
                <span>運費</span>
                <span>免運</span>
              </div>
              <div className="flex justify-between text-white font-medium pt-2 border-t border-gray-700">
                <span>總計</span>
                <span className="text-[#B87333]">NT$ {totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-serif text-[#B87333]">收件資訊</h2>
          
          <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-6 space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">姓名</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#B87333]"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-white mb-2">電話</label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#B87333]"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white mb-2">電子郵件</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#B87333]"
              />
            </div>
            
            <div>
              <label htmlFor="address" className="block text-white mb-2">配送地址</label>
              <input
                type="text"
                id="address"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#B87333]"
              />
            </div>
            
            <div>
              <label htmlFor="note" className="block text-white mb-2">訂單備註</label>
              <textarea
                id="note"
                rows={3}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#B87333]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#B87333] text-white py-4 rounded-lg transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#A66323]'
              }`}
            >
              {isSubmitting ? '處理中...' : '確認送出'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;