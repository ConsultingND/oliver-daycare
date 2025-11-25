'use client'

import { use } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AnimatedSection from '@/components/shared/AnimatedSection'
import CTASection from '@/components/shared/CTASection'

export default function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)

  // Mock data (would fetch from Sanity CMS)
  const member = {
    name: 'Sarah Johnson',
    role: 'Director',
    experience: '15 years',
    photo: '👩‍🏫',
    credentials: ['M.Ed. Early Childhood Education', 'State Director Certified', 'CPR & First Aid Certified'],
    bio: `Sarah has been passionate about early childhood education for over 15 years. She believes every child deserves a nurturing environment where they can explore, learn, and grow at their own pace. Her leadership style focuses on creating a warm, inclusive community where both children and staff thrive.`,
    whyILove: `I love watching children discover the world around them. Every day brings new "aha!" moments, and being part of that journey is incredibly rewarding. The relationships we build with families and the positive impact we have on children's lives make this the most fulfilling career I could imagine.`,
    education: [
      'Master of Education in Early Childhood - University of State, 2008',
      'Bachelor of Arts in Child Development - State College, 2005',
    ],
    specializations: ['Curriculum Development', 'Teacher Mentoring', 'Family Engagement', 'Inclusive Practices'],
    color: 'from-blush-400 to-blush-600'
  }

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blush-50 to-skyblue-50">
        <div className="container mx-auto px-4">
          <Link href="/team" className="text-blush-600 hover:text-blush-700 mb-4 inline-block">
            ← Back to Team
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className={`w-full aspect-square rounded-3xl bg-gradient-to-br ${member.color} flex items-center justify-center text-9xl shadow-2xl`}>
                {member.photo}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Badge className="mb-4">{member.experience} Experience</Badge>
              <h1 className="text-5xl font-bold text-gray-800 mb-4">{member.name}</h1>
              <p className="text-2xl text-gray-600 mb-6">{member.role}</p>
              
              <div className="space-y-2 mb-6">
                {member.credentials.map((cred, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bio & Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About {member.name.split(' ')[0]}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{member.bio}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="bg-gradient-to-br from-blush-50 to-warmbeige-50 rounded-3xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">💭 Why I Love What I Do</h3>
                  <p className="text-lg text-gray-700 italic leading-relaxed">{member.whyILove}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Education & Specializations */}
      <section className="py-20 bg-gradient-to-br from-skyblue-50 to-mint-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">🎓 Education</h3>
                <div className="space-y-4">
                  {member.education.map((edu, index) => (
                    <Card key={index} className="rounded-2xl">
                      <CardContent className="p-4">
                        <p className="text-gray-700">{edu}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">⭐ Specializations</h3>
                <div className="space-y-3">
                  {member.specializations.map((spec, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-blush-500 text-2xl mr-3">•</span>
                      <span className="text-gray-700 text-lg">{spec}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want to Meet Our Team?"
        description="Schedule a tour to meet {member.name.split(' ')[0]} and the rest of our amazing educators."
      />
    </div>
  )
}



