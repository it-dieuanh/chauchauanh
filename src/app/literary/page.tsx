"use client";

import { BookOpen, Feather, Heart, Star, Moon, Sparkles, Pen } from "lucide-react";
import { useState } from "react";

const literaryWorks = [
  {
    title: "Whispers of the Moon",
    language: "English",
    preview: "In the quiet hours when stars confess their secrets to the night sky, I find myself penning love letters to the universe...",
    fullText: "[Your romantic English essay goes here - this is where you can place your full prose piece]",
    icon: Moon,
    color: "cosmic-lilac"
  },
  {
    title: "Những Mảnh Vỡ Ánh Sáng",
    language: "Tiếng Việt",
    preview: "Trong ánh sáng dịu dàng của buổi chiều, những suy nghĩ lặng lẽ trôi như những làn mây trắng...",
    fullText: "[Your Vietnamese prose goes here - Bài tản văn tiếng Việt của bạn]",
    icon: Star,
    color: "cosmic-pink"
  },
  {
    title: "Celestial Musings",
    language: "English",
    preview: "Between the spaces of heartbeats and dreams, there exists a realm where words dance like fireflies in summer dusk...",
    fullText: "[Your contemplative English piece]",
    icon: Sparkles,
    color: "cosmic-gold"
  },
  {
    title: "Hồi Ức Mùa Hoa",
    language: "Tiếng Việt",
    preview: "Mùa xuân về mang theo những cánh hoa rơi, như những lời thoại thầm trong gió...",
    fullText: "[Vietnamese literary work]",
    icon: Heart,
    color: "cosmic-silver"
  },
  {
    title: "Letters to Tomorrow",
    language: "English",
    preview: "Dear future self, if you're reading this, know that every moment we lived was painted with colors of hope...",
    fullText: "[Your English letter/essay]",
    icon: Feather,
    color: "cosmic-lilac"
  },
  {
    title: "Dòng Chảy Của Thời Gian",
    language: "Tiếng Việt",
    preview: "Thời gian trôi như dòng sông, mang theo những ký ức ngọt ngào và đắng cay...",
    fullText: "[Vietnamese time reflection piece]",
    icon: Moon,
    color: "cosmic-pink"
  },
  {
    title: "Stardust Memories",
    language: "English",
    preview: "We are all made of stardust, carrying within us the echoes of ancient cosmic symphonies...",
    fullText: "[Your philosophical English essay]",
    icon: Pen,
    color: "cosmic-gold"
  }
];

