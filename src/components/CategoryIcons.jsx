import heroimage1 from "../assets/heroimage1.png";
import heroimage2 from "../assets/heroimage2.png";
import heroimage3 from "../assets/heroimage3.png";
import heroimage4 from "../assets/heroimage4.png";
import heroimage5 from "../assets/heroimage5.png";
import heroimage6 from "../assets/heroimage6.png";

export const CategoryIcons = () => {
  const categories = [
    { name: "Home & Living", icon: heroimage1 },
    { name: "Grocery", icon: heroimage2 },
    { name: "Daily Spices", icon: heroimage3 },
    { name: "Category 4", icon: heroimage4 },
    { name: "Category 5", icon: heroimage5 },
    { name: "Baby & Kids", icon: heroimage6 },
  ];

  return (
    <div className="flex justify-center items-center gap-4 py-8 flex-wrap mt-10 mb-10">
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center cursor-pointer hover:opacity-90 transition"
        >
          {/* Image box */}
          <div className="w-28 h-28 bg-gray-100 flex items-center justify-center mb-3 shadow-sm hover:shadow-md transition-shadow">
            <img
              src={cat.icon}
              alt={cat.name}
              className="w-28 h-28 rounded-2xl object-contain"
            />
          </div>

          {/* Text */}
          <span className="text-sm text-gray-700 text-center font-medium">
            {cat.name}
          </span>
        </div>
      ))}
    </div>
  );
};
