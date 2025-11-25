Here’s a detailed, CMS-ready data model in Markdown you can drop into `/docs/data-model.md` (or similar) in your repo.

---

# **This Daycare – Data Model**

## 1. Overview

This data model is designed for a flexible, multi-location daycare / preschool / Montessori website.
It supports:

* Single or multi-center setups
* Editable content via CMS
* Structured programs, staff, testimonials, galleries
* Lead capture (tours + contact)
* Future expansion (waitlists, blog, events)

---

## 2. Entity List

**Core Content**

1. `Site`
2. `Location`
3. `Program`
4. `AgeGroup`
5. `StaffMember`
6. `Testimonial`
7. `FacilityArea`
8. `GalleryImage`
9. `FAQ`
10. `PageSection` (optional structured content blocks)
11. `BlogPost` (optional)

**Interactions**

12. `TourRequest`
13. `ContactMessage`
14. `WaitlistEntry` (future)
15. `NewsletterSubscription`

**System / Settings**

16. `GlobalSettings`
17. `SEOConfig`
18. `NavigationItem`
19. `AdminUser` (for custom apps)

---

## 3. Core Entities

### 3.1 `Site`

Represents the brand-level site configuration (multi-location umbrella).

| Field            | Type                | Required | Notes                                         |
| ---------------- | ------------------- | -------- | --------------------------------------------- |
| `id`             | UUID / ID           | Yes      | Primary key                                   |
| `name`           | String              | Yes      | e.g., “This Daycare” or provider’s brand      |
| `slug`           | String              | Yes      | URL slug for main site (e.g., `this-daycare`) |
| `tagline`        | String              | No       | Short tagline for homepage                    |
| `primaryColor`   | String              | No       | Hex or theme token                            |
| `secondaryColor` | String              | No       | Hex or theme token                            |
| `logoUrl`        | String (URL)        | No       | Logo asset                                    |
| `faviconUrl`     | String (URL)        | No       | Browser favicon                               |
| `defaultSEOId`   | FK → `SEOConfig.id` | No       | Fallback SEO                                  |
| `createdAt`      | DateTime            | Yes      |                                               |
| `updatedAt`      | DateTime            | Yes      |                                               |

---

### 3.2 `Location`

Represents an individual daycare center / campus.

| Field                    | Type                | Required | Notes                                        |
| ------------------------ | ------------------- | -------- | -------------------------------------------- |
| `id`                     | UUID / ID           | Yes      | Primary key                                  |
| `siteId`                 | FK → `Site.id`      | Yes      | Parent site                                  |
| `name`                   | String              | Yes      | Location name                                |
| `slug`                   | String              | Yes      | Used in URL (e.g., `/locations/tulsa-north`) |
| `tagline`                | String              | No       | Localized tagline                            |
| `description`            | RichText            | No       | Location overview                            |
| `phone`                  | String              | Yes      | Display format                               |
| `email`                  | String              | Yes      | Contact email                                |
| `addressLine1`           | String              | Yes      | Street                                       |
| `addressLine2`           | String              | No       | Apt/Suite                                    |
| `city`                   | String              | Yes      |                                              |
| `state`                  | String              | Yes      |                                              |
| `postalCode`             | String              | Yes      |                                              |
| `country`                | String              | Yes      |                                              |
| `timezone`               | String              | No       | e.g., `America/Chicago`                      |
| `googleMapsUrl`          | String (URL)        | No       | Maps link                                    |
| `heroImageUrl`           | String (URL)        | No       | Primary hero image                           |
| `isAcceptingEnrollments` | Boolean             | Yes      | Display “Now Enrolling” badge                |
| `hoursOfOperationJson`   | JSON                | No       | Structured hours per weekday                 |
| `licensingInfo`          | String / RichText   | No       | License numbers, accreditation               |
| `safetySummary`          | RichText            | No       | Safety policies                              |
| `seoConfigId`            | FK → `SEOConfig.id` | No       | Location-specific SEO                        |
| `createdAt`              | DateTime            | Yes      |                                              |
| `updatedAt`              | DateTime            | Yes      |                                              |

---

### 3.3 `Program`

Educational and care programs offered (e.g., Infant, Toddler, Pre-K, Montessori).

