export const PeopleLookingFor = () => {
  const searches = [
    'Blue diamon almonds', 'Angie\'s Boomchickapop Corn', 'Salty kettle Corn',
    'Chobani Greek Yogurt', 'Sweet Vanilla Yogurt', 'Foster Farms Takeout Crispy wings',
    'Warrior Blend Organic', 'Chao Cheese Creamy', 'Chicken meatballs'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ minHeight: '60vh' }}>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">People are also looking for</h2>
      <div className="flex flex-wrap gap-3 mb-12">
        {searches.map((term, idx) => (
          <button key={idx} className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-full text-sm font-medium">
            {term}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-8 mb-12">
        {[
          { icon: '🚚', title: 'Free delivery', desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.' },
          { icon: '🔒', title: '100% secure payment', desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.' },
          { icon: '🏪', title: 'Quality guarantee', desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.' },
          { icon: '💬', title: 'guaranteed savings', desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.' },
          { icon: '🎁', title: 'Daily offers', desc: 'Lorem ipsum dolor sit amet, consectetur adipi elit.' }
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
