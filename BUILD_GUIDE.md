# 🏗️ Complete Build Guide - Oliver Daycare Website

## ✅ What's Already Built

### Completed Features
1. ✅ **Supabase Integration** - Auth and database configured
2. ✅ **Page Structure** - All 9 page routes created
3. ✅ **Shared Components**
   - Header with responsive navigation
   - Footer with contact info and links
   - Hero section component with animations
   - CTA Section component
4. ✅ **Homepage** - Fully designed with all sections
5. ✅ **Programs Pages** - Listing and detail pages with full CMS integration
6. ✅ **Animations** - Blob animations, fade-in-up, floating effects
7. ✅ **Color Theme** - Daycare-friendly soft colors configured

### What You Have
- **Beautiful, responsive homepage** with features, programs, testimonials, stats
- **Complete Programs section** as a reference pattern
- **Reusable components** for Hero, CTA, Cards
- **Sanity CMS** fully configured with 7 content types
- **Header & Footer** with navigation

---

## 📋 Remaining Pages to Build

1. About Us
2. Classes (similar to Programs)
3. Blog + Blog Detail
4. Team + Team Detail
5. Gallery with lightbox
6. Pricing Plans
7. Contact Us with forms
8. Instagram Integration

---

## 🎨 Design Patterns & Components

### Pattern 1: Simple Content Page (About Us)

**File:** `src/app/about/page.tsx`

```typescript
import { Hero } from '@/components/shared/Hero'
import { CTASection } from '@/components/shared/CTASection'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Users, Award, Star } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Oliver Daycare"
        subtitle="Our Story"
        description="Learn about our mission, values, and commitment to early childhood education."
        primaryCta={{ label: 'Schedule a Tour', href: '/contact' }}
      />

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              We believe every child deserves a nurturing, safe, and stimulating environment where they can grow, learn, and thrive.
            </p>
            {/* Add more content */}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-warmbeige-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Heart />, title: 'Care', description: '...' },
              { icon: <Users />, title: 'Community', description: '...' },
              { icon: <Award />, title: 'Excellence', description: '...' },
            ].map((value, i) => (
              <Card key={i} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blush-100 rounded-full flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Community"
        description="Experience the Oliver Daycare difference. Schedule a tour today!"
        primaryButton={{ label: 'Book a Tour', href: '/contact' }}
        variant="gradient"
      />
    </>
  )
}
```

---

### Pattern 2: CMS-Driven Listing Page (Team, Classes, Blog)

**Use the Programs page as your template!**

For **Team** page (`src/app/team/page.tsx`):