| Field                 | Type                | Required | Notes                                                  |
| --------------------- | ------------------- | -------- | ------------------------------------------------------ |
| `id`                  | UUID / ID           | Yes      | Primary key                                            |
| `siteId`              | FK → `Site.id`      | Yes      | For global programs                                    |
| `locationId`          | FK → `Location.id`  | No       | If program varies per location                         |
| `name`                | String              | Yes      | e.g., “Toddler Program”                                |
| `slug`                | String              | Yes      | Used in URL                                            |
| `ageGroupId`          | FK → `AgeGroup.id`  | No       | Age mapping                                            |
| `description`         | RichText            | Yes      | Program overview                                       |
| `dailySchedule`       | RichText / JSON     | No       | Key times/activities                                   |
| `learningFocus`       | String[]            | No       | e.g., `["Social-emotional", "Language", "Fine motor"]` |
| `teacherToChildRatio` | String              | No       | e.g., `1:4`                                            |
| `hoursAvailable`      | String              | No       | Full-time / part-time                                  |
| `tuitionSummary`      | String              | No       | High-level pricing summary only                        |
| `heroImageUrl`        | String (URL)        | No       | Hero image for program page                            |
| `iconUrl`             | String (URL)        | No       | Small icon for cards                                   |
| `seoConfigId`         | FK → `SEOConfig.id` | No       | Program SEO                                            |
| `isFeatured`          | Boolean             | Yes      | Show on homepage/cards                                 |
| `displayOrder`        | Integer             | No       | Sort order                                             |
| `createdAt`           | DateTime            | Yes      |                                                        |
| `updatedAt`           | DateTime            | Yes      |                                                        |

---

### 3.4 `AgeGroup`

Standardized age ranges (used by `Program`).

| Field          | Type      | Required | Notes                        |
| -------------- | --------- | -------- | ---------------------------- |
| `id`           | UUID / ID | Yes      | Primary key                  |
| `name`         | String    | Yes      | “Infant”, “Toddler”, “Pre-K” |
| `minAgeMonths` | Integer   | Yes      | Minimum age in months        |
| `maxAgeMonths` | Integer   | Yes      | Maximum age in months        |
| `description`  | String    | No       | Short summary                |
| `createdAt`    | DateTime  | Yes      |                              |
| `updatedAt`    | DateTime  | Yes      |                              |

---

### 3.5 `StaffMember`

Teachers, assistants, administrators, etc.

| Field                         | Type                | Required | Notes                              |
| ----------------------------- | ------------------- | -------- | ---------------------------------- |
| `id`                          | UUID / ID           | Yes      | Primary key                        |
| `siteId`                      | FK → `Site.id`      | Yes      | Brand-level ownership              |
| `locationId`                  | FK → `Location.id`  | No       | If assigned to a specific location |
| `firstName`                   | String              | Yes      |                                    |
| `lastName`                    | String              | Yes      |                                    |
| `role`                        | String              | Yes      | “Lead Teacher”, “Director”         |
| `slug`                        | String              | Yes      | For profile pages                  |
| `bio`                         | RichText            | Yes      | Professional overview              |
| `credentials`                 | String[]            | No       | Certifications, degrees            |
| `experienceYears`             | Integer             | No       |                                    |
| `photoUrl`                    | String (URL)        | No       | Profile photo                      |
| `favoriteQuote`               | String              | No       | Optional personal quote            |
| `whyILoveWorkingWithChildren` | RichText            | No       | Humanizing field                   |
| `programIds`                  | FK[] → `Program.id` | No       | Programs they teach                |
| `isFeatured`                  | Boolean             | Yes      | Show on homepage/staff highlights  |
| `displayOrder`                | Integer             | No       |                                    |
| `createdAt`                   | DateTime            | Yes      |                                    |
| `updatedAt`                   | DateTime            | Yes      |                                    |

---

### 3.6 `Testimonial`

Reviews / quotes from parents.

| Field            | Type               | Required | Notes                       |
| ---------------- | ------------------ | -------- | --------------------------- |
| `id`             | UUID / ID          | Yes      | Primary key                 |
| `siteId`         | FK → `Site.id`     | Yes      |                             |
| `locationId`     | FK → `Location.id` | No       |                             |
| `parentName`     | String             | Yes      | Display name or initial     |
| `childFirstName` | String             | No       | Optional                    |
| `quote`          | RichText           | Yes      | Main testimonial            |
| `rating`         | Integer            | No       | 1–5 star rating             |
| `source`         | String             | No       | e.g., “Google Review”       |
| `programId`      | FK → `Program.id`  | No       | If tied to specific program |
| `isFeatured`     | Boolean            | Yes      | Homepage carousel flag      |
| `displayOrder`   | Integer            | No       |                             |
| `createdAt`      | DateTime           | Yes      |                             |
| `updatedAt`      | DateTime           | Yes      |                             |

---

### 3.7 `FacilityArea`

Defines sections of the physical space (used for About/Gallery).

