// 'use client';

// import { useState } from 'react';
// import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

// export default function Footer() {
//   const [email, setEmail] = useState('');
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   const handleNewsletterSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubscribed(true);
//     setEmail('');
//   };

//   return (
//     <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white rounded-t-3xl mx-4 mb-4">
//       <div className="max-w-4xl mx-auto px-8 py-16">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="font-serif text-4xl font-bold mb-4">Aurora Luxe Travels</h2>
//           <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed">
//             Aurora Luxe Travels curates bespoke journeys to the worlds most exclusive destinations. With a passion for elegance
//             and detail, we craft seamless luxury escapes designed for the discerning traveler.
//           </p>
//         </div>

//         {/* Contact Info */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//           <div className="text-center">
//             <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Phone className="w-6 h-6" />
//             </div>
//             <p className="text-blue-100 text-sm mb-1">+91 563 589 100</p>
//           </div>

//           <div className="text-center">
//             <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Mail className="w-6 h-6" />
//             </div>
//             <p className="text-blue-100 text-sm mb-1">auroraluxe@email.com</p>
//           </div>

//           <div className="text-center">
//             <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
//               <MapPin className="w-6 h-6" />
//             </div>
//             <p className="text-blue-100 text-sm mb-1">No. 568 Seafront Crescent,</p>
//             <p className="text-blue-100 text-sm">Colombo 03240</p>
//           </div>
//         </div>

//         {/* Newsletter */}
//         <div className="text-center mb-12">
//           <h3 className="font-serif text-2xl font-bold mb-6">Subscribe to our Newsletter</h3>

//           {!isSubscribed ? (
//             <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your Email here"
//                 className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-white text-blue-900 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
//               >
//                 SUBSCRIBE
//               </button>
//             </form>
//           ) : (
//             <div className="text-green-300 text-lg">
//               ✓ Thank you for subscribing!
//             </div>
//           )}
//         </div>

//         {/* Help & Support */}
//         <div className="text-center mb-12">
//           <h4 className="font-serif text-xl font-bold mb-6">Help & Support</h4>
//           <div className="space-y-2">
//             <div className="text-blue-100">• FAQ</div>
//             <div className="text-blue-100">• Privacy Policy</div>
//             <div className="text-blue-100">• Terms & Conditions</div>
//           </div>
//         </div>

//         {/* Social Media */}
//         <div className="flex justify-center space-x-6 mb-8">
//           <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
//             <Instagram className="w-6 h-6" />
//           </a>
//           <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
//             <Facebook className="w-6 h-6" />
//           </a>
//           <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//             </svg>
//           </a>
//           <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
//             <Youtube className="w-6 h-6" />
//           </a>
//         </div>

//         {/* Copyright */}
//         <div className="text-center text-blue-200 text-sm">
//           © 2025 Aurora Luxe Travels. All Rights Reserved
//         </div>
//       </div>
//     </footer>
//   );
// }
