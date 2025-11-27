'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import AnimatedSection from '@/components/shared/AnimatedSection'
import CTASection from '@/components/shared/CTASection'
import Lightbox from '@/components/shared/Lightbox'
import { Expand } from 'lucide-react'
// import InstagramFeed from '@/components/shared/InstagramFeed'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const categories = ['All', 'Classrooms', 'Playground', 'Activities', 'Events', 'Meals']

  // Mock gallery images (would come from Sanity CMS)
  const images = [
    { 
      id: 1, 
      category: 'Classrooms', 
      title: 'Bright Infant Room', 
      emoji: '👶',
      description: 'Our dedicated infant room features natural lighting, soft colors, and age-appropriate toys.'
    },
    { 
      id: 2, 
      category: 'Playground', 
      title: 'Outdoor Play Area', 
      emoji: '🛝',
      description: 'Safe, modern playground equipment designed for different age groups.'
    },
    { 
      id: 3, 
      category: 'Activities', 
      title: 'Art Time', 
      emoji: '🎨',
      description: 'Creative expression through painting, drawing, and hands-on art projects.'
    },
    { 
      id: 4, 
      category: 'Classrooms', 
      title: 'Reading Corner', 
      emoji: '📚',
      description: 'Cozy reading nook stocked with age-appropriate books and comfortable seating.'
    },
    { 
      id: 5, 
      category: 'Events', 
      title: 'Summer Fun Day', 
      emoji: '🎉',
      description: 'Special events and celebrations create lasting memories for our students.'
    },
    { 
      id: 6, 
      category: 'Meals', 
      title: 'Healthy Lunch', 
      emoji: '🍎',
      description: 'Nutritious, balanced meals prepared fresh daily in our kitchen.'
    },
    { 
      id: 7, 
      category: 'Activities', 
      title: 'Music Class', 
      emoji: '🎵',
      description: 'Interactive music sessions with instruments, songs, and movement.'
    },
    { 
      id: 8, 
      category: 'Playground', 
      title: 'Climbing Structure', 
      emoji: '🧗',
      description: 'Age-appropriate climbing equipment promotes gross motor skill development.'
    },
    { 
      id: 9, 
      category: 'Classrooms', 
      title: 'Science Lab', 
      emoji: '🔬',
      description: 'Hands-on STEM activities spark curiosity and scientific thinking.'
    },
    { 
      id: 10, 
      category: 'Activities', 
      title: 'Dance Session', 
      emoji: '💃',
      description: 'Movement and dance activities promote coordination and self-expression.'
    },
    { 
      id: 11, 
      category: 'Events', 
      title: 'Holiday Party', 
      emoji: '🎄',
      description: 'Seasonal celebrations bring joy and cultural awareness to our program.'
    },
    { 
      id: 12, 
      category: 'Meals', 
      title: 'Snack Time', 
      emoji: '🥪',
      description: 'Healthy snacks provided throughout the day to keep energy levels up.'
    },
  ]

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const navigateToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

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
                <Card 
                  onClick={() => openLightbox(index)}
                  className="overflow-hidden hover:shadow-2xl transition-all group rounded-3xl cursor-pointer relative"
                >
                  <div className="aspect-square bg-gradient-to-br from-blush-100 via-skyblue-100 to-mint-100 flex items-center justify-center text-8xl transform group-hover:scale-110 transition-transform">
                    {image.emoji}
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <Expand className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110" />
                  </div>

                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2 text-xs">{image.category}</Badge>
                    <h3 className="font-bold text-gray-800 line-clamp-1">{image.title}</h3>
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

      {/* Lightbox */}
      <Lightbox
        images={filteredImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNavigate={navigateToImage}
      />

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
      {/* <InstagramFeed /> */}

      {/* CTA */}
      <CTASection
        title="Ready to Join Our Community?"
        description="See firsthand why families love Oliver Daycare. Book your tour today!"
      />
    </div>
  )
}

