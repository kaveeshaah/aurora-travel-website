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
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-800 mb-4 sm:mb-6 tracking-tight">
            Visit Our Office
          </h2>
          <br />
          <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-lato leading-relaxed max-w-2xl mx-auto text-center">
            Experience luxury travel planning in our elegant Colombo office
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-amber-200/30 shadow-lg">
              <h3 className="font-serif text-xl sm:text-2xl text-slate-800 mb-4 sm:mb-6">
                Luxury Travel Consultation
              </h3>
              <p className="text-slate-600 font-lato leading-relaxed mb-6">
                Schedule a personal consultation at our Colombo office, where our expert travel advisors will craft your perfect luxury journey in an elegant, comfortable environment.
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-800 font-medium">Address</p>
                    <p className="text-slate-600 text-sm">No. 68A Senanayake Crescent, Colombo 07, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-800 font-medium">Phone</p>
                    <p className="text-slate-600 text-sm">+94 771 469 4101</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-800 font-medium">Office Hours</p>
                    <p className="text-slate-600 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600 text-sm">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6 sm:mt-8">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 text-white rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Map */}
          <div className="order-first lg:order-last">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 via-amber-100 to-stone-300 flex items-center justify-center">
                {/* Map Placeholder with elegant styling */}
                <div className="text-center px-6">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 border-2 border-amber-400 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center bg-amber-400/10 backdrop-blur-sm">
                    <svg className="w-8 sm:w-10 h-8 sm:h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-slate-800 font-serif text-lg sm:text-xl mb-2">
                    Interactive Map
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Colombo 07, Sri Lanka
                  </p>
                  <div className="mt-4">
                    <button className="inline-flex items-center space-x-2 text-slate-800 hover:text-slate-600 transition-colors text-sm font-medium">
                      <span>View on Google Maps</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-amber-200/50 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}