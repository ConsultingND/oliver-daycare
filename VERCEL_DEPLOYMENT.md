# 🚀 Vercel Deployment Guide

This guide will walk you through deploying your Oliver Daycare website to Vercel.

## ✅ Pre-Deployment Checklist

Before deploying, ensure:
- [ ] Git repository is set up (GitHub, GitLab, or Bitbucket)
- [ ] All changes are committed
- [ ] Supabase project is created (if using enrollment system)
- [ ] You have a Vercel account ([sign up free](https://vercel.com/signup))

## 🎯 Quick Deploy (5 Minutes)

### Step 1: Push to GitHub

If you haven't already:

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment - Phase 1 complete"

# Create repository on GitHub, then:
git remote add origin https://github.com/yourusername/oliver-daycare-web.git
git branch -M main
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings ✅

### Step 3: Configure Environment Variables

In Vercel project settings, add these environment variables:

#### Required (If Using Enrollment System):
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

#### Optional (For Future Email Integration):
```env
RESEND_API_KEY=your-resend-key  # If adding email notifications
```

**How to Add:**
1. In Vercel dashboard → Your Project
2. Click **Settings** → **Environment Variables**
3. Add each variable
4. Apply to: **Production, Preview, and Development**

### Step 4: Deploy! 🎉

Click **"Deploy"** and Vercel will:
- ✅ Build your Next.js app
- ✅ Optimize for production
- ✅ Deploy to global CDN
- ✅ Assign a `.vercel.app` domain

**First deployment takes ~2-3 minutes**

---

## 🔧 Post-Deployment Steps

### 1. Verify Your Site

Once deployed, visit your Vercel URL:
- `https://your-project-name.vercel.app`

**Test these pages:**
- [ ] Homepage (`/`)
- [ ] Programs (`/programs`)
- [ ] Classes (`/classes`)
- [ ] Contact (`/contact`)
- [ ] Enrollment (`/enroll`)
- [ ] Gallery (`/gallery`)
- [ ] About (`/about`)

### 2. Test Enrollment Form

1. Go to `/enroll`
2. Fill out and submit the form
3. Check Supabase to verify data was saved
4. If errors, check Vercel **Function Logs**

### 3. Set Up Custom Domain (Optional)

**If you have a custom domain:**

1. In Vercel → **Settings** → **Domains**
2. Add your domain (e.g., `oliverdaycare.com`)
3. Follow DNS configuration instructions
4. Vercel automatically provisions SSL certificate 🔒

**Recommended DNS Setup:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

---

## 🔄 Continuous Deployment

**Good news!** Every time you push to GitHub, Vercel automatically:
- ✅ Rebuilds your site
- ✅ Deploys to production (main branch)
- ✅ Creates preview deployments (other branches)

### Workflow:
```bash
# Make changes locally
git add .
git commit -m "Add new feature"
git push

# Vercel automatically deploys! 🎉
```

### Preview Deployments:
- Every pull request gets its own preview URL
- Test changes before merging to main
- Share preview links for feedback

---

## 🐛 Troubleshooting

### Issue: Build Fails

**Check for:**
- TypeScript errors: `npm run build` locally first
- Missing dependencies: Check `package.json`
- Environment variables: Ensure all required vars are set

**View build logs:**
- Vercel Dashboard → Deployments → Click failed deployment → View logs

### Issue: Enrollment Form Not Working

**Possible causes:**
1. **Missing environment variables**
   - Solution: Add Supabase URL and key in Vercel settings
   
2. **Supabase RLS policies**
   - Solution: Ensure anonymous inserts are allowed
   
3. **CORS issues**
   - Solution: Check Supabase CORS settings (usually auto-configured)

**Debug steps:**
1. Check Vercel **Function Logs** (Runtime Logs)
2. Check browser console for errors
3. Verify Supabase connection in logs

### Issue: Images Not Loading

**Check:**
- Image paths use `/` not `./`
- Images are in `public/` folder
- No typos in image filenames

### Issue: 404 on Routes

**This shouldn't happen with Next.js App Router, but if it does:**
- Verify file structure in `src/app/`
- Check for `page.tsx` files in route folders
- Redeploy from Vercel dashboard

---

## 📊 Performance Optimization

Vercel automatically optimizes:
- ✅ **Image optimization** - Next.js Image component
- ✅ **Code splitting** - Automatic per-page
- ✅ **Edge caching** - Global CDN
- ✅ **Compression** - Gzip/Brotli

**Check your performance:**
- Run Lighthouse audit in Chrome DevTools
- Check **Vercel Analytics** (free tier available)

---

## 🎨 Vercel Project Settings

### Recommended Settings:

**Build & Development Settings:**
- **Framework Preset:** Next.js (auto-detected)
- **Build Command:** `npm run build` (default)
- **Output Directory:** `.next` (default)
- **Install Command:** `npm install` (default)

**Git Configuration:**
- **Production Branch:** `main`
- **Auto-Deploy:** Enabled ✅
- **Preview Deployments:** Enabled for all branches ✅

**Environment Variables:**
- Set all required variables
- Apply to all environments

---

## 🔐 Security Checklist

Before going live:
- [ ] Environment variables are set (not in code)
- [ ] Supabase RLS policies are configured
- [ ] API routes have proper validation
- [ ] No sensitive data in client-side code
- [ ] HTTPS is enabled (automatic with Vercel)

---

## 📈 Analytics Setup (Optional)

### Vercel Analytics (Recommended)
1. Enable in Vercel dashboard
2. Get real-time web vitals
3. Monitor performance
4. **Free tier available!**

### Google Analytics (Optional)
Add to `src/app/layout.tsx`:
```typescript
// Add Google Analytics script
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

---

## 🚦 Deployment Checklist

Before announcing your site:
- [ ] All pages load correctly
- [ ] Forms work and submit to Supabase
- [ ] Mobile responsive on all devices
- [ ] Images load properly
- [ ] Navigation works
- [ ] Contact information is correct
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (check for 🔒)
- [ ] Test enrollment form end-to-end
- [ ] Check Lighthouse score (aim for 90+)

---

## 🎯 After Deployment

### Share Your Site!
Your site is now live at: `https://your-project.vercel.app`

### Monitor Performance:
- Check Vercel Dashboard for metrics
- Set up uptime monitoring (optional)
- Monitor Supabase usage

### Continue Building:
- **Phase 2** changes will auto-deploy when pushed
- Use preview deployments to test new features
- Keep building with confidence! 🚀

---

## 🆘 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Vercel Community:** https://github.com/vercel/vercel/discussions
- **Vercel Support:** support@vercel.com (for issues)

---

## 💡 Pro Tips

1. **Use Preview Deployments**
   - Create feature branches
   - Get preview URLs for testing
   - Share with stakeholders for feedback

2. **Environment Variables per Environment**
   - Use different Supabase projects for dev/prod
   - Keep production data separate

3. **Monitor Function Logs**
   - Check logs regularly
   - Catch errors early
   - Monitor enrollment submissions

4. **Set Up Alerts**
   - Vercel can notify you of deployment failures
   - Configure in project settings

5. **Use Vercel CLI** (Optional)
   ```bash
   npm i -g vercel
   vercel login
   vercel  # Deploy from terminal
   ```

---

## 🎉 You're Ready!

Your Oliver Daycare website is production-ready and can be deployed to Vercel in minutes. After deployment, you can continue with **Phase 2** development, and all changes will automatically deploy on push.

**Questions?** Check the Vercel Dashboard or refer to this guide.

**Happy Deploying! 🚀**

