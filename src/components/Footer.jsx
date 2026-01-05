export const Footer = () => {
  return (
    <footer className="bg-white border-t" style={{ minHeight: '60vh' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-5 gap-8 mb-12">
          {/* Logo */}
          <div>
            <div className="bg-orange-200 w-32 h-10 flex items-center justify-center mb-6">
              <span className="text-white text-xl font-bold">LOGO</span>
            </div>
          </div>

          {/* Ultras Section */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Ultras</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Journals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Affiliate Programme</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Ultras Press</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Cookie Guidelines</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Delivery Information</a></li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Subscribe Us</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter to get updates about our grand offers.
            </p>
            <input 
              type="email" 
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded mb-3 text-sm"
            />
            <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t pt-8 flex justify-between items-center text-sm text-gray-600">
          <p>© 2023 Siazhub. All rights reserved.</p>
          <p>Designed By <a href="#" className="underline text-gray-600 hover:text-gray-900">Hypernxt</a></p>
        </div>
      </div>
    </footer>
  );
};
