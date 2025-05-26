import BannerImg from '../assets/banner.png';

const Banner = () => {
  return (
    <section className="bg-blue-50 py-16 sm:px-6">
      <div className="container mx-auto max-w-[1200px] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-blue-600 text-lg font-semibold mb-4 underline">
            Welcome to Modern Multi Specialty Hospital
          </h2>
          
          <h1 className="text-4xl text-gray-600 sm:text-5xl font-bold mb-6">
            <span className="text-blue-500">
              Take Care {' '}
            </span>
            
             <span className='mt-4'>Of Your Health And It Will {''}</span>
             <span className='text-blue-500 mt-4'>Take Care Of</span>
            
            <span className="block mt-4 ">
                You...
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            We prioritise your health and well-being
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="text-gray-700 px-8 py-3 border-2 border-gray-600 rounded-md">
              Learn More
            </button>
            <button className="text-white px-8 py-3 bg-blue-600 rounded-md">
              Book Appointment
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 md:-mt-8">
          <img 
            src={BannerImg} 
            alt="Healthcare Illustration" 
            className="w-full h-[450px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;