'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Users, Home, Tent, CheckCircle, MessageCircle, Mail, AlertCircle } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    accommodation: '',
    guests: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMethod, setSubmitMethod] = useState<'email' | 'whatsapp' | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';
    if (!formData.accommodation) newErrors.accommodation = 'Please select accommodation type';
    if (!formData.guests) newErrors.guests = 'Please select number of guests';
    
    // Validate dates
    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (checkInDate < today) {
        newErrors.checkIn = 'Check-in date cannot be in the past';
      }
      if (checkOutDate <= checkInDate) {
        newErrors.checkOut = 'Check-out date must be after check-in date';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitMethod('email');
    
    try {
      // Using Formspree for email submission
      // Replace 'your-form-id' with actual Formspree form ID once email is available
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          accommodation: formData.accommodation,
          guests: formData.guests,
          message: formData.message,
          _subject: `New Booking Request from ${formData.name}`,
          _replyto: formData.email,
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email submission failed:', error);
      // Fallback to WhatsApp if email fails
      handleWhatsAppSubmit();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) return;
    
    setSubmitMethod('whatsapp');
    
    // Create formatted WhatsApp message
    const message = `Hi Wandile Umuzi Lodge! I would like to make a booking:

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📅 Check-in: ${formData.checkIn}
📅 Check-out: ${formData.checkOut}
🏠 Accommodation: ${formData.accommodation}
👥 Guests: ${formData.guests}
💬 Message: ${formData.message || 'No additional message'}

Please confirm availability and provide booking details. Thank you!`;

    // Format phone number for WhatsApp - try multiple formats
    // Zimbabwe country code: 263, Phone: 776329831
    const phoneNumber = '263776329831';
    const cleanPhoneNumber = phoneNumber.replace(/[\s\-\(\)]/g, '');
    
    // Try different URL formats for better compatibility
    const whatsappUrls = [
      `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(message)}`,
      `https://api.whatsapp.com/send?phone=${cleanPhoneNumber}&text=${encodeURIComponent(message)}`,
      `https://web.whatsapp.com/send?phone=${cleanPhoneNumber}&text=${encodeURIComponent(message)}`
    ];
    
    // Debug: Log all URLs for troubleshooting
    console.log('WhatsApp URLs to try:', whatsappUrls);
    console.log('Phone number:', cleanPhoneNumber);
    
    // Try the first URL format
    try {
      window.open(whatsappUrls[0], '_blank');
    } catch (error) {
      console.error('Primary WhatsApp URL failed:', error);
      // Try alternative format
      window.open(whatsappUrls[1], '_blank');
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-earth mb-4 font-nunito">
              Booking Request Sent!
            </h2>
            <p className="text-gray-600 mb-6 font-inter">
              {submitMethod === 'email' 
                ? "Thank you for your booking request! We've received your email and will respond within 24 hours to confirm your stay."
                : "Thank you for your interest in staying with us! We've opened WhatsApp for you to complete your booking. Our team will respond to your inquiry as soon as possible."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setSubmitMethod(null);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    checkIn: '',
                    checkOut: '',
                    accommodation: '',
                    guests: '',
                    message: ''
                  });
                }}
                className="bg-sunny text-earth px-6 py-3 rounded-lg font-semibold hover:bg-sunny/90 transition-colors duration-300"
              >
                Make Another Booking
              </button>
              <a
                href="https://wa.me/263776329831"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 inline-flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-earth mb-6 font-nunito">
            Book Your Stay
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Ready to experience authentic Zimbabwean hospitality? Fill out the form below 
            and we'll get back to you to confirm your booking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleEmailSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-earth mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sunny focus:border-transparent transition-colors duration-300 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-earth mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sunny focus:border-transparent transition-colors duration-300 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-earth mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sunny focus:border-transparent transition-colors duration-300 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+263 77 123 4567"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-semibold text-earth mb-2">
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sunny focus:border-transparent transition-colors duration-300 ${
                      errors.guests ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                  {errors.guests && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.guests}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-semibold text-earth mb-2">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    required
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sunny focus:border-transparent transition-colors duration-300 ${
                      errors.checkIn ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.checkIn && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.checkIn}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="checkOut" className="block text-sm font-semibold text-earth mb-2">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    required
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sunny focus:border-transparent transition-colors duration-300 ${
                      errors.checkOut ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.checkOut && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.checkOut}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="accommodation" className="block text-sm font-semibold text-earth mb-2">
                  Accommodation Type *
                </label>
                <select
                  id="accommodation"
                  name="accommodation"
                  required
                  value={formData.accommodation}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sunny focus:border-transparent transition-colors duration-300 ${
                    errors.accommodation ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select accommodation</option>
                  <option value="2-3 Pax Chalet">2-3 Pax Chalet ($30 USD/night)</option>
                  <option value="Camping">Camping ($15 USD/night)</option>
                  <option value="Not sure">Not sure - please advise</option>
                </select>
                {errors.accommodation && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.accommodation}
                  </p>
                )}
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-earth mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunny focus:border-transparent transition-colors duration-300"
                  placeholder="Any special requests, questions, or additional information..."
                />
              </div>

              {/* Dual Submission Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#F4C430] text-black py-4 px-6 rounded-full font-semibold text-lg hover:bg-[#D2691E] transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5 mr-2" />
                      Submit via Email
                    </>
                  )}
                </motion.button>
                
                <motion.button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book via WhatsApp
                </motion.button>
              </div>
              
              <p className="text-sm text-gray-500 text-center mt-4 font-inter">
                Choose your preferred booking method. Email submissions will be responded to within 24 hours.
              </p>
              
              {/* Manual WhatsApp Fallback */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-3 font-inter">
                  <strong>Having trouble with the WhatsApp button?</strong> You can manually contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-mono bg-white p-2 rounded border">
                    <strong>Phone:</strong> +263 77 632 9831
                  </p>
                  <button
                    onClick={() => {
                      const message = `Hi Wandile Umuzi Lodge! I would like to make a booking:

👤 Name: ${formData.name || '[Your Name]'}
📧 Email: ${formData.email || '[Your Email]'}
📱 Phone: ${formData.phone || '[Your Phone]'}
📅 Check-in: ${formData.checkIn || '[Check-in Date]'}
📅 Check-out: ${formData.checkOut || '[Check-out Date]'}
🏠 Accommodation: ${formData.accommodation || '[Accommodation Type]'}
👥 Guests: ${formData.guests || '[Number of Guests]'}
💬 Message: ${formData.message || '[Additional Message]'}

Please confirm availability and provide booking details. Thank you!`;
                      
                      navigator.clipboard.writeText(message).then(() => {
                        alert('Message copied to clipboard! You can now paste it in WhatsApp.');
                      }).catch(() => {
                        // Fallback for older browsers
                        const textArea = document.createElement('textarea');
                        textArea.value = message;
                        document.body.appendChild(textArea);
                        textArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textArea);
                        alert('Message copied to clipboard! You can now paste it in WhatsApp.');
                      });
                    }}
                    className="text-sm bg-green-100 text-green-800 px-3 py-2 rounded hover:bg-green-200 transition-colors duration-300"
                  >
                    📋 Copy Message to Clipboard
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Booking Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Pricing Info */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-earth mb-4 font-nunito">
                Pricing
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Home className="w-5 h-5 text-sunny mr-2" />
                    <span className="text-gray-600 font-inter">Chalets (2-3 pax)</span>
                  </div>
                  <span className="font-semibold text-earth">$30/night</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Tent className="w-5 h-5 text-sunny mr-2" />
                    <span className="text-gray-600 font-inter">Camping</span>
                  </div>
                  <span className="font-semibold text-earth">$15/night</span>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-earth mb-4 font-nunito">
                What's Included
              </h3>
              <ul className="space-y-2 text-gray-600 font-inter">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Kitchen access
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Bathroom facilities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Braai stand
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Swimming pool
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Free WiFi
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-sunny/10 to-forest/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-earth mb-4 font-nunito">
                Need Help?
              </h3>
              <p className="text-gray-600 mb-4 font-inter">
                Have questions about your booking? Contact us directly:
              </p>
              <a
                href="https://wa.me/263776329831"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
