import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const featuredExperiences = [
  {
    id: 1,
    title: "Tailored Experiences",
    image: "https://images.unsplash.com/photo-1580364545822-71c817ec6c3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Every journey is crafted around your preferences — from private tours to hidden gems, ensuring your travel is truly one of a kind.",
  },
  {
    id: 2,
    title: "Exclusive Access",
    image: "https://plus.unsplash.com/premium_photo-1670267552055-8f33a55c1af0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Stay at the world's most elite resorts and enjoy experiences usually reserved for the few — from private villas to VIP cultural events.",
  },
  {
    id: 3,
    title: "Luxury Service",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "From your first inquiry to the moment you return home, we ensure every detail is handled with precision, comfort, and elegance.",
  },
];

const FeaturedExperiences = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredExperiences.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <br />
      <div className="text-center mb-20">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 my-6 tracking-tight">
          The Aurora Luxe Promise
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-lato">
          Discover extraordinary experiences crafted for the discerning traveler
        </p>
        <br />
      </div>

      {/* Slideshow Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
          {/* Slides */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {featuredExperiences.map((exp) => (
              <div key={exp.id} className="w-full flex-shrink-0 relative group">
                <div className="relative w-full h-[600px] md:h-[650px] flex overflow-hidden">
                  {/* Text Content Box - Left Side */}
                  <div className="w-2/5 flex items-center justify-center p-8 relative z-10" 
                       style={{background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)'}}>
                    <div className="text-white max-w-sm transform transition-all duration-700 group-hover:scale-105 mb-8">
                      <h3 className="text-3xl font-serif font-bold mb-6 text-white leading-tight tracking-wide">
                        {exp.title}
                      </h3>
                      <br />
                      <p className="text-white/90 mb-8 leading-relaxed text-lg font-lato font-light">
                        {exp.description}
                      </p>
                      <br />
                      <button className="w-20 py-3 text-white border-2 border-white rounded-full text-lg font-lato font-medium font-bold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                        VIEW
                      </button>
                    </div>
                  </div>
                  
                  {/* Image - Right Side */}
                  <div className="w-3/5 relative overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 60vw, (max-width: 1200px) 60vw, 60vw"
                    />
                    {/* Subtle overlay for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center mt-16 gap-6">
          {featuredExperiences.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-1.5 rounded-full transition-all duration-700 ease-out hover:scale-110 ${
                index === currentSlide 
                  ? 'w-16 shadow-lg' 
                  : 'w-4 bg-gray-300 hover:bg-gray-400'
              }`}
              style={index === currentSlide ? {
                background: 'linear-gradient(90deg, #0f172a 0%, #1e293b 100%)',
                boxShadow: '0 4px 15px rgba(15, 23, 42, 0.4)'
              } : {}}
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Active indicator glow effect */}
              {index === currentSlide && (
                <div className="absolute inset-0 rounded-full animate-pulse opacity-50" 
                     style={{background: 'linear-gradient(90deg, #0f172a 0%, #1e293b 100%)'}}></div>
              )}
            </button>
          ))}
        </div>

        {/* Slide counter */}
        <div className="text-center mt-6 text-gray-500">
          <span className="text-sm font-medium tracking-wider">
            {currentSlide + 1} / {featuredExperiences.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;