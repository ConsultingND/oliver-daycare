# ⚡ Quick Reference Card

## 🚀 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Lint code
npm run lint
```

## 🌐 Local URLs

- **Website**: http://localhost:3000
- **Sanity Studio**: http://localhost:3000/studio

## 📄 Page Routes

| Page | Route |
|------|-------|
| Homepage | `/` |
| About | `/about` |
| Programs | `/programs` |
| Program Detail | `/programs/[slug]` |
| Classes | `/classes` |
| Class Detail | `/classes/[slug]` |
| Blog | `/blog` |
| Blog Post | `/blog/[slug]` |
| Team | `/team` |
| Team Member | `/team/[slug]` |
| Gallery | `/gallery` |
| Pricing | `/pricing` |
| Contact | `/contact` |
| Sanity Studio | `/studio` |

## 🎨 Color Palette

```css
Blush:      #f65283  (Primary)
Sky Blue:   #38bdf8  (Secondary)
Mint:       #5fe9d0  (Accent)
Warm Beige: #b69a7d  (Neutral)
```

## 🔑 Environment Variables

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Instagram (Optional)
NEXT_PUBLIC_INSTAGRAM_TOKEN=
```

## 📁 Key Files

```
src/
├── app/
│   ├── layout.tsx         - Root layout with Header/Footer
│   ├── page.tsx           - Homepage
│   └── [pages]/           - All page routes
├── components/
│   ├── layouts/
│   │   ├── Header.tsx     - Navigation header
│   │   └── Footer.tsx     - Site footer
│   ├── shared/
│   │   ├── AnimatedSection.tsx  - Scroll animations
│   │   ├── CTASection.tsx       - Call-to-action blocks
│   │   └── InstagramFeed.tsx    - Instagram integration
│   └── ui/                - shadcn/ui components
├── lib/
│   ├── constants.ts       - Site-wide constants
│   ├── supabase/          - Supabase client config
│   └── sanity/            - Sanity CMS config
└── types/
    └── index.ts           - TypeScript types

sanity/
└── schemas/               - All CMS content types
```

## 🎯 Common Tasks

### Add a New Blog Post
1. Go to http://localhost:3000/studio
2. Click "Blog Post"
3. Click "Create new Blog Post"
4. Fill in details and publish

### Update Contact Info
1. Edit `src/lib/constants.ts`
2. Update `CONTACT` object
3. Changes reflect immediately

### Change Colors
1. Edit `src/app/globals.css`
2. Update CSS variables in `:root`
3. Refresh browser

### Add New Page
1. Create folder in `src/app/[page-name]/`
2. Add `page.tsx` file
3. Add route to navigation in `Header.tsx`

## 📊 Component Props

### AnimatedSection
```tsx
<AnimatedSection delay={0.1}>
  {children}
</AnimatedSection>
```

### CTASection
```tsx
<CTASection
  title="Call to Action Title"
  description="Description text"
  primaryButtonText="Button Text"
  primaryButtonLink="/contact"
/>
```

### InstagramFeed
```tsx
<InstagramFeed />
```

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `killall node` then `npm run dev` |
| Build errors | `rm -rf .next && npm run dev` |
| Type errors | `npm run type-check` |
| Sanity not loading | Check SANITY_PROJECT_ID in `.env.local` |
| Forms not working | Verify Supabase credentials |

## 📞 Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Sanity Docs**: https://sanity.io/docs
- **Supabase Docs**: https://supabase.com/docs

## 📚 Full Documentation

- `LAUNCH_GUIDE.md` - Complete deployment guide
- `WEBSITE_COMPLETE.md` - Full feature list
- `SANITY_STUDIO_GUIDE.md` - CMS instructions

---

**Quick Start**: `npm run dev` → http://localhost:3000 🚀

