'use client';

export function MapSectionLayout() {
  return (
    <div className="flex flex-col items-center mb-16">
      <div className="flex justify-center mb-8">
        <div className="w-24 h-px bg-amber-400" />
      </div>
      <h2 className="font-serif text-4xl lg:text-5xl text-white mb-8 text-center tracking-wide">
        Visit Our Office
      </h2>
      <div className="bg-slate-900/60 rounded-2xl p-12 shadow-2xl border border-slate-600 max-w-4xl w-full backdrop-blur-sm">
        <div className="mb-8">
          <h3 className="font-serif text-2xl lg:text-3xl text-white mb-6 text-center">
            Experience Luxury Planning in Person
          </h3>
          <br />
          <div className="flex justify-center">
            <p className="text-slate-300 text-lg font-lato leading-relaxed text-center max-w-2xl px-4">
              Visit our flagship office in the heart of Manhattan, where our travel experts craft bespoke journeys in an environment that reflects the luxury experiences we create.
            </p>
          </div>
        </div>
        <div className="w-full h-72 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-slate-700">
          <div className="text-center px-4">
            <div className="w-16 h-16 border-2 border-amber-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-amber-200 font-serif">
              Interactive Map
            </p>
            <p className="text-sm text-slate-300 mt-2">
              123 Luxury Avenue, New York, NY 10001
            </p>
            <br />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}


