'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-4">
            Contact Us
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Get in touch with us to discuss how we can help your business grow
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FFD700]/10 rounded-lg">
                  <Mail className="w-6 h-6 text-[#FFD700]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#FFD700] mb-1">Email</h3>
                  <p className="text-white/80">info@yourbusiness.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FFD700]/10 rounded-lg">
                  <Phone className="w-6 h-6 text-[#FFD700]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#FFD700] mb-1">Phone</h3>
                  <p className="text-white/80">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FFD700]/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#FFD700]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#FFD700] mb-1">Address</h3>
                  <p className="text-white/80">
                    123 Business Street<br />
                    Suite 100<br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#FFD700]/10">
              <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Business Hours</h3>
              <div className="space-y-2 text-white/80">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-black/50 border border-[#FFD700]/20 rounded-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#FFD700] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-[#FFD700]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#FFD700] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-[#FFD700]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#FFD700] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-[#FFD700]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#FFD700] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black/50 border border-[#FFD700]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#FFD700] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#B8860B] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 