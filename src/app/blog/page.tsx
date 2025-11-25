'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import AnimatedSection from '@/components/shared/AnimatedSection'

export default function BlogPage() {
  // Mock blog posts (would come from Sanity CMS)
  const posts = [
    {
      id: 1,
      title: '10 Tips for Preparing Your Child for Their First Day',
      slug: 'first-day-tips',
      excerpt: 'Starting daycare is a big milestone! Here are our top tips to make the transition smooth and stress-free for both you and your child.',
      author: 'Sarah Johnson',
      publishedAt: '2025-01-10',
      category: 'Parenting Tips',
      readTime: '5 min read',
      emoji: '🎒',
      featured: true
    },
    {
      id: 2,
      title: 'The Importance of Play in Early Childhood Development',
      slug: 'importance-of-play',
      excerpt: 'Play isn\'t just fun—it\'s essential for learning! Discover how play supports cognitive, social, and emotional development.',
      author: 'Michael Chen',
      publishedAt: '2025-01-08',
      category: 'Child Development',
      readTime: '4 min read',
      emoji: '🎮',
      featured: true
    },
    {
      id: 3,
      title: 'Healthy Snack Ideas Kids Actually Love',
      slug: 'healthy-snacks',
      excerpt: 'Struggling to find nutritious snacks your kids will eat? Try these parent-approved, kid-tested favorites.',
      author: 'Emily Rodriguez',
      publishedAt: '2025-01-05',
      category: 'Health & Nutrition',
      readTime: '6 min read',
      emoji: '🍎',
      featured: false
    },
    {
      id: 4,
      title: 'Building Social Skills Through Group Activities',
      slug: 'social-skills',
      excerpt: 'Learn how our group activities help children develop essential social skills like sharing, cooperation, and empathy.',
      author: 'David Thompson',
      publishedAt: '2025-01-03',
      category: 'Activities',
      readTime: '5 min read',
      emoji: '👥',
      featured: false
    },
    {
      id: 5,
      title: 'Understanding Separation Anxiety and How to Help',
      slug: 'separation-anxiety',
      excerpt: 'Separation anxiety is normal! Here\'s what you need to know and practical strategies to help your child feel secure.',
      author: 'Jennifer Martinez',
      publishedAt: '2025-01-01',
      category: 'Parenting Tips',
      readTime: '7 min read',
      emoji: '❤️',
      featured: false
    },
    {
      id: 6,
      title: 'STEM Activities You Can Do at Home',
      slug: 'stem-at-home',
      excerpt: 'Spark curiosity with these simple, fun STEM activities using materials you already have at home.',
      author: 'David Thompson',
      publishedAt: '2024-12-28',
      category: 'Activities',
      readTime: '6 min read',
      emoji: '🔬',
      featured: false
    },
  ]

  const featuredPosts = posts.filter(post => post.featured)
  const categories = ['All', 'Parenting Tips', 'Child Development', 'Activities', 'Health & Nutrition']

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blush-50 via-skyblue-50 to-mint-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush-500 to-skyblue-500">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Expert advice, parenting tips, and insights on early childhood development.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Posts</h2>
              <p className="text-gray-600">Our most popular and recent articles</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.1}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all group rounded-3xl h-full">
                    <div className="h-48 bg-gradient-to-br from-blush-100 to-skyblue-100 flex items-center justify-center text-8xl transform group-hover:scale-110 transition-transform">
                      {post.emoji}
                    </div>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge>{post.category}</Badge>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blush-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>By {post.author}</span>
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="outline" className="w-full rounded-full">
                          Read More →
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 bg-gradient-to-br from-warmbeige-50 to-blush-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">All Articles</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.05}>
                <Card className="overflow-hidden hover:shadow-xl transition-all group rounded-3xl h-full flex flex-col">
                  <div className="h-40 bg-gradient-to-br from-mint-100 to-warmbeige-100 flex items-center justify-center text-7xl">
                    {post.emoji}
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blush-600 transition-colors flex-1">
                      {post.title}
                    </h3>
                    <div className="text-xs text-gray-500 mb-4">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="link" className="text-blush-600 p-0">
                        Read More →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mx-auto text-center bg-gradient-to-br from-blush-50 to-skyblue-50 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest parenting tips and early education insights delivered to your inbox.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blush-500"
              />
              <Button className="rounded-full bg-gradient-to-r from-blush-500 to-blush-600 px-8">
                Subscribe
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}



