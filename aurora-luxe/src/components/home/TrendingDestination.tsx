import React from 'react';
import Image from 'next/image';

const TrendingDestination = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 mb-16 bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <br />
      <br />
      <div className="text-center mb-20">
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-48"></div>
        </div>
        <br />
        <h2 className="font-serif text-3xl lg:text-4xl text-slate-800 mb-6 tracking-tight">
          Trending Destination
        </h2>
        <br />
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
          {/* Image Container */}
          <div className="relative w-full h-[600px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1590580808117-1caa8e13f0e5?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNpZ2lyaXlhfGVufDB8fDB8fHww"
              alt="Sigiriya Rock Fortress"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
            />
            {/* Overlay with destination name */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50 flex items-center justify-center">
              <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wider drop-shadow-2xl text-center px-4">
                SIGIRIYA
              </h3>
            </div>
          </div>

          {/* Description */}
          <div className="p-12 bg-white flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
                <br />
              <p className="text-gray-800 font-lato text-xl leading-8 font-light tracking-wide">
                Rising majestically from the heart of Sri Lanka, <span className="font-medium text-gray-900">Sigiriya</span> is an ancient rock fortress that stands as one of the world&apos;s most remarkable archaeological wonders. This <span className="font-medium text-gray-900">UNESCO World Heritage Site</span>, often called the <span className="italic">&quot;Lion Rock,&quot;</span> offers travelers an extraordinary journey through time, featuring stunning frescoes, intricate water gardens, and breathtaking panoramic views from its summit. 
              </p>
              <br />
              <p className="text-gray-700 font-lato text-lg leading-7 font-light">
                Experience the mystique of this 5th-century royal citadel, where ancient engineering marvels meet natural beauty in perfect harmony.
              </p>
              <br />
            </div>
            <br />
          </div>
        </div>
        <br />
      </div>
    </section>
  );
};

export default TrendingDestination;