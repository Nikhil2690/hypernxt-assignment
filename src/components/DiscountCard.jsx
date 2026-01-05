export const DiscountCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-[#F3F8FF] rounded-2xl px-16 py-20 min-h-[60vh] flex items-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[52px] leading-tight font-extrabold text-[#1F2937] mb-10">
                Get
              <span className="text-orange-300"> 25% Discount</span> on
              <br />
              your first purchase
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Dictumst amet, metus, sit massa posuere maecenas. At
              tellus ut nunc amet vel egestas.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="flex items-center">
            <div className="w-full max-w-md space-y-6">
              
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-md border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />

              <input
                type="email"
                placeholder="abc@mail.com"
                className="w-full px-5 py-4 rounded-md border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />

              <label className="flex items-center gap-3 text-gray-600 text-sm">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-black"
                />
                Subscribe to the newsletter
              </label>

              <button className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition">
                Submit
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
