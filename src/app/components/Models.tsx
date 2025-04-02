'use client'

import { motion } from 'framer-motion'

export default function Models() {
  const models = [
    {
      title: "Subscription Model",
      description: "Recurring revenue through monthly or annual subscriptions",
      features: ["Predictable income", "Customer retention", "Scalable growth"]
    },
    {
      title: "Freemium Model",
      description: "Basic services free, premium features for paying customers",
      features: ["Wide user base", "Upgrade potential", "Market penetration"]
    },
    {
      title: "Marketplace Model",
      description: "Connect buyers and sellers, earn through commissions",
      features: ["Network effects", "Diverse revenue", "Community building"]
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-4">
            Business Models
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Choose the perfect business model to drive your company's growth and success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              className="bg-black border-2 border-[#FFD700] rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-[#FFD700] mb-3">
                {model.title}
              </h3>
              <p className="text-white/80 mb-4">
                {model.description}
              </p>
              <ul className="space-y-2">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-center text-white">
                    <span className="text-[#FFD700] mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 