| Field          | Type               | Required | Notes                            |
| -------------- | ------------------ | -------- | -------------------------------- |
| `id`           | UUID / ID          | Yes      | Primary key                      |
| `locationId`   | FK → `Location.id` | Yes      |                                  |
| `name`         | String             | Yes      | “Outdoor Playground”, “Nap Room” |
| `description`  | RichText           | No       |                                  |
| `heroImageUrl` | String (URL)       | No       | Main image                       |
| `displayOrder` | Integer            | No       |                                  |
| `createdAt`    | DateTime           | Yes      |                                  |
| `updatedAt`    | DateTime           | Yes      |                                  |

---

### 3.8 `GalleryImage`

Photos used across pages, optionally linked to facility/program.

| Field            | Type                   | Required | Notes                                                        |
| ---------------- | ---------------------- | -------- | ------------------------------------------------------------ |
| `id`             | UUID / ID              | Yes      | Primary key                                                  |
| `siteId`         | FK → `Site.id`         | Yes      |                                                              |
| `locationId`     | FK → `Location.id`     | No       |                                                              |
| `facilityAreaId` | FK → `FacilityArea.id` | No       |                                                              |
| `programId`      | FK → `Program.id`      | No       |                                                              |
| `url`            | String (URL)           | Yes      | Image path                                                   |
| `altText`        | String                 | Yes      | Accessibility                                                |
| `caption`        | String                 | No       | Display caption                                              |
| `category`       | Enum                   | No       | `["Playtime","Classroom","Outdoor","Event","Meals","Staff"]` |
| `isFeatured`     | Boolean                | Yes      | For homepage/hero                                            |
| `displayOrder`   | Integer                | No       |                                                              |
| `createdAt`      | DateTime               | Yes      |                                                              |
| `updatedAt`      | DateTime               | Yes      |                                                              |

---

### 3.9 `FAQ`

Frequently asked questions shown on FAQ or specific pages.

| Field          | Type               | Required | Notes                                            |
| -------------- | ------------------ | -------- | ------------------------------------------------ |
| `id`           | UUID / ID          | Yes      | Primary key                                      |
| `siteId`       | FK → `Site.id`     | Yes      |                                                  |
| `locationId`   | FK → `Location.id` | No       |                                                  |
| `question`     | String             | Yes      |                                                  |
| `answer`       | RichText           | Yes      |                                                  |
| `category`     | String             | No       | e.g., “Enrollment”, “Tuition”, “Health & Safety” |
| `displayOrder` | Integer            | No       |                                                  |
| `createdAt`    | DateTime           | Yes      |                                                  |
| `updatedAt`    | DateTime           | Yes      |                                                  |

---

### 3.10 `PageSection` (Optional but Powerful)

Reusable, structured content blocks for pages like Home, About, Programs.

| Field          | Type               | Required | Notes                                        |
| -------------- | ------------------ | -------- | -------------------------------------------- |
| `id`           | UUID / ID          | Yes      | Primary key                                  |
| `siteId`       | FK → `Site.id`     | Yes      |                                              |
| `locationId`   | FK → `Location.id` | No       | If localized                                 |
| `pageSlug`     | String             | Yes      | e.g., `home`, `about`, `programs`            |
| `sectionKey`   | String             | Yes      | e.g., `hero`, `trust-badges`, `testimonials` |
| `title`        | String             | No       | Section heading                              |
| `subtitle`     | String             | No       |                                              |
| `content`      | RichText / JSON    | No       | Body content                                 |
| `mediaUrls`    | String[]           | No       | Image or icon refs                           |
| `ctaLabel`     | String             | No       | e.g., “Book a Tour”                          |
| `ctaUrl`       | String             | No       | Target path                                  |
| `displayOrder` | Integer            | Yes      | Layout ordering                              |
| `isVisible`    | Boolean            | Yes      | Toggle section on/off                        |
| `createdAt`    | DateTime           | Yes      |                                              |
| `updatedAt`    | DateTime           | Yes      |                                              |

---

### 3.11 `BlogPost` (Optional)

For content marketing and SEO.

| Field           | Type                | Required | Notes         |
| --------------- | ------------------- | -------- | ------------- |
| `id`            | UUID / ID           | Yes      | Primary key   |
| `siteId`        | FK → `Site.id`      | Yes      |               |
| `slug`          | String              | Yes      |               |
| `title`         | String              | Yes      |               |
| `excerpt`       | String              | Yes      | Short preview |
| `content`       | RichText            | Yes      | Full article  |
| `coverImageUrl` | String (URL)        | No       |               |
| `authorName`    | String              | No       |               |
| `publishedAt`   | DateTime            | No       |               |
| `seoConfigId`   | FK → `SEOConfig.id` | No       |               |
| `isPublished`   | Boolean             | Yes      |               |
| `createdAt`     | DateTime            | Yes      |               |
| `updatedAt`     | DateTime            | Yes      |               |

