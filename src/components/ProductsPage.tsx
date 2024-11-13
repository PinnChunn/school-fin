import React, { useState } from 'react';
import { categories, products } from '../data/categories';
import ProductCard from './ProductCard';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.categoryId === selectedCategory)
    : products;

  return (
    <div className="pt-16 min-h-screen bg-gray-900" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif text-[#B87333] text-center mb-8">
          精選商品
        </h1>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === null
                ? 'bg-[#B87333] text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-[#B87333] hover:text-white'
            }`}
          >
            全部商品
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-[#B87333] text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-[#B87333] hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            此分類暫無商品
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;