"use client";

import { useEffect, useRef } from 'react';

export default function MagicalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      twinkle: number;
      twinkleSpeed: number;
    }> = [];

    const fireflies: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      life: number;
      glowSize: number;
    }> = [];

    // Create stars
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random(),
        color: ['#ffd700', '#e6e6fa', '#c4a7e7', '#ffc4d6'][Math.floor(Math.random() * 4)],
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    // Create fireflies
    const createFirefly = () => {
      fireflies.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 50,
        size: Math.random() * 3 + 2,
        speedX: (Math.random() - 0.5) * 2,
        speedY: -Math.random() * 2 - 1,
        opacity: 0,
        life: 0,
        glowSize: Math.random() * 10 + 10,
      });
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 26, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate stars
      particles.forEach((particle) => {
        particle.twinkle += particle.twinkleSpeed;
        particle.opacity = 0.3 + Math.sin(particle.twinkle) * 0.7;

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Add glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.fillRect(
          particle.x - particle.size * 3,
          particle.y - particle.size * 3,
          particle.size * 6,
          particle.size * 6
        );
      });

      // Animate fireflies
      fireflies.forEach((firefly, index) => {
        firefly.life += 0.01;
        firefly.x += firefly.speedX;
        firefly.y += firefly.speedY;

        if (firefly.life < 0.2) {
          firefly.opacity = firefly.life * 5;
        } else if (firefly.life > 0.8) {
          firefly.opacity = (1 - firefly.life) * 5;
        } else {
          firefly.opacity = 0.8 + Math.sin(firefly.life * 10) * 0.2;
        }

        // Remove old fireflies
        if (firefly.life >= 1 || firefly.y < -50) {
          fireflies.splice(index, 1);
          return;
        }

        // Draw firefly glow
        const glowGradient = ctx.createRadialGradient(
          firefly.x,
          firefly.y,
          0,
          firefly.x,
          firefly.y,
          firefly.glowSize
        );
        glowGradient.addColorStop(0, `rgba(255, 215, 0, ${firefly.opacity})`);
        glowGradient.addColorStop(0.3, `rgba(255, 215, 0, ${firefly.opacity * 0.5})`);
        glowGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGradient;
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, firefly.glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw firefly core
        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, firefly.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ffd700';
        ctx.globalAlpha = firefly.opacity;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    // Create new fireflies periodically
    const fireflyInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        createFirefly();
      }
    }, 500);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(fireflyInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        background: 'radial-gradient(ellipse at bottom, #1a1a3e 0%, #0a0a1a 100%)',
      }}
    />
  );
}
