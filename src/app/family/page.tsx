"use client";

import { Heart, Camera, Sparkles } from "lucide-react";
import { useState } from "react";

const familyVideos = [
  {
    title: "Memories of Wonder",
    description: "A collection of precious moments that paint our family story with colors of love, laughter, and togetherness. Each frame holds a universe of emotions.",
    videoPlaceholder: "Video 1 - Upload your family memories here",
    gradient: "from-cosmic-pink/20 to-cosmic-lilac/20"
  },
  {
    title: "Nostalgic Adventures",
    description: "Journey through time with us as we explore, create, and cherish every second together. These moments are our greatest treasures.",
    videoPlaceholder: "Video 2 - Share your family adventures",
    gradient: "from-cosmic-lilac/20 to-cosmic-navy/40"
  },
  {
    title: "Warmth of Home",
    description: "The gentle embrace of family, the comfort of belonging, and the magic of shared dreams. This is where our hearts forever reside.",
    videoPlaceholder: "Video 3 - Capture your family warmth",
    gradient: "from-cosmic-gold/10 to-cosmic-pink/20"
  }
];

export default function FamilyPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-float">
          <div className="inline-block mb-4 relative">
            <Heart className="w-16 h-16 text-cosmic-pink animate-twinkle mx-auto" fill="currentColor" />
            <Sparkles className="w-6 h-6 text-cosmic-gold absolute -top-2 -right-2 animate-twinkle" style={{ animationDelay: '0.5s' }} />
          </div>
          <h1 className="font-elegant text-5xl md:text-7xl text-cosmic-cream mb-4">
            Family Galaxy
          </h1>
          <p className="font-script text-2xl text-cosmic-pink mb-4">
            Nostalgic Memories Floating in Time
          </p>
          <p className="text-cosmic-silver/80 max-w-2xl mx-auto italic">
            In this cosmic corner, we preserve the warmth of family moments, 
            each video a constellation of love, wrapped in the glow of nostalgia.
          </p>
        </div>

        {/* Video Grid */}
        <div className="space-y-12 mb-16">
          {familyVideos.map((video, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `drift ${8 + index * 2}s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`
              }}
            >
              <div className={`
                relative overflow-hidden rounded-3xl border-2 transition-all duration-700
                ${hoveredIndex === index 
                  ? 'border-cosmic-pink/60 shadow-2xl shadow-cosmic-pink/30 scale-[1.02]' 
                  : 'border-cosmic-lilac/30 shadow-lg shadow-cosmic-lilac/10'
                }
                bg-gradient-to-br ${video.gradient} backdrop-blur-md
              `}>
                {/* 3D Effect Container */}
                <div className="relative p-6 md:p-8">
                  {/* Video Frame */}
                  <div 
                    className={`
                      relative aspect-video rounded-2xl overflow-hidden border-2 border-cosmic-cream/20 bg-cosmic-navy/60
                      transition-transform duration-700
                      ${hoveredIndex === index ? 'scale-[0.98] rotate-1' : 'scale-100'}
                    `}
                    style={{
                      boxShadow: hoveredIndex === index 
                        ? '0 25px 50px -12px rgba(196, 167, 231, 0.5), inset 0 2px 4px 0 rgba(255, 255, 255, 0.1)'
                        : '0 10px 25px -5px rgba(0, 0, 0, 0.3), inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    {/* Video Upload Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cosmic-navy/80 to-cosmic-navy/60">
                      <div className="text-center space-y-4">
                        <Camera className="w-16 h-16 text-cosmic-lilac/50 mx-auto animate-pulse" />
                        <p className="text-cosmic-silver/60 font-script text-lg">
                          {video.videoPlaceholder}
                        </p>
                      </div>
                    </div>

                    {/* Nostalgic film grain effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay">
                      <svg width="100%" height="100%">
                        <filter id={`noise-${index}`}>
                          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
                        </filter>
                        <rect width="100%" height="100%" filter={`url(#noise-${index})`} />
                      </svg>
                    </div>

                    {/* Vintage corner decorations */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cosmic-gold/40" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cosmic-gold/40" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cosmic-gold/40" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cosmic-gold/40" />
                  </div>

                  {/* Description Card */}
                  <div className={`
                    mt-6 p-6 rounded-2xl bg-cosmic-navy/40 backdrop-blur-sm border transition-all duration-500
                    ${hoveredIndex === index ? 'border-cosmic-pink/40 translate-y-0' : 'border-cosmic-lilac/20 translate-y-2'}
                  `}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 rounded-full bg-cosmic-lilac/20 border border-cosmic-lilac/30">
                          <Heart className="w-6 h-6 text-cosmic-pink" fill="currentColor" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-elegant text-2xl text-cosmic-cream mb-3">
                          {video.title}
                        </h3>
                        <p className="text-cosmic-silver/90 leading-relaxed italic">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Magical floating particles */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cosmic-gold rounded-full animate-firefly" />
                    <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cosmic-pink rounded-full animate-firefly" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-cosmic-silver rounded-full animate-firefly" style={{ animationDelay: '2s' }} />
                  </div>
                )}

                {/* Galaxy glow effect */}
                <div className={`
                  absolute -inset-1 bg-gradient-to-r from-cosmic-lilac/20 via-cosmic-pink/20 to-cosmic-gold/20 rounded-3xl blur-xl
                  transition-opacity duration-700 -z-10
                  ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                `} />
              </div>
            </div>
          ))}
        </div>

        {/* Closing Message */}
        <div className="text-center mt-20 p-10 rounded-3xl bg-gradient-to-br from-cosmic-navy/40 to-cosmic-navy/20 backdrop-blur-sm border border-cosmic-pink/20 animate-glow">
          <Heart className="w-12 h-12 text-cosmic-pink mx-auto mb-4 animate-pulse" fill="currentColor" />
          <p className="font-calligraphy text-3xl text-cosmic-lilac mb-4">
            Forever grateful for these precious moments...
          </p>
          <p className="text-cosmic-silver/70 italic max-w-2xl mx-auto">
            Every frame holds infinity, every second contains eternity. 
            This is our family's cosmic journey through time and love.
          </p>
        </div>
      </div>
    </main>
  );
}
