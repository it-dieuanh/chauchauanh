"use client";

import { Telescope, FileText, Sparkles, Lightbulb, BookOpen, Microscope, Atom, Brain, Rocket, Award, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const researchWorks = [
  {
    title: "Exploring Creativity in Digital Age",
    category: "Research Paper",
    description: "An in-depth analysis of how digital platforms influence creative expression and artistic innovation in modern society.",
    date: "2024",
    icon: Lightbulb,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    color: "cosmic-lilac",
    fullContent: `# Exploring Creativity in Digital Age

## Abstract
This research examines the profound impact of digital platforms on creative expression and artistic innovation in contemporary society. Through mixed-methods analysis, we explore how technology has transformed the landscape of creativity.

## Introduction
The digital revolution has fundamentally altered how we create, share, and experience art...

## Methodology
Our research employed a combination of qualitative interviews with digital artists and quantitative analysis of social media engagement patterns...

## Findings
[Your full research content will go here - this is just a placeholder for your actual research paper]

## Conclusion
Digital platforms have democratized creative expression while simultaneously creating new challenges for artists...`
  },
  {
    title: "The Psychology of Handmade Crafts",
    category: "Journal Article",
    description: "Investigating the therapeutic benefits and cognitive impacts of engaging in handmade craft activities.",
    date: "2024",
    icon: Brain,
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    color: "cosmic-pink",
    fullContent: `# The Psychology of Handmade Crafts

## Abstract
This study investigates the therapeutic benefits and cognitive impacts of engaging in handmade craft activities...

[Your full research content will go here]`
  },
  {
    title: "Entrepreneurship in Creative Industries",
    category: "Case Study",
    description: "A comprehensive study on building sustainable creative businesses in the modern marketplace.",
    date: "2023",
    icon: Rocket,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "cosmic-gold",
    fullContent: `# Entrepreneurship in Creative Industries

## Executive Summary
This case study explores the challenges and opportunities of building sustainable creative businesses...

[Your full research content will go here]`
  },
  {
    title: "Bilingual Literary Expression",
    category: "Research Paper",
    description: "Examining the nuances and creative possibilities of writing literature in multiple languages.",
    date: "2023",
    icon: BookOpen,
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    color: "cosmic-silver",
    fullContent: `# Bilingual Literary Expression

## Abstract
This paper examines the nuances and creative possibilities of writing literature in multiple languages...

[Your full research content will go here]`
  },
  {
    title: "Material Science in Slime Production",
    category: "Scientific Study",
    description: "A scientific exploration of polymer chemistry and its applications in creating sensory products.",
    date: "2024",
    icon: Atom,
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    color: "cosmic-lilac",
    fullContent: `# Material Science in Slime Production

## Abstract
A scientific exploration of polymer chemistry and its applications in creating sensory products...

[Your full research content will go here]`
  },
  {
    title: "Textile Arts and Cultural Heritage",
    category: "Journal Article",
    description: "Exploring the historical significance and contemporary relevance of traditional textile crafts.",
    date: "2023",
    icon: Microscope,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    color: "cosmic-pink",
    fullContent: `# Textile Arts and Cultural Heritage

## Introduction
Exploring the historical significance and contemporary relevance of traditional textile crafts...

[Your full research content will go here]`
  },
  {
    title: "Family Dynamics and Creativity",
    category: "Research Paper",
    description: "Understanding how family support systems influence creative development and artistic pursuits.",
    date: "2024",
    icon: Brain,
    imageUrl: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&q=80",
    color: "cosmic-gold",
    fullContent: `# Family Dynamics and Creativity

## Abstract
Understanding how family support systems influence creative development and artistic pursuits...

[Your full research content will go here]`
  },
  {
    title: "Social Media and Artistic Identity",
    category: "Mini Research",
    description: "Investigating how digital platforms shape and reflect artistic identity in the 21st century.",
    date: "2023",
    icon: Lightbulb,
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    color: "cosmic-silver",
    fullContent: `# Social Media and Artistic Identity

## Introduction
Investigating how digital platforms shape and reflect artistic identity in the 21st century...

[Your full research content will go here]`
  },
  {
    title: "Innovation in Craft Business Models",
    category: "Journal Article",
    description: "Analyzing emerging business models for artisans and makers in the gig economy.",
    date: "2024",
    icon: Rocket,
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    color: "cosmic-lilac",
    fullContent: `# Innovation in Craft Business Models

## Executive Summary
Analyzing emerging business models for artisans and makers in the gig economy...

[Your full research content will go here]`
  },
  {
    title: "The Art of Observation",
    category: "Philosophical Essay",
    description: "A contemplative piece on curiosity, wonder, and the importance of mindful observation in research.",
    date: "2023",
    icon: Award,
    imageUrl: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=800&q=80",
    color: "cosmic-pink",
    fullContent: `# The Art of Observation

## A Philosophical Exploration
A contemplative piece on curiosity, wonder, and the importance of mindful observation in research...

[Your full research content will go here]`
  }
];

export default function ResearchPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedWork, setSelectedWork] = useState<number | null>(null);

  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-float">
          <div className="inline-block mb-4 relative">
            <Telescope className="w-16 h-16 text-cosmic-lilac animate-twinkle mx-auto" />
            <Sparkles className="w-6 h-6 text-cosmic-gold absolute -top-2 -right-2 animate-float" />
            <Sparkles className="w-6 h-6 text-cosmic-pink absolute -bottom-2 -left-2 animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
          <h1 className="font-elegant text-5xl md:text-7xl text-cosmic-cream mb-4">
            Research & Journals
          </h1>
          <p className="font-script text-2xl text-cosmic-pink mb-4">
            Curiosity-Driven Explorations
          </p>
          <p className="text-cosmic-silver/80 max-w-2xl mx-auto italic">
            Through the lens of curiosity, I explore intersections of art, science, and humanity. 
            Each piece represents a journey of discovery and intellectual wonder.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {researchWorks.map((work, index) => {
            const Icon = work.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedWork(index)}
                style={{
                  animation: `drift ${6 + index * 0.3}s ease-in-out infinite`,
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <div className={`
                  relative overflow-hidden rounded-3xl border-2 backdrop-blur-md transition-all duration-500
                  ${isHovered 
                    ? 'border-cosmic-pink/60 scale-105 shadow-2xl shadow-cosmic-lilac/50' 
                    : 'border-cosmic-lilac/30 shadow-lg shadow-cosmic-navy/50'
                  }
                  bg-gradient-to-br from-cosmic-navy/70 to-cosmic-navy/50
                `}>
                  {/* Image/Visual Area */}
                  <div className="relative h-48 overflow-hidden bg-cosmic-navy/60">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ 
                        backgroundImage: `url(${work.imageUrl})`,
                        filter: 'brightness(0.4)'
                      }}
                    />
                    
                    {/* Dark research overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cosmic-navy via-cosmic-navy/60 to-transparent" />
                    
                    {/* Telescope/Research motif overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`
                        p-6 rounded-full backdrop-blur-md border-2 transition-all duration-500
                        ${isHovered 
                          ? 'bg-cosmic-lilac/30 border-cosmic-gold/50 scale-110 rotate-12' 
                          : 'bg-cosmic-navy/50 border-cosmic-lilac/30'
                        }
                      `}>
                        <Icon className={`w-12 h-12 transition-colors ${isHovered ? 'text-cosmic-gold' : 'text-cosmic-lilac'}`} />
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cosmic-navy/70 backdrop-blur-md border border-cosmic-lilac/30">
                      <span className="text-xs font-elegant text-cosmic-cream">{work.category}</span>
                    </div>

                    {/* Date badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cosmic-navy/70 backdrop-blur-md border border-cosmic-gold/30">
                      <span className="text-xs font-elegant text-cosmic-gold">{work.date}</span>
                    </div>

                    {/* Sparkle effects */}
                    {isHovered && (
                      <>
                        <div className="absolute top-12 left-12 w-1 h-1 bg-cosmic-gold rounded-full animate-twinkle" />
                        <div className="absolute bottom-12 right-12 w-1 h-1 bg-cosmic-pink rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
                      </>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="p-6">
                    <h3 className="font-elegant text-xl text-cosmic-cream mb-3 group-hover:text-cosmic-pink transition-colors line-clamp-2">
                      {work.title}
                    </h3>
                    <p className="text-cosmic-silver/90 text-sm leading-relaxed italic line-clamp-3">
                      {work.description}
                    </p>
                  </div>

                  {/* Decorative elements - pen and paper motifs */}
                  <div className="absolute bottom-4 left-4 opacity-20">
                    <FileText className="w-6 h-6 text-cosmic-lilac" />
                  </div>
                  
                  {/* Scientific corner decorations */}
                  <div className="absolute top-0 right-0 w-16 h-16">
                    <svg viewBox="0 0 64 64" className="w-full h-full opacity-10">
                      <circle cx="48" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="1" className="text-cosmic-gold" />
                      <circle cx="48" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-cosmic-gold" />
                      <circle cx="48" cy="16" r="4" fill="currentColor" className="text-cosmic-gold" />
                    </svg>
                  </div>

                  {/* Telescope lens effect */}
                  <div className="absolute bottom-0 left-0 w-20 h-20 opacity-10">
                    <svg viewBox="0 0 80 80" className="w-full h-full">
                      <circle cx="20" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="2" className="text-cosmic-lilac" />
                      <line x1="20" y1="60" x2="35" x2="45" stroke="currentColor" strokeWidth="1.5" className="text-cosmic-lilac" />
                    </svg>
                  </div>

                  {/* Glow effect on hover */}
                  {isHovered && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-lilac/30 via-cosmic-pink/30 to-cosmic-gold/30 rounded-3xl blur-lg -z-10 animate-glow" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Section - Curiosity Statement */}
        <div className="relative mt-20 p-12 rounded-3xl bg-gradient-to-br from-cosmic-navy/60 to-cosmic-navy/40 backdrop-blur-md border-2 border-cosmic-lilac/30 overflow-hidden">
          {/* Decorative telescope illustration */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <Telescope className="w-full h-full transform rotate-45" />
          </div>
          
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Telescope className="w-12 h-12 text-cosmic-lilac animate-twinkle" />
              <Sparkles className="w-8 h-8 text-cosmic-gold animate-float" />
              <FileText className="w-10 h-10 text-cosmic-pink animate-twinkle" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h3 className="font-elegant text-3xl text-cosmic-cream mb-4">
              The Journey of Discovery
            </h3>
            <p className="font-script text-xl text-cosmic-lilac mb-6">
              Fueled by curiosity, guided by wonder
            </p>
            <p className="text-cosmic-silver/80 max-w-3xl mx-auto italic leading-relaxed">
              Every research project begins with a question, a spark of curiosity that illuminates 
              the path to understanding. Through observation, analysis, and wonder, we uncover 
              the hidden connections between art, science, and the human experience.
            </p>
            
            {/* Decorative divider */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-cosmic-lilac" />
              <Sparkles className="w-4 h-4 text-cosmic-gold animate-twinkle" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-cosmic-lilac" />
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cosmic-gold/30 rounded-full animate-float" />
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cosmic-pink/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-cosmic-lilac/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>

      {/* Research Dialog */}
      <Dialog open={selectedWork !== null} onOpenChange={(open) => !open && setSelectedWork(null)}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-cosmic-navy/95 to-cosmic-navy/90 backdrop-blur-xl border-2 border-cosmic-lilac/40 text-cosmic-cream">
          {selectedWork !== null && (
            <div className="relative">

              {/* Header with icon */}
              <div className="flex items-start gap-6 mb-8 pb-6 border-b border-cosmic-lilac/30">
                <div className="p-4 rounded-2xl bg-cosmic-lilac/20 border border-cosmic-lilac/30">
                  {(() => {
                    const Icon = researchWorks[selectedWork].icon;
                    return <Icon className="w-12 h-12 text-cosmic-lilac" />;
                  })()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-cosmic-navy/70 border border-cosmic-lilac/30 text-xs font-elegant text-cosmic-cream">
                      {researchWorks[selectedWork].category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-cosmic-navy/70 border border-cosmic-gold/30 text-xs font-elegant text-cosmic-gold">
                      {researchWorks[selectedWork].date}
                    </span>
                  </div>
                  <h2 className="font-elegant text-3xl text-cosmic-cream mb-3">
                    {researchWorks[selectedWork].title}
                  </h2>
                  <p className="text-cosmic-silver italic">
                    {researchWorks[selectedWork].description}
                  </p>
                </div>
              </div>

              {/* Full content area */}
              <div className="prose prose-invert prose-cosmic max-w-none">
                <div className="text-cosmic-silver/90 leading-relaxed whitespace-pre-line">
                  {researchWorks[selectedWork].fullContent}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                <Telescope className="w-full h-full transform rotate-45" />
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5 pointer-events-none">
                <FileText className="w-full h-full" />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
