'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: "+263 77 632 9831",
      action: "Call or WhatsApp us",
      link: "https://wa.me/263776329831"
    },
    {
      icon: Instagram,
      title: "Instagram",
      details: "@wandile_umuzi.lodge",
      action: "Follow us",
      link: "https://instagram.com/wandile_umuzi.lodge"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Zimbabwe Bottle Store, 3rd Ave & R. Mugabe Way",
      action: "Get Directions",
      link: "https://maps.google.com/?q=Zimbabwe+Bottle+Store+3rd+Ave+R+Mugabe+Way+Bulawayo"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-earth mb-6 font-nunito">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Ready to book your stay or have questions about our lodge? 
            We&apos;re here to help make your Zimbabwean adventure unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-earth mb-6 font-nunito">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8 font-inter">
                We&apos;re available to answer your questions and help you plan your perfect stay. 
                Don&apos;t hesitate to reach out through any of the channels below.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sunny/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-sunny" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-earth mb-2 font-nunito">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 mb-3 font-inter">
                      {info.details}
                    </p>
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sunny hover:text-sunny/80 font-semibold transition-colors duration-300"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {info.action}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-forest/10 to-sky/10 p-6 rounded-xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-forest" />
                <h4 className="text-lg font-semibold text-earth font-nunito">
                  Business Hours
                </h4>
              </div>
              <div className="space-y-2 text-gray-600 font-inter">
                <p>Monday - Sunday: 8:00 AM - 8:00 PM</p>
                <p className="text-sm text-gray-500">
                  We&apos;re available for bookings and inquiries throughout the week
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-forest/20 to-sky/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-forest mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-earth mb-2 font-nunito">
                    Interactive Map
                  </h4>
                  <p className="text-gray-600 font-inter">
                    Located near Matopos National Park
                  </p>
                  <a
                    href="https://maps.google.com/?q=Matopos+National+Park+Zimbabwe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-forest text-white px-4 py-2 rounded-lg hover:bg-forest/90 transition-colors duration-300"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Booking Info */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-earth mb-4 font-nunito">
                Quick Booking
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-inter">Chalets (2-3 pax)</span>
                  <span className="font-semibold text-earth">$30 USD/night</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-inter">Camping</span>
                  <span className="font-semibold text-earth">$15 USD/night</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 font-inter">Farm Tours</span>
                  <span className="font-semibold text-earth">Contact for pricing</span>
                </div>
              </div>
              <a
                href="#booking"
                className="w-full mt-6 bg-sunny text-earth py-3 px-6 rounded-lg font-semibold text-center block hover:bg-sunny/90 transition-colors duration-300"
              >
                Book Now
              </a>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-sunny/10 to-forest/10 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-earth mb-3 font-nunito">
                Need Immediate Assistance?
              </h4>
              <p className="text-gray-600 mb-4 font-inter">
                For urgent matters or last-minute bookings, call or WhatsApp us directly.
              </p>
              <a
                href="https://wa.me/263776329831"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
