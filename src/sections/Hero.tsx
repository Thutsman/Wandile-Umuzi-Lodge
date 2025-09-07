'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpeg"
          alt="Wandile Umuzi Lodge"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest/20 to-earth/30"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg font-serif mb-6">
            Wandile Umuzi Lodge
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-[#F4C430] drop-shadow-sm font-sans mb-8">
            Experience Authentic Zimbabwean Hospitality
          </motion.p>
          <p className="text-base sm:text-lg md:text-xl mb-12 text-white/95 max-w-2xl mx-auto font-inter leading-relaxed drop-shadow-md">
            Located near the majestic Matopos National Park and Maleme Dam, 
            less than 20 km from Bulawayo city center - Zimbabwe&apos;s second largest city. 
            Your gateway to adventure, relaxation, and unforgettable memories.
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
            <MapPin className="w-6 h-6 text-sunny drop-shadow-lg" />
            <span className="text-sm sm:text-lg text-white font-semibold drop-shadow-md">Near Matopos Park</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
            <Phone className="w-6 h-6 text-sunny drop-shadow-lg" />
            <span className="text-sm sm:text-lg text-white font-semibold drop-shadow-md">+263 77 632 9831</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#booking"
            className="bg-[#F4C430] text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#D2691E] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book Your Stay
          </a>
          <a
            href="#accommodation"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
          >
            View Accommodation
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator - Moved outside content div */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
