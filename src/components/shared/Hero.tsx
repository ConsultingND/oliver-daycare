import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ReactNode } from 'react'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  backgroundImage?: string
  children?: ReactNode
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  children,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url(${backgroundImage})`
          : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blush-200/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-skyblue-200/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-mint-200/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <div className="inline-block mb-4 px-4 py-2 bg-blush-100 rounded-full">
              <span className="text-blush-600 font-semibold text-sm">{subtitle}</span>
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6 leading-tight animate-fade-in-up">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
              {primaryCta && (
                <Link href={primaryCta.href}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {primaryCta.label}
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-blush-500 text-blush-600 hover:bg-blush-50 rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                  >
                    {secondaryCta.label}
                  </Button>
                </Link>
              )}
            </div>
          )}

          {children && <div className="mt-12">{children}</div>}
        </div>
      </div>
    </section>
  )
}

