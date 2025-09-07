'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-sunny rounded-full flex items-center justify-center">
                <span className="text-earth font-bold text-xl">W</span>
              </div>
              <span className="font-bold text-3xl font-nunito text-white">Wandile Umuzi Lodge</span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md font-inter text-lg leading-relaxed">
              Experience authentic Zimbabwean hospitality near Matopos National Park. 
              Your gateway to adventure, relaxation, and unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/263776329831"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300 shadow-lg"
              >
                <Phone className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://instagram.com/wandile_umuzi.lodge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300 shadow-lg"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-6 font-nunito text-white">Quick Links</h3>
            <ul className="space-y-3 font-inter">
              <li>
                <a href="#about" className="text-gray-300 hover:text-sunny transition-colors duration-300 text-lg">
                  About Us
                </a>
              </li>
              <li>
                <a href="#accommodation" className="text-gray-300 hover:text-sunny transition-colors duration-300 text-lg">
                  Accommodation
                </a>
              </li>
              <li>
                <a href="#farm-tours" className="text-gray-300 hover:text-sunny transition-colors duration-300 text-lg">
                  Farm Tours
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-sunny transition-colors duration-300 text-lg">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-300 hover:text-sunny transition-colors duration-300 text-lg">
                  Book Now
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-6 font-nunito text-white">Contact Info</h3>
            <div className="space-y-4 font-inter">
              <div className="flex items-start space-x-3">
                <Phone className="w-6 h-6 text-sunny mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white text-lg font-semibold">+263 77 632 9831</p>
                  <p className="text-gray-300">Phone & WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-sunny mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white text-lg font-semibold">Zimbabwe Bottle Store</p>
                  <p className="text-gray-300">3rd Ave & R. Mugabe Way</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Instagram className="w-6 h-6 text-sunny mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white text-lg font-semibold">@wandile_umuzi.lodge</p>
                  <p className="text-gray-300">Follow us</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-300 text-base font-inter">
            © {currentYear} Wandile Umuzi Lodge. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-gray-300 text-base font-inter mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-500" />
            <span>in Zimbabwe</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
