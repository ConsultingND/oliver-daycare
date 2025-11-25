'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import AnimatedSection from '@/components/shared/AnimatedSection'
import CTASection from '@/components/shared/CTASection'

export default function TeamPage() {
  // Mock team members (would come from Sanity CMS)
  const team = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Director',
      slug: 'sarah-johnson',
      experience: '15 years',
      credentials: ['M.Ed. Early Childhood', 'State Certified'],
      photo: '👩‍🏫',
      color: 'from-blush-400 to-blush-600'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Lead Teacher - Infant Program',
      slug: 'michael-chen',
      experience: '8 years',
      credentials: ['B.A. Child Development', 'CPR & First Aid'],
      photo: '👨‍🏫',
      color: 'from-skyblue-400 to-skyblue-600'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Lead Teacher - Toddler Program',
      slug: 'emily-rodriguez',
      experience: '10 years',
      credentials: ['CDA Certified', 'Montessori Trained'],
      photo: '👩‍🏫',
      color: 'from-mint-400 to-mint-600'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Lead Teacher - Preschool',
      slug: 'david-thompson',
      experience: '12 years',
      credentials: ['B.S. Education', 'STEM Specialist'],
      photo: '👨‍🏫',
      color: 'from-warmbeige-400 to-warmbeige-600'
    },
    {
      id: 5,
      name: 'Jennifer Martinez',
      role: 'Lead Teacher - Pre-K',
      slug: 'jennifer-martinez',
      experience: '9 years',
      credentials: ['M.Ed. Curriculum', 'Literacy Specialist'],
      photo: '👩‍🏫',
      color: 'from-blush-400 to-skyblue-400'
    },
    {
      id: 6,
      name: 'Robert Lee',
      role: 'Assistant Director',
      slug: 'robert-lee',
      experience: '14 years',
      credentials: ['M.A. Education Leadership', 'State Licensed'],
      photo: '👨‍💼',
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
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush-500 to-skyblue-500">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Our passionate, certified educators are the heart of our program. Each team member is dedicated to nurturing and inspiring young minds.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.1}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all group rounded-3xl">
                  <div className={`h-64 bg-gradient-to-br ${member.color} flex items-center justify-center text-9xl transform group-hover:scale-110 transition-transform`}>
                    {member.photo}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <Badge className="mb-4">{member.role}</Badge>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">📅</span>
                        <span>{member.experience} experience</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">Credentials:</div>
                        {member.credentials.map((cred, i) => (
                          <div key={i} className="text-sm text-gray-600 flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {cred}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href={`/team/${member.slug}`}>
                      <Button variant="outline" className="w-full rounded-full">
                        View Profile
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Team */}
      <section className="py-20 bg-gradient-to-br from-warmbeige-50 to-blush-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Our Team Stands Out
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We hire the best and invest in ongoing professional development.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎓', title: 'Certified & Degreed', description: 'All teachers hold relevant certifications and degrees' },
              { icon: '❤️', title: 'Passionate & Caring', description: 'Genuine love for working with children' },
              { icon: '📚', title: 'Ongoing Training', description: 'Regular professional development and workshops' },
              { icon: '🔒', title: 'Background Checked', description: 'Thorough screening and safety protocols' },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="text-center hover:shadow-xl transition-all rounded-3xl">
                  <CardContent className="p-8">
                    <div className="text-6xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto bg-gradient-to-br from-blush-50 to-skyblue-50 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for passionate, qualified educators to join our family. View open positions and apply today.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 px-8">
                View Careers
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Meet Our Amazing Team in Person"
        description="Schedule a tour to meet our educators and see them in action with the children."
      />
    </div>
  )
}



