import React from 'react';
import ProductCard from './ProductCard';

const TrendingProducts = ({products}) => {

  const mockProducts = Array(10).fill(null).map((_, idx) => ({
    ...products[idx % products.length],
    _id: `prod-${idx}-${products[idx % products.length]._id}`
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Trending Products</h2>
        <div className="flex space-x-4">
          <button className="px-4 py-2 border-b-2 border-orange-400 text-gray-800">ALL</button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-800">FRUITS & VEGES</button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-800">JUICES</button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-25">
        {mockProducts.map((product, idx) => (
          <ProductCard key={product._id} product={product} discount={idx < 2 ? 30 : null} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts