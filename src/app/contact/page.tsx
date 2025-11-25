'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { CONTACT } from '@/lib/constants'
import { MapPin, Phone, Mail, Clock, Check, Map } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    program: '',
    tourDate: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call (replace with Supabase integration)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      childName: '',
      childAge: '',
      program: '',
      tourDate: '',
      message: '',
    })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blush-50 via-skyblue-50 to-mint-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush-500 to-skyblue-500">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              We'd love to hear from you! Schedule a tour, ask questions, or learn more about our programs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <Card className="rounded-3xl shadow-xl border-0">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Schedule a Tour</h2>
                  
                  {submitted && (
                    <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 mb-6 flex items-center gap-2">
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span>Thank you! We'll contact you soon to confirm your tour.</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="rounded-xl"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="rounded-xl"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="rounded-xl"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Child's Age
                        </label>
                        <Input
                          name="childAge"
                          value={formData.childAge}
                          onChange={handleChange}
                          className="rounded-xl"
                          placeholder="e.g., 2 years"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Program of Interest
                        </label>
                        <select
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-gray-300 p-2"
                        >
                          <option value="">Select a program</option>
                          <option value="infant">Infant Care</option>
                          <option value="toddler">Toddler Program</option>
                          <option value="preschool">Preschool</option>
                          <option value="pre-k">Pre-Kindergarten</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Tour Date
                        </label>
                        <Input
                          type="date"
                          name="tourDate"
                          value={formData.tourDate}
                          onChange={handleChange}
                          className="rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="rounded-xl"
                        placeholder="Tell us about your needs or any questions you have..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 py-6 text-lg"
                    >
                      {isSubmitting ? 'Sending...' : 'Schedule Tour'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <div className="space-y-6">
              <AnimatedSection delay={0.2}>
                <Card className="rounded-3xl shadow-xl border-0 bg-gradient-to-br from-blush-50 to-skyblue-50">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-md">
                          <MapPin className="w-6 h-6 text-blush-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">Address</h4>
                          <p className="text-gray-600">
                            {CONTACT.address.street}<br />
                            {CONTACT.address.city}, {CONTACT.address.state} {CONTACT.address.zip}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-md">
                          <Phone className="w-6 h-6 text-skyblue-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                          <a href={`tel:${CONTACT.phone}`} className="text-blush-600 hover:text-blush-700">
                            {CONTACT.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-md">
                          <Mail className="w-6 h-6 text-mint-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                          <a href={`mailto:${CONTACT.email}`} className="text-blush-600 hover:text-blush-700">
                            {CONTACT.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-md">
                          <Clock className="w-6 h-6 text-warmbeige-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">Hours</h4>
                          <p className="text-gray-600">
                            Monday - Friday: 7:00 AM - 6:00 PM<br />
                            Saturday - Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Card className="rounded-3xl shadow-xl border-0">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Visit Us?</h3>
                    <ul className="space-y-3">
                      {[
                        'See our bright, clean facilities',
                        'Meet our certified teachers',
                        'Watch our programs in action',
                        'Ask questions about enrollment',
                        'Experience our warm community',
                      ].map((item, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <Check className="w-5 h-5 text-blush-500 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <Map className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Map integration placeholder</p>
                <p className="text-sm text-gray-500 mt-2">
                  {CONTACT.address.street}, {CONTACT.address.city}, {CONTACT.address.state}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to help you get started</p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What documents do I need to enroll?',
                a: 'You\'ll need your child\'s birth certificate, immunization records, emergency contacts, and completed enrollment forms.'
              },
              {
                q: 'Do you offer tours?',
                a: 'Yes! We offer tours Monday through Friday. Schedule one using the form above or call us directly.'
              },
              {
                q: 'What are your teacher-to-child ratios?',
                a: 'Our ratios meet or exceed state requirements: 1:4 for infants, 1:6 for toddlers, 1:8 for preschool, and 1:10 for pre-K.'
              },
              {
                q: 'Do you provide meals?',
                a: 'Yes, we provide nutritious breakfast, lunch, and snacks daily. We accommodate dietary restrictions and allergies.'
              },
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}



