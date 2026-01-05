export const CategoriesSection = () => {
  const categories = [
    { name: "Home & Living", icon: "🛋️" },
    { name: "Grocery", icon: "🛒" },
    { name: "Daily Spices", icon: "🌶️" },
    { name: "Household", icon: "🧺" },
    { name: "Personal Care", icon: "✋" },
    { name: "Baby & Kids", icon: "👶" },
  ];

  return (
    <div className="max-w-7xl mt-60 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Category</h2>
        <button className="text-sm text-gray-600 hover:text-gray-900">
          View All Categories →
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-xl p-6 flex flex-col items-center cursor-pointer
                       transition-all duration-300 ease-out
                       hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Icon */}
            <div
              className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center
                         text-4xl mb-4 transition-transform duration-300
                         group-hover:scale-110"
            >
              {cat.icon}
            </div>

            {/* Text */}
            <span className="text-sm font-medium text-gray-700 text-center">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
