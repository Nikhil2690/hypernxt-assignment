import heroMain from "../assets/smoothieimage.png";
import fruitsImage from "../assets/ad-image-1.png";
import bakedImage from "../assets/ad-image-2.png";

export const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-3 gap-4 h-[50vh]">
        
        {/* LEFT BIG CARD */}
        <div className="col-span-2 bg-blue-100 rounded-lg p-8 flex items-center">
          <div className="flex-1">
            <p className="text-orange-400 text-sm mb-2">100% Natural</p>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Fresh Smoothie <br /> & Summer Juice
            </h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Dignissim massa diam elementum.
            </p>
            <button className="border-2 border-gray-800 px-6 py-2 hover:bg-gray-800 hover:text-white transition">
              SHOP NOW
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={heroMain}
              alt="Smoothie"
              className="h-[90%] object-contain"
            />
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-4">
          
          {/* Fruits card */}
          <div className="bg-green-50 rounded-lg p-6 h-1/2 flex items-center justify-between">
            <div>
              <p className="text-orange-400 text-sm mb-1">SALE</p>
              <h3 className="text-black text-2xl font-bold mb-2">20% Off</h3>
              <h4 className="text-gray-400 text-xl mb-2">
                Fruits & Vegetables
              </h4>
              <button className="text-gray-400 text-sm underline">
                Shop Collection →
              </button>
            </div>

            <img
              src={fruitsImage}
              alt="Fruits"
              className="h-28 object-contain"
            />
          </div>

          {/* Baked card */}
          <div className="bg-orange-50 rounded-lg p-6 h-1/2 flex items-center justify-between">
            <div>
              <p className="text-orange-400 text-sm mb-1">SALE</p>
              <h3 className="text-black text-2xl font-bold mb-2">15% Off</h3>
              <h4 className="text-gray-500 text-xl mb-2">
                Baked Products
              </h4>
              <button className="text-gray-500 text-sm underline">
                Shop Collection →
              </button>
            </div>

            <img
              src={bakedImage}
              alt="Baked Products"
              className="h-28 object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  );
};