```typescript
import { client } from '@/lib/sanity/client'
import { staffQuery } from '@/lib/sanity/queries'
import { Hero } from '@/components/shared/Hero'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

async function getStaff() {
  const staff = await client.fetch(staffQuery)
  return staff
}

export default async function TeamPage() {
  const staff = await getStaff()

  return (
    <>
      <Hero
        title="Meet Our Team"
        subtitle="Dedicated Educators"
        description="Our passionate teachers bring years of experience and love for early childhood education."
        primaryCta={{ label: 'Join Our Team', href: '/contact' }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staff.map((member: any) => (
              <Link key={member._id} href={`/team/${member.slug.current}`}>
                <Card className="group hover:shadow-2xl transition-all hover:-translate-y-2">
                  {member.photo && (
                    <div className="h-64 overflow-hidden rounded-t-lg">
                      <img
                        src={member.photo}
                        alt={`${member.firstName} ${member.lastName}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {member.firstName} {member.lastName}
                    </h3>
                    <p className="text-sm text-blush-500 mb-3">{member.role}</p>
                    {member.experienceYears && (
                      <p className="text-sm text-gray-600">
                        {member.experienceYears} years experience
                      </p>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
```

**Team Detail Page** (`src/app/team/[slug]/page.tsx`):

Follow the same pattern as `programs/[slug]/page.tsx`, but use:
- `staffBySlugQuery`
- Display: photo, bio, credentials, whyILoveWorkingWithChildren, programs

---

### Pattern 3: Gallery with Lightbox

**File:** `src/app/gallery/page.tsx`

```typescript
'use client'

import { useState } from 'react'
import { Hero } from '@/components/shared/Hero'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { X } from 'lucide-react'

// In real app, fetch from Sanity using galleryImagesQuery
const categories = ['All', 'Playtime', 'Classroom', 'Outdoor', 'Arts & Crafts', 'Events']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Fetch images from Sanity
  // const images = await client.fetch(galleryImagesQuery)

  return (
    <>
      <Hero
        title="Our Gallery"
        subtitle="Happy Moments"
        description="Explore our facility, classrooms, and the joyful activities that make every day special."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blush-500 to-skyblue-500 text-white'
                    : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-blush-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Map through images */}
            {/* Example: */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all"
                onClick={() => setSelectedImage(`/images/gallery-${i}.jpg`)}
              >
                <img
                  src={`https://placehold.co/400x400/FED0DB/FFFFFF?text=Photo+${i}`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img src={selectedImage} alt="Selected" className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
```

---

### Pattern 4: Pricing Plans

**File:** `src/app/pricing/page.tsx`

```typescript
import { Hero } from '@/components/shared/Hero'
import { CTASection } from '@/components/shared/CTASection'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const plans = [
    {
      name: 'Part-Time',
      price: '$800',
      period: '/month',
      description: '3 days per week',
      features: [
        'Morning or afternoon sessions',
        'Nutritious snacks',
        'Age-appropriate curriculum',
        'Progress reports',
        'Parent communication app',
      ],
      popular: false,
    },
    {
      name: 'Full-Time',
      price: '$1,400',
      period: '/month',
      description: '5 days per week',
      features: [
        '7:00 AM - 6:00 PM care',
        'Breakfast, lunch & snacks included',
        'Full curriculum access',
        'Weekly progress reports',
        'Priority event registration',
        'Extended care options',
      ],
      popular: true,
    },
    {
      name: 'Extended Care',
      price: '$1,800',
      period: '/month',
      description: 'Full-time + extended hours',
      features: [
        '6:00 AM - 7:00 PM care',
        'All meals included',
        'Premium curriculum',
        'Daily updates & photos',
        'One-on-one teacher time',
        'Priority everything',
      ],
      popular: false,
    },
  ]

  return (
    <>
      <Hero
        title="Pricing & Plans"
        subtitle="Transparent Pricing"
        description="Choose the plan that works best for your family. No hidden fees, just quality care."
        primaryCta={{ label: 'Schedule a Tour', href: '/contact' }}
      />

      <section className="py-20 bg-gradient-to-b from-white to-warmbeige-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular ? 'border-4 border-blush-500 shadow-2xl transform lg:-translate-y-4' : 'border-none shadow-lg'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blush-500 to-skyblue-500 px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-mint-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blush-500 to-skyblue-500 hover:from-blush-600 hover:to-skyblue-600'
                          : 'bg-gray-800 hover:bg-gray-900'
                      } text-white rounded-full py-6`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              * Prices may vary based on program and age group. Contact us for exact pricing.
            </p>
            <p className="text-gray-600">
              Sibling discounts available. Ask about our enrollment specials!
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Questions About Pricing?"
        description="Schedule a tour and we'll discuss the best plan for your family's needs."
        primaryButton={{ label: 'Contact Us', href: '/contact' }}
        variant="outline"
      />
    </>
  )
}
```

---

### Pattern 5: Contact Form with Supabase

**File:** `src/app/contact/page.tsx`

```typescript
'use client'

import { Hero } from '@/components/shared/Hero'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const supabase = createClient()

    // Save to Supabase
    const { error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          created_at: new Date().toISOString(),
        },
      ])

    setIsSubmitting(false)

    if (!error) {
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }
  }

  return (
    <>
      <Hero
        title="Get in Touch"
        subtitle="Contact Us"
        description="We'd love to hear from you! Schedule a tour, ask questions, or learn more about enrollment."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Visit Us</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blush-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">123 Learning Lane<br />Your City, ST 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blush-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <a href="tel:5551234567" className="text-gray-600 hover:text-blush-500">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blush-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href="mailto:info@thisdaycare.com" className="text-gray-600 hover:text-blush-500">
                      info@thisdaycare.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blush-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 7:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcwMC4wIk4gNzPCsDU4JzQ4LjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                  
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                      <p className="text-gray-600">
                        We've received your message and will get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                          className="rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your childcare needs..."
                          rows={5}
                          className="rounded-lg"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blush-500 to-skyblue-500 hover:from-blush-600 hover:to-skyblue-600 text-white rounded-full py-6 text-lg"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
```

---

## 🗄️ Supabase Database Setup

### Create Tables in Supabase

Go to your Supabase dashboard → SQL Editor and run:

```sql
-- Contact Messages Table
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts
CREATE POLICY "Anyone can insert contact messages"
ON contact_messages FOR INSERT
TO public
WITH CHECK (true);

-- Create policy for authenticated users to read
CREATE POLICY "Authenticated users can read messages"
ON contact_messages FOR SELECT
TO authenticated
USING (true);
```

---

## 📱 Instagram Integration

**File:** `src/components/shared/InstagramFeed.tsx`

```typescript
'use client'

import { useEffect, useState } from 'react'
import { Instagram } from 'lucide-react'

export function InstagramFeed() {
  const [posts, setPosts] = useState([])

  // Use Instagram Basic Display API or Embedly
  // Or manually curate featured Instagram posts

  return (
    <section className="py-20 bg-gradient-to-br from-blush-50 to-skyblue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blush-500 to-skyblue-500 rounded-full mb-4">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-gray-600">@thisdaycare</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Map through Instagram posts */}
          {/* Or manually add curated posts */}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/thisdaycare"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blush-500 hover:text-blush-600 font-semibold"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
```

Add to homepage or any page!

---

## 🚀 Next Steps

### 1. Complete Remaining Pages
- Copy patterns above for About, Classes, Blog, Team, Gallery, Pricing, Contact
- Follow the Programs page as your CMS integration template
- Use the Homepage sections as component examples

### 2. Add More Sanity Schemas
For Classes (if different from Programs):
```typescript
// sanity/schemas/class.ts
export default {
  name: 'class',
  title: 'Class',
  type: 'document',
  fields: [
    // Similar to program schema
  ]
}
```

### 3. Test and Refine
- Add content in Sanity Studio
- Test all pages
- Verify responsive design
- Check all links

### 4. Deploy
```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

---

## 📚 Key Files Reference

- **Components:** `src/components/`
- **Pages:** `src/app/`
- **Sanity Queries:** `src/lib/sanity/queries.ts`
- **Sanity Schemas:** `sanity/schemas/`
- **Styles:** `src/app/globals.css`

---

## 💡 Pro Tips

1. **Consistency:** Use the same card hover effects across all pages
2. **Colors:** Stick to the theme colors (blush, skyblue, mint, warmbeige)
3. **Spacing:** Use py-20 for sections, mb-6 for headings
4. **Images:** Always include alt text for accessibility
5. **CTAs:** Every page should have at least one CTA to contact/book
6. **Mobile First:** Test on mobile devices throughout development

---

## 🎨 Design System Quick Reference

### Colors
- **Primary:** `blush-500` (#f65283)
- **Secondary:** `skyblue-500` (#38bdf8)
- **Accent:** `mint-500` (#5fe9d0)
- **Neutral:** `warmbeige-200` (#e8e0d3)

### Typography
- **Heading:** `text-3xl md:text-4xl font-bold text-gray-800`
- **Subheading:** `text-xl font-semibold text-gray-700`
- **Body:** `text-gray-600`

### Buttons
- **Primary:** `bg-gradient-to-r from-blush-500 to-skyblue-500`
- **Secondary:** `border-2 border-blush-500 text-blush-600`

### Cards
- **Default:** `rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2`

---

You now have everything you need to complete this beautiful daycare website! 🎉

