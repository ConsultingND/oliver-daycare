'use client'

import { use } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import AnimatedSection from '@/components/shared/AnimatedSection'
import CTASection from '@/components/shared/CTASection'
import { Music, Calendar, Package, CheckCircle2, Target, Clock } from 'lucide-react'

export default function ClassDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [enrollmentOpen, setEnrollmentOpen] = useState(false)

  // Mock data (would fetch from Sanity CMS)
  const classData = {
    name: 'Music & Movement',
    ageRange: '18 months - 3 years',
    icon: Music,
    price: 150,
    priceUnit: 'month',
    schedule: 'Tuesdays & Thursdays, 10:00 AM - 11:00 AM',
    duration: '3 months (12 sessions)',
    spotsAvailable: 5,
    maxCapacity: 15,
    instructor: 'Emily Rodriguez',
    instructorCredentials: 'Music Education Specialist',
    color: 'from-blush-400 to-blush-600',
    description: 'An interactive music class that introduces young children to rhythm, melody, and movement through songs, instruments, and creative dance. This program develops listening skills, coordination, and self-expression in a fun, supportive environment.',
    learningGoals: [
      'Develop rhythm and timing skills',
      'Improve coordination and motor skills',
      'Build confidence through performance',
      'Enhance listening and attention skills',
      'Foster creativity and self-expression',
      'Learn basic musical concepts',
    ],
    whatToExpect: [
      { time: '10:00-10:10', activity: 'Welcome & warm-up songs' },
      { time: '10:10-10:25', activity: 'Instrument exploration & rhythm games' },
      { time: '10:25-10:40', activity: 'Movement activities & dancing' },
      { time: '10:40-10:55', activity: 'Group singing & performance' },
      { time: '10:55-11:00', activity: 'Cool down & goodbye song' },
    ],
    materials: [
      'All instruments provided',
      'Scarves and props included',
      'No prior experience needed',
      'Wear comfortable clothes',
    ]
  }

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blush-50 to-skyblue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/classes" className="text-blush-600 hover:text-blush-700 mb-4 inline-block">
              ← Back to Classes
            </Link>
            
            <AnimatedSection>
              <div className="flex items-center gap-6 mb-6">
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${classData.color} flex items-center justify-center shadow-xl`}>
                  <classData.icon className="w-16 h-16 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h1 className="text-5xl font-bold text-gray-800 mb-2">{classData.name}</h1>
                  <Badge className="px-3 py-1.5">{classData.ageRange}</Badge>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8">{classData.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-blush-600">${classData.price}</div>
                    <div className="text-sm text-gray-600">per {classData.priceUnit}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-skyblue-600">{classData.spotsAvailable}</div>
                    <div className="text-sm text-gray-600">spots left</div>
                  </CardContent>
                </Card>
                <Card className="col-span-2">
                  <CardContent className="p-4">
                    <div className="text-sm text-gray-600 mb-1">Instructor</div>
                    <div className="font-bold text-gray-800">{classData.instructor}</div>
                    <div className="text-xs text-gray-500">{classData.instructorCredentials}</div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Class Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <Card className="rounded-3xl h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-blush-500" />
                    Schedule & Duration
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium text-gray-700 mb-1">When</div>
                      <div className="text-gray-600">{classData.schedule}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 mb-1">Duration</div>
                      <div className="text-gray-600">{classData.duration}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 mb-1">Class Size</div>
                      <div className="text-gray-600">Max {classData.maxCapacity} students</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="rounded-3xl h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Package className="w-6 h-6 text-blush-500" />
                    What's Included
                  </h3>
                  <div className="space-y-3">
                    {classData.materials.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Learning Goals */}
      <section className="py-20 bg-gradient-to-br from-skyblue-50 to-mint-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Target className="w-10 h-10 text-blush-500" />
                Learning Goals
              </h2>
              <p className="text-lg text-gray-600">What your child will learn and develop</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-4">
              {classData.learningGoals.map((goal, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <Card className="rounded-2xl">
                    <CardContent className="p-4 flex items-center">
                      <span className="text-2xl mr-3">•</span>
                      <span className="text-gray-700">{goal}</span>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typical Class */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Clock className="w-10 h-10 text-blush-500" />
                A Typical Class
              </h2>
              <p className="text-lg text-gray-600">What to expect during each session</p>
            </AnimatedSection>

            <div className="space-y-4">
              {classData.whatToExpect.map((segment, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <div className="flex items-start gap-6">
                    <div className="w-28 text-right font-bold text-blush-600">{segment.time}</div>
                    <div className="flex-1 bg-warmbeige-50 rounded-xl p-4">
                      <span className="text-gray-700">{segment.activity}</span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section className="py-20 bg-gradient-to-br from-warmbeige-50 to-blush-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <Card className="rounded-3xl shadow-2xl border-0">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                      Ready to Enroll?
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                      {classData.spotsAvailable > 0 
                        ? `Only ${classData.spotsAvailable} spots remaining!` 
                        : 'Join the waitlist to be notified when spots open up.'}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-green-700 font-medium">Enrolling Now</span>
                    </div>
                  </div>

                  {!enrollmentOpen ? (
                    <Button 
                      onClick={() => setEnrollmentOpen(true)}
                      className={`w-full rounded-full bg-gradient-to-r ${classData.color} py-6 text-lg`}
                    >
                      {classData.spotsAvailable > 0 ? 'Enroll Now →' : 'Join Waitlist →'}
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <Input placeholder="Parent Name" className="rounded-xl" />
                      <Input placeholder="Email Address" type="email" className="rounded-xl" />
                      <Input placeholder="Phone Number" type="tel" className="rounded-xl" />
                      <Input placeholder="Child's Name" className="rounded-xl" />
                      <Input placeholder="Child's Age" className="rounded-xl" />
                      <Button className={`w-full rounded-full bg-gradient-to-r ${classData.color} py-6 text-lg`}>
                        Complete Enrollment
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setEnrollmentOpen(false)}
                        className="w-full rounded-full"
                      >
                        Cancel
                      </Button>
                    </div>
                  )}

                  <p className="text-center text-sm text-gray-500 mt-6">
                    Questions? <Link href="/contact" className="text-blush-600 hover:text-blush-700">Contact us</Link> for more information.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Explore More Classes"
        description="We offer a variety of enrichment classes to enhance your child's learning."
        primaryButtonText="View All Classes"
        primaryButtonLink="/classes"
      />
    </div>
  )
}



