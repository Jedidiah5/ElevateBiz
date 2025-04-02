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
    <main className="text-[#FFD700]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/10 to-black" />
        <div className="container mx-auto px-4 pt-32 pb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Elevate Your Business with <span className="text-[#FFD700]">ElevateBiz</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              A premium web template designed to help businesses create a strong online presence effortlessly. 
              Whether you're launching a new venture or scaling an established brand, ElevateBiz provides a 
              seamless, intuitive platform to showcase your products and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFD700] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#B8860B] transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#FFD700] text-[#FFD700] px-8 py-3 rounded-lg font-medium hover:bg-[#FFD700]/10 transition-colors"
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-16 bg-black">
        <CompanyLogos />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose ElevateBiz?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Modern design elements, customizable features, and user-friendly navigation - 
              everything you need to thrive in today's digital world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Design",
                description: "Sleek, professional templates that make your business stand out",
                icon: "🎨"
              },
              {
                title: "Easy Customization",
                description: "Intuitive tools to personalize your website without coding",
                icon: "⚙️"
              },
              {
                title: "Mobile Responsive",
                description: "Perfect display on all devices, from desktop to mobile",
                icon: "📱"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-black/50 border border-[#FFD700]/20 rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-20 bg-black">
        <Models />
      </section>

      {/* Business Models Section */}
      <section id="business-models" className="py-20 bg-black">
        <BusinessModels />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">
        <Pricing />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <Contact />
      </section>
    </main>
  )
}
