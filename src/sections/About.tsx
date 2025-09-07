'use client';

import { motion } from 'framer-motion';
import { Mountain, Waves, TreePine, Users } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const features = [
    {
      icon: Mountain,
      title: "Matopos National Park",
      description: "Just minutes away from the stunning granite formations and ancient rock art"
    },
    {
      icon: Waves,
      title: "Maleme Dam",
      description: "Perfect for fishing, bird watching, and peaceful water activities"
    },
    {
      icon: TreePine,
      title: "Farm Activities",
      description: "Educational tours, animal feeding, and authentic rural experiences"
    },
    {
      icon: Users,
      title: "Local Community",
      description: "Supporting local communities and preserving Zimbabwean culture"
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-[#F4C430] via-[#D2691E] to-[#8B5E3C] overflow-hidden">
      {/* Background overlay for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-nunito drop-shadow-lg">
            Welcome to Wandile Umuzi Lodge
          </h2>
          <p className="text-xl text-white/95 max-w-3xl mx-auto font-inter leading-relaxed drop-shadow-md">
            Nestled in the heart of Zimbabwe&apos;s natural beauty, our lodge offers an authentic 
            African experience that combines comfort with adventure. Whether you&apos;re seeking 
            wildlife encounters, cultural immersion, or simply a peaceful retreat, we provide 
            the perfect base for your Zimbabwean journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 font-nunito drop-shadow-lg">
              Our Story
            </h3>
            <p className="text-white/90 mb-6 font-inter leading-relaxed drop-shadow-md">
              Wandile Umuzi Lodge was born from a passion for sharing Zimbabwe&apos;s incredible 
              natural heritage with visitors from around the world. Our family-run establishment 
              has been welcoming guests for years, offering a warm, authentic experience that 
              connects you with the land, the people, and the rich culture of this beautiful country.
            </p>
            <p className="text-white/90 font-inter leading-relaxed drop-shadow-md">
              Located strategically near Matopos National Park and Maleme Dam, we provide 
              easy access to some of Zimbabwe&apos;s most spectacular attractions while maintaining 
              the peaceful, rural atmosphere that makes our lodge special.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-image.jpeg"
                alt="Wandile Umuzi Lodge exterior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sunny rounded-full opacity-20"></div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/20"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3 font-nunito drop-shadow-md">
                {feature.title}
              </h4>
              <p className="text-white/90 font-inter drop-shadow-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
