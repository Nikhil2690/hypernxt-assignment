import PhoneImage from '../assets/phoneimg.png';
import AppStoreImg from '../assets/appstoreimg.jpg'
import PlayStoreImg from '../assets/googleplayimg.jpg'

 export const AppSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-orange-50 rounded-2xl px-12 py-16 flex items-center overflow-hidden">
        
        {/* LEFT – PHONE */}
        <div className="flex-1 flex justify-center relative">
          <img
            src={PhoneImage}
            alt="Foodmart App"
            className="h-[520px] object-contain drop-shadow-xl"
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div className="flex-1 pl-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Shop faster with foodmart App
          </h2>

          <p className="text-gray-600 mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed
            ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis
            amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis.
            Amet blandit tortor praesent ante vitae. A, enim pretiumm senectus
            magna.
          </p>

          <div className="flex gap-6 items-center">
        <img
            src={AppStoreImg}
            alt="Download on the App Store"
            className="h-14 cursor-pointer hover:scale-105 transition"
        />

        <img
            src={PlayStoreImg}
            alt="Get it on Google Play"
            className="h-14 cursor-pointer hover:scale-105 transition"
        />
        </div>
        </div>

      </div>
    </div>
  );
};


