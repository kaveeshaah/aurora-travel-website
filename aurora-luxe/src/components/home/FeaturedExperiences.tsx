import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const featuredExperiences = [
  {
    id: 1,
    title: "Private Safari in Kenya",
    location: "Masai Mara, Kenya",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "From $15,000",
    duration: "7 Days",
  },
  {
    id: 2,
    title: "Northern Lights in Iceland",
    location: "Reykjavik, Iceland",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "From $8,500",
    duration: "5 Days",
  },
  {
    id: 3,
    title: "Private Yacht in French Riviera",
    location: "Monaco, France",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "From $25,000",
    duration: "10 Days",
  },
];

const FeaturedExperiences = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredExperiences.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredExperiences.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredExperiences.length) % featuredExperiences.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-12 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
        <br></br><br></br>The Aurora Luxe Promise
       
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover extraordinary experiences crafted for the discerning traveler<br></br><br></br>
        </p>
      </div>

      {/* Slideshow Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-xl shadow-2xl">
          {/* Slides */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {featuredExperiences.map((exp, index) => (
              <div key={exp.id} className="w-full flex-shrink-0 relative">
                <div className="relative w-full h-[500px] md:h-[600px]">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white max-w-md">
                    <div className="bg-blue-900/95 rounded-lg p-8 shadow-xl backdrop-blur-sm">
                      <h3 className="text-2xl font-serif font-bold mb-2">{exp.title}</h3>
                      <p className="text-blue-100 mb-4 flex items-center">
                        <span className="mr-2">📍</span>
                        {exp.location}
                      </p>
                      <p className="text-white/90 mb-6 leading-relaxed">
                        Aurora Luxe Travels opens the doors to the world's most prestigious resorts and hidden retreats. From private villas on secluded islands to penthouse suites in iconic cities.
                      </p>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xl font-semibold text-blue-200">{exp.price}</span>
                        <span className="text-blue-200">{exp.duration}</span>
                      </div>
                      <button className="w-full py-3 border-2 border-white text-white rounded-full bg-transparent font-serif transition-all duration-300 hover:bg-white hover:text-blue-900 hover:shadow-lg">
                        VIEW EXPERIENCE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Play/Pause button */}
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center mt-6 gap-3">
          {featuredExperiences.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-900 scale-125' 
                  : 'bg-gray-400 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="text-center mt-4 text-gray-600">
          <span className="text-sm">
            {currentSlide + 1} / {featuredExperiences.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;