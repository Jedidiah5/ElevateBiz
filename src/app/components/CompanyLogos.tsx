'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CompanyLogos() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const logos = [
    { name: "Company 1" },
    { name: "Company 2" },
    { name: "Company 3" },
    { name: "Company 4" },
    { name: "Company 5" },
    { name: "Company 6" }
  ]

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex(prev => (prev === 0 ? logos.length - 1 : prev - 1))
    } else {
      setCurrentIndex(prev => (prev === logos.length - 1 ? 0 : prev + 1))
    }
  }

  return (
    <div className="container mx-auto px-4">
      <div className="hidden md:flex justify-center items-center gap-8 flex-wrap">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="w-24 h-24 rounded-full bg-[#FFD700] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-black text-sm font-medium">{logo.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative">
        <div className="flex justify-center items-center">
          <motion.div
            key={currentIndex}
            className="w-24 h-24 rounded-full bg-[#FFD700] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-black text-sm font-medium">{logos[currentIndex].name}</span>
          </motion.div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => handleSwipe('left')}
            className="w-8 h-8 rounded-full bg-[#FFD700] text-black flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={() => handleSwipe('right')}
            className="w-8 h-8 rounded-full bg-[#FFD700] text-black flex items-center justify-center"
          >
            →
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {logos.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-[#FFD700]' : 'bg-[#FFD700]/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 