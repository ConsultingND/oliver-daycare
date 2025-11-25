Here is a **detailed, comprehensive backlog** written in clean Markdown—including **Epics, User Stories, Acceptance Criteria, and Dependencies**.
You can paste this directly into GitHub as `/docs/backlog.md` or `/project/backlog.md`.

---

# **This Daycare – Product Backlog**

A complete backlog covering MVP and post-MVP functionality for a daycare, preschool, and Montessori website template.

---

# **Epic 1: Marketing Website Foundation**

Foundational pages, structure, and user experience.

---

## **User Story 1.1 – Homepage Layout**

**As a** parent
**I want** a welcoming homepage
**So that** I can quickly understand the daycare’s values and offerings.

**Acceptance Criteria**

* Hero section with headline, subtext, engaging imagery.
* CTA: “Book a Tour” visible above the fold.
* Brief overview of programs.
* 3–5 featured testimonials.
* Mobile-first, responsive layout.

**Dependencies**

* Program data model
* Testimonials loaded into CMS

---

## **User Story 1.2 – Navigation & Header**

**As a** visitor
**I want** clear navigation
**So that** I can quickly find key information.

**Acceptance Criteria**

* Top-level nav items: Home, Programs, About, Staff, Testimonials, Contact
* Sticky header on mobile optional
* Active link states
* Dropdown support for multi-location

**Dependencies**

* NavigationItem data model

---

## **User Story 1.3 – Footer**

**As a** user
**I want** easy access to essential contact info
**So that** I can take action quickly.

**Acceptance Criteria**

* Contact info
* Social icons
* Quick links
* Newsletter signup

---

## **User Story 1.4 – SEO & Meta Framework**

**As a** site admin
**I want** control over SEO metadata
**So that** each page can be optimized for search.

**Acceptance Criteria**

* Per-page: title, description, OG image, noIndex toggle
* Dynamic metadata injection
* Default fallback SEO

---

---

# **Epic 2: Programs & Curriculum**

---

## **User Story 2.1 – Programs List Page**

**As a** parent
**I want** to browse available programs
**So that** I can determine if the daycare fits my child’s age.

**Acceptance Criteria**

* Program name, age range, summary
* Icons or imagery
* “Learn More” CTA to detail page

---

## **User Story 2.2 – Program Detail Page**

**As a** parent
**I want** detailed curriculum info
**So that** I feel confident in the educational structure.

**Acceptance Criteria**

* Full description
* Daily schedule
* Learning focus
* Teacher-to-child ratio
* Related gallery images
* CTA: “Book a Tour for This Program”

**Dependencies**

* Program entity
* AgeGroup entity
* GalleryImages linked to program

---

---

# **Epic 3: Locations (Optional for Multi-Site)**

---

## **User Story 3.1 – Location Directory**

**As a** parent
**I want** to see all available centers
**So that** I can choose the closest one.

**Acceptance Criteria**

* Grid of locations
* Name, address, hours
* CTA: “View Location”

---

## **User Story 3.2 – Location Detail Page**

**As a** parent
**I want** to view everything about one center
**So that** I can decide if it meets my needs.

**Acceptance Criteria**

* Overview
* Staff list
* Programs offered
* Gallery
* Testimonials filtered by location
* Map integration

---

---

# **Epic 4: Staff & Leadership**

---

## **User Story 4.1 – Staff Directory Page**

**As a** parent
**I want** to see who teaches and cares for the children
**So that** I can trust staff qualifications.

**Acceptance Criteria**

* Staff cards
* Photo, name, role
* Ability to filter/sort (optional)

---

## **User Story 4.2 – Staff Profile Page**

**As a** parent
**I want** to read more about an individual staff member
**So that** I can feel comfortable with the caregivers.

**Acceptance Criteria**

* Bio
* Credentials
* Programs they teach
* “Why I love working with children”

**Dependencies**

* StaffMember model
* Program relationships

---

---

# **Epic 5: Testimonials & Social Proof**

---

## **User Story 5.1 – Testimonials Page**

**As a** visitor
**I want** to read reviews from other families
**So that** I can gauge the center’s reputation.

**Acceptance Criteria**

* List of testimonials
* Parent name (or anonymized)
* Star rating (optional)
* Category filters (program/location)

---

## **User Story 5.2 – Featured Testimonials on Homepage**

**As a** visitor
**I want** quick access to top reviews
**So that** I build trust immediately.

**Acceptance Criteria**

* Carousel or rotating quotes
* Pulls from `isFeatured = true`

---

---

# **Epic 6: Gallery & Facilities**

---

## **User Story 6.1 – Gallery Overview Page**

**As a** parent
**I want** to see photos of the daycare
**So that** I can judge its cleanliness and environment.

**Acceptance Criteria**

* Grid layout with categories
* Lightbox for enlarged view
* Alt text on all images

---

## **User Story 6.2 – Facility Areas**

**As a** parent
**I want** information about specific areas (classrooms, playgrounds)
**So that** I understand where my child will spend their day.

**Acceptance Criteria**

* Facility pages with photos + description
* Optional video embeds

---

---

# **Epic 7: Contact, Lead Capture & Tour Booking**

---

