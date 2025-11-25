'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AnimatedSection from '@/components/shared/AnimatedSection'
import CTASection from '@/components/shared/CTASection'
import { 
  Music, 
  Palette, 
  Microscope, 
  Heart, 
  MessageSquare, 
  Drama,
  Calendar,
  Clock,
  Users,
  Target,
  Star,
  PartyPopper
} from 'lucide-react'

export default function ClassesPage() {
  const classes = [
    {
      id: 1,
      name: 'Music & Movement',
      slug: 'music-movement',
      ageRange: '18 months - 3 years',
      icon: Music,
      price: 150,
      priceUnit: 'month',
      schedule: 'Tuesdays & Thursdays, 10am-11am',
      duration: '3 months',
      spotsAvailable: 5,
      enrollmentOpen: true,
      description: 'Interactive music class introducing rhythm, melody, and movement through songs, instruments, and dance.',
      color: 'from-blush-400 to-blush-600'
    },
    {
      id: 2,
      name: 'Little Artists',
      slug: 'little-artists',
      ageRange: '2 - 4 years',
      icon: Palette,
      price: 120,
      priceUnit: 'month',
      schedule: 'Mondays & Wednesdays, 2pm-3pm',
      duration: '8 weeks',
      spotsAvailable: 8,
      enrollmentOpen: true,
      description: 'Creative art exploration with painting, drawing, sculpting, and sensory activities.',
      color: 'from-skyblue-400 to-skyblue-600'
    },
    {
      id: 3,
      name: 'STEM Explorers',
      slug: 'stem-explorers',
      ageRange: '3 - 5 years',
      icon: Microscope,
      price: 180,
      priceUnit: 'month',
      schedule: 'Fridays, 3pm-4pm',
      duration: '10 weeks',
      spotsAvailable: 2,
      enrollmentOpen: true,
      description: 'Hands-on science experiments, technology exploration, and problem-solving activities.',
      color: 'from-mint-400 to-mint-600'
    },
    {
      id: 4,
      name: 'Yoga for Kids',
      slug: 'yoga-kids',
      ageRange: '3 - 5 years',
      icon: Heart,
      price: 100,
      priceUnit: 'month',
      schedule: 'Wednesdays, 4pm-4:45pm',
      duration: '6 weeks',
      spotsAvailable: 0,
      enrollmentOpen: false,
      description: 'Gentle yoga poses, breathing exercises, and mindfulness activities for young children.',
      color: 'from-warmbeige-400 to-warmbeige-600'
    },
    {
      id: 5,
      name: 'Language Immersion',
      slug: 'language-immersion',
      ageRange: '2 - 5 years',
      icon: MessageSquare,
      price: 200,
      priceUnit: 'month',
      schedule: 'Tuesdays & Thursdays, 11am-12pm',
      duration: '12 weeks',
      spotsAvailable: 6,
      enrollmentOpen: true,
      description: 'Introduction to Spanish through songs, stories, games, and conversation.',
      color: 'from-blush-400 to-skyblue-400'
    },
    {
      id: 6,
      name: 'Dance & Theater',
      slug: 'dance-theater',
      ageRange: '3 - 5 years',
      icon: Drama,
      price: 160,
      priceUnit: 'month',
      schedule: 'Mondays, 3pm-4pm',
      duration: '8 weeks',
      spotsAvailable: 4,
      enrollmentOpen: true,
      description: 'Creative movement, dramatic play, and performance skills in a fun, supportive environment.',
      color: 'from-mint-400 to-warmbeige-400'
    },
  ]

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blush-50 via-skyblue-50 to-mint-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Enrichment <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush-500 to-skyblue-500">Classes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Enhance your child's learning with specialized classes designed to spark creativity, build confidence, and develop new skills.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => {
              const Icon = classItem.icon
              return (
              <AnimatedSection key={classItem.id} delay={index * 0.1}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all group border-0 rounded-3xl h-full flex flex-col">
                  <div className={`h-48 bg-gradient-to-br ${classItem.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                    <Icon className="w-24 h-24 text-white" strokeWidth={1.5} />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{classItem.name}</h3>
                        <Badge variant="secondary" className="mb-2 px-3 py-1.5">{classItem.ageRange}</Badge>
                      </div>
                      {classItem.enrollmentOpen ? (
                        <Badge className="bg-green-500">Open</Badge>
                      ) : (
                        <Badge variant="destructive">Full</Badge>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4 flex-1">{classItem.description}</p>

                    <div className="space-y-2 text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-blush-500" />
                        <span>{classItem.schedule}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-blush-500" />
                        <span>{classItem.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-blush-500" />
                        <span>{classItem.spotsAvailable > 0 ? `${classItem.spotsAvailable} spots available` : 'Waitlist only'}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-gray-800">${classItem.price}</div>
                        <div className="text-sm text-gray-500">per {classItem.priceUnit}</div>
                      </div>
                      <Link href={`/classes/${classItem.slug}`}>
                        <Button className={`rounded-full bg-gradient-to-r ${classItem.color}`}>
                          {classItem.enrollmentOpen ? 'Enroll Now' : 'Join Waitlist'}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )})}
          </div>
        </div>
      </section>

      {/* Why Enrichment Classes */}
      <section className="py-20 bg-gradient-to-br from-warmbeige-50 to-blush-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Enrichment Classes?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized classes provide focused learning experiences that complement our core curriculum.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Skill Development', description: 'Build specific skills in areas of interest' },
              { icon: Star, title: 'Confidence Building', description: 'Gain confidence through mastery and achievement' },
              { icon: Users, title: 'Social Connections', description: 'Make friends with shared interests' },
              { icon: PartyPopper, title: 'Fun & Engagement', description: 'Learn through enjoyable, hands-on activities' },
            ].map((benefit, index) => {
              const BenefitIcon = benefit.icon
              return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="text-center hover:shadow-xl transition-all rounded-3xl h-full">
                  <CardContent className="p-8 flex flex-col items-center">
                    <div className="mb-4">
                      <BenefitIcon className="w-16 h-16 text-blush-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )})}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Have Questions About Our Classes?"
        description="Contact us to learn more about enrollment, schedules, and availability."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
      />
    </div>
  )
}



