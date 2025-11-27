'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface LightboxProps {
  images: Array<{
    id: number
    title: string
    category: string
    url?: string
    emoji?: string
    description?: string
  }>
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ images, currentIndex, isOpen, onClose, onNavigate }: LightboxProps) {
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          handlePrevious()
          break
        case 'ArrowRight':
          handleNext()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1)
    }
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      handleNext()
    }
    if (isRightSwipe) {
      handlePrevious()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  const currentImage = images[currentIndex]

  if (!isOpen || !currentImage) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close Button */}
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full w-12 h-12"
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-50 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Previous Button */}
          {currentIndex > 0 && (
            <Button
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full w-14 h-14 hidden md:flex"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
          )}

          {/* Next Button */}
          {currentIndex < images.length - 1 && (
            <Button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full w-14 h-14 hidden md:flex"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          )}

          {/* Main Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-7xl max-h-[90vh] w-full mx-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Image Container */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Image or Emoji Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-blush-100 via-skyblue-100 to-mint-100 flex items-center justify-center">
                {currentImage.url ? (
                  <img
                    src={currentImage.url}
                    alt={currentImage.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-9xl">
                    {currentImage.emoji}
                  </div>
                )}
              </div>

              {/* Image Info */}
              <div className="p-6 bg-white">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {currentImage.title}
                    </h3>
                    {currentImage.description && (
                      <p className="text-gray-600 mb-3">
                        {currentImage.description}
                      </p>
                    )}
                    <span className="inline-block px-3 py-1 bg-blush-100 text-blush-700 rounded-full text-sm font-medium">
                      {currentImage.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="mt-4 overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 pb-2 justify-center">
                {images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => onNavigate(idx)}
                    className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all ${
                      idx === currentIndex
                        ? 'ring-4 ring-white scale-110'
                        : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-blush-100 via-skyblue-100 to-mint-100 flex items-center justify-center text-3xl">
                      {img.url ? (
                        <img
                          src={img.url}
                          alt={img.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        img.emoji
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mobile Swipe Hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm md:hidden">
            Swipe left or right to navigate
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


