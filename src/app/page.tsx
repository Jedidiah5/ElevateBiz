'use client'

import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import CompanyLogos from './components/CompanyLogos'
import BusinessModels from './components/BusinessModels'
import Models from './components/Models'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="text-[#FFD700] overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-black relative overflow-hidden flex items-center py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/10 to-black" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Elevate Your Business with <span className="text-[#FFD700]">ElevateBiz</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8">
              A premium web template designed to help businesses create a strong online presence effortlessly. 
              Whether you&apos;re launching a new venture or scaling an established brand, ElevateBiz provides a 
              seamless, intuitive platform to showcase your products and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFD700] text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-[#B8860B] transition-colors text-center text-sm sm:text-base"
              >
                Get Started
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#FFD700] text-[#FFD700] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-[#FFD700]/10 transition-colors text-sm sm:text-base"
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Why Choose ElevateBiz?
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
              Modern design elements, customizable features, and user-friendly navigation - 
              everything you need to thrive in today&apos;s digital world.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Modern Design",
                description: "Sleek, professional templates that make your business stand out",
                icon: "ri-palette-line"
              },
              {
                title: "Easy Customization",
                description: "Intuitive tools to personalize your website without coding",
                icon: "ri-user-settings-line"
              },
              {
                title: "Mobile Responsive",
                description: "Perfect display on all devices, from desktop to mobile",
                icon: "ri-smartphone-line"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-black/50 border border-[#FFD700]/20 rounded-lg p-6 sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-[#FFD700]">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
        <Models />
      </section>

      {/* Business Models Section */}
      <section id="business-models" className="py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
        <BusinessModels />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
        <Pricing />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 md:py-40 bg-black overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <About />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-black overflow-hidden border-t border-[#FFD700]/10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Trusted By Leading Companies
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
              Join hundreds of businesses that trust ElevateBiz for their online presence
            </p>
          </motion.div>
          <CompanyLogos />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 md:py-40 bg-black overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <Contact />
        </div>
      </section>
    </main>
  )
}
