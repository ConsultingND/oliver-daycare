'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AnimatedSection from '@/components/shared/AnimatedSection'
import CTASection from '@/components/shared/CTASection'
// import InstagramFeed from '@/components/shared/InstagramFeed'
import { motion } from 'framer-motion'
import { 
  Baby, 
  Blocks,
  Palette, 
  BookOpen, 
  GraduationCap, 
  Shield, 
  Apple, 
  Video, 
  PartyPopper, 
  Users
} from 'lucide-react'

export default function HomePage() {
  const programs = [
    {
      title: 'Infant Care',
      ageRange: '6 weeks - 12 months',
      icon: Baby,
      description: 'Gentle, loving care with age-appropriate activities that promote early development.',
      color: 'from-blush-400 to-blush-600'
    },
    {
      title: 'Toddler Program',
      ageRange: '12 - 24 months',
      icon: Blocks,
      description: 'Active learning through play, exploration, and social interaction.',
      color: 'from-skyblue-400 to-skyblue-600'
    },
    {
      title: 'Preschool',
      ageRange: '2 - 3 years',
      icon: Palette,
      description: 'Structured activities that build independence, creativity, and school readiness.',
      color: 'from-mint-400 to-mint-600'
    },
    {
      title: 'Pre-K',
      ageRange: '4 - 5 years',
      icon: BookOpen,
      description: 'Comprehensive kindergarten prep with literacy, math, and social skills.',
      color: 'from-warmbeige-400 to-warmbeige-600'
    },
  ]

  const features = [
    { icon: GraduationCap, title: 'Certified Teachers', description: 'Experienced, loving educators' },
    { icon: Shield, title: 'Safe & Clean', description: 'Health & safety certified' },
    { icon: Apple, title: 'Nutritious Meals', description: 'Healthy, balanced daily meals' },
    { icon: Video, title: 'Live Updates', description: 'Daily photos & progress reports' },
    { icon: PartyPopper, title: 'Fun Activities', description: 'Engaging, educational play' },
    { icon: Users, title: 'Family Focus', description: 'Strong parent partnerships' },
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Best decision we ever made! The teachers truly care about each child and my daughter has flourished here.',
      role: 'Parent of Emma, 3'
    },
    {
      name: 'Michael R.',
      rating: 5,
      text: 'Amazing facility with wonderful staff. My son looks forward to going every single day!',
      role: 'Parent of Lucas, 4'
    },
    {
      name: 'Jennifer K.',
      rating: 5,
      text: 'The curriculum is outstanding and the communication with parents is excellent. Highly recommend!',
      role: 'Parent of Olivia, 2'
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blush-50 via-skyblue-50 to-mint-50 overflow-hidden pt-20">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blush-300 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-skyblue-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-mint-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-blush-500 text-white">Now Enrolling for 2025</Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                Where Every Child{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush-500 to-skyblue-500">
                  Thrives
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Nurturing young minds in a safe, engaging, and loving environment. Quality childcare and early education you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/enroll">
                  <Button size="lg" className="rounded-full bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all">
                    Enroll Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg">
                    Book a Tour
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blush-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-skyblue-600">200+</div>
                  <div className="text-sm text-gray-600">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mint-600">4.9★</div>
                  <div className="text-sm text-gray-600">Parent Rating</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blush-200 to-skyblue-200 flex items-center justify-center">
                  <Users className="w-32 h-32 text-white" />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-bounce">
                <Palette className="w-12 h-12 text-mint-500" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                <BookOpen className="w-12 h-12 text-blush-500" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Parents Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide everything your child needs to learn, grow, and thrive in a nurturing environment.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <AnimatedSection key={index} delay={index * 0.1} className="h-full">
                  <Card className="h-full text-center hover:shadow-xl transition-all border-2 hover:border-blush-300 rounded-2xl flex flex-col">
                    <CardContent className="p-6 flex flex-col items-center flex-1">
                      <div className="flex justify-center mb-4">
                        <Icon className="w-12 h-12 text-blush-500" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2 text-sm">{feature.title}</h3>
                      <p className="text-xs text-gray-600 mt-auto">{feature.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-warmbeige-50 to-blush-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Age-appropriate curriculum designed to meet the unique developmental needs of every child.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <AnimatedSection key={index} delay={index * 0.1} className="h-full">
                  <Card className="h-full overflow-hidden hover:shadow-2xl transition-all group border-0 rounded-3xl flex flex-col">
                    <div className={`h-40 bg-gradient-to-br ${program.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                      <Icon className="w-20 h-20 text-white" strokeWidth={1.5} />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h3>
                      <Badge variant="secondary" className="mb-4 w-fit px-3 py-1.5">{program.ageRange}</Badge>
                      <p className="text-gray-600 mb-4 flex-1">{program.description}</p>
                      <Link href="/programs" className="mt-auto">
                        <Button variant="link" className="text-blush-600 p-0 h-auto">
                          Learn More →
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.4}>
            <Link href="/programs">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 px-8">
                View All Programs
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Parents Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the families who trust us with their children.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="hover:shadow-xl transition-all border-2 hover:border-blush-300 rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      {/* <InstagramFeed /> */}

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
