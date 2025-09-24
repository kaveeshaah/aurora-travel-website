import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const featuredExperiences = [
  {
    id: 1,
    title: "Tailored Experiences",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Every journey is crafted around your preferences — from private tours to hidden gems, ensuring your travel is truly one of a kind.",
  },
  {
    id: 2,
    title: "Exclusive Access",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Stay at the world's most elite resorts and enjoy experiences usually reserved for the few — from private villas to VIP cultural events.",
  },
  {
    id: 3,
    title: "Luxury Service",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
    <section className="w-full flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <br />
      <br />
      <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-32 sm:w-48"></div>
        </div>
        <br />
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-800 mb-4 sm:mb-6 tracking-tight">
          Featured Experiences
        </h2>
        <br />
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-lato">
          Discover extraordinary experiences crafted for the discerning traveler
        </p>
        <br />
      </div>

      {/* Slideshow Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl bg-white">
          {/* Slides */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {featuredExperiences.map((exp) => (
              <div key={exp.id} className="w-full flex-shrink-0 relative group">
                <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] flex flex-col sm:flex-row overflow-hidden">
                  {/* Text Content Box - Left Side */}
                  <div className="w-full sm:w-2/5 flex items-center justify-center p-4 sm:p-6 md:p-8 relative z-10 order-2 sm:order-1" 
                       style={{background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)'}}>
                    <div className="text-white max-w-sm transform transition-all duration-700 group-hover:scale-105 mb-4 sm:mb-8 text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-3 sm:mb-4 md:mb-6 text-white leading-tight tracking-wide">
                        {exp.title}
                      </h3>
                      <br />
                      <p className="text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed text-sm sm:text-base md:text-lg font-lato font-light">
                        {exp.description}
                      </p>
                      <br />
                      <button className="w-16 sm:w-20 py-2 sm:py-3 text-white border-2 border-white rounded-full text-sm sm:text-base md:text-lg font-lato font-medium font-bold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                        VIEW
                      </button>
                    </div>
                  </div>
                  
                  {/* Image - Right Side */}
                  <div className="w-full sm:w-3/5 relative overflow-hidden order-1 sm:order-2">
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
        <div className="flex justify-center mt-8 sm:mt-12 md:mt-16 gap-4 sm:gap-6">
          {featuredExperiences.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-1 sm:h-1.5 rounded-full transition-all duration-700 ease-out hover:scale-110 ${
                index === currentSlide 
                  ? 'w-12 sm:w-16 shadow-lg' 
                  : 'w-3 sm:w-4 bg-gray-300 hover:bg-gray-400'
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
        <div className="text-center mt-4 sm:mt-6 text-gray-500">
          <span className="text-xs sm:text-sm font-medium tracking-wider">
            {currentSlide + 1} / {featuredExperiences.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;