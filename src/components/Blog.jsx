import BlogImg from '../assets/recentblogimg1.jpg'
import BlogImg2 from '../assets/recentblogimg2.jpg'
import BlogImg3 from '../assets/recentblogimg3.jpg'


export const BlogSection = () => {
  const blogs = [
    { date: '22 AUG 2021', category: 'TIPS & TRICKS', title: 'Top 10 casual look ideas to dress up your kids', img: BlogImg },
    { date: '25 AUG 2021', category: 'TRENDING', title: 'Latest trends of wearing street wears supremely', img: BlogImg2 },
    { date: '28 AUG 2021', category: 'INSPIRATION', title: '10 Different Types of comfortable clothes ideas for women', img: BlogImg3}
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ minHeight: '60vh' }}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Recent Blog</h2>
        <button className="text-sm text-gray-600 hover:text-gray-900">Read All Articles →</button>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
            <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-64 object-cover"
                />
            <div className="p-6">
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>{blog.date}</span>
                <span className="mx-2">•</span>
                <span>{blog.category}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{blog.title}</h3>
              <p className="text-sm text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
