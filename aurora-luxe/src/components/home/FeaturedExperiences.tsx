// src/components/home/FeaturedExperiences.tsx
"use client";

import React from "react";

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
    <h2 className="text-center mb-12 text-4xl font-bold">Featured Experiences</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 max-w-7xl w-full justify-center items-center">
      {featuredExperiences.map((exp) => (
        <div
          key={exp.id}
          className="relative rounded-3xl overflow-hidden shadow-lg flex items-center justify-center aspect-[9/16] bg-white"
        >
          <img
            src={exp.image}
            alt={exp.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
            <span className="text-white text-2xl font-bold drop-shadow-lg mb-4 text-center px-4">
              {exp.title}
            </span>
            <span className="text-white text-sm mb-6">{exp.location}</span>
            <span className="text-amber-400 text-lg font-semibold mb-8">
              {exp.price} • {exp.duration}
            </span>
            <button
              className="px-6 py-2 text-white border-4 border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
              aria-label={`Book ${exp.title}`}
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedExperiences;
