/**
 * GROQ queries for fetching data from Sanity CMS
 */

// Fetch all programs
export const programsQuery = `*[_type == "program"] | order(displayOrder asc) {
  _id,
  name,
  slug,
  ageRange,
  description,
  dailySchedule,
  learningFocus,
  teacherToChildRatio,
  hoursAvailable,
  tuitionSummary,
  "heroImage": heroImage.asset->url,
  "icon": icon.asset->url,
  isFeatured,
  displayOrder
}`

// Fetch single program by slug
export const programBySlugQuery = `*[_type == "program" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  ageRange,
  description,
  dailySchedule,
  learningFocus,
  teacherToChildRatio,
  hoursAvailable,
  tuitionSummary,
  "heroImage": heroImage.asset->url,
  "icon": icon.asset->url,
  isFeatured,
  displayOrder
}`

// Fetch all staff members
export const staffQuery = `*[_type == "staffMember"] | order(displayOrder asc) {
  _id,
  firstName,
  lastName,
  role,
  slug,
  "photo": photo.asset->url,
  bio,
  credentials,
  experienceYears,
  favoriteQuote,
  whyILoveWorkingWithChildren,
  "programs": programs[]->name,
  isFeatured,
  displayOrder
}`

// Fetch single staff member by slug
export const staffBySlugQuery = `*[_type == "staffMember" && slug.current == $slug][0] {
  _id,
  firstName,
  lastName,
  role,
  slug,
  "photo": photo.asset->url,
  bio,
  credentials,
  experienceYears,
  favoriteQuote,
  whyILoveWorkingWithChildren,
  "programs": programs[]->{
    name,
    slug
  },
  isFeatured,
  displayOrder
}`

// Fetch featured testimonials
export const featuredTestimonialsQuery = `*[_type == "testimonial" && isFeatured == true] | order(displayOrder asc) {
  _id,
  parentName,
  childFirstName,
  quote,
  rating,
  source,
  "program": program->name,
  "location": location->name
}`

// Fetch all testimonials
export const testimonialsQuery = `*[_type == "testimonial"] | order(displayOrder asc) {
  _id,
  parentName,
  childFirstName,
  quote,
  rating,
  source,
  "program": program->name,
  "location": location->name,
  isFeatured
}`

// Fetch gallery images by category
export const galleryImagesByCategoryQuery = `*[_type == "galleryImage" && category == $category] | order(displayOrder asc) {
  _id,
  "image": image.asset->url,
  altText,
  caption,
  category,
  isFeatured
}`

// Fetch all gallery images
export const galleryImagesQuery = `*[_type == "galleryImage"] | order(displayOrder asc) {
  _id,
  "image": image.asset->url,
  altText,
  caption,
  category,
  "program": program->name,
  "location": location->name,
  isFeatured
}`

// Fetch FAQs by category
export const faqsByCategoryQuery = `*[_type == "faq" && category == $category] | order(displayOrder asc) {
  _id,
  question,
  answer,
  category
}`

// Fetch all FAQs
export const faqsQuery = `*[_type == "faq"] | order(displayOrder asc) {
  _id,
  question,
  answer,
  category
}`

// Fetch site settings
export const siteQuery = `*[_type == "site"][0] {
  _id,
  name,
  slug,
  tagline,
  primaryColor,
  secondaryColor,
  "logo": logo.asset->url,
  "favicon": favicon.asset->url
}`

// Fetch all locations
export const locationsQuery = `*[_type == "location"] {
  _id,
  name,
  slug,
  tagline,
  description,
  phone,
  email,
  address,
  googleMapsUrl,
  "heroImage": heroImage.asset->url,
  isAcceptingEnrollments,
  hoursOfOperation,
  licensingInfo
}`

// Fetch single location by slug
export const locationBySlugQuery = `*[_type == "location" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  tagline,
  description,
  phone,
  email,
  address,
  googleMapsUrl,
  "heroImage": heroImage.asset->url,
  isAcceptingEnrollments,
  hoursOfOperation,
  licensingInfo
}`



