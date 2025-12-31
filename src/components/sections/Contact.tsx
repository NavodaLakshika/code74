'use client'

import { Mail, Phone, MapPin, Send, Calendar, Users, Star, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '1',
    destination: '',
    travelDates: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const destinations = [
    'Colombo',
    'Galle',
    'Kandy',
    'Sigiriya',
    'Yala National Park',
    'Nuwara Eliya',
    'Bentota',
    'Anuradhapura',
    'Ella',
    'Mirissa',
    'Custom Itinerary'
  ]

  const travelerOptions = ['1', '2', '3', '4', '5', '6+']

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        travelers: '1',
        destination: '',
        travelDates: '',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-6">
            <div className="w-8 h-px bg-amber-500"></div>
            <span className="mx-4 text-sm font-semibold text-amber-600 uppercase tracking-widest">
              PLAN YOUR JOURNEY
            </span>
            <div className="w-8 h-px bg-amber-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
            Start Your Adventure
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Contact us to create your personalized Sri Lankan experience. Our travel experts will craft the perfect itinerary for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Why Book With Us?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Local Expertise</h4>
                    <p className="text-gray-600 text-sm">
                      Our team consists of local experts who know Sri Lanka intimately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Custom Itineraries</h4>
                    <p className="text-gray-600 text-sm">
                      Tailor-made journeys based on your interests, pace, and budget.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">24/7 Support</h4>
                    <p className="text-gray-600 text-sm">
                      Round-the-clock assistance during your entire journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    Call Our Travel Experts
                  </h3>
                  <a 
                    href="tel:+94777183746" 
                    className="text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors"
                  >
                    +94 77 718 3746
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Available 24/7 for travel consultations
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    Email Us
                  </h3>
                  <a 
                    href="mailto:hello@talesofceylon.com" 
                    className="text-xl text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    hello@talesofceylon.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Response within 12 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    Visit Our Office
                  </h3>
                  <p className="text-gray-700">
                    418, 1 Battaramulla Parliament Road<br />
                    Colombo 10120, Sri Lanka
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Open Mon-Sat, 9AM-6PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Travel Inquiry Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="h-16 w-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Inquiry Sent Successfully!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in traveling with us. Our travel expert will contact you within 12 hours to discuss your Sri Lankan adventure.
                </p>
                <div className="inline-flex items-center bg-amber-50 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Star className="h-4 w-4 mr-2" />
                  We're excited to plan your journey!
                </div>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                    Get Your Custom Itinerary
                  </h3>
                  <p className="text-gray-600">
                    Fill out this form and our travel experts will create a personalized itinerary just for you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                        placeholder="+94 77 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Number of Travelers *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {travelerOptions.map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setFormData({...formData, travelers: num})}
                            className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                              formData.travelers === num 
                                ? 'bg-amber-500 text-white border-amber-500' 
                                : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Preferred Destination *
                      </label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select destination</option>
                        {destinations.map((dest) => (
                          <option key={dest} value={dest}>
                            {dest}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Travel Dates
                      </label>
                      <input
                        type="text"
                        name="travelDates"
                        value={formData.travelDates}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                        placeholder="e.g., December 2024, 2 weeks"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Tell Us About Your Dream Journey *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 text-base bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      placeholder="What experiences are you looking for? Any specific interests? (e.g., wildlife, culture, beaches, adventure...)"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-medium text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                        Sending Your Inquiry...
                      </>
                    ) : (
                      <>
                        Request Custom Itinerary
                        <Send className="ml-3 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}