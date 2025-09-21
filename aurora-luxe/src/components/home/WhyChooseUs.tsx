// 'use client';

// import { useState, useEffect } from 'react';
// import { CheckCircle, Star, Globe, Users } from 'lucide-react';

// const features = [
//   {
//     icon: Star,
//     title: 'Luxury Accommodations',
//     description: 'Handpicked 5-star hotels and exclusive resorts worldwide'
//   },
//   {
//     icon: Globe,
//     title: 'Global Destinations',
//     description: 'Access to exclusive locations and hidden gems around the world'
//   },
//   {
//     icon: Users,
//     title: 'Personal Concierge',
//     description: '24/7 dedicated support for all your travel needs'
//   },
//   {
//     icon: CheckCircle,
//     title: 'Tailored Experiences',
//     description: 'Customized itineraries designed just for you'
//   }
// ];

// export default function WhyChooseUs() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className={`text-center mb-12 transition-all duration-1000 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//             Why Choose Aurora Luxe
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Experience the difference with our unmatched luxury travel services
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => {
//             const IconComponent = feature.icon;
//             return (
//               <div
//                 key={index}
//                 className={`text-center transition-all duration-1000 ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                 }`}
//                 style={{ transitionDelay: `${300 + index * 200}ms` }}
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
//                   <IconComponent className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }