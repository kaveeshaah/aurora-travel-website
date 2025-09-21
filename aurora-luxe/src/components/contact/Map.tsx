'use client';

export default function Map() {
  return (
    <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <p className="text-gray-600 font-serif">
          Interactive Map
        </p>
        <p className="text-sm text-gray-500 mt-2">
          123 Luxury Avenue, New York, NY 10001
        </p>
      </div>
    </div>
  );
}