'use client'

import { use } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AnimatedSection from '@/components/shared/AnimatedSection'
import CTASection from '@/components/shared/CTASection'

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)

  // Mock data (would fetch from Sanity CMS)
  const post = {
    title: '10 Tips for Preparing Your Child for Their First Day',
    author: 'Sarah Johnson',
    authorRole: 'Director',
    publishedAt: '2025-01-10',
    category: 'Parenting Tips',
    readTime: '5 min read',
    emoji: '🎒',
    content: [
      {
        type: 'intro',
        text: 'Starting daycare is a big milestone for both children and parents! It\'s natural to feel a mix of excitement and anxiety. With proper preparation, you can make the transition smooth and positive for everyone involved.'
      },
      {
        type: 'heading',
        text: '1. Visit the Center Together'
      },
      {
        type: 'text',
        text: 'Before the first day, schedule a visit to the center. Let your child explore the classroom, meet the teachers, and play with some toys. Familiarity reduces anxiety and builds excitement.'
      },
      {
        type: 'heading',
        text: '2. Establish a Goodbye Routine'
      },
      {
        type: 'text',
        text: 'Create a consistent, brief goodbye routine. A special hug, kiss, and phrase like "I love you, have a great day!" helps your child feel secure. Avoid prolonging goodbyes, as this can increase anxiety.'
      },
      {
        type: 'heading',
        text: '3. Talk About What to Expect'
      },
      {
        type: 'text',
        text: 'Use simple, positive language to explain what will happen during the day. Read books about starting school or daycare together. Role-play scenarios with stuffed animals to make it fun and familiar.'
      },
      {
        type: 'heading',
        text: '4. Practice the Morning Routine'
      },
      {
        type: 'text',
        text: 'Start practicing your morning routine a week or two before. Wake up at the same time, get dressed, and have breakfast together. This helps establish consistency and reduces stress on the first day.'
      },
      {
        type: 'heading',
        text: '5. Bring a Comfort Item'
      },
      {
        type: 'text',
        text: 'A favorite stuffed animal, blanket, or family photo can provide comfort during the day. Check with your center about their policy on personal items.'
      },
    ],
    tags: ['First Day', 'Parenting', 'Preparation', 'Transition']
  }

  const relatedPosts = [
    { title: 'Understanding Separation Anxiety', slug: 'separation-anxiety', emoji: '❤️' },
    { title: 'Building Social Skills', slug: 'social-skills', emoji: '👥' },
    { title: 'Healthy Snack Ideas', slug: 'healthy-snacks', emoji: '🍎' },
  ]

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blush-50 to-skyblue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-blush-600 hover:text-blush-700 mb-4 inline-block">
              ← Back to Blog
            </Link>
            
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-6xl">{post.emoji}</div>
                <div>
                  <Badge className="mb-2">{post.category}</Badge>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blush-400 to-blush-600 flex items-center justify-center text-2xl">
                  👩‍🏫
                </div>
                <div>
                  <div className="font-medium text-gray-800">{post.author}</div>
                  <div className="text-sm text-gray-600">{post.authorRole}</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {post.content.map((section, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  {section.type === 'intro' && (
                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                      {section.text}
                    </p>
                  )}
                  {section.type === 'heading' && (
                    <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-4">
                      {section.text}
                    </h2>
                  )}
                  {section.type === 'text' && (
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {section.text}
                    </p>
                  )}
                </AnimatedSection>
              ))}
            </article>

            {/* Tags */}
            <AnimatedSection className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </AnimatedSection>

            {/* Share */}
            <AnimatedSection className="mt-8">
              <Card className="bg-gradient-to-br from-blush-50 to-skyblue-50 rounded-3xl border-0">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Found this helpful?</h3>
                  <p className="text-gray-600 mb-6">Share it with other parents who might benefit!</p>
                  <div className="flex gap-3 justify-center">
                    <Button variant="outline" className="rounded-full">
                      📱 Share
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      🔖 Save
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gradient-to-br from-warmbeige-50 to-blush-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Related Articles</h2>
            <p className="text-xl text-gray-600">Continue reading with these related posts</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedPosts.map((relatedPost, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Link href={`/blog/${relatedPost.slug}`}>
                  <Card className="hover:shadow-xl transition-all rounded-3xl">
                    <CardContent className="p-6 text-center">
                      <div className="text-6xl mb-4">{relatedPost.emoji}</div>
                      <h3 className="font-bold text-gray-800">{relatedPost.title}</h3>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        description="Schedule a tour to see our programs and meet our team in person."
      />
    </div>
  )
}



