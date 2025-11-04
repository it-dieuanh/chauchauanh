"use client";

import Image from "next/image";
import { Sparkles, Heart, Palette, BookOpen } from "lucide-react";

const personalCards = [
  {
    title: "About Myself",
    description: "I’m Ngo Chau Anh: a collector of stories, emotions, and tiny sparks of wonder that make life beautiful.",
    icon: Palette,
    imageUrl: "/about_myself.jpg",
    position: "top-0 left-0",
    size: "md"
  },
  {
    title: "My circle of heart",
    description: "Family and friends are my anchors and inspirations. Through every shared laughter, every heartfelt moment, I find warmth, grounding, and the quiet strength that shapes who I am.",
    icon: Heart,
    imageUrl: "/familyandfriends.jpg",
    position: "top-20 right-0",     
    size: "md"
  },
  {
    title: "Heartcrafted Joys",
    description:
      "I’m happiest when I’m creating: crocheting cozy gifts, baking sweet treats, or crafting handmade surprises for the people I love. My dogs are my daily joy, always curled up beside me as I dream up new ideas. That same spark of creativity led me to co-found a small slime startup with my best friend, turning simple fun into a shared adventure of imagination and teamwork.",
    icon: Sparkles,
    imageUrl:
      "/hobby.jpg",
    position: "bottom-40 left-10",
    size: "md",
  },
  {
    title: "Past-tense Heart",
    description:
      "I carry the past gently - every scent, sound, and childhood moment tucked softly in my heart. I often find myself smiling at who I used to be, the little dreamer who still lives quietly inside me. Nostalgia isn’t sadness to me; it’s a kind of love that never fades.",
    icon: BookOpen,
    imageUrl:
      "/childhood.jpg",
    position: "bottom-0 right-20",
    size: "md",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-float">
          <h1 className="font-calligraphy text-6xl md:text-8xl text-cosmic-cream mb-4 animate-glow">
            Ngo Chau Anh
          </h1>
          <p className="font-script text-2xl md:text-3xl text-cosmic-lilac mb-6">
            Welcome to My Daydream
          </p>
          <p className="text-cosmic-silver/80 max-w-2xl mx-auto italic">
            Wander through a floating gallery of stars, where imagination dances with art, love, and dreams.
          </p>
        </div>

        {/* Personal Cards - Asymmetric Layout */}
        <div className="relative h-[1800px] md:h-[1200px]">
          {personalCards.map((card, index) => {
            const Icon = card.icon as any;
            const isLarge = card.size === "lg";

            return (
              <div
                key={index}
                className={`
                  absolute group cursor-pointer
                  ${isLarge ? 'w-full md:w-[45%]' : 'w-full md:w-[40%]'}
                  ${index === 0 ? 'md:left-[5%] top-0' : ''}
                  ${index === 1 ? 'md:right-[5%] top-[400px] md:top-[100px]' : ''}
                  ${index === 2 ? 'md:left-[10%] top-[800px] md:top-[500px]' : ''}
                  ${index === 3 ? 'md:right-[8%] top-[1200px] md:top-[700px]' : ''}
                `}
                style={{
                  animation: `float ${6 + index}s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`
                }}
              >
                <div className="relative overflow-hidden rounded-3xl border-2 border-cosmic-lilac/30 bg-cosmic-navy/40 transition-all duration-500 hover:border-cosmic-pink/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cosmic-lilac/30">
                  {/* Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent" />

                    
                    {/* Floating Icon */}
                    <div className="absolute top-4 right-4 p-3 rounded-full bg-cosmic-lilac/20 border border-cosmic-cream/20 animate-twinkle">
                      <Icon className="w-6 h-6 text-cosmic-gold" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="font-elegant text-2xl md:text-3xl text-cosmic-cream mb-4 group-hover:text-cosmic-pink transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-cosmic-silver/90 leading-relaxed italic">
                      {card.description}
                    </p>
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 p-3 rounded-full border border-cosmic-cream/20 bg-cosmic-lilac/20">
                    <Icon className="w-6 h-6 text-cosmic-gold" />
                  </div>

                  {/* Decorative corner stars */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-cosmic-gold rounded-full animate-twinkle" />
                  <div
                    className="absolute bottom-2 right-2 w-2 h-2 bg-cosmic-pink rounded-full animate-twinkle"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Quote */}
<div className="mt-[18rem] md:mt-[26rem] lg:mt-[34rem] text-center animate-drift">
          <p className="font-calligraphy text-3xl text-cosmic-lilac/80 max-w-3xl mx-auto">
            "In this cosmic gallery, every creation is a constellation, every
            memory a shooting star, and every dream a universe waiting to be
            explored..."
          </p>
        </div>
      </div>
    </main>
  );
}

