'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Accommodation', href: '#accommodation' },
    { name: 'Farm Tours', href: '#farm-tours' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
    { name: 'Book Now', href: '#booking', isCTA: true }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-sunny rounded-full flex items-center justify-center">
              <span className="text-earth font-bold text-sm">W</span>
            </div>
            <span className={`font-bold text-lg font-nunito ${
              scrolled ? 'text-earth' : 'text-white'
            }`}>
              Wandile Umuzi
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  item.isCTA
                    ? 'bg-sunny text-earth hover:bg-sunny/90'
                    : scrolled
                    ? 'text-earth hover:text-sunny'
                    : 'text-white hover:text-sunny'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? 'text-earth' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item.href)}
                whileTap={{ scale: 0.95 }}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                  item.isCTA
                    ? 'bg-sunny text-earth hover:bg-sunny/90'
                    : 'text-earth hover:bg-gray-100'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
