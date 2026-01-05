import { useState } from "react";
import  ProductCard  from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const BestSellingProducts = ({products}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const mockProducts = Array(10).fill(null).map((_, idx) => ({
    ...products[idx % products.length],
    _id: `best-${idx}-${products[idx % products.length]._id}`
  }));

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (mockProducts.length - 5));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mockProducts.length - 5) % (mockProducts.length - 5));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Best selling products</h2>
        <div className="flex space-x-2">
          <button onClick={prevSlide} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={nextSlide} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 gap-15"
          style={{ transform: `translateX(-${currentIndex * 20}%)` }}
        >
          {mockProducts.map((product) => (
            <div key={product._id} className="w-1/6 shrink-0 px-2">
              <ProductCard product={product} discount={15} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};