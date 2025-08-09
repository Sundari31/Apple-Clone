import iphone from '../assets/images/iphone.jpg'
import iphone2 from '../assets/images/iphone2.jpg'
import video from '../assets/videos/iphone-video.mp4'
import macbook from '../assets/images/macbook.jpg'
import macbook2 from '../assets/images/macbook2.jpg'

function Hero() {
    return (
        <>
            {/* iPhone */}
            <div className='my-4 p-2 text-center relative'>

                {/* Desktop Layout */}
                <div className='hidden md:block'>
                    <div className='flex items-center justify-center'>
                        <img src={iphone} alt="iPhone" />
                    </div>
                    <div className='py-6 space-y-4 absolute top-6 left-1/2 transform -translate-x-1/2'>
                        <h1 className='text-5xl font-bold'>iPhone</h1>
                        <h3 className='text-2xl text-gray-800 mb-4'>Meet the iPhone 16 family</h3>
                        <div className='flex justify-center space-x-4'>
                            <button className='rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600'>
                                Learn More
                            </button>
                            <button className='border border-blue-500 rounded-full px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500'>
                                Shop iPhone
                            </button>
                        </div>
                        <p className="text-center text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                            Built for Apple Intelligence
                        </p>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className='md:hidden'>
                    <div className='flex items-center justify-center'>
                        <img src={iphone2} alt="iPhone2" />
                    </div>
                    <div className='py-2 space-y-2 absolute top-4 left-1/2 transform -translate-x-1/2'>
                        <h1 className='text-3xl font-bold'>iPhone</h1>
                        <h3 className='text-lg text-gray-800 mb-4'>Meet the iPhone 16 family</h3>
                        <div className='flex justify-center space-x-4'>
                            <button className='rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600'>
                                Learn More
                            </button>
                            <button className='border border-blue-500 rounded-full px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500'>
                                Shop iPhone
                            </button>
                        </div>
                        <p className="text-center text-sm font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                            Built for Apple Intelligence
                        </p>
                    </div>
                </div>
            </div>

            {/* Video Section */}
            <div className='px-2'>
                <video
                    className='w-full md:w-1/2 mx-auto rounded-xl'
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </div>

            {/* Macbook */}
            <div className='my-4 p-2 text-center'>

                {/* Desktop Layout */}
                 <div className='hidden md:block'>
                <div className='relative'>
                    <img src={macbook} alt="MacBook" className='mx-auto' />
                    <div className='py-4 space-y-4 absolute top-4 left-1/2 transform -translate-x-1/2 text-center'>
                        <h1 className='text-5xl font-bold'>MacBook Air</h1>
                        <h3 className='text-2xl text-gray-800 mb-4'>Sky high performance with M4</h3>
                        <div className='flex justify-center space-x-4'>
                            <button className='rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600'>
                                Learn More
                            </button>
                            <button className='border border-blue-500 rounded-full px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500'>
                                Shop MacBook
                            </button>
                        </div>
                    </div>
                    <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] to-[#ff3b30] bg-clip-text text-transparent">
                        Built for Apple Intelligence
                    </p>
                </div>
                </div>

                {/* Mobile Layout */}
                 <div className='md:hidden'>
                    <div className='relative'>
                    <img src={macbook2} alt="MacBook2" className='mx-auto' />
                    <div className='py-2 space-y-2 absolute top-4 left-1/2 transform -translate-x-1/2 text-center'>
                        <h1 className='text-3xl font-bold'>MacBook Air</h1>
                        <h3 className='text-lg text-gray-800 mb-4'>Sky high performance with M4</h3>
                        <div className='flex justify-center space-x-4'>
                            <button className='rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600'>
                                Learn More
                            </button>
                            <button className='border border-blue-500 rounded-full px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500'>
                                Shop MacBook
                            </button>
                        </div>
                    </div>
                    <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm md:text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] to-[#ff3b30] bg-clip-text text-transparent">
                        Built for Apple Intelligence
                    </p>
                </div>
                </div>
            </div>

        </>
    )
}

export default Hero
