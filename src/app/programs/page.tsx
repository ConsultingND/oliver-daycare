'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AnimatedSection from '@/components/shared/AnimatedSection'
import CTASection from '@/components/shared/CTASection'
import { Baby, Blocks, Palette, BookOpen, Sun, Clock, Drama, Check } from 'lucide-react'

export default function ProgramsPage() {
  const programs = [
    {
      id: 1,
      title: 'Infant Care',
      slug: 'infant-care',
      ageRange: '6 weeks - 12 months',
      icon: Baby,
      description: 'Our infant program provides a safe, nurturing environment where your baby receives individualized care and attention. We focus on building secure attachments, sensory exploration, and early development milestones.',
      highlights: [
        'Low teacher-to-child ratio (1:4)',
        'Individual feeding & sleeping schedules',
        'Daily development activities',
        'Milestone tracking & updates',
      ],
      color: 'from-blush-400 to-blush-600',
      bgColor: 'bg-blush-50'
    },
    {
      id: 2,
      title: 'Toddler Program',
      slug: 'toddler-program',
      ageRange: '12 - 24 months',
      icon: Blocks,
      description: 'Our toddler program encourages exploration, independence, and social development through age-appropriate activities. Children learn through play, music, art, and hands-on experiences.',
      highlights: [
        'Teacher-to-child ratio (1:6)',
        'Language development focus',
        'Potty training support',
        'Social skills building',
      ],
      color: 'from-skyblue-400 to-skyblue-600',
      bgColor: 'bg-skyblue-50'
    },
    {
      id: 3,
      title: 'Preschool',
      slug: 'preschool',
      ageRange: '2 - 3 years',
      icon: Palette,
      description: 'Our preschool program builds on curiosity and creativity with structured learning activities. Children develop pre-literacy, math concepts, and problem-solving skills through engaging curriculum.',
      highlights: [
        'Teacher-to-child ratio (1:8)',
        'Structured daily routine',
        'Early literacy & numeracy',
        'Creative arts & music',
      ],
      color: 'from-mint-400 to-mint-600',
      bgColor: 'bg-mint-50'
    },
    {
      id: 4,
      title: 'Pre-Kindergarten',
      slug: 'pre-kindergarten',
      ageRange: '4 - 5 years',
      icon: BookOpen,
      description: 'Our pre-K program prepares children for kindergarten success with comprehensive curriculum covering literacy, mathematics, science, and social studies in a fun, engaging way.',
      highlights: [
        'Teacher-to-child ratio (1:10)',
        'Kindergarten readiness focus',
        'STEM activities',
        'Character development',
      ],
      color: 'from-warmbeige-400 to-warmbeige-600',
      bgColor: 'bg-warmbeige-50'
    },
  ]

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blush-50 via-skyblue-50 to-mint-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush-500 to-skyblue-500">Programs</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Age-appropriate curriculum designed to meet the unique developmental needs of every child, from infancy through pre-kindergarten.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <AnimatedSection key={program.id} delay={index * 0.1}>
                  <div className={`rounded-3xl overflow-hidden ${program.bgColor} p-8 md:p-12`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                        <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 shadow-xl`}>
                          <Icon className="w-20 h-20 text-white" strokeWidth={1.5} />
                        </div>
                        <Badge className="mb-4 px-3 py-1.5">{program.ageRange}</Badge>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">{program.title}</h2>
                        <p className="text-lg text-gray-600 mb-6">{program.description}</p>
                        
                        <div className="space-y-3 mb-8">
                          {program.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start">
                              <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        <Link href={`/programs/${program.slug}`}>
                          <Button className={`rounded-full bg-gradient-to-r ${program.color} hover:shadow-lg transition-all px-8`}>
                            Learn More About This Program
                          </Button>
                        </Link>
                      </div>

                      <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                          <div className={`absolute inset-0 bg-gradient-to-br ${program.color} flex items-center justify-center opacity-20`}>
                            <Icon className="w-64 h-64 text-white" strokeWidth={1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-warmbeige-50 to-blush-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer additional programs and services to support your family's needs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="hover:shadow-xl transition-all rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <Sun className="w-16 h-16 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Summer Camp</h3>
                  <p className="text-gray-600">Fun-filled summer activities and field trips for school-age children.</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="hover:shadow-xl transition-all rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <Clock className="w-16 h-16 text-warmbeige-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Extended Hours</h3>
                  <p className="text-gray-600">Early drop-off and late pick-up options available for working parents.</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="hover:shadow-xl transition-all rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <Drama className="w-16 h-16 text-mint-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Enrichment Classes</h3>
                  <p className="text-gray-600">Music, art, dance, and language classes to enhance learning.</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Enroll Your Child?"
        description="Schedule a tour to see our programs in action and meet our amazing teachers."
      />
    </div>
  )
}
