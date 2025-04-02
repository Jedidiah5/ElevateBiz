'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const tabs = [
  {
    id: 'strategy',
    label: 'Business Strategy',
    title: 'Develop winning strategies that drive growth and success.',
    image: '/Market prediction.jpg'
  },
  {
    id: 'consulting',
    label: 'Consulting',
    title: 'Expert guidance to help your business reach its full potential.',
    image: '/finance.jpg'
  },
  {
    id: 'marketing',
    label: 'Marketing',
    title: 'Comprehensive marketing solutions to grow your brand.',
    image: '/Analytics.jpg'
  },
  {
    id: 'analytics',
    label: 'Analytics',
    title: 'Data-driven insights to optimize your business performance.',
    image: '/content.jpg'
  },
  {
    id: 'support',
    label: 'Support',
    title: 'Dedicated support to ensure your business runs smoothly.',
    image: '/customer.jpg'
  }
]

export default function BusinessModels() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperType>()

  const handleTabClick = (index: number) => {
    setActiveIndex(index)
    swiperRef.current?.slideToLoop(index)
  }

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  }

  const cardTextVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(10px)"
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  }

  return (
    <section className="py-12 md:py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-[#FFD700]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={0}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={1}
          >
            Discover our comprehensive range of business solutions designed to help you succeed
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => handleTabClick(index)}
              className={`
                px-3 md:px-4 py-1.5 md:py-2 rounded-md text-xs md:text-sm transition-all duration-300
                ${index === activeIndex 
                  ? 'bg-[#FFD700] text-black font-medium'
                  : 'bg-[#FFD700]/10 text-[#FFD700] hover:bg-[#FFD700]/20'
                }
              `}
              whileHover={{ scale: index === activeIndex ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-[1800px] mx-auto">
          <style jsx global>{`
            .swiper-container {
              overflow: visible !important;
              padding: 0 10px;
              @media (min-width: 768px) {
                padding: 0 200px;
              }
            }
            .swiper-wrapper {
              align-items: center;
              padding: 10px 0;
              @media (min-width: 768px) {
                padding: 20px 0;
              }
            }
            .swiper-slide {
              transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
              transform: scale(0.95) translateY(10px);
              opacity: 0.85;
              cursor: pointer;
              display: flex;
              justify-content: center;
              filter: brightness(0.8) blur(1px);
              width: 100% !important;
              max-width: 1042.17px;
              @media (max-width: 768px) {
                max-width: 100%;
                transform: scale(0.9) translateY(10px);
              }
            }
            .swiper-slide-active {
              transform: scale(1) translateY(0);
              opacity: 1;
              z-index: 2;
              filter: brightness(1) blur(0);
            }
            .swiper-slide-prev,
            .swiper-slide-next {
              z-index: 1;
            }
            .swiper-slide-prev {
              transform: scale(0.9) translateX(-5%) translateY(10px);
              @media (min-width: 768px) {
                transform: scale(0.8) translateX(-10%) translateY(20px);
              }
            }
            .swiper-slide-next {
              transform: scale(0.9) translateX(5%) translateY(10px);
              @media (min-width: 768px) {
                transform: scale(0.8) translateX(10%) translateY(20px);
              }
            }
            .swiper-pagination {
              bottom: -20px !important;
              @media (min-width: 768px) {
                bottom: -30px !important;
              }
              transition: all 0.3s ease;
            }
            .swiper-pagination-bullet {
              background: #FFD700;
              transition: all 0.3s ease;
              transform: scale(0.8);
              @media (min-width: 768px) {
                transform: scale(1);
              }
            }
            .swiper-pagination-bullet-active {
              transform: scale(1);
              @media (min-width: 768px) {
                transform: scale(1.2);
              }
            }
            .swiper-button-prev,
            .swiper-button-next {
              width: 32px !important;
              height: 32px !important;
              background-color: rgba(255, 215, 0, 0.9);
              border-radius: 50%;
              box-shadow: 0 2px 6px rgba(0,0,0,0.1);
              color: black !important;
              transition: all 0.3s ease;
              
              &:after {
                font-size: 14px !important;
                font-weight: bold;
              }
              
              &:hover {
                background-color: #FFD700;
                box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
              }

              @media (min-width: 768px) {
                display: none !important;
              }
            }

            .swiper-button-prev {
              left: 10px !important;
            }

            .swiper-button-next {
              right: 10px !important;
            }
          `}</style>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={activeIndex}
            loop={true}
            speed={800}
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 100,
              modifier: 1.2,
              slideShadows: false
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            className="w-full pb-12"
          >
            {tabs.map((tab, index) => (
              <SwiperSlide 
                key={tab.id} 
                className="!w-full md:!w-[1042.17px]"
                onClick={() => {
                  const swiper = swiperRef.current;
                  if (!swiper) return;
                  if (index !== activeIndex) {
                    handleTabClick(index);
                  }
                }}
              >
                <motion.div
                  className="relative bg-black rounded-[11.7px] overflow-hidden w-full h-[400px] md:h-[523.52px] border-2 border-[#FFD700]"
                  animate={{ 
                    scale: index === activeIndex ? 1 : 0.8,
                    opacity: index === activeIndex ? 1 : 0.85,
                    y: index === activeIndex ? 0 : 20,
                    rotateY: index === activeIndex ? 0 : (index < activeIndex ? 5 : -5)
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                    scale: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20
                    }
                  }}
                >
                  {/* Content Container */}
                  <motion.div 
                    className="absolute z-10 w-full md:w-[345.11px] p-6 md:p-0 md:left-[55.57px] md:top-[calc(50%-295.5px/2-0.01px)]"
                    initial="hidden"
                    animate={index === activeIndex ? "visible" : "hidden"}
                  >
                    <div className="flex flex-col gap-4">
                      <motion.span 
                        className="text-base md:text-[19.498px] font-inter font-semibold tracking-[-0.02em] text-[#FFD700]"
                        variants={cardTextVariants}
                        custom={0}
                      >
                        {tab.label}
                      </motion.span>
                      <motion.h3 
                        className="text-xl md:text-[42.8956px] font-figtree font-semibold leading-tight md:leading-[51px] tracking-[-0.02em] text-white"
                        variants={cardTextVariants}
                        custom={1}
                      >
                        {tab.title}
                      </motion.h3>
                      <motion.button 
                        className="flex items-center justify-center w-[113.09px] h-[35.5px] bg-[#FFD700] border border-[#FFD700] rounded-[3.9px] mt-4"
                        variants={cardTextVariants}
                        custom={2}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 17 
                          }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.span 
                          className="text-[13.6486px] font-figtree font-medium text-black"
                          variants={cardTextVariants}
                          custom={2}
                        >
                          Learn More
                        </motion.span>
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Image Container */}
                  <motion.div 
                    className="absolute w-full h-[200px] right-0 top-[200px] md:w-[520.6px] md:h-[513.77px] md:left-[550.4px] md:top-[36.5px] overflow-hidden rounded-b-[11.7px] md:rounded-[10.6373px]"
                    initial={{ opacity: 0, scale: 0.95, x: 50 }}
                    animate={{ 
                      opacity: index === activeIndex ? 1 : 0.8,
                      scale: index === activeIndex ? 1 : 0.95,
                      x: index === activeIndex ? 0 : 20
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.2,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <Image
                      src={tab.image}
                      alt={tab.label}
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Gradient Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
} 