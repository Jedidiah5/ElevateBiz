'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-4">
            About ElevateBiz
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Your partner in creating a powerful online presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#FFD700]">
              Our Story
            </h3>
            <p className="text-white/80">
              ElevateBiz was born from a simple idea: every business deserves a professional, 
              modern website that truly represents their brand. We understand that not every 
              business owner has the time or technical expertise to build a website from scratch.
            </p>
            <p className="text-white/80">
              That&apos;s why we created ElevateBiz - a premium web template that combines stunning 
              design with user-friendly customization. Our platform empowers businesses of all 
              sizes to create a strong online presence without the complexity of traditional 
              web development.
            </p>
            <p className="text-white/80">
              With modern design elements, customizable features, and intuitive navigation, 
              ElevateBiz provides everything you need to showcase your products and services 
              effectively in today&apos;s digital world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                title: "10+ Years",
                description: "Experience in web design"
              },
              {
                title: "500+",
                description: "Templates created"
              },
              {
                title: "100+",
                description: "Happy clients"
              },
              {
                title: "24/7",
                description: "Support available"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-black/50 border border-[#FFD700]/20 rounded-lg p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h4 className="text-2xl font-bold text-[#FFD700] mb-2">
                  {stat.title}
                </h4>
                <p className="text-white/80">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFD700] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#B8860B] transition-colors"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 