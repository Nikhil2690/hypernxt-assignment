import MuffinImg from '../assets/muffin0.png'
import MuffinImg2 from '../assets/muffinimg.png'

export const PromotionalBanners = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-2 gap-6" style={{ height: '70vh' }}>
        <div className="bg-pink-50 rounded-lg p-12 flex items-center">
          <div className="flex-1">
            <p className="text-orange-400 text-sm mb-2">Upto 25% Off</p>
            <h2 className="text-gray-400 text-4xl font-bold mb-4">Luxa Dark Chocolate</h2>
            <p className="text-gray-600 mb-6">Very tasty & creamy vanilla flavour creamy muffins.</p>
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">SHOW NOW</button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <img src={MuffinImg}/>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-12 flex items-center">
          <div className="flex-1">
            <p className="text-orange-400 text-sm mb-2">Upto 25% Off</p>
            <h2 className="text-gray-400 text-4xl font-bold mb-4">Creamy Muffins</h2>
            <p className="text-gray-600 mb-6">Very tasty & creamy vanilla flavour creamy muffins.</p>
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">SHOW NOW</button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <img src={MuffinImg2}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};