'use client'

import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    'Web Development',
    'Mobile Applications',
    'Enterprise Systems',
    'Cloud Solutions',
    'Digital Strategy',
    'Custom Software',
    'Other'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1200))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
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
    <div className="min-h-screen bg-white">
      
      {/* Contact Section */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* LEFT - Contact Information */}
            <div>
              <div className="mb-10">
                <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-2">
                  Get In Touch
                </h1>
                <h2 className="text-5xl md:text-7xl font-serif text-gray-900 font-bold tracking-tight">
                  Let's Talk
                </h2>
              </div>

              <div className="space-y-6 max-w-xl mb-12">
                <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed tracking-wide">
                  Ready to transform your business with innovative technology solutions? 
                  Our team of experts is here to discuss your project and provide tailored 
                  recommendations.
                </p>

                <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed tracking-wide">
                  Whether you need a consultation, have questions about our services, or want 
                  to start a new project, we're just a message away.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Phone className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Phone
                    </h3>
                    <a 
                      href="tel:+94777183746" 
                      className="text-base text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      +94 77 718 3746
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Mail className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Email
                    </h3>
                    <a 
                      href="mailto:hello@talesofceylon.com" 
                      className="text-base text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      hello@talesofceylon.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <MapPin className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Office
                    </h3>
                    <p className="text-base text-gray-700">
                      418, 1 Battaramulla Parliament Road<br />
                      Colombo 10120, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="mb-6">
                    <div className="h-16 w-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto">
                      <Send className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    Message Sent Successfully
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                      Send Us a Message
                    </h3>
                    <p className="text-base text-gray-700">
                      Fill out the form below and we'll respond as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                          placeholder="+94 77 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Project Details
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gray-900 text-white py-4 rounded-lg font-medium text-base hover:bg-gray-800 transition-all duration-300 flex items-center justify-center ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
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

      {/* Separator Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="h-px w-full bg-gray-300" />
      </div>

    </div>
  )
}