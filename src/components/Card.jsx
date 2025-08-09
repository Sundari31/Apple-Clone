import watch from '../assets/images/card1.jpg';
import airpod from '../assets/images/card2.jpg';
import ipad from '../assets/images/card3.jpg';
import mac from '../assets/images/card4.jpg';
import iphone from '../assets/images/card5.jpg';
import macpro from '../assets/images/card6.jpg';

function Card() {
  return (
    <>
      {/* iPad Pro & Watch */}
      <div className="flex flex-col md:flex-row min-h-screen gap-4 px-4 mb-4">
        <div className="flex-1 bg-black text-white flex flex-col justify-center items-center p-8 space-y-6">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold">iPad Pro</h1>
            <p className="text-lg">Unbelievably thin. Incredibly powerful.</p>
            <div className="flex gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Learn more
              </button>
              <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-500 hover:text-white">
                Buy
              </button>
            </div>
          </div>
          <img src={ipad} alt="iPad Pro" className="w-full max-w-xs object-contain" />
        </div>

        <div className="flex-1 bg-gray-100 text-black flex flex-col justify-center items-center p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">Watch</h1>
            <p className="text-sm font-medium text-gray-500">SERIES 10</p>
            <p className="text-lg mt-1">Thinstant classic.</p>
            <div className="flex gap-4 justify-center mt-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Learn more
              </button>
              <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-500 hover:text-white">
                Buy
              </button>
            </div>
          </div>
          <img src={watch} alt="Apple Watch" className="w-full max-w-xs object-contain" />
        </div>
      </div>

      {/* AirPods & MacBook Pro */}
      <div className="flex flex-col md:flex-row min-h-screen gap-4 px-4 mb-4">
        <div className="flex-1 bg-gray-100 text-black flex flex-col justify-center items-center p-8 space-y-6">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold">AirPods 4</h1>
            <p className="text-lg">Iconic. Now Supersonic.</p>
            <p className="text-lg">Available with Active Noise Cancellation.</p>
            <div className="flex gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Learn more
              </button>
              <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-500 hover:text-white">
                Buy
              </button>
            </div>
          </div>
          <img src={airpod} alt="AirPods" className="w-full max-w-xs object-contain" />
        </div>

        <div className="flex-1 bg-black text-white flex flex-col justify-center items-center p-8 space-y-6">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold">MacBook Pro</h1>
            <p className="text-lg mt-1">A Work of Smart.</p>
            <div className="flex gap-4 justify-center mt-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Learn more
              </button>
              <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-500 hover:text-white">
                Buy
              </button>
            </div>
          </div>
          <img src={macpro} alt="MacBook Pro" className="w-full max-w-xs object-contain" />
        </div>
      </div>

      {/* iPhone 16 & Trade In */}
      <div className="flex flex-col md:flex-row min-h-screen gap-4 px-4 mb-4">
        <div className="flex-1 bg-black text-white flex flex-col justify-center items-center p-8 space-y-6">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold">iPhone 16</h1>
            <p className="text-lg">A Total Powerhouse.</p>
            <div className="flex gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Learn more
              </button>
              <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-500 hover:text-white">
                Buy
              </button>
            </div>
          </div>
          <img src={mac} alt="iPhone 16" className="w-full max-w-xs object-contain" />
        </div>

        <div className="flex-1 bg-gray-100 text-black flex flex-col justify-center items-center p-8 space-y-6">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold">Trade In</h1>
            <p className="text-lg">Upgrade and Save. It's that easy.</p>
            <div className="flex gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Get your estimate
              </button>
            </div>
          </div>
          <img src={iphone} alt="Trade In" className="w-full max-w-xs object-contain" />
        </div>
      </div>
    </>
  );
}

export default Card;