---

## 4. Interaction Entities

### 4.1 `TourRequest`

Form submissions for booking tours.

| Field                | Type               | Required | Notes                                                     |
| -------------------- | ------------------ | -------- | --------------------------------------------------------- |
| `id`                 | UUID / ID          | Yes      | Primary key                                               |
| `siteId`             | FK → `Site.id`     | Yes      |                                                           |
| `locationId`         | FK → `Location.id` | Yes      |                                                           |
| `parentName`         | String             | Yes      |                                                           |
| `childName`          | String             | No       |                                                           |
| `childAgeMonths`     | Integer            | No       |                                                           |
| `email`              | String             | Yes      |                                                           |
| `phone`              | String             | Yes      |                                                           |
| `preferredProgramId` | FK → `Program.id`  | No       |                                                           |
| `preferredTourDate`  | Date               | No       | Desired date                                              |
| `preferredTimeSlot`  | String             | No       | e.g., “Morning”, “Afternoon”                              |
| `message`            | RichText           | No       | Additional notes                                          |
| `status`             | Enum               | Yes      | `["New","Contacted","Scheduled","Completed","Cancelled"]` |
| `source`             | String             | No       | e.g., “Homepage CTA”, “Programs page”                     |
| `createdAt`          | DateTime           | Yes      |                                                           |
| `updatedAt`          | DateTime           | Yes      |                                                           |

---

### 4.2 `ContactMessage`

General contact form.

| Field        | Type               | Required | Notes                                         |
| ------------ | ------------------ | -------- | --------------------------------------------- |
| `id`         | UUID / ID          | Yes      | Primary key                                   |
| `siteId`     | FK → `Site.id`     | Yes      |                                               |
| `locationId` | FK → `Location.id` | No       |                                               |
| `name`       | String             | Yes      |                                               |
| `email`      | String             | Yes      |                                               |
| `phone`      | String             | No       |                                               |
| `subject`    | String             | No       |                                               |
| `message`    | RichText           | Yes      |                                               |
| `category`   | String             | No       | e.g., “General”, “Enrollment”, “Careers”      |
| `createdAt`  | DateTime           | Yes      |                                               |
| `handledAt`  | DateTime           | No       | When someone responds                         |
| `status`     | Enum               | Yes      | `["New","In Progress","Resolved","Archived"]` |

---

### 4.3 `WaitlistEntry` (Future)

Optional for enrollment waitlist.

| Field              | Type               | Required | Notes                                                    |
| ------------------ | ------------------ | -------- | -------------------------------------------------------- |
| `id`               | UUID / ID          | Yes      | Primary key                                              |
| `siteId`           | FK → `Site.id`     | Yes      |                                                          |
| `locationId`       | FK → `Location.id` | Yes      |                                                          |
| `programId`        | FK → `Program.id`  | Yes      |                                                          |
| `parentName`       | String             | Yes      |                                                          |
| `email`            | String             | Yes      |                                                          |
| `phone`            | String             | No       |                                                          |
| `childName`        | String             | No       |                                                          |
| `childBirthdate`   | Date               | No       |                                                          |
| `desiredStartDate` | Date               | No       |                                                          |
| `notes`            | RichText           | No       |                                                          |
| `status`           | Enum               | Yes      | `["New","Contacted","Accepted","Declined","Waitlisted"]` |
| `createdAt`        | DateTime           | Yes      |                                                          |
| `updatedAt`        | DateTime           | Yes      |                                                          |

---

### 4.4 `NewsletterSubscription`

Email capture for updates / marketing.

| Field        | Type               | Required | Notes                       |
| ------------ | ------------------ | -------- | --------------------------- |
| `id`         | UUID / ID          | Yes      | Primary key                 |
| `siteId`     | FK → `Site.id`     | Yes      |                             |
| `locationId` | FK → `Location.id` | No       |                             |
| `email`      | String             | Yes      | Unique per site             |
| `source`     | String             | No       | “Footer signup”, “Blog CTA” |
| `consent`    | Boolean            | Yes      | Explicit marketing consent  |
| `createdAt`  | DateTime           | Yes      |                             |

---

## 5. System / Settings Entities

### 5.1 `GlobalSettings`

Site-wide configuration.

