# 🎨 Sanity Studio Guide - Oliver Daycare

## ✅ Sanity Studio is Now Set Up!

Your content management system is ready to use.

---

## 🚀 Accessing Sanity Studio

### Local Development
Open your browser and go to:
```
http://localhost:3000/studio
```

### What You'll See
- A professional admin interface
- 7 content types ready to use
- Real-time content editing
- Image upload capabilities
- User-friendly forms

---

## 📊 Your Content Types (Schemas)

### 1. 🏢 **Site**
**Purpose:** Brand-level configuration  
**Use for:** Logo, tagline, primary colors, site name

**Fields:**
- Site Name
- Slug
- Tagline
- Primary Color (hex code)
- Secondary Color (hex code)
- Logo (image upload)
- Favicon (image upload)

**Example:** Set your daycare's name, upload logo, choose brand colors

---

### 2. 📍 **Location**
**Purpose:** Individual daycare centers  
**Use for:** Multiple locations, addresses, contact info

**Fields:**
- Location Name
- Slug (URL-friendly name)
- Tagline
- Description
- Phone
- Email
- Address (street, city, state, zip)
- Google Maps URL
- Hero Image
- Accepting Enrollments (yes/no)
- Hours of Operation (by day)
- Licensing Information

**Example:** "Tulsa North Location" with address, hours, and contact details

---

### 3. 📚 **Program**
**Purpose:** Educational programs offered  
**Use for:** Infant care, toddler, preschool, pre-K programs

**Fields:**
- Program Name (e.g., "Infant Program")
- Slug
- Age Range (e.g., "6 weeks - 12 months")
- Description (rich text)
- Daily Schedule (rich text)
- Learning Focus Areas (tags)
- Teacher-to-Child Ratio (e.g., "1:4")
- Hours Available (full-time, part-time)
- Tuition Summary
- Hero Image
- Icon (small image for cards)
- Featured (show on homepage)
- Display Order (sorting)

**Example:** Toddler Program for ages 12-24 months with daily schedule

---

### 4. 👥 **Staff Member**
**Purpose:** Teachers and staff profiles  
**Use for:** Building trust, showcasing qualifications

**Fields:**
- First Name
- Last Name
- Role/Title (e.g., "Lead Teacher - Toddler Program")
- Slug
- Photo (headshot)
- Bio (rich text)
- Credentials & Certifications (list)
- Years of Experience
- Favorite Quote
- "Why I Love Working with Children"
- Programs (link to Program types)
- Featured (show on homepage)
- Display Order

**Example:** Sarah Johnson, Lead Teacher with 10 years experience, CPR certified

---

### 5. ⭐ **Testimonial**
**Purpose:** Parent reviews and feedback  
**Use for:** Building trust, social proof

**Fields:**
- Parent Name (or "Parent of [Child]")
- Child First Name (optional)
- Quote (the testimonial text)
- Rating (1-5 stars)
- Source (e.g., "Google Review", "Facebook")
- Program (linked)
- Location (linked)
- Featured (show on homepage carousel)
- Display Order

**Example:** "Best daycare in Tulsa! My daughter loves her teachers." - Sarah M. ⭐⭐⭐⭐⭐

---

### 6. 🖼️ **Gallery Image**
**Purpose:** Photo gallery  
**Use for:** Showcasing facility, activities, classrooms

**Fields:**
- Image (upload)
- Alt Text (required for accessibility)
- Caption (optional)
- Category:
  - Playtime
  - Classroom
  - Outdoor
  - Arts & Crafts
  - Special Events
  - Meals
  - Staff
- Related Program (optional)
- Location (optional)
- Featured (show on homepage)
- Display Order

**Example:** Outdoor playground photo with caption "Our new climbing structure"

---

### 7. ❓ **FAQ**
**Purpose:** Frequently Asked Questions  
**Use for:** Answering common parent questions

**Fields:**
- Question
- Answer (rich text)
- Category:
  - Enrollment
  - Tuition & Payment
  - Health & Safety
  - Daily Operations
  - Curriculum
  - General
- Display Order

**Example:** "What are your hours of operation?" - "Monday-Friday, 7am-6pm"

---

## 🎯 Getting Started: Your First Steps

### Step 1: Create Site Settings (5 minutes)
1. Go to http://localhost:3000/studio
2. Click "Site" in the left sidebar
3. Click "Create new Site document"
4. Fill in:
   - Name: "Oliver Daycare" (or your daycare name)
   - Slug: Click "Generate"
   - Tagline: "Where Every Child Thrives"
   - Upload your logo
5. Click "Publish" (top right)

### Step 2: Add Your First Location (10 minutes)
1. Click "Location" in sidebar
2. Click "Create new Location"
3. Fill in all fields:
   - Name: Your location name
   - Contact info
   - Address
   - Hours of operation
4. Upload a hero image (facility exterior)
5. Click "Publish"

### Step 3: Create Programs (20 minutes)
1. Click "Program" in sidebar
2. Create each program:
   - Infant Program (0-12 months)
   - Toddler Program (12-24 months)
   - Preschool (2-3 years)
   - Pre-K (4-5 years)
3. For each program:
   - Write description
   - Add daily schedule
   - Set teacher ratio
   - Upload hero image
   - Check "Featured" for homepage display
4. Click "Publish" for each

### Step 4: Add Staff Members (15 minutes per staff)
1. Click "Staff Member" in sidebar
2. Add each teacher/staff:
   - Upload professional photo
   - Write bio (2-3 paragraphs)
   - List credentials
   - Add personal quote
   - Link to programs they teach
   - Check "Featured" for key staff
