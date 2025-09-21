// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';

// interface PromiseFeature {
//   id: number;
//   title: string;
//   description: string;
//   icon: string;
// }

// const features: PromiseFeature[] = [
//   {
//     id: 1,
//     title: 'Exclusive Access',
//     description: 'Private access to the world\'s most exclusive destinations and experiences',
//     icon: '🔑'
//   },
//   {
//     id: 2,
//     title: 'Personal Concierge',
//     description: 'Dedicated travel experts available 24/7 to craft your perfect journey',
//     icon: '👨‍💼'
//   },
//   {
//     id: 3,
//     title: 'Luxury Accommodations',
//     description: 'Handpicked five-star hotels and private villas in every destination',
//     icon: '🏨'
//   },
//   {
//     id: 4,
//     title: 'Private Transportation',
//     description: 'Chauffeur-driven luxury vehicles and private jet charters',
//     icon: '✈️'
//   }
// ];

// export default function PromiseSection() {
//   const [activeFeature, setActiveFeature] = useState(0);

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             The Aurora Luxe Promise
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             We don't just plan trips – we craft extraordinary experiences that exceed your wildest dreams.
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Features Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {features.map((feature, index) => (
//               <div
//                 key={feature.id}
//                 className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
//                   activeFeature === index
//                     ? 'border-blue-600 bg-blue-50 shadow-lg'
//                     : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
//                 }`}
//                 onMouseEnter={() => setActiveFeature(index)}
//               >
//                 <div className="text-4xl mb-4">{feature.icon}</div>
//                 <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Featured Image */}
//           <div className="relative">
//             <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
//               <Image
//                 src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//                 alt="Luxury resort with infinity pool"
//                 fill
//                 className="object-cover"
//               />
//             </div>
            
//             {/* Overlay Card */}
//             <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 max-w-xs">
//               <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
//                 {features[activeFeature].title}
//               </h3>
//               <p className="text-gray-600 text-sm mb-4">
//                 {features[activeFeature].description}
//               </p>
//               <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
//                 LEARN MORE
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           <div className="fade-in-up">
//             <div className="font-serif text-4xl font-bold text-blue-600 mb-2">500+</div>
//             <div className="text-gray-600">Luxury Destinations</div>
//           </div>
//           <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
//             <div className="font-serif text-4xl font-bold text-blue-600 mb-2">50K+</div>
//             <div className="text-gray-600">Happy Travelers</div>
//           </div>
//           <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
//             <div className="font-serif text-4xl font-bold text-blue-600 mb-2">24/7</div>
//             <div className="text-gray-600">Concierge Service</div>
//           </div>
//           <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
//             <div className="font-serif text-4xl font-bold text-blue-600 mb-2">100%</div>
//             <div className="text-gray-600">Satisfaction Rate</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
