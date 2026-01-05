import { Heart, Star } from "lucide-react";

const ProductCard = ({ product, discount }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl w-64 transition relative">
      {discount && (
        <span className="absolute top-2 left-2 bg-green-400 text-white text-xs px-2 py-1 rounded">
          -{discount}%
        </span>
      )}
      <button className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300">
        <Heart className="text-black w-4 h-4" />
      </button>
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        {product.images && product.images[0] ? (
          <img src={product.images[0]} alt={product.product_name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400">Product Image</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 mb-1 truncate">{product.product_name}</h3>
        <div className="flex items-center mb-2">
          <span className="text-xs text-gray-500">1 UNIT</span>
          <div className="flex items-center ml-2">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-xs ml-1">4.5</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${product.price.actual_price}</span>
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100">-</button>
            <span className="text-sm">1</span>
            <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100">+</button>
          </div>
        </div>
        <button className="w-full mt-3 bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200 transition text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard