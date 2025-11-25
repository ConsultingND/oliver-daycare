'use client'

import { use } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AnimatedSection from '@/components/shared/AnimatedSection'
import CTASection from '@/components/shared/CTASection'
import { Baby, Activity, MessageCircle, Brain, Heart, ArrowLeft } from 'lucide-react'

export default function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)

  // This would normally fetch from Sanity CMS
  const program = {
    title: 'Infant Care Program',
    ageRange: '6 weeks - 12 months',
    icon: Baby,
    description: 'Our infant program provides a safe, nurturing environment where your baby receives individualized care and attention.',
    ratio: '1:4',
    hours: '7:00 AM - 6:00 PM',
    color: 'from-blush-400 to-blush-600'
  }

  const dailySchedule = [
    { time: '7:00 AM', activity: 'Arrival & Free Play' },
    { time: '8:30 AM', activity: 'Breakfast & Bottle Time' },
    { time: '9:30 AM', activity: 'Sensory Activities' },
    { time: '10:30 AM', activity: 'Morning Nap' },
    { time: '12:00 PM', activity: 'Lunch Time' },
    { time: '1:00 PM', activity: 'Outdoor Play' },
    { time: '2:30 PM', activity: 'Afternoon Nap' },
    { time: '4:00 PM', activity: 'Snack & Playtime' },
    { time: '5:00 PM', activity: 'Pick-up & Departure' },
  ]

  const curriculum = [
    { area: 'Physical Development', icon: Activity, activities: ['Tummy time', 'Reaching & grasping', 'Motor skills'] },
    { area: 'Language & Communication', icon: MessageCircle, activities: ['Songs & rhymes', 'Story time', 'Verbal responses'] },
    { area: 'Cognitive Development', icon: Brain, activities: ['Cause & effect', 'Object permanence', 'Sensory exploration'] },
    { area: 'Social-Emotional', icon: Heart, activities: ['Attachment building', 'Emotional regulation', 'Trust development'] },
  ]

  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blush-50 to-skyblue-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <Link href="/programs" className="text-blush-600 hover:text-blush-700 mb-4 inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Programs
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg`}>
                <program.icon className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold text-gray-800">{program.title}</h1>
                <Badge className="text-md mt-2 px-2 py-1.5">{program.ageRange}</Badge>
              </div>
            </div>
            <p className="text-xl text-gray-600 mb-8">{program.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blush-600">{program.ratio}</div>
                  <div className="text-sm text-gray-600">Teacher Ratio</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-skyblue-600">{program.hours}</div>
                  <div className="text-sm text-gray-600">Program Hours</div>
                </CardContent>
              </Card>
              <Card className="col-span-2 md:col-span-1">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-mint-600">Now Enrolling</div>
                  <div className="text-sm text-gray-600">Limited Spots</div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Daily Schedule</h2>
            <p className="text-lg text-gray-600">A structured yet flexible routine that supports your child's development.</p>
          </AnimatedSection>

          <div className="max-w-3xl">
            {dailySchedule.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-32 text-right font-bold text-blush-600">{item.time}</div>
                  <div className="flex-1 bg-warmbeige-50 rounded-xl p-4">{item.activity}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-gradient-to-br from-skyblue-50 to-mint-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Curriculum Highlights</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((item, index) => {
              const Icon = item.icon
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-xl transition-all rounded-2xl">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Icon className="w-12 h-12 text-blush-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">{item.area}</h3>
                      <ul className="space-y-2">
                        {item.activities.map((activity, i) => (
                          <li key={i} className="text-gray-600 flex items-start">
                            <span className="text-blush-500 mr-2">•</span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Enroll in This Program?"
        description="Schedule a tour to see our program in action and meet the teachers."
      />
    </div>
  )
}
