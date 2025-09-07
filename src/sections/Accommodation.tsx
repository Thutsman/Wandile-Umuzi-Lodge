'use client';

import { motion } from 'framer-motion';
import { Home, Tent, Utensils, ShowerHead, Flame, Waves } from 'lucide-react';
import Image from 'next/image';

export default function Accommodation() {
  const accommodations = [
    {
      type: "2 & 3 Pax Chalets",
      price: "$30 USD/night",
      description: "Comfortable chalets perfect for couples or small families",
      features: ["Private bathroom", "Kitchen access", "Braai facilities", "Pool access"],
      icon: Home,
      image: "/images/accommodation-chalet.jpeg"
    },
    {
      type: "Camping",
      price: "$15 USD/night",
      description: "Authentic camping experience with modern amenities",
      features: ["2 tents provided", "Outside shower", "Braai stand", "Shared facilities"],
      icon: Tent,
      image: "/images/accommodation-camping.jpeg"
    }
  ];

  const amenities = [
    { icon: Utensils, name: "Kitchen Access" },
    { icon: ShowerHead, name: "Bathroom Facilities" },
    { icon: Flame, name: "Braai Stand" },
    { icon: Waves, name: "Swimming Pool" }
  ];

  return (
    <section id="accommodation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-earth mb-6 font-nunito">
            Our Accommodation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Choose from our comfortable chalets or authentic camping experience. 
            Both options provide access to all our facilities and the natural beauty 
            that surrounds our lodge.
          </p>
        </motion.div>

        {/* Accommodation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {accommodations.map((accommodation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={accommodation.image}
                  alt={accommodation.type}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <accommodation.icon className="w-6 h-6 text-forest inline mr-2" />
                  <span className="font-semibold text-earth">{accommodation.type}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-earth font-nunito">{accommodation.type}</h3>
                  <div className="bg-sunny text-earth px-4 py-2 rounded-lg font-bold text-lg">
                    {accommodation.price}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 font-inter">
                  {accommodation.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {accommodation.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-sunny rounded-full mr-3"></div>
                      <span className="text-gray-700 font-inter">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href="#booking"
                  className="w-full bg-forest text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-forest/90 transition-colors duration-300"
                >
                  Book This Option
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amenities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-forest/5 to-sky/5 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-earth text-center mb-8 font-nunito">
            Shared Amenities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-sunny/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <amenity.icon className="w-8 h-8 text-sunny" />
                </div>
                <p className="font-semibold text-earth font-inter">{amenity.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