## **User Story 7.1 – Contact Form**

**As a** parent
**I want** to send general inquiries
**So that** I can get more information.

**Acceptance Criteria**

* Name, email, phone
* Message field
* Success confirmation
* Email notification to admin

---

## **User Story 7.2 – Book a Tour Form**

**As a** parent
**I want** to schedule a center visit
**So that** I can evaluate the daycare in person.

**Acceptance Criteria**

* Parent + child info
* Preferred date/time
* Program selection
* Auto-response + admin notification

---

## **User Story 7.3 – Tour Management (Admin-Side Handling)**

**As an** admin
**I want** tour requests stored
**So that** I can manage status.

**Acceptance Criteria**

* All requests stored in CMS / DB
* Status: New → Contacted → Scheduled → Completed
* Filter by location
* Optional export

---

---

# **Epic 8: CMS Management & Content Editing**

(The backbone for admin usability)

---

## **User Story 8.1 – CMS Program Editing**

**As an** admin
**I want** to edit programs easily
**So that** program updates appear instantly.

**Acceptance Criteria**

* CRUD operations
* Rich text fields
* Image uploads
* Preview before publishing

---

## **User Story 8.2 – CMS Staff Editing**

**As an** admin
**I want** to update staff bios
**So that** the website always reflects current team members.

---

## **User Story 8.3 – CMS Testimonials Management**

**As an** admin
**I want** to add or edit testimonials
**So that** I can publish new feedback.

---

## **User Story 8.4 – Global Settings Panel**

**As an** admin
**I want** to manage brand-level settings
**So that** I can update the site’s look and feel.

**Acceptance Criteria**

* Global colors
* Logo
* Social media links
* Footer text
* Contact info

---

---

# **Epic 9: Blog / Articles (Optional but high-ROI for SEO)**

---

## **User Story 9.1 – Blog Listing Page**

**As a** parent
**I want** helpful articles
**So that** I can learn and engage with the brand.

---

## **User Story 9.2 – Blog Detail Page**

**As a** reader
**I want** well-formatted posts
**So that** I can easily consume content.

---

---

# **Epic 10: Accessibility & Compliance**

---

## **User Story 10.1 – ADA Compliance**

**As a** visitor with accessibility needs
**I want** a usable website
**So that** I can access all content.

**Acceptance Criteria**

* Alt text required
* Color contrast meets WCAG AA
* Keyboard navigable
* ARIA labels included

---

## **User Story 10.2 – Compliance Badges**

**As a** parent
**I want** to see licensing/accreditation
**So that** I feel confident in the center's legitimacy.

---

---

# **Epic 11: Performance & Technical Optimization**

---

## **User Story 11.1 – Image Optimization**

**As a** user
**I want** fast-loading images
**So that** the site feels smooth.

---

## **User Story 11.2 – Mobile Optimization**

**As a** mobile-first user
**I want** clean layouts on small screens
**So that** navigation feels natural.

---

## **User Story 11.3 – SEO Performance**

**As a** business owner
**I want** search engines to rank my daycare
**So that** new families can discover us.

---

---

# **Epic 12: Multi-Location Scaling (Future)**

---

## **User Story 12.1 – Multi-Location Navigation**

## **User Story 12.2 – Location-Specific Content Filters**

## **User Story 12.3 – Location Admin Permissions**

## **User Story 12.4 – Multi-Location Tour Routing**

---

---

# **Epic 13: Parent Portal (Future Expansion)**

---

## **User Story 13.1 – Secure Login for Parents**

## **User Story 13.2 – Downloadable Forms**

## **User Story 13.3 – Daily Reports or Photos**

## **User Story 13.4 – Tuition Payment Links**

---

---

# **Epic 14: Enrollment Waitlist (Future)**

---

## **User Story 14.1 – Add to Waitlist Form**

## **User Story 14.2 – Admin View of Waitlist**

## **User Story 14.3 – Status Updates to Parents**

---

---

# **Epic 15: Analytics & Insights**

---

## **User Story 15.1 – Track Conversion Events**

**As a** business owner
**I want** to understand the user journey
**So that** I can optimize tour bookings.

---

## **User Story 15.2 – Heatmaps (Optional)**

Optional Hotjar integration.

---

---

# **Epic 16: Hosting, Deployment, and DevOps**

---

## **User Story 16.1 – CI/CD Pipeline**

## **User Story 16.2 – DNS + SSL Setup**

## **User Story 16.3 – Staging + Production Environments**

---

---

# **Epic 17: Branding & Visual Design**

---

## **User Story 17.1 – Soft Color Palette System**

## **User Story 17.2 – Iconography Library**

## **User Story 17.3 – Component Library (UI System)**

---

# **Epic 18: Templates & Presets (If Selling the Template)**

---

## **User Story 18.1 – Multiple Homepage Variants**

## **User Story 18.2 – Program Page Variants**

## **User Story 18.3 – Staff Page Variants**

## **User Story 18.4 – Importable CMS Collections**

---

---

# **Epic 19: Documentation & Support**

---

## **User Story 19.1 – Admin Editing Guide**

## **User Story 19.2 – Setup Instructions**

## **User Story 19.3 – Troubleshooting Guide**

---

---
