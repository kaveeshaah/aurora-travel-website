'use client';

export function MapSectionLayout() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-stone-100 via-amber-50 to-white flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-32 sm:w-48"></div>
          </div>
          <br />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-4 sm:mb-6 tracking-tight">
            Visit Our Office
          </h2>
          <br />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center space-y-16 sm:space-y-20">

          {/* Content Section */}
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl sm:rounded-[2rem] p-8 sm:p-12 md:p-16 border border-amber-200/20 shadow-xl">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-slate-800 mb-8 sm:mb-10">
                Luxury Travel Consultation
              </h3>
              <p className="text-slate-600 font-lato text-lg sm:text-xl leading-relaxed mb-10 sm:mb-12 max-w-3xl mx-auto text-center">
                Schedule a personal consultation at our Colombo office, where our expert travel advisors will craft your perfect luxury journey in an elegant, comfortable environment.
              </p>

              {/* CTA Button */}
              <button className="px-10 sm:px-12 py-4 sm:py-5 bg-slate-800 text-white font-medium text-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Schedule a Visit
              </button>
            </div>
          </div>
          <br />


          {/* Map Section */}
          <div className="w-full max-w-2xl mx-auto px-4">
            <div className="relative overflow-hidden rounded-3xl sm:rounded-[2rem] shadow-2xl">
              <div className="aspect-[3/2] bg-gradient-to-br from-stone-200 via-amber-100 to-stone-300 flex items-center justify-center">
                {/* Map Placeholder with elegant styling */}
                <div className="text-center px-8">
                  <div className="w-20 sm:w-24 h-20 sm:h-24 border-3 border-amber-400 rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center bg-amber-400/15 backdrop-blur-sm">
                    <svg className="w-10 sm:w-12 h-10 sm:h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-slate-800 font-serif text-xl sm:text-2xl mb-3">
                    Interactive Map
                  </h4>
                  <p className="text-slate-600 text-base sm:text-lg mb-6">
                    Colombo 07, Sri Lanka
                  </p>
                  <button className="inline-flex items-center space-x-3 text-slate-800 hover:text-slate-600 transition-colors text-base font-medium bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-300/30 hover:bg-white/70">
                    <span>View on Google Maps</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute inset-0 rounded-3xl sm:rounded-[2rem] border-2 border-amber-300/30 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}