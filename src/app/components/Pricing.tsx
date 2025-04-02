'use client'

import { motion } from 'framer-motion'

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic website setup",
        "5 pages",
        "Mobile responsive",
        "Basic SEO",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$299",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Custom website design",
        "Unlimited pages",
        "Advanced SEO",
        "E-commerce integration",
        "Priority support",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "month",
      description: "For large organizations with complex needs",
      features: [
        "Custom development",
        "Dedicated team",
        "24/7 support",
        "Advanced security",
        "API integration",
        "Custom analytics"
      ]
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
            Pricing Plans
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-black border-2 rounded-lg p-8 ${
                plan.popular ? 'border-[#FFD700] scale-105' : 'border-[#FFD700]/30'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-[#FFD700] mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-white/60">/{plan.period}</span>
              </div>
              <p className="text-white/80 mb-6">
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-white">
                    <span className="text-[#FFD700] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-md font-medium transition-colors ${
                plan.popular 
                  ? 'bg-[#FFD700] text-black hover:bg-[#B8860B]' 
                  : 'border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 