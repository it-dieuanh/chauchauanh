"use client";

import Image from "next/image";
import { Droplets, Star, Crown, Sparkles, Zap, Cloud, Moon, Sun } from "lucide-react";
import { useState } from "react";

const slimeProducts = [
  {
    title: "Slime World",
    description: "This is a small local slime shop that I co-founded and currently co-lead with two friends. What began as a fun, lighthearted project to bring joy to our fellow students - and earn a bit of extra income - soon became much more. Through running the shop, I learned valuable lessons in business strategy, marketing, and teamwork beyond what any classroom could teach. Our signature products quickly stood out for their creativity and appeal, especially through our marketing initiatives.",
    imageUrl: "/0.jpg",
    icon: Crown,
    type: "ceo",
    color: "cosmic-gold"
  },
  {
    title: "Chau Anh with slime",
    description: "We also took charge of the brand’s visual marketing, photographing our products and creating promotional content ourselves. I often used my own image to represent the brand, bringing each jar of slime closer to our audience. I genuinely enjoyed investing time and effort into making every photo and promotional piece look polished and full of personality.",
    imageUrl: "/tui.jpg",
    icon: Star,
    type: "product",
    color: "cosmic-lilac"
  },
  {
    title: "CEO Introduction",
    description: "Having loved playing with slime since childhood and being deeply passionate about entrepreneurship, I’ve always dreamed of seeing our slime shop grow stronger and more successful - a small brand that brings joy, creativity, and color to everyone who discovers it.",
    imageUrl: "/chanhintro.jpg",
    icon: Cloud,
    type: "product",
    color: "cosmic-silver"
  },
  {
    title: "Being creative with Slime",
    description: "We also created creative customer appreciation initiatives for our slime shop. For example, we offered a 10% discount to customers who purchased and shared feedback on Instagram, special discounts on October 20th for female customers, and even opportunities for customers to design their own slime - choosing their favorite colors, charms, and textures. These programs allowed us to engage directly with our audience while making the slime experience more personal and fun.",
    imageUrl: "/post.png",
    icon: Moon,
    type: "product",
    color: "cosmic-cream"
  },
  {
    title: "SLIME: LOVELY MEOMEO",
    description: "The Sweet Basic Slime, made for loving hearts 💗 Perfect for gifting to someone special or pampering yourself on days when you need a little “self-love.” Soft, stretchy, and carrying a gentle pink hue just like its name. You can also shape it into hearts or bows as you like using the included clay!",
    imageUrl: "/kittylov.png",
    icon: Sun,
    type: "product",
    color: "cosmic-pink"
  },
  {
    title: "SLIME: PANCAT",
    description: "Inspired by soft, fluffy pancakes, Pancat is our Cloud Cream Slime line - light and airy like a cloud, melting at your touch~ You can shape your very own pancake using the included clay. Its gentle sweet scent and super smooth texture make it perfect for relaxing after a long, tiring day!"
    ,
    imageUrl: "/pancat.png",
    icon: Droplets,
    type: "product",
    color: "cosmic-silver"
  },
  {
    title: "SLIME: FURROSTIE",
    description: "Inspired by the cool Frostie drink, Furrostie is our Icy Slime line, with soft, chilly icy slime that feels amazing to touch ☁️ Its soothing sea-blue color brings a fresh, relaxing vibe!",
    imageUrl: "/icy.JPG",
    icon: Zap,
    type: "product",
    color: "cosmic-gold"
  },
  {
    title: "SLIME: MEOWCHA",
    description: "Inspired by matcha - a drink popular among young people today - Meowcha is our Basic Slime line, coming with foam and clay, giving a soft, relaxing, and pleasant feel.",
    imageUrl: "/matcha.JPG",
    icon: Sparkles,
    type: "product",
    color: "cosmic-lilac"
  },
  {
    title: "Instagram",
    description: "This is our Instagram page - our main sales channel. We aim to build this account with visually appealing posts and maintain steady engagement with our audience.",
    imageUrl: "/ig.png",
    icon: Star,
    type: "product",
    color: "cosmic-cream"
  },
  {
    title: "Slime combo",
    description: "FURROSTIE, MEOWCHA, AND CHOCOLATE - A SPECIAL GIFT AND UNIQUE KIND OF SLIME",
    imageUrl: "/boba.JPG",
    icon: Zap,
    type: "product",
    color: "cosmic-pink"
  },
  {
    title: "PLAY SLIME, AND SMILE",
    description: "Pop, squish, and mix these delightful jelly cubes. A textured adventure in every container!",
    imageUrl: "/bonam.JPG",
    icon: Cloud,
    type: "product",
    color: "cosmic-lilac"
  }
];

export default function SlimePage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-float">
          <div className="inline-block mb-4 relative">
            <Droplets className="w-16 h-16 text-cosmic-lilac animate-bounce mx-auto" />
            <Sparkles className="w-6 h-6 text-cosmic-gold absolute -top-2 -right-2 animate-twinkle" />
            <Sparkles className="w-6 h-6 text-cosmic-pink absolute -bottom-2 -left-2 animate-twinkle" style={{ animationDelay: '0.5s' }} />
          </div>
          <h1 className="font-elegant text-5xl md:text-7xl text-cosmic-cream mb-4">
            Slime Startup
          </h1>
          <p className="font-script text-2xl text-cosmic-pink mb-4">
            Welcome to the Magical Slime Universe
          </p>
          <p className="text-cosmic-silver/80 max-w-2xl mx-auto italic">
            Where creativity meets texture! Each slime is handcrafted with premium ingredients 
            and a sprinkle of magic, designed to bring joy, relaxation, and endless fun.
          </p>
        </div>

        {/* Slime Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {slimeProducts.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;
            const isCEO = item.type === "ceo";
            
            return (
              <div
                key={index}
                className={`
                  relative group cursor-pointer
                  ${isCEO ? 'md:col-span-2 lg:col-span-3' : ''}
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animation: `float ${4 + (index % 3)}s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={`
                  relative overflow-hidden rounded-3xl border-2 backdrop-blur-md transition-all duration-500
                  ${isHovered 
                    ? 'border-cosmic-pink/60 scale-105 shadow-2xl shadow-cosmic-lilac/40' 
                    : 'border-cosmic-lilac/30 shadow-lg shadow-cosmic-navy/50'
                  }
                  ${isCEO 
                    ? 'bg-gradient-to-br from-cosmic-gold/20 to-cosmic-lilac/20' 
                    : 'bg-gradient-to-br from-cosmic-navy/60 to-cosmic-navy/30'
                  }
                `}>
                  {/* Image Container */}
                  <div className={`relative ${isCEO ? 'h-96' : 'h-72'} overflow-hidden`}>
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    
                    {/* Slime world overlay */}
                    <div className={`
                      absolute inset-0 transition-all duration-500
                      ${isCEO 
                        ? 'bg-gradient-to-t from-cosmic-gold/40 via-cosmic-navy/30 to-transparent' 
                        : 'bg-gradient-to-t from-cosmic-navy via-cosmic-navy/60 to-transparent'
                      }
                    `} />
                    
                    {/* Floating bubbles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 bg-cosmic-lilac/30 rounded-full backdrop-blur-sm border border-cosmic-cream/20"
                          style={{
                            left: `${20 + i * 15}%`,
                            bottom: `${10 + i * 10}%`,
                            animation: `float ${3 + i}s ease-in-out infinite`,
                            animationDelay: `${i * 0.5}s`
                          }}
                        />
                      ))}
                    </div>

                    {/* Icon Badge */}
                    <div className={`
                      absolute top-4 right-4 p-3 rounded-full backdrop-blur-md border transition-all duration-300
                      ${isHovered 
                        ? `bg-${item.color}/40 border-cosmic-cream/40 scale-110 rotate-12` 
                        : 'bg-cosmic-navy/40 border-cosmic-lilac/20'
                      }
                    `}>
                      <Icon className={`w-6 h-6 transition-colors ${isHovered ? 'text-cosmic-gold' : 'text-cosmic-lilac'}`} />
                    </div>

                    {/* CEO Crown */}
                    {isCEO && (
                      <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-cosmic-gold/30 backdrop-blur-md border border-cosmic-gold/50 animate-pulse">
                        <span className="font-elegant text-cosmic-gold text-sm font-semibold">CEO & FOUNDER</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`${isCEO ? 'p-8' : 'p-6'}`}>
                    <h3 className={`font-elegant text-cosmic-cream mb-3 group-hover:text-cosmic-pink transition-colors ${isCEO ? 'text-3xl' : 'text-xl'}`}>
                      {item.title}
                    </h3>
                    <p className="text-cosmic-silver/90 leading-relaxed italic text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Slime drip effect decorations */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-cosmic-lilac/20 rounded-full blur-md" />
                  <div className="absolute -top-2 left-12 w-6 h-6 bg-cosmic-pink/20 rounded-full blur-md" />
                  
                  {/* Sparkle corners */}
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-cosmic-gold rounded-full animate-twinkle" />
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-cosmic-pink rounded-full animate-twinkle" style={{ animationDelay: '0.7s' }} />
                  
                  {/* Glow border on hover */}
                  {isHovered && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-lilac/30 via-cosmic-pink/30 to-cosmic-gold/30 rounded-3xl blur-lg -z-10 animate-glow" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="relative mt-20 p-10 rounded-3xl bg-gradient-to-br from-cosmic-lilac/20 via-cosmic-pink/20 to-cosmic-gold/20 backdrop-blur-md border-2 border-cosmic-lilac/30 overflow-hidden animate-glow">
          {/* Animated slime drips */}
          <div className="absolute top-0 left-1/4 w-16 h-16 bg-cosmic-lilac/10 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-20 h-20 bg-cosmic-pink/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
          
          <div className="relative z-10 text-center">
            <Sparkles className="w-12 h-12 text-cosmic-gold mx-auto mb-4 animate-spin" style={{ animationDuration: '3s' }} />
            <h3 className="font-elegant text-3xl text-cosmic-cream mb-4">
              Ready to Experience the Magic?
            </h3>
            <p className="font-script text-xl text-cosmic-pink mb-4">
              Each slime is made with love, care, and premium ingredients
            </p>
            <p className="text-cosmic-silver/80 max-w-2xl mx-auto italic">
              "[Contact information, pricing, or ordering details go here]"
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