3. Click "Publish"

### Step 5: Add Testimonials (5 minutes each)
1. Click "Testimonial" in sidebar
2. Add parent reviews:
   - Parent name (can use "Parent of Emma" if private)
   - Child's first name (optional)
   - Quote (2-5 sentences)
   - Rating (1-5 stars)
   - Check "Featured" for best reviews
3. Click "Publish"

### Step 6: Upload Gallery Images (2 minutes per photo)
1. Click "Gallery Image" in sidebar
2. Upload photos:
   - Drag and drop images
   - Add alt text (describe the image)
   - Add caption
   - Select category
   - Check "Featured" for hero images
3. Click "Publish"

### Step 7: Add FAQs (3 minutes per question)
1. Click "FAQ" in sidebar
2. Add common questions:
   - Question text
   - Detailed answer
   - Select category
3. Click "Publish"

---

## 💡 Pro Tips for Using Sanity Studio

### 1. **Use Display Order**
- Lower numbers appear first
- Example: Set important programs to 1, 2, 3

### 2. **Featured Content**
- Check "Featured" for homepage content
- Limit to 3-5 featured items per type

### 3. **Image Optimization**
- Upload high-res images (Sanity auto-optimizes)
- Recommended: 1920px wide minimum
- Use JPEG for photos, PNG for logos

### 4. **Alt Text is Required**
- Describe what's in the image
- Good: "Children playing on outdoor climbing structure"
- Bad: "Image1" or "photo"

### 5. **Rich Text Formatting**
- Use headings for structure
- Bold important text
- Add bullet points for lists
- Keep paragraphs short (3-4 sentences)

### 6. **Save Often**
- Click "Publish" to make live
- "Save" keeps as draft
- Version history available

### 7. **Preview Content**
- Use Sanity Vision to test queries
- Check how content looks before publishing

---

## 🔧 Technical Details

### Project Information
- **Project ID:** `psm3wocx`
- **Dataset:** `production`
- **Organization:** ND Consulting
- **Plan:** Free (includes 3 users, 10GB assets, 100k documents)

### URLs
- **Studio (Local):** http://localhost:3000/studio
- **Studio (Production):** https://yourdomain.com/studio
- **Sanity Manage:** https://www.sanity.io/manage/project/psm3wocx

### API Access
Your Next.js app automatically fetches content from Sanity using:
- Client: `src/lib/sanity/client.ts`
- Queries: `src/lib/sanity/queries.ts`
- Images: `src/lib/sanity/image.ts`

---

## 📚 Content Guidelines

### Writing Style
- **Tone:** Warm, friendly, professional
- **Voice:** Conversational but trustworthy
- **Reading Level:** 6th-8th grade
- **Length:** 
  - Descriptions: 2-3 paragraphs
  - Bios: 3-5 paragraphs
  - Testimonials: 2-5 sentences

### Photo Guidelines
- **Children:** Get written photo releases
- **Quality:** Professional or high-quality smartphone
- **Lighting:** Natural, bright, well-lit
- **Composition:** Clean, uncluttered backgrounds
- **Diversity:** Represent diverse families and children

### Content Checklist
Before publishing, verify:
- [ ] No spelling/grammar errors
- [ ] All required fields filled
- [ ] Images have alt text
- [ ] Contact info is current
- [ ] Names/credentials are accurate
- [ ] Display order is set
- [ ] Featured status is correct

---

## 🆘 Troubleshooting

### Studio Won't Load
```bash
# Restart dev server
cd /Users/nducasse/Desktop/Cursor/oliver-daycare-web
npm run dev
```

### "Invalid Project ID" Error
- Check `.env.local` has correct project ID: `psm3wocx`
- Restart dev server after changing env vars

### Can't See Content on Website
- Make sure you clicked "Publish" (not just "Save")
- Check that `isFeatured` is true for homepage content
- Verify queries in `src/lib/sanity/queries.ts`

### Images Not Displaying
- Verify image uploaded successfully in Studio
- Check alt text is filled in
- Restart dev server

### Lost Changes
- Sanity has auto-save
- Click "History" (clock icon) to view/restore versions

---

## 🎓 Learning Resources

### Official Documentation
- [Sanity Docs](https://www.sanity.io/docs)
- [Sanity Studio](https://www.sanity.io/docs/sanity-studio)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

### Video Tutorials
- [Sanity + Next.js Tutorial](https://www.youtube.com/results?search_query=sanity+nextjs+tutorial)
- [Content Modeling Best Practices](https://www.sanity.io/guides)

---

## ✅ Next Steps

### Immediate (Today)
1. ✅ Access Studio at http://localhost:3000/studio
2. ✅ Create your first Site document
3. ✅ Add one Location
4. ✅ Create one Program

### This Week
1. Add all Programs
2. Upload staff photos and bios
3. Add 5-10 testimonials
4. Upload 20-30 gallery images
5. Create 10-15 FAQs

### Reference
- Follow `/Users/nducasse/Desktop/Cursor/oliver-daycare/CONTENT_CHECKLIST.md` for complete content list
- Use Sprint 1 tasks from `sprintplan.md` to guide development

---

## 🎉 You're Ready!

Sanity Studio is now fully configured and ready to use!

**Access it now:** http://localhost:3000/studio

Start by creating your Site settings, then add your first Location and Program.

---

**Last Updated:** 2025-11-14  
**Project:** Oliver Daycare - Oliver Daycare  
**Sanity Project ID:** psm3wocx  
**Status:** 🟢 Ready for Content Entry



