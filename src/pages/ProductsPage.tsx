import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Products from '../components/Products';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <div className="pt-16">
      <Products initialCategory={category} />
    </div>
  );
};

export default ProductsPage;