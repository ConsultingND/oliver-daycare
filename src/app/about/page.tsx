'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import AnimatedSection from '@/components/shared/AnimatedSection'
import CTASection from '@/components/shared/CTASection'
import { Heart, GraduationCap, Shield, Users, School, PartyPopper, Trees, Apple, Bed, BookOpen } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Love & Care',
      description: 'Every child receives individual attention and nurturing care in a warm, supportive environment.'
    },
    {
      icon: GraduationCap,
      title: 'Quality Education',
      description: 'Age-appropriate curriculum designed to foster curiosity, creativity, and a lifelong love of learning.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'State-licensed facility with certified staff, secure premises, and rigorous health & safety protocols.'
    },
    {
      icon: Users,
      title: 'Family Partnership',
      description: 'Strong collaboration with parents through daily updates, regular communication, and family events.'
    },
  ]

  const facilities = [
    { icon: School, name: 'Spacious Classrooms', description: 'Bright, clean, and age-appropriate learning spaces' },
    { icon: PartyPopper, name: 'Indoor Play Area', description: 'Climate-controlled space for active play year-round' },
    { icon: Trees, name: 'Outdoor Playground', description: 'Safe, supervised outdoor play with modern equipment' },
    { icon: Apple, name: 'Kitchen & Dining', description: 'Nutritious meals prepared fresh daily on-site' },
    { icon: Bed, name: 'Nap Rooms', description: 'Quiet, comfortable spaces for rest and rejuvenation' },
    { icon: BookOpen, name: 'Learning Centers', description: 'Dedicated areas for art, reading, science, and more' },
  ]

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blush-50 via-warmbeige-50 to-skyblue-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush-500 to-skyblue-500">Oliver Daycare</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              For over 15 years, we've been dedicated to providing exceptional early childhood education in a nurturing, safe, and engaging environment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blush-200 to-skyblue-200 flex items-center justify-center">
                  <School className="w-40 h-40 text-white" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide a nurturing, stimulating, and safe environment where children can explore, learn, and grow at their own pace. We believe every child is unique and deserves individualized attention to reach their full potential.
              </p>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the most trusted and respected early childhood education center in our community, known for our commitment to excellence, innovation, and the holistic development of every child in our care.
              </p>
              <Link href="/programs">
                <Button className="rounded-full bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 px-8">
                  Explore Our Programs
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-warmbeige-50 to-blush-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape the caring, educational environment we create.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="text-center hover:shadow-xl transition-all border-2 hover:border-blush-300 rounded-3xl h-full">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-4">
                        <Icon className="w-16 h-16 text-blush-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Oliver Daycare was founded in 2009 by a group of passionate early childhood educators who shared a vision: to create a place where children could learn, play, and grow in a safe, nurturing environment that feels like a home away from home.
                </p>
                <p className="mb-6">
                  What started as a small center with just 15 children has grown into a thriving community serving over 200 families. Throughout our journey, we've stayed true to our founding principles: providing exceptional care, fostering curiosity and creativity, and building strong partnerships with families.
                </p>
                <p className="mb-6">
                  Today, we're proud to be a trusted leader in early childhood education, with state-of-the-art facilities, a team of certified educators, and a proven curriculum that prepares children for lifelong success.
                </p>
                <p>
                  But our greatest achievement isn't our awards or accolades—it's the joy on a child's face when they discover something new, the confidence they gain as they master new skills, and the lasting relationships we build with families who become part of our extended family.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gradient-to-br from-skyblue-50 to-mint-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A state-of-the-art learning environment designed with children's safety, comfort, and development in mind.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="hover:shadow-xl transition-all border-2 hover:border-skyblue-300 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Icon className="w-12 h-12 text-skyblue-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.name}</h3>
                      <p className="text-gray-600">{facility.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.6}>
            <Link href="/gallery">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-skyblue-500 to-mint-500 hover:from-skyblue-600 hover:to-mint-600 px-8">
                View Our Gallery
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedSection>
              <div className="text-5xl md:text-6xl font-bold text-blush-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="text-5xl md:text-6xl font-bold text-skyblue-600 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Happy Families</div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-5xl md:text-6xl font-bold text-mint-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Certified Teachers</div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="text-5xl md:text-6xl font-bold text-warmbeige-600 mb-2">4.9★</div>
              <div className="text-gray-600 font-medium">Parent Rating</div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-warmbeige-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Our dedicated educators are the heart of our program. Each team member is passionate about early childhood development and committed to your child's success.
            </p>
            <Link href="/team">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 px-8">
                Meet Our Team
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  )
}



