# Oliver Daycare Website 🏫

A modern, professional daycare website built with Next.js 15, featuring an enrollment system, program management, and CMS integration.

## ✨ Features

- 🎨 **Modern Design** - Beautiful, responsive UI with smooth animations
- 📝 **Enrollment System** - Complete application form with Supabase integration
- 🎓 **Program Management** - Showcase infant care, toddler, preschool, and pre-K programs
- 📚 **Enrichment Classes** - Display and manage specialized classes
- 📸 **Gallery** - Photo gallery with filtering
- 👥 **Team Profiles** - Staff member showcase
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 🚀 **Production Ready** - Optimized and ready to deploy

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/oliver-daycare-web.git

# Navigate to project
cd oliver-daycare-web

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🎯 Deployment

**This project is ready to deploy!**

### Deploy to Vercel (Recommended - 5 minutes)

1. Push your code to GitHub
2. Import to [Vercel](https://vercel.com)
3. Add environment variables (if using enrollment)
4. Deploy!

**📖 Full deployment guide:** See [DEPLOY_NOW_CHECKLIST.md](./DEPLOY_NOW_CHECKLIST.md)

**🔧 Detailed instructions:** See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

### Environment Variables

```env
# Required for enrollment system
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Optional for email notifications
RESEND_API_KEY=your-resend-key
```

## 📚 Documentation

- **[PHASE_1_COMPLETE.md](./PHASE_1_COMPLETE.md)** - Phase 1 implementation details
- **[ENROLLMENT_QUICK_START.md](./ENROLLMENT_QUICK_START.md)** - Enrollment system guide
- **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)** - Database configuration
- **[BUILD_GUIDE.md](./BUILD_GUIDE.md)** - Comprehensive build documentation
- **[DEPLOY_NOW_CHECKLIST.md](./DEPLOY_NOW_CHECKLIST.md)** - Quick deployment guide
- **[VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)** - Detailed Vercel setup

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Radix UI
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Database:** Supabase
- **CMS:** Sanity (optional)
- **Deployment:** Vercel

## 📁 Project Structure

```
oliver-daycare-web/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── page.tsx      # Homepage
│   │   ├── enroll/       # Enrollment system
│   │   ├── programs/     # Programs pages
│   │   ├── classes/      # Classes pages
│   │   ├── contact/      # Contact page
│   │   └── api/          # API routes
│   ├── components/       # React components
│   │   ├── forms/        # Form components
│   │   ├── layouts/      # Layout components
│   │   ├── shared/       # Shared components
│   │   └── ui/           # shadcn/ui components
│   ├── lib/              # Utilities and configs
│   └── types/            # TypeScript types
├── public/               # Static assets
├── sanity/               # Sanity CMS schemas
└── supabase/            # Database migrations
```

## 🎨 Key Pages

- `/` - Homepage with hero, programs, features
- `/enroll` - Comprehensive enrollment application
- `/programs` - Program listing and details
- `/classes` - Enrichment classes
- `/contact` - Contact form and information
- `/gallery` - Photo gallery
- `/about` - About the daycare
- `/team` - Staff profiles
- `/blog` - Blog posts

## ✅ Phase 1 Complete

- ✅ All emojis replaced with Lucide icons
- ✅ Comprehensive enrollment form
- ✅ Enrollment landing page
- ✅ Supabase database integration
- ✅ Updated navigation with "Enroll Now" CTA
- ✅ Responsive design across all pages
- ✅ Production-ready and deployable

## 🔮 Coming in Phase 2

- Enhanced program pages with tabbed sections
- Image galleries within program pages
- Inline contact forms
- Related programs carousel
- Newsletter subscription
- More interactive features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

Private project - All rights reserved

## 🆘 Support

For questions or issues:
- Check the documentation in the project
- Review [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)
- See deployment guides for common issues

---

**Built with ❤️ for Oliver Daycare**

Ready to deploy? See [DEPLOY_NOW_CHECKLIST.md](./DEPLOY_NOW_CHECKLIST.md)
