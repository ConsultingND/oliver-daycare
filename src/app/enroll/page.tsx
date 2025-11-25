'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AnimatedSection from '@/components/shared/AnimatedSection'
import EnrollmentForm from '@/components/forms/EnrollmentForm'
import { FileText, CheckCircle2, UserCheck, Clock } from 'lucide-react'

export default function EnrollPage() {
  const enrollmentSteps = [
    {
      icon: FileText,
      title: 'Complete Application',
      description: 'Fill out our comprehensive enrollment form with your family and child information.'
    },
    {
      icon: UserCheck,
      title: 'Schedule a Tour',
      description: 'Visit our facility to meet our staff and see our programs in action.'
    },
    {
      icon: CheckCircle2,
      title: 'Review & Approve',
      description: 'Our team reviews your application and confirms enrollment details.'
    },
    {
      icon: Clock,
      title: 'Start Date',
      description: 'Welcome to Oliver Daycare! Your child begins their learning journey with us.'
    }
  ]

  const requiredDocuments = [
    'Child\'s birth certificate (copy)',
    'Up-to-date immunization records',
    'Emergency contact information',
    'Medical authorization form',
    'Proof of residence',
    'Parent/guardian photo ID'
  ]

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blush-50 via-skyblue-50 to-mint-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blush-500 text-white">Now Enrolling</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Enroll Your Child at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush-500 to-skyblue-500">
                Oliver Daycare
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Begin your child's journey in a nurturing, educational, and loving environment. 
              Complete our enrollment application to get started.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Simple Enrollment Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started is easy! Follow these four simple steps to enroll your child.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {enrollmentSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="h-full rounded-2xl hover:shadow-xl transition-all relative">
                    <CardContent className="p-6 text-center">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-8 h-8 bg-blush-500 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex justify-center mb-4 mt-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blush-100 to-skyblue-100 rounded-2xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-blush-600" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Required Documents Info */}
      <section className="py-20 bg-gradient-to-br from-warmbeige-50 to-blush-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <Card className="rounded-3xl border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Documents You'll Need</h3>
                  <p className="text-gray-600 mb-6">
                    After submitting your application, you'll need to provide these documents before your child's start date:
                  </p>
                  <ul className="space-y-3">
                    {requiredDocuments.map((doc, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-blush-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-skyblue-50 rounded-xl">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> We'll provide detailed instructions and forms after your application is reviewed. 
                      Don't worry about gathering these documents right now!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-blush-50 to-skyblue-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">📧 Confirmation Email</h4>
                      <p className="text-sm text-gray-600">
                        You'll receive an immediate confirmation that we've received your application.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">📞 Follow-Up Call</h4>
                      <p className="text-sm text-gray-600">
                        Our enrollment coordinator will contact you within 1-2 business days to discuss details and answer questions.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">🏫 Facility Tour</h4>
                      <p className="text-sm text-gray-600">
                        We'll schedule a personalized tour of our facility at your convenience.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">✅ Final Enrollment</h4>
                      <p className="text-sm text-gray-600">
                        Once approved, we'll complete enrollment paperwork and set your start date.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Complete Your Application</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Please fill out all required fields. This application typically takes 10-15 minutes to complete.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.2}>
              <EnrollmentForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-skyblue-50 to-mint-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Enrollment FAQs</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Is there an enrollment fee?',
                a: 'Yes, there is a one-time enrollment fee of $150 per child. This fee covers administrative costs and initial supplies. It is non-refundable but goes toward securing your child\'s spot.'
              },
              {
                q: 'How long does the enrollment process take?',
                a: 'From application submission to start date, the process typically takes 1-2 weeks. This includes application review, tour scheduling, document submission, and orientation.'
              },
              {
                q: 'Can I enroll my child part-time?',
                a: 'Absolutely! We offer flexible scheduling including full-time, part-time, and half-day options to accommodate your family\'s needs.'
              },
              {
                q: 'What if my child has special dietary needs?',
                a: 'We are happy to accommodate dietary restrictions and allergies. Please note these in the medical information section of your application, and we\'ll discuss a meal plan during enrollment.'
              },
              {
                q: 'Do you have a waitlist?',
                a: 'Some programs may have limited availability. If your preferred program is full, we\'ll place your child on our priority waitlist and contact you as soon as a spot opens.'
              }
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
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

      {/* Help Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-r from-blush-500 to-skyblue-500 text-white max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Need Help with Enrollment?</h2>
                <p className="text-lg mb-6 text-white/90">
                  Our friendly enrollment team is here to assist you with any questions or concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+15555551234"
                    className="inline-block bg-white text-blush-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                  >
                    📞 Call (555) 555-1234
                  </a>
                  <a
                    href="mailto:enroll@oliverdaycare.com"
                    className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors"
                  >
                    ✉️ Email Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

