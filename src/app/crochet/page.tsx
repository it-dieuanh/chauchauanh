"use client";

import Image from "next/image";
import { Scissors, Sparkles, Heart, Star, Wand2 } from "lucide-react";
import { useState } from "react";

const crochetItems = [
  {
    title: "Celestial Amigurumi",
    description: "Hand-crafted mystical creatures from the fairy realm. Each stitch carries magic, each detail tells a story of moonlit nights and starry dreams.",
    imageUrl: "https://images.unsplash.com/photo-1600464904743-45c1e7d8f4f6?w=800&q=80",
    icon: Star,
    color: "cosmic-lilac"
  },
  {
    title: "Enchanted Blankets",
    description: "Woven with threads of comfort and spells of warmth. Perfect for cozy evenings under the stars, wrapped in handmade love and care.",
    imageUrl: "https://images.unsplash.com/photo-1601663136919-d053fea4c611?w=800&q=80",
    icon: Sparkles,
    color: "cosmic-pink"
  },
  {
    title: "Magical Pouches",
    description: "Tiny treasure holders for secrets and dreams. Crocheted with intricate patterns inspired by ancient fairy tales and mystical gardens.",
    imageUrl: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?w=800&q=80",
    icon: Heart,
    color: "cosmic-gold"
  },
  {
    title: "Whimsical Garments",
    description: "Wearable art that transforms the ordinary into extraordinary. Each piece is a statement of creativity and individuality.",
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    icon: Wand2,
    color: "cosmic-silver"
  },
  {
    title: "Fairy Tale Accessories",
    description: "From headbands to keychains, each accessory adds a touch of magic to everyday life. Small wonders with big impact.",
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea1f8db5?w=800&q=80",
    icon: Scissors,
    color: "cosmic-lilac"
  }
];

export default function CrochetPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-float">
          <div className="inline-block mb-4">
            <Scissors className="w-16 h-16 text-cosmic-lilac animate-twinkle mx-auto" />
          </div>
          <h1 className="font-elegant text-5xl md:text-7xl text-cosmic-cream mb-4">
            Crochet Creations
          </h1>
          <p className="font-script text-2xl text-cosmic-pink mb-4">
            Handmade Magic from the Fairy Realm
          </p>
          <p className="text-cosmic-silver/80 max-w-2xl mx-auto italic">
            Each piece is crafted with love, patience, and a sprinkle of stardust. 
            Welcome to my enchanted crochet world where yarn becomes art.
          </p>
        </div>

        {/* Crochet Grid - Magical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {crochetItems.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className={`
                  relative group cursor-pointer
                  ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animation: `float ${5 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="relative overflow-hidden rounded-3xl border-2 border-cosmic-lilac/30 bg-gradient-to-br from-cosmic-navy/60 to-cosmic-navy/30 backdrop-blur-md transition-all duration-500 hover:border-cosmic-pink/60 hover:scale-105 hover:shadow-2xl hover:shadow-cosmic-lilac/40">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />
                    
                    {/* Dark mystical overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cosmic-navy via-cosmic-navy/70 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Sparkle effects */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute top-10 left-10 w-1 h-1 bg-cosmic-gold rounded-full animate-twinkle" />
                      <div className="absolute top-20 right-16 w-1 h-1 bg-cosmic-pink rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute bottom-20 left-16 w-1 h-1 bg-cosmic-silver rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
                    </div>

                    {/* Floating Icon */}
                    <div className={`
                      absolute top-4 right-4 p-3 rounded-full backdrop-blur-md border transition-all duration-300
                      ${isHovered ? 'bg-cosmic-lilac/40 border-cosmic-cream/40 scale-110' : 'bg-cosmic-navy/40 border-cosmic-lilac/20'}
                    `}>
                      <Icon className={`w-6 h-6 transition-colors ${isHovered ? 'text-cosmic-gold' : 'text-cosmic-lilac'}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-elegant text-2xl text-cosmic-cream mb-3 group-hover:text-cosmic-pink transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-cosmic-silver/90 leading-relaxed italic text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Magical corner decorations */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cosmic-gold/20 rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cosmic-pink/20 rounded-br-3xl" />
                  
                  {/* Yarn craft texture effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-5">
                    <svg width="100%" height="100%">
                      <pattern id={`craft-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="currentColor" />
                      </pattern>
                      <rect width="100%" height="100%" fill={`url(#craft-${index})`} />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 p-8 rounded-3xl bg-cosmic-navy/30 backdrop-blur-sm border border-cosmic-lilac/20 animate-glow">
          <p className="font-script text-2xl text-cosmic-lilac mb-4">
            Each creation is unique, made with love and a touch of magic ✨
          </p>
          <p className="text-cosmic-cream/70 italic">
            "[Place your order or inquiry information here]"
          </p>
        </div>
      </div>
    </main>
  );
}
