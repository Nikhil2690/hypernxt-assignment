import React from 'react';

const NewArrivals = ({ products }) => {
  const displayProducts = products.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ minHeight: '50vh' }}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Newly Arrived Brands</h2>
        <button className="text-sm text-gray-600 hover:text-gray-900">View All Categories →</button>
      </div>
      
      <div className="grid grid-cols-4 gap-6">
        {displayProducts.map((product) => (
          <div 
            key={product._id} 
            className="bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition cursor-pointer flex items-center gap-4"
          >
            {/* Image on the left */}
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
              {product.images && product.images[0] ? (
                <img 
                  src={product.images[0]} 
                  alt={product.product_name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400 text-xs">Product Image</span>
              )}
            </div>

            {/* Text on the right */}
            <div className="flex flex-col">
              <p className="text-xs text-gray-500">{product.brand_name}</p>
              <h3 className="text-sm font-medium text-gray-800">{product.product_name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
