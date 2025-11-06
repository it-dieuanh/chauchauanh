"use client";

import { BookOpen, Feather, Heart, Star, Moon, Sparkles, Pen } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const literaryWorks = [
  {
    title: "Whispers of Hanoi",
    language: "English",
    preview: "In the quiet hours when stars confess their secrets to the night sky, I find myself tracing the heartbeat of Hanoi - thirty-six streets woven with light, longing, and untold love.",
    fullText: "36 ALLEYWAYS INTO THE PAST

Have you ever wondered how on earth can we conjure up a sense of what had faded away right within this modern world? Have you ever wondered if there exists a miraculous door bursting right onto the path of a whole new world, one coated with nostalgia and which cuddles the souls seeking the echoes of the past. This chimerical world is a sanctuary of simple intimacy, a refuge from the hurried pace of life, a solace against the restless assaults of the bustling of modernity. 

Hà Nội - The capital of the S-shaped land of thousand years of civilization, which has proved its long-lasting endurance throughout the millennial period of time. The city has graced my barren soul with the fluttering breeze of Spring, a resplendent ray of sunshine when Summer arrives, the gentle atmosphere of Fall and the hardy strength of Winter - the sole season that can bear the acts of God. From the unapologetically chaotic mornings to the calm, peaceful breaths of nighttime, I have always been proud of all facets of life here. Unbeknownst to me, my love for the people and the place has knitted itself into the very fabric of my being. Hà Nội has taken on a new exterior over the years, one of modernity and remarkable change, but beneath that exterior an extraordinary, ancient beauty is preserved, a serene essence that continues to provide consolation for fatigued souls yearning to return to the carefree days of youth and for the torrid spirits of the young seeking an evanescent break from the city's unrelenting pace.

Sometimes I am full of curiosity about a life like my grandparents’—a life they say is exquisitely old, stippled with poetic appeal, and infused with characteristics specific to their time. My peers and I, those young Vietnamese students, have internalized a poem since elementary school that, despite the fact that it is rarely recited word for word, clings to my memory like a relic from the past:

Let’s wander through Long Thành,
Thirty-six streets, clearly marked, no doubt remains.
Hàng Bồ, Hàng Bạc, Hàng Gai,
Hàng Buồm, Hàng Thiếc, Hàng Hài, Hàng Khay.
Mã Vĩ, Hàng Điếu, Hàng Giầy,
…
(Đặng Huy Thu)

I've always thought of the 36 streets as a separate world, one full of secrets and pleasures that wind through each alleyway and reflect the pride of the people who live in the capital. The lively scene of the 36 streets, however, often lacks potency at certain times in the viewpoint of a passing observer who never truly probes into and dissects its spirit to the molecular level. When I walk by the streets, even though my senses are supposed to be stimulated, they stay dulled and restricted to superficial sights as I pass each row of stores without much introspection. This has made my recollections of these streets over the years drab and ephemeral, like a black-and-white painting lacking the colorful strokes that give it life. 

As soft breezes blew past on a chilly autumn day in Hanoi, I was overcome with a desire to lose myself in a world of nostalgia and savor the splendor of every street, store, and culinary treat this city has to offer. Unbelievably, what started off as a quick sightseeing excursion filled me with rapture and anticipation, as though I were embarking on an adventure into a new country, a phantasmal world I had never seen before. I opened the door to that amazing world slowly as I followed the gentle fall air with my camera in hand and followed the aroma of milk flowers at every turn.

I. THE LIGHTS OF THE “WORLD”

Hàng Mã, Mã Vĩ: 
Hàng Mã is more than just a location where offerings are sold for religious rites or festive events; ever since I was a young child, I have been completely mesmerized every time my parents took me there for the Mid-Autumn Festival. Casting my gaze into the rays of light flickering from those luminous lanterns, I unintendedly fell into the trappings of the beauty of a forest with hundreds of fireflies glowing at night. And this scene, all of a sudden, was reminiscent of my childhood experience with Mid-Autumn Festival, when I was too scared of those strange traditional masks to rid myself from my father’s arms, but too captivated by the lanterns to catch sight of anything other than those “shining orbs”.

II. THE CLOTHES OF THE “WORLD”

Hàng Da, Hàng Đào, Hàng Bông, Hàng Gai, Hàng Hài, Hàng Giầy, and Hàng Ngang
Every time I enter a street like Hàng Đào that is lined with endless swaths of cloth and clothes, I am surrounded by the merchants' beckoning cries and never-ending grins. This atmosphere, gently blending with the scenery, flung me into a distant recollection of a decade ago, the first time I had ever dressed up with Áo Dài tailored from the soft pink fabric picked and choosed meticulously by the hands of my mother. It was not simply a sheer Tet holiday present that I received from my mother, but that Áo Dài was filled with maternal love inextricably intertwined with the sense of belonging to my “own world”. Not until I set a journey to pay a visit to these streets again and set my childhood eyes on those clothes did it dawn on me that perhaps it was time I bought such a meaningful present to my mother, just like she did to me as a virtue of love. 

III. THE ARTS OF THE “WORLD”

Hàng Bồ, Hàng Buồm, Hàng Mây:
Handicrafts have long been considered an old craft in Hanoi, according to Hàng Bồ, Hàng Buồm, and Hàng Mây. Every gorgeous handcrafted item fills the booths and gives the streets a remarkable allure that draws every tourist’s attention. Striding along the road, I longed to retrieve my vivid memories about Tò He in my childhood days - a traditional kind of toy for Vietnamese children sculptured from colored rice dough. It dealt a blow to me when there was no left trace of this activity, which more or less hindered my forward steps, though my past experience with it is something everlasting whenever I walk past those streets. But it was a sight for sore eyes when I still could cast my eyes on a variety of handmade traditional items, each was instilled with the unique features of my country and showcased all over the streets. 

IV. THE SCENTS OF THE “WORLD”

Hàng Khay, Hàng Mắm, Hàng Đậu, Hàng Gà, Hàng Bè:
Each street adds to the unique blend of aromas that permeate these lanes, making the mixture identifiable and unmatched. For many years, the stores that sell chicken, fish sauce, and tofu have flourished and changed, creating a legacy that has been upheld for many generations. The scents of this “world” are ordinary, familiar but irreplaceable by any other delicacies. They all jog my memory of my childhood meals when I stayed with my grandparents house every weekend and was taken to the nearby street-side Phở shop every single morning, from which the fragrant smell made its gentle move in the air and spread every nook and cranny. The look, the smell and the taste of those dishes awakened every corner of my senses and also the glimmering remnants of my past feelings.

……

I arrived at Hoan Kiem Lake. There was the moss-stained basin, with its disturbingly still surfaces, and around, there were the throngs of tourists that pushed to and fro. I squinted. And I suddenly felt lost. And yet relieved. Being surrounded by so many myths and people. So much of the past and the jostling present. The quiet grace and the ruthless chaos. And I dashed forward, flinging myself in the unforgiving current of mopeds and cars. That is when I unexpectedly escaped that “world” by way of the miraculous door once again, at which time I realized that 36 streets had, without any purpose, not necessary brought me into a “whole new world” but resurrected my “childhood world” in some ways that never sprang to my mind before. 

All of my feelings became ensnared in the inextricable resonance of 36 streets, the scent of crushing nostalgia and the sensation of the enchanting scenery. This excursion has definitely infused into my mind an everlasting sense of tranquility otherwise lacking in my life. And it has, satisfactorily, provided my curious mind with the answer to my original question; however, simultaneously and even unintendedly, provoked a new question to my insatiably inquisitive soul: Is there a sliver of chance that this “world” - 36 streets mingled with their surrounding whorls of scenery - will stand the test of time; or when I had another chance in a lifetime to set my foot on it again, I can no longer treat myself to those transcendental sensations?
",
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
  const [selectedWork, setSelectedWork] = useState<number | null>(null);

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
            
            return (
              <div
                key={index}
                className="relative"
                style={{
                  animation: `drift ${7 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div
                  className="relative w-full h-[500px] cursor-pointer"
                  onClick={() => setSelectedWork(index)}
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
              </div>
            );
          })}
        </div>

        {/* Reading Dialog */}
        <Dialog open={selectedWork !== null} onOpenChange={(open) => !open && setSelectedWork(null)}>
          <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-cosmic-navy/95 to-cosmic-navy/90 backdrop-blur-xl border-2 border-cosmic-lilac/40">
            {selectedWork !== null && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      {(() => {
                        const Icon = literaryWorks[selectedWork].icon;
                        return <Icon className="w-8 h-8 text-cosmic-gold animate-twinkle" />;
                      })()}
                      <div>
                        <DialogTitle className="font-elegant text-3xl text-cosmic-cream mb-2">
                          {literaryWorks[selectedWork].title}
                        </DialogTitle>
                        <div className="px-3 py-1 rounded-full bg-cosmic-lilac/20 border border-cosmic-lilac/30 inline-block">
                          <span className="text-xs font-elegant text-cosmic-cream">
                            {literaryWorks[selectedWork].language}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogHeader>

                {/* Divider */}
                <div className="space-y-2 mb-6">
                  <div className="h-px bg-cosmic-lilac/30 w-full" />
                  <div className="h-px bg-cosmic-lilac/20 w-5/6" />
                  <div className="h-px bg-cosmic-lilac/10 w-4/6" />
                </div>

                {/* Book page texture background */}
                <div className="absolute inset-0 opacity-3 pointer-events-none">
                  <svg width="100%" height="100%">
                    <pattern id="page-texture-dialog" x="0" y="0" width="100%" height="20" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="10" x2="100%" y2="10" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#page-texture-dialog)" />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative prose prose-invert prose-lg max-w-none">
                  <p className="text-cosmic-silver/90 leading-relaxed italic whitespace-pre-wrap">
                    {literaryWorks[selectedWork].fullText}
                  </p>
                </div>

                {/* Decorative footer */}
                <div className="mt-8 pt-6 border-t border-cosmic-lilac/20">
                  <p className="font-calligraphy text-cosmic-lilac text-center text-2xl">
                    ✦ ✦ ✦
                  </p>
                </div>

                {/* Decorative stars */}
                <div className="absolute top-20 right-12 w-2 h-2 bg-cosmic-gold rounded-full animate-twinkle" />
                <div className="absolute bottom-32 left-16 w-2 h-2 bg-cosmic-pink rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
              </>
            )}
          </DialogContent>
        </Dialog>

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

