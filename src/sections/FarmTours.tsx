'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Users, Heart, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function FarmTours() {
  const tourFeatures = [
    {
      icon: GraduationCap,
      title: "Educational Experience",
      description: "Learn about sustainable farming, animal care, and rural life in Zimbabwe"
    },
    {
      icon: Users,
      title: "Group Activities",
      description: "Perfect for school groups, families, and educational institutions"
    },
    {
      icon: Heart,
      title: "Animal Interaction",
      description: "Feed goats, learn about livestock, and connect with farm animals"
    },
    {
      icon: BookOpen,
      title: "Cultural Learning",
      description: "Discover traditional farming methods and local customs"
    }
  ];

  return (
    <section id="farm-tours" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-earth mb-6 font-nunito">
              Educational Farm Tours
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-inter">
              Experience authentic rural life in Zimbabwe with our educational farm tours. 
              Perfect for schools, families, and anyone interested in learning about 
              sustainable farming and local culture.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sunny/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-sunny" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-earth mb-2 font-nunito">
                    School Group Bookings
                  </h3>
                  <p className="text-gray-600 font-inter">
                    We welcome school groups for educational visits. Our tours are designed 
                    to complement curriculum learning about agriculture, animals, and rural life.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-forest/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-earth mb-2 font-nunito">
                    Hands-On Learning
                  </h3>
                  <p className="text-gray-600 font-inter">
                    Children can feed goats, learn about different farm animals, and 
                    participate in age-appropriate farming activities.
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              href="#contact"
              className="inline-block bg-sunny text-earth px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sunny/90 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book School Tour
            </motion.a>
          </motion.div>

          {/* Image and Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Children feeding goats at the farm"
                width={800}
                height={320}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-nunito">Interactive Learning</h3>
                <p className="text-lg font-inter">Children feeding and learning about farm animals</p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {tourFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-10 h-10 bg-sunny/20 rounded-full flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-sunny" />
                  </div>
                  <h4 className="font-semibold text-earth mb-2 font-nunito text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-xs font-inter">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-forest/10 to-sky/10 rounded-2xl p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-earth mb-4 font-nunito">
              Tour Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-sunny mb-2">2-3 Hours</p>
                <p className="text-gray-600 font-inter">Duration</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-sunny mb-2">10-50</p>
                <p className="text-gray-600 font-inter">Group Size</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-sunny mb-2">All Ages</p>
                <p className="text-gray-600 font-inter">Suitable For</p>
              </div>
            </div>
            <p className="text-gray-600 mt-6 font-inter">
              Contact us to discuss pricing and customize your educational farm tour experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
