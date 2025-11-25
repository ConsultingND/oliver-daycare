/**
 * Application-wide constants
 */

// Site Configuration
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Oliver Daycare'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
export const SITE_DESCRIPTION = 'Where Every Child Thrives in a Nurturing, Playful Environment'

// Contact Information (to be updated with actual values)
export const CONTACT = {
  phone: '(555) 123-4567',
  email: 'info@thisdaycare.com',
  address: {
    street: '123 Learning Lane',
    city: 'Your City',
    state: 'ST',
    zip: '12345',
  },
}

// Social Media Links (to be updated with actual values)
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/thisdaycare',
  instagram: 'https://instagram.com/thisdaycare',
  tiktok: '',
  linkedin: '',
}

// Navigation Menu Items
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Classes', href: '/classes' },
  { label: 'Team', href: '/team' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

// CTA Buttons
export const CTA = {
  primary: {
    label: 'Book a Tour',
    href: '/book-tour',
  },
  secondary: {
    label: 'Contact Us',
    href: '/contact',
  },
}

// Age Groups
export const AGE_GROUPS = [
  { name: 'Infant', minAge: 0, maxAge: 12, slug: 'infant' },
  { name: 'Toddler', minAge: 12, maxAge: 24, slug: 'toddler' },
  { name: 'Preschool', minAge: 24, maxAge: 48, slug: 'preschool' },
  { name: 'Pre-K', minAge: 48, maxAge: 60, slug: 'pre-k' },
]

// Gallery Categories
export const GALLERY_CATEGORIES = [
  'All',
  'Playtime',
  'Classroom',
  'Outdoor',
  'Arts & Crafts',
  'Special Events',
  'Meals',
] as const

// Hours of Operation (example - to be updated)
export const HOURS = {
  weekday: '7:00 AM - 6:00 PM',
  weekend: 'Closed',
}

// Form Validation
export const FORM_VALIDATION = {
  name: {
    minLength: 2,
    maxLength: 50,
  },
  email: {
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
  phone: {
    pattern: /^[\d\s()+-]+$/,
  },
  message: {
    minLength: 10,
    maxLength: 1000,
  },
}

