import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CompanyLogos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const logos = [
    { name: 'Layers' },
    { name: 'Sisyphus' },
    { name: 'Circooles' },
    { name: 'Catalog' },
    { name: 'Quotient' }
  ];

  const handleSwipe = (direction: number) => {
    setCurrentSlide(prev => {
      const next = prev + direction;
      if (next < 0) return totalSlides - 1;
      if (next >= totalSlides) return 0;
      return next;
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Desktop View */}
      <div className="hidden md:flex md:flex-wrap justify-between items-center gap-8 w-full">
        {logos.map((logo, index) => (
          <div key={logo.name} className="flex items-center gap-3 shrink-0">
            <div className="relative w-[40px] h-[40px] bg-[#FFD700] rounded-full opacity-0 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }} />
            <span className="text-sm text-[#FFD700] font-medium opacity-0 animate-fade-in whitespace-nowrap" style={{ animationDelay: `${(index * 200) + 100}ms` }}>{logo.name}</span>
          </div>
        ))}
      </div>

      {/* Mobile View with Carousel */}
      <div className="md:hidden relative w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out w-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={(e) => {
            const touch = e.touches[0];
            const startX = touch.clientX;
            
            const handleTouchMove = (e: TouchEvent) => {
              const touch = e.touches[0];
              const diff = startX - touch.clientX;
              if (Math.abs(diff) > 50) {
                handleSwipe(diff > 0 ? 1 : -1);
                document.removeEventListener('touchmove', handleTouchMove);
              }
            };
            
            document.addEventListener('touchmove', handleTouchMove, { once: true });
          }}
        >
          {/* First Slide */}
          <div className="flex min-w-full px-4">
            <div className="flex justify-center gap-4 w-full">
              {logos.slice(0, 3).map((logo, index) => (
                <div key={logo.name} className="flex items-center gap-2 shrink-0">
                  <div className="relative w-[28px] h-[28px] bg-[#FFD700] rounded-full opacity-0 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }} />
                  <span className="text-xs text-[#FFD700] font-medium opacity-0 animate-fade-in whitespace-nowrap" style={{ animationDelay: `${(index * 200) + 100}ms` }}>{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Slide */}
          <div className="flex min-w-full px-4">
            <div className="flex justify-center gap-4 w-full">
              {logos.slice(3).map((logo, index) => (
                <div key={logo.name} className="flex items-center gap-2 shrink-0">
                  <div className="relative w-[28px] h-[28px] bg-[#FFD700] rounded-full opacity-0 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }} />
                  <span className="text-xs text-[#FFD700] font-medium opacity-0 animate-fade-in whitespace-nowrap" style={{ animationDelay: `${(index * 200) + 100}ms` }}>{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-[#FFD700] w-4' : 'bg-[#FFD700]/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 