| Field                 | Type           | Required | Notes                               |
| --------------------- | -------------- | -------- | ----------------------------------- |
| `id`                  | UUID / ID      | Yes      | Primary key (usually single record) |
| `siteId`              | FK → `Site.id` | Yes      |                                     |
| `primaryContactEmail` | String         | Yes      | Fallback email address              |
| `primaryContactPhone` | String         | No       |                                     |
| `footerText`          | RichText       | No       | Copyright, links                    |
| `socialFacebookUrl`   | String (URL)   | No       |                                     |
| `socialInstagramUrl`  | String (URL)   | No       |                                     |
| `socialTikTokUrl`     | String (URL)   | No       |                                     |
| `analyticsTrackingId` | String         | No       | GA, etc.                            |
| `cookieBannerEnabled` | Boolean        | Yes      |                                     |
| `createdAt`           | DateTime       | Yes      |                                     |
| `updatedAt`           | DateTime       | Yes      |                                     |

---

### 5.2 `SEOConfig`

Reusable SEO metadata for pages/entities.

| Field             | Type         | Required | Notes         |
| ----------------- | ------------ | -------- | ------------- |
| `id`              | UUID / ID    | Yes      | Primary key   |
| `metaTitle`       | String       | Yes      | 50–60 chars   |
| `metaDescription` | String       | Yes      | 120–160 chars |
| `canonicalUrl`    | String (URL) | No       |               |
| `ogTitle`         | String       | No       | Open Graph    |
| `ogDescription`   | String       | No       |               |
| `ogImageUrl`      | String (URL) | No       |               |
| `noIndex`         | Boolean      | Yes      |               |
| `createdAt`       | DateTime     | Yes      |               |
| `updatedAt`       | DateTime     | Yes      |               |

---

### 5.3 `NavigationItem`

Top nav, footer nav, and mobile nav structure.

| Field          | Type                     | Required | Notes                               |
| -------------- | ------------------------ | -------- | ----------------------------------- |
| `id`           | UUID / ID                | Yes      | Primary key                         |
| `siteId`       | FK → `Site.id`           | Yes      |                                     |
| `label`        | String                   | Yes      | Display text                        |
| `url`          | String                   | Yes      | Internal path or full URL           |
| `position`     | Enum                     | Yes      | `["header","footer","mobile-only"]` |
| `parentId`     | FK → `NavigationItem.id` | No       | For dropdowns                       |
| `displayOrder` | Integer                  | Yes      |                                     |
| `isVisible`    | Boolean                  | Yes      |                                     |
| `createdAt`    | DateTime                 | Yes      |                                     |
| `updatedAt`    | DateTime                 | Yes      |                                     |

---

### 5.4 `AdminUser` (For Custom App Backends)

If you build a custom admin beyond Webflow/Wix/etc.

| Field          | Type           | Required | Notes                                 |
| -------------- | -------------- | -------- | ------------------------------------- |
| `id`           | UUID / ID      | Yes      | Primary key                           |
| `email`        | String         | Yes      | Unique                                |
| `passwordHash` | String         | Yes      | Hashed                                |
| `name`         | String         | No       |                                       |
| `role`         | Enum           | Yes      | `["Owner","Admin","Editor","Viewer"]` |
| `siteId`       | FK → `Site.id` | Yes      |                                       |
| `createdAt`    | DateTime       | Yes      |                                       |
| `updatedAt`    | DateTime       | Yes      |                                       |

---

## 6. Relationships (High-Level)

* **Site**

  * 1 → N `Location`
  * 1 → N `Program`
  * 1 → N `StaffMember`
  * 1 → N `Testimonial`
  * 1 → N `GalleryImage`
  * 1 → N `FAQ`
  * 1 → N `BlogPost`
  * 1 → N `TourRequest`
  * 1 → N `ContactMessage`

* **Location**

  * 1 → N `Program` (optional, if localized)
  * 1 → N `StaffMember`
  * 1 → N `Testimonial`
  * 1 → N `FacilityArea`
  * 1 → N `GalleryImage`
  * 1 → N `TourRequest`
  * 1 → N `ContactMessage`

* **Program**

  * N → 1 `Site`
  * N → 1 `Location` (optional)
  * N → 1 `AgeGroup`
  * N → N `StaffMember` (through `programIds`)

---

## 7. Minimal MVP Subset

If you want a lean v1, you can implement only:

* `Site`
* `Location`
* `Program`
* `StaffMember`
* `Testimonial`
* `GalleryImage`
* `TourRequest`
* `ContactMessage`
* `SEOConfig`
* `GlobalSettings`
* `NavigationItem`

---
