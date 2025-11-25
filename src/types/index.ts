/**
 * TypeScript type definitions for the application
 */

// Core Entities (based on data model)

export interface Site {
  id: string
  name: string
  slug: string
  tagline?: string
  primaryColor?: string
  secondaryColor?: string
  logoUrl?: string
  faviconUrl?: string
  createdAt: Date
  updatedAt: Date
}

export interface Location {
  id: string
  siteId: string
  name: string
  slug: string
  tagline?: string
  description?: string
  phone: string
  email: string
  address: Address
  timezone?: string
  googleMapsUrl?: string
  heroImageUrl?: string
  isAcceptingEnrollments: boolean
  hoursOfOperation?: HoursOfOperation
  licensingInfo?: string
  safetySummary?: string
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  street: string
  street2?: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface HoursOfOperation {
  monday?: string
  tuesday?: string
  wednesday?: string
  thursday?: string
  friday?: string
  saturday?: string
  sunday?: string
}

export interface Program {
  id: string
  siteId: string
  locationId?: string
  name: string
  slug: string
  ageGroupId?: string
  description: string
  dailySchedule?: string
  learningFocus?: string[]
  teacherToChildRatio?: string
  hoursAvailable?: string
  tuitionSummary?: string
  heroImageUrl?: string
  iconUrl?: string
  isFeatured: boolean
  displayOrder?: number
  createdAt: Date
  updatedAt: Date
}

export interface AgeGroup {
  id: string
  name: string
  minAgeMonths: number
  maxAgeMonths: number
  description?: string
  createdAt: Date
  updatedAt: Date
}

export interface StaffMember {
  id: string
  siteId: string
  locationId?: string
  firstName: string
  lastName: string
  role: string
  slug: string
  bio: string
  credentials?: string[]
  experienceYears?: number
  photoUrl?: string
  favoriteQuote?: string
  whyILoveWorkingWithChildren?: string
  programIds?: string[]
  isFeatured: boolean
  displayOrder?: number
  createdAt: Date
  updatedAt: Date
}

export interface Testimonial {
  id: string
  siteId: string
  locationId?: string
  parentName: string
  childFirstName?: string
  quote: string
  rating?: number
  source?: string
  programId?: string
  isFeatured: boolean
  displayOrder?: number
  createdAt: Date
  updatedAt: Date
}

export interface GalleryImage {
  id: string
  siteId: string
  locationId?: string
  facilityAreaId?: string
  programId?: string
  url: string
  altText: string
  caption?: string
  category?: GalleryCategory
  isFeatured: boolean
  displayOrder?: number
  createdAt: Date
  updatedAt: Date
}

export type GalleryCategory =
  | 'Playtime'
  | 'Classroom'
  | 'Outdoor'
  | 'Event'
  | 'Meals'
  | 'Staff'

export interface FAQ {
  id: string
  siteId: string
  locationId?: string
  question: string
  answer: string
  category?: string
  displayOrder?: number
  createdAt: Date
  updatedAt: Date
}

// Form Submissions

export interface TourRequest {
  id: string
  siteId: string
  locationId: string
  parentName: string
  childName?: string
  childAgeMonths?: number
  email: string
  phone: string
  preferredProgramId?: string
  preferredTourDate?: Date
  preferredTimeSlot?: string
  message?: string
  status: TourRequestStatus
  source?: string
  createdAt: Date
  updatedAt: Date
}

export type TourRequestStatus =
  | 'New'
  | 'Contacted'
  | 'Scheduled'
  | 'Completed'
  | 'Cancelled'

export interface ContactMessage {
  id: string
  siteId: string
  locationId?: string
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  category?: string
  status: ContactMessageStatus
  createdAt: Date
  handledAt?: Date
}

export type ContactMessageStatus =
  | 'New'
  | 'In Progress'
  | 'Resolved'
  | 'Archived'

// Form Data Types (for form inputs)

export interface TourRequestFormData {
  parentName: string
  childName?: string
  childAge?: string
  email: string
  phone: string
  preferredProgram?: string
  preferredDate?: string
  preferredTime?: string
  message?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

export interface NewsletterFormData {
  email: string
  consent: boolean
}

// Component Props Types

export interface PageProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

// SEO Types

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
  noIndex?: boolean
}



