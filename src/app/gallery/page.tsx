'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import AnimatedSection from '@/components/shared/AnimatedSection'
import CTASection from '@/components/shared/CTASection'
import InstagramFeed from '@/components/shared/InstagramFeed'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Classrooms', 'Playground', 'Activities', 'Events', 'Meals']

  // Mock gallery images (would come from Sanity CMS)
  const images = [
    { id: 1, category: 'Classrooms', title: 'Bright Infant Room', emoji: '👶' },
    { id: 2, category: 'Playground', title: 'Outdoor Play Area', emoji: '🛝' },
    { id: 3, category: 'Activities', title: 'Art Time', emoji: '🎨' },
    { id: 4, category: 'Classrooms', title: 'Reading Corner', emoji: '📚' },
    { id: 5, category: 'Events', title: 'Summer Fun Day', emoji: '🎉' },
    { id: 6, category: 'Meals', title: 'Healthy Lunch', emoji: '🍎' },
    { id: 7, category: 'Activities', title: 'Music Class', emoji: '🎵' },
    { id: 8, category: 'Playground', title: 'Climbing Structure', emoji: '🧗' },
    { id: 9, category: 'Classrooms', title: 'Science Lab', emoji: '🔬' },
    { id: 10, category: 'Activities', title: 'Dance Session', emoji: '💃' },
    { id: 11, category: 'Events', title: 'Holiday Party', emoji: '🎄' },
    { id: 12, category: 'Meals', title: 'Snack Time', emoji: '🥪' },
  ]

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blush-50 via-skyblue-50 to-mint-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush-500 to-skyblue-500">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Take a visual tour of our bright, welcoming facilities and see our programs in action.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white sticky top-20 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`rounded-full ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blush-500 to-blush-600'
                    : ''
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <AnimatedSection key={image.id} delay={index * 0.05}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all group rounded-3xl cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-blush-100 via-skyblue-100 to-mint-100 flex items-center justify-center text-8xl transform group-hover:scale-110 transition-transform">
                    {image.emoji}
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">{image.category}</Badge>
                    <h3 className="font-bold text-gray-800">{image.title}</h3>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-20 bg-gradient-to-br from-warmbeige-50 to-blush-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Want to See More?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a personalized tour to explore our facilities, meet our teachers, and see our programs in action.
            </p>
            <Button size="lg" className="rounded-full bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 px-8 py-6 text-lg">
              Schedule Your Tour
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* CTA */}
      <CTASection
        title="Ready to Join Our Community?"
        description="See firsthand why families love Oliver Daycare. Book your tour today!"
      />
    </div>
  )
}

