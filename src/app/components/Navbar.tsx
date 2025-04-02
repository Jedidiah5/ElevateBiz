'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, TargetAndTransition } from 'framer-motion'

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 25,
    mass: 1
  }

  const buttonSpringTransition = {
    type: "spring",
    stiffness: 400,
    damping: 20,
    mass: 1.2
  }

  const hoverAnimation: TargetAndTransition = {
    scale: 1.05,
    shadow: "0px 5px 15px rgba(255, 215, 0, 0.3)"
  }

  const mobileHoverAnimation: TargetAndTransition = {
    scale: 1.02,
    shadow: "0px 5px 15px rgba(255, 215, 0, 0.3)"
  }

  return (
    <nav 
      className={`fixed top-0 w-full z-50 py-4 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto relative flex items-center justify-between">
          {/* Logo */}
          <div className="w-[119px] flex-shrink-0">
            <div className="w-10 h-10 relative bg-gradient-to-b from-[#FFD700] to-[#B8860B] rounded-lg border border-[#FFD700] grid place-items-center">
              <div className="w-7 h-7 bg-black rounded-full" />
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#FFD700] p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={springTransition}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-8">
              {[
                { label: 'Models', href: '#models' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' }
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-[#FFD700] text-sm font-medium transition-colors hover:text-[#B8860B]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={springTransition}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Buttons - Desktop */}
          <div className="hidden md:flex w-[240px] flex-shrink-0 items-center gap-4 justify-end">
            <motion.button 
              className="text-[#FFD700] transition text-sm font-medium border border-[#FFD700]/30 px-4 py-1.5 rounded-md hover:border-[#FFD700]"
              whileHover={hoverAnimation}
              whileTap={{ scale: 0.95 }}
              transition={buttonSpringTransition}
            >
              Login
            </motion.button>
            <motion.button 
              className="whitespace-nowrap bg-[#FFD700] text-black px-6 py-1.5 rounded-md text-sm font-medium hover:bg-[#B8860B]"
              whileHover={hoverAnimation}
              whileTap={{ scale: 0.95 }}
              transition={buttonSpringTransition}
            >
              Get Started Now
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <div className={`
            md:hidden fixed inset-x-0 top-[72px] bg-black transition-all duration-300
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}>
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Models', href: '#models' },
                  { label: 'Pricing', href: '#pricing' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' }
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="text-[#FFD700] text-sm font-medium transition-colors hover:text-[#B8860B]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={springTransition}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="flex flex-col items-center gap-3 pt-4 border-t border-[#FFD700]/10">
                  <motion.button 
                    className="w-[60%] text-[#FFD700] transition text-sm font-medium border border-[#FFD700]/30 px-4 py-2.5 rounded-md hover:border-[#FFD700]"
                    whileHover={mobileHoverAnimation}
                    whileTap={{ scale: 0.98 }}
                    transition={buttonSpringTransition}
                  >
                    Login
                  </motion.button>
                  <motion.button 
                    className="w-[60%] whitespace-nowrap bg-[#FFD700] text-black px-4 py-2.5 rounded-md text-sm font-medium hover:bg-[#B8860B]"
                    whileHover={mobileHoverAnimation}
                    whileTap={{ scale: 0.98 }}
                    transition={buttonSpringTransition}
                  >
                    Get Started Now
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 