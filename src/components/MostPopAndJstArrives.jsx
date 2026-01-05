import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

const CARD_WIDTH = 260; // adjust if your card is wider
const GAP = 16; // gap-4 = 16px
const VISIBLE_CARDS = 6;

const ProductSections = ({ products }) => {
  const mockProducts = Array(12)
    .fill(null)
    .map((_, idx) => ({
      ...products[idx % products.length],
      _id: `prod-${idx}-${products[idx % products.length]._id}`,
    }));

  const [popularIndex, setPopularIndex] = useState(0);
  const [arrivedIndex, setArrivedIndex] = useState(0);

  const maxIndex = mockProducts.length - VISIBLE_CARDS;

  const slideStyle = (index) => ({
    transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* MOST POPULAR */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Most popular products
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() =>
                setPopularIndex((prev) => Math.max(prev - 1, 0))
              }
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setPopularIndex((prev) => Math.min(prev + 1, maxIndex))
              }
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={slideStyle(popularIndex)}
          >
            {mockProducts.map((product) => (
              <div
                key={product._id}
                style={{ minWidth: CARD_WIDTH }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JUST ARRIVED */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Just arrived
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() =>
                setArrivedIndex((prev) => Math.max(prev - 1, 0))
              }
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setArrivedIndex((prev) => Math.min(prev + 1, maxIndex))
              }
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={slideStyle(arrivedIndex)}
          >
            {mockProducts.map((product) => (
              <div
                key={`arr-${product._id}`}
                style={{ minWidth: CARD_WIDTH }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSections;
