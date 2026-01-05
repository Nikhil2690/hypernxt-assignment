import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { CategoryIcons } from './components/CategoryIcons'
import { HeroSection } from './components/HeroSection'
import { CategoriesSection } from './components/CategoriesSection'
import  NewArrivals  from './components/NewArrivalSection'
import  TrendingProducts  from './components/TrendingProducts'
import { PromotionalBanners } from './components/PromotionalBanner'
import { BestSellingProducts } from './components/BestSellingProduct'
import { DiscountCard } from './components/DiscountCard'
import  ProductSections  from './components/MostPopAndJstArrives'
import { BlogSection } from './components/Blog'
import { AppSection } from './components/AppSection'
import { PeopleLookingFor } from './components/PeopleLookingFor'
import { Footer } from './components/Footer'
import { fetchProducts } from './services/api';


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading products: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CategoryIcons />
      <HeroSection />
      <CategoriesSection />
      <NewArrivals products={products} />
      <TrendingProducts products={products} />
      <PromotionalBanners />
      <BestSellingProducts products={products} />
      <DiscountCard />
      <ProductSections products={products} />
      <BlogSection />
      <AppSection />
      <PeopleLookingFor />
      <Footer />
    </div>
  );

}

export default App