export default function LiteraryPage() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-float">
          <div className="inline-block mb-4 relative">
            <BookOpen className="w-16 h-16 text-cosmic-lilac animate-twinkle mx-auto" />
            <Feather className="w-6 h-6 text-cosmic-gold absolute -top-2 -right-2 animate-float" />
          </div>
          <h1 className="font-elegant text-5xl md:text-7xl text-cosmic-cream mb-4">
            Literary Collection
          </h1>
          <p className="font-script text-2xl text-cosmic-pink mb-4">
            Romantic Prose & Spontaneous Essays
          </p>
          <p className="text-cosmic-silver/80 max-w-2xl mx-auto italic">
            A bilingual journey through emotions and imagination. Each piece is a window 
            into my soul, written in moments of inspiration under starlit skies.
          </p>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {literaryWorks.map((work, index) => {
            const Icon = work.icon;
            const isFlipped = flippedIndex === index;
            
            return (
              <div
                key={index}
                className="relative perspective-1000"
                style={{
                  animation: `drift ${7 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div
                  className={`
                    relative w-full h-[500px] cursor-pointer transition-transform duration-700 transform-style-3d
                    ${isFlipped ? 'rotate-y-180' : ''}
                  `}
                  onClick={() => handleFlip(index)}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'
                  }}
                >
                  {/* Front of Book */}
                  <div
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="h-full rounded-2xl border-2 border-cosmic-lilac/30 bg-gradient-to-br from-cosmic-navy/80 to-cosmic-navy/60 backdrop-blur-md overflow-hidden group hover:border-cosmic-pink/50 hover:shadow-2xl hover:shadow-cosmic-lilac/40 transition-all duration-500">
                      {/* Book Cover Design */}
                      <div className="relative h-full p-8 flex flex-col justify-between">
                        {/* Decorative book texture */}
                        <div className="absolute inset-0 opacity-5">
                          <svg width="100%" height="100%">
                            <pattern id={`book-texture-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                              <line x1="0" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="0.5" />
                              <line x1="0" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                            <rect width="100%" height="100%" fill={`url(#book-texture-${index})`} />
                          </svg>
                        </div>

                        {/* Book spine effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-cosmic-navy to-transparent border-r border-cosmic-lilac/20" />

                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-6">
                            <div className="px-3 py-1 rounded-full bg-cosmic-lilac/20 border border-cosmic-lilac/30">
                              <span className="text-xs font-elegant text-cosmic-cream">{work.language}</span>
                            </div>
                            <Icon className="w-8 h-8 text-cosmic-gold animate-twinkle" />
                          </div>
                          
                          <h3 className="font-elegant text-2xl text-cosmic-cream mb-4 group-hover:text-cosmic-pink transition-colors">
                            {work.title}
                          </h3>
                          
                          <div className="space-y-2 mb-6">
                            <div className="h-px bg-cosmic-lilac/30 w-full" />
                            <div className="h-px bg-cosmic-lilac/20 w-5/6" />
                            <div className="h-px bg-cosmic-lilac/10 w-4/6" />
                          </div>
                          
                          <p className="text-cosmic-silver/90 leading-relaxed italic text-sm line-clamp-6">
                            {work.preview}
                          </p>
                        </div>

                        {/* Click to read indicator */}
                        <div className="relative z-10 text-center">
                          <div className="inline-flex items-center gap-2 text-cosmic-gold text-sm font-script animate-pulse">
                            <BookOpen className="w-4 h-4" />
                            <span>Click to read</span>
                          </div>
                        </div>

                        {/* Decorative corners */}
                        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-cosmic-gold/20" />
                        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-cosmic-pink/20" />
                        
                        {/* Stars */}
                        <div className="absolute top-1/4 right-8 w-1 h-1 bg-cosmic-gold rounded-full animate-twinkle" />
                        <div className="absolute bottom-1/3 left-12 w-1 h-1 bg-cosmic-pink rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
                      </div>
                    </div>
                  </div>

                  {/* Back of Book - Full Text */}
                  <div
                    className="absolute inset-0 backface-hidden"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="h-full rounded-2xl border-2 border-cosmic-pink/40 bg-gradient-to-br from-cosmic-navy/90 to-cosmic-navy/70 backdrop-blur-md overflow-hidden shadow-2xl shadow-cosmic-pink/30">
                      <div className="h-full p-8 overflow-y-auto">
                        {/* Book page texture */}
                        <div className="absolute inset-0 opacity-3">
                          <svg width="100%" height="100%">
                            <pattern id={`page-texture-${index}`} x="0" y="0" width="100%" height="20" patternUnits="userSpaceOnUse">
                              <line x1="0" y1="10" x2="100%" y2="10" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
                            </pattern>
                            <rect width="100%" height="100%" fill={`url(#page-texture-${index})`} />
                          </svg>
                        </div>

                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-6">
                            <h4 className="font-elegant text-xl text-cosmic-cream">
                              {work.title}
                            </h4>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleFlip(index);
                              }}
                              className="text-cosmic-gold hover:text-cosmic-pink transition-colors"
                            >
                              ← Back
                            </button>
                          </div>
                          
                          <div className="prose prose-invert max-w-none">
                            <p className="text-cosmic-silver/90 leading-relaxed italic text-sm whitespace-pre-wrap">
                              {work.fullText}
                            </p>
                          </div>

                          {/* Decorative footer */}
                          <div className="mt-8 pt-6 border-t border-cosmic-lilac/20">
                            <p className="font-calligraphy text-cosmic-lilac text-center">
                              ✦ ✦ ✦
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Magical glow effect */}
                {isFlipped && (
                  <div className="absolute -inset-2 bg-gradient-to-r from-cosmic-pink/20 via-cosmic-lilac/20 to-cosmic-gold/20 rounded-2xl blur-xl -z-10 animate-glow" />
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Quote */}
        <div className="mt-20 text-center p-10 rounded-3xl bg-cosmic-navy/30 backdrop-blur-sm border border-cosmic-lilac/20 animate-glow">
          <Feather className="w-12 h-12 text-cosmic-lilac mx-auto mb-4 animate-float" />
          <p className="font-calligraphy text-3xl text-cosmic-pink mb-4">
            "Words are the bridges between souls..."
          </p>
          <p className="text-cosmic-silver/70 italic max-w-2xl mx-auto">
            Every piece written here is a piece of my heart, floating in the cosmic library of dreams and memories.
          </p>
        </div>
      </div>
    </main>
  );
}
