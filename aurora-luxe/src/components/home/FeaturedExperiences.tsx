// src/components/home/FeaturedExperiences.tsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

const FeaturedExperiences = () => (
  <section className="w-full flex flex-col items-center justify-center py-12">
    <h2 className="text-center mb-12 text-4xl font-bold">
      Featured Experiences
    </h2>
    <div className="w-full max-w-5xl">
      <Swiper slidesPerView={1} loop={true}>
        {featuredExperiences.map((exp) => (
          <SwiperSlide key={exp.id}>
            <div className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-lg flex items-center justify-center">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute left-0 top-0 h-full md:w-[420px] w-[90vw] bg-gray-200 bg-opacity-90 flex flex-col justify-center px-8 shadow-xl z-10">
                <span className="text-3xl font-semibold mb-4 text-gray-900">
                  Exclusive Access
                </span>
                <span className="text-lg font-bold mb-2 text-gray-800">
                  {exp.title}
                </span>
                <span className="text-sm mb-4 text-gray-700">{exp.location}</span>
                <span className="text-amber-500 mb-8 text-lg font-semibold">
                  {exp.price} • {exp.duration}
                </span>
                <button className="w-32 py-2 text-gray-900 border-2 border-gray-400 rounded-full font-medium bg-white hover:bg-gray-900 hover:text-white transition-all duration-300">
                  View
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default FeaturedExperiences;
