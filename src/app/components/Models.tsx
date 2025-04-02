'use client'

import { motion } from 'framer-motion'

export default function Models() {
  return (
    <section id="models" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-4">
            Template Models
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Choose from our collection of professionally designed templates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Business",
              description: "Perfect for corporate websites and professional services",
              icon: "🏢"
            },
            {
              title: "E-commerce",
              description: "Designed for online stores and product showcases",
              icon: "🛍️"
            },
            {
              title: "Portfolio",
              description: "Ideal for creatives and freelancers",
              icon: "🎨"
            }
          ].map((model, index) => (
            <motion.div
              key={index}
              className="bg-black/50 border border-[#FFD700]/20 rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{model.icon}</div>
              <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
                {model.title}
              </h3>
              <p className="text-white/80">
                {model.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 