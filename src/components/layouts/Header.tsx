'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { NAV_ITEMS } from '@/lib/constants'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-4'
          : 'bg-gradient-to-b from-white/95 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blush-400 to-blush-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-2xl">🏫</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Oliver Daycare</h1>
              <p className="text-xs text-gray-500">Where Children Thrive</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blush-500 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <Button variant="outline" className="rounded-full">
                Book a Tour
              </Button>
            </Link>
            <Link href="/enroll">
              <Button className="rounded-full bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700">
                Enroll Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blush-500"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col space-y-4 py-6">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-blush-500 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-blush-50"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 px-4 pt-4">
                  <Link href="/enroll" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full rounded-full bg-gradient-to-r from-blush-500 to-blush-600">
                      Enroll Now
                    </Button>
                  </Link>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full rounded-full">
                      Book a Tour
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
