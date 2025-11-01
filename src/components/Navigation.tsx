"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Crochet', path: '/crochet' },
  { name: 'Family', path: '/family' },
  { name: 'Slime Startup', path: '/slime' },
  { name: 'Literary', path: '/literary' },
  { name: 'Research', path: '/research' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-cosmic-navy/30 border-b border-cosmic-lilac/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-cosmic-gold animate-twinkle" />
            <span className="font-calligraphy text-2xl text-cosmic-cream group-hover:text-cosmic-pink transition-colors">
              Ngo Chau Anh
            </span>
          </Link>

          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  relative px-3 md:px-4 py-2 rounded-full font-elegant text-xs md:text-sm
                  transition-all duration-300 hover:scale-105
                  ${
                    pathname === item.path
                      ? 'bg-cosmic-lilac/30 text-cosmic-cream shadow-lg shadow-cosmic-lilac/20'
                      : 'text-cosmic-silver/80 hover:text-cosmic-cream hover:bg-cosmic-lilac/10'
                  }
                `}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute inset-0 rounded-full animate-glow" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
