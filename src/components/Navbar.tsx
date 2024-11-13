import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { categories } from '../data/categories';
import CartButton from './CartButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gray-900/95 fixed w-full z-50 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-serif">
            <Link to="/" className="text-2xl text-[#B87333]">
              法式甜點工坊
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-[#B87333]' : 'text-gray-300'
              } hover:text-[#B87333] transition-colors`}
            >
              首頁
            </Link>
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`${
                  isActive('/products') ? 'text-[#B87333]' : 'text-gray-300'
                } hover:text-[#B87333] transition-colors flex items-center space-x-1`}
              >
                <span>商品</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-1">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/products?category=${category.id}`}
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-[#B87333]"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-[#B87333]' : 'text-gray-300'
              } hover:text-[#B87333] transition-colors`}
            >
              關於我們
            </Link>
            <Link
              to="/brand-story"
              className={`${
                isActive('/brand-story') ? 'text-[#B87333]' : 'text-gray-300'
              } hover:text-[#B87333] transition-colors`}
            >
              品牌故事
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'text-[#B87333]' : 'text-gray-300'
              } hover:text-[#B87333] transition-colors`}
            >
              聯絡資訊
            </Link>
            <CartButton />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <CartButton />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-b border-gray-800">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-300 hover:text-[#B87333]"
              onClick={() => setIsOpen(false)}
            >
              首頁
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-gray-300 hover:text-[#B87333]"
              onClick={() => setIsOpen(false)}
            >
              商品
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-300 hover:text-[#B87333]"
              onClick={() => setIsOpen(false)}
            >
              關於我們
            </Link>
            <Link
              to="/brand-story"
              className="block px-3 py-2 text-gray-300 hover:text-[#B87333]"
              onClick={() => setIsOpen(false)}
            >
              品牌故事
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-300 hover:text-[#B87333]"
              onClick={() => setIsOpen(false)}
            >
              聯絡資訊
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;