'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AnimatedSection from '@/components/shared/AnimatedSection'
import CTASection from '@/components/shared/CTASection'
import { Clock, Bus, Palette, Sun, Apple, GraduationCap, BookOpen, Shield, Smartphone, Check } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Full-Time',
      price: 1200,
      priceUnit: 'month',
      popular: true,
      description: 'Perfect for working parents who need full-day care',
      schedule: 'Monday - Friday, 7:00 AM - 6:00 PM',
      features: [
        'All meals included',
        'Daily activities & curriculum',
        'Progress reports',
        'Parent communication app',
        'Extended hours available',
        'Flexible start dates',
      ],
      color: 'from-blush-400 to-blush-600',
      bgColor: 'bg-blush-50'
    },
    {
      name: 'Part-Time',
      price: 800,
      priceUnit: 'month',
      popular: false,
      description: 'Great for families needing part-day programs',
      schedule: 'Monday - Friday, 9:00 AM - 1:00 PM',
      features: [
        'Lunch included',
        'Daily activities & curriculum',
        'Progress reports',
        'Parent communication app',
        'Flexible days (3-4 days/week)',
        'Option to add days',
      ],
      color: 'from-skyblue-400 to-skyblue-600',
      bgColor: 'bg-skyblue-50'
    },
    {
      name: 'Half-Day',
      price: 600,
      priceUnit: 'month',
      popular: false,
      description: 'Ideal for preschoolers and pre-K students',
      schedule: 'Monday - Friday, 9:00 AM - 12:00 PM',
      features: [
        'Morning snack included',
        'Structured learning',
        'Progress reports',
        'Parent communication',
        'School readiness focus',
        'Summer program available',
      ],
      color: 'from-mint-400 to-mint-600',
      bgColor: 'bg-mint-50'
    },
  ]

  const addOns = [
    { service: 'Extended Hours', price: '15/hour', icon: Clock },
    { service: 'Transportation', price: '50/week', icon: Bus },
    { service: 'Enrichment Classes', price: '100-200/month', icon: Palette },
    { service: 'Summer Camp', price: '300/week', icon: Sun },
  ]

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blush-50 via-skyblue-50 to-mint-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush-500 to-skyblue-500">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Quality early education at affordable rates. No hidden fees, no surprises.
            </p>
            <Badge className="bg-green-500 text-white">Registration Fee Waived for New Families</Badge>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className={`rounded-3xl overflow-hidden ${plan.popular ? 'ring-4 ring-blush-400 shadow-2xl scale-105' : 'shadow-xl'} transition-all hover:shadow-2xl relative`}>
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blush-500">Most Popular</Badge>
                    </div>
                  )}
                  
                  <div className={`h-32 bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <div className="text-5xl font-bold">${plan.price}</div>
                      <div className="text-sm opacity-90">per {plan.priceUnit}</div>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <p className="text-sm font-medium text-gray-700 mb-1">Schedule</p>
                      <p className="text-gray-600">{plan.schedule}</p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact">
                      <Button className={`w-full rounded-full bg-gradient-to-r ${plan.color} hover:shadow-lg transition-all py-6`}>
                        Enroll Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 bg-gradient-to-br from-warmbeige-50 to-blush-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your child's experience with optional add-on services
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {addOns.map((addon, index) => {
              const Icon = addon.icon
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="text-center hover:shadow-xl transition-all rounded-3xl">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <Icon className="w-12 h-12 text-blush-500" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">{addon.service}</h3>
                      <div className="text-2xl font-bold text-blush-600">${addon.price}</div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What's Included in Every Plan
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Apple, title: 'Nutritious Meals', description: 'Fresh, healthy meals & snacks daily' },
              { icon: GraduationCap, title: 'Certified Teachers', description: 'Experienced, loving educators' },
              { icon: BookOpen, title: 'Age-Appropriate Curriculum', description: 'Developmentally focused learning' },
              { icon: Shield, title: 'Health & Safety', description: 'Licensed facility, health protocols' },
              { icon: Smartphone, title: 'Daily Updates', description: 'Photos, reports, and communication' },
              { icon: Palette, title: 'Learning Activities', description: 'Arts, music, science, and more' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <Icon className="w-16 h-16 text-blush-500" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-20 bg-gradient-to-br from-skyblue-50 to-mint-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Payment Information</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedSection delay={0.1}>
                <Card className="rounded-3xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Options</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Monthly automatic payments</li>
                      <li>• Multiple payment methods accepted</li>
                      <li>• Sibling discounts available (10% off)</li>
                      <li>• Flexible payment plans</li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card className="rounded-3xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Enrollment Process</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Schedule a tour</li>
                      <li>• Complete enrollment forms</li>
                      <li>• First month + registration fee</li>
                      <li>• Start date confirmed</li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Enroll Your Child?"
        description="Contact us today to discuss pricing options and schedule a tour of our facility."
      />
    </div>
  )
}



