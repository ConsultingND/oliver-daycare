'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import AnimatedSection from './AnimatedSection'

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  bgColor?: string
}

export default function CTASection({
  title = "Ready to Give Your Child the Best Start?",
  description = "Join our nurturing community where your child will learn, grow, and thrive. Enrollment is now open!",
  primaryButtonText = "Enroll Now",
  primaryButtonLink = "/enroll",
  secondaryButtonText = "Book a Tour",
  secondaryButtonLink = "/contact",
  bgColor = "bg-gradient-to-br from-blush-500 via-blush-400 to-skyblue-400"
}: CTASectionProps) {
  return (
    <section className={`${bgColor} py-20 relative overflow-hidden`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryButtonLink}>
              <Button
                size="lg"
                className="bg-white text-blush-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                {primaryButtonText}
              </Button>
            </Link>
            <Link href={secondaryButtonLink}>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blush-600 rounded-full px-8 py-6 text-lg font-semibold"
              >
                {secondaryButtonText}
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
