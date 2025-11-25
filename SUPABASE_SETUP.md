# Supabase Setup Instructions

This guide will help you set up the Supabase database for the Oliver Daycare application.

## Prerequisites

- A Supabase account ([sign up here](https://supabase.com))
- Your Supabase project URL and anon key

## Environment Variables

Make sure your `.env.local` file contains:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Database Setup

### Option 1: Run Migration via Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to the **SQL Editor**
3. Copy the contents of `supabase/migrations/001_create_enrollment_applications.sql`
4. Paste it into the SQL Editor and click **Run**

### Option 2: Use Supabase CLI (Recommended)

If you have the Supabase CLI installed:

```bash
# Link your project
supabase link --project-ref your-project-ref

# Run migrations
supabase db push
```

## Database Schema

The enrollment applications table includes:

### Parent Information
- Parent name, email, phone
- Full address (street, city, state, ZIP)

### Child Information
- Child name, date of birth, age, gender

### Program Information
- Program interest (infant, toddler, preschool, pre-k)
- Start date preference
- Schedule type (full-time, part-time, half-day)

### Emergency Contact
- Name, phone, relationship

### Medical Information
- Known allergies
- Current medications
- Special needs or considerations

### Additional Fields
- How they heard about the daycare
- Additional notes
- Tour request
- Application status and metadata

## Row Level Security (RLS)

The table is configured with RLS policies:

1. **Anonymous users** can submit enrollment applications
2. **Authenticated users** can view their own applications
3. **Admins** can view and manage all applications (requires admin role setup)

## Next Steps

After running the migration:

1. Test the enrollment form at `/enroll`
2. Verify data is being saved in Supabase
3. Set up email notifications (optional)
4. Configure admin access for managing applications

## Admin Dashboard (Future Enhancement)

Consider creating an admin dashboard at `/admin/enrollments` to:
- View all applications
- Update application status
- Add notes
- Contact parents

## Troubleshooting

### Issue: "relation enrollment_applications does not exist"
**Solution:** Run the migration SQL in your Supabase SQL Editor

### Issue: "Failed to submit enrollment application"
**Solution:** Check your environment variables and ensure RLS policies allow inserts

### Issue: API route returns 500 error
**Solution:** Check the API logs in your terminal and verify Supabase connection

## Email Notifications (Optional)

To add email notifications:

1. Set up a transactional email service (Resend, SendGrid, etc.)
2. Add email credentials to `.env.local`
3. Update `/api/enroll/route.ts` to send confirmation emails

```typescript
// Example with Resend
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'Oliver Daycare <noreply@oliverdaycare.com>',
  to: data.email,
  subject: 'Enrollment Application Received',
  html: '<p>Thank you for your enrollment application...</p>'
})
```

