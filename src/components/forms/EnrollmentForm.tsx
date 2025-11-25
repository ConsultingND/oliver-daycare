'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react'

// Enrollment form validation schema
const enrollmentSchema = z.object({
  // Parent/Guardian Information
  parentFirstName: z.string().min(2, 'First name must be at least 2 characters'),
  parentLastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Please enter your full address'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
  
  // Child Information
  childFirstName: z.string().min(2, 'Child\'s first name is required'),
  childLastName: z.string().min(2, 'Child\'s last name is required'),
  childDateOfBirth: z.string().min(1, 'Date of birth is required'),
  childAge: z.string().min(1, 'Age is required'),
  childGender: z.enum(['male', 'female', 'other', 'prefer-not-to-say']),
  
  // Program Information
  programInterest: z.string().min(1, 'Please select a program'),
  startDate: z.string().min(1, 'Preferred start date is required'),
  scheduleType: z.enum(['full-time', 'part-time', 'half-day']),
  
  // Emergency Contact
  emergencyContactName: z.string().min(2, 'Emergency contact name is required'),
  emergencyContactPhone: z.string().min(10, 'Emergency contact phone is required'),
  emergencyContactRelation: z.string().min(2, 'Relationship is required'),
  
  // Medical Information
  allergies: z.string().optional(),
  medications: z.string().optional(),
  specialNeeds: z.string().optional(),
  
  // Additional Information
  howDidYouHear: z.string().optional(),
  additionalNotes: z.string().optional(),
  
  // Consent
  tourScheduled: z.boolean().optional(),
})

type EnrollmentFormData = z.infer<typeof enrollmentSchema>

interface EnrollmentFormProps {
  onSuccess?: () => void
  className?: string
}

export default function EnrollmentForm({ onSuccess, className = '' }: EnrollmentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
  })

  const onSubmit = async (data: EnrollmentFormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      // TODO: Replace with actual Supabase integration
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit enrollment')
      }

      setSubmitted(true)
      reset()
      
      if (onSuccess) {
        onSuccess()
      }

      // Reset success message after 10 seconds
      setTimeout(() => setSubmitted(false), 10000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <Card className={`rounded-3xl border-0 shadow-xl ${className}`}>
        <CardContent className="p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Enrollment Application Received!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in Oliver Daycare. We've received your enrollment application and will review it shortly.
            Our team will contact you within 1-2 business days to discuss next steps and schedule a tour if you haven't already.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            className="rounded-full bg-gradient-to-r from-blush-500 to-blush-600"
          >
            Submit Another Application
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      {error && (
        <Card className="mb-6 border-red-200 bg-red-50">
          <CardContent className="p-4 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <p className="text-red-800">{error}</p>
          </CardContent>
        </Card>
      )}

      {/* Parent/Guardian Information */}
      <Card className="rounded-3xl border-0 shadow-xl mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Parent/Guardian Information</CardTitle>
          <CardDescription>Primary contact information for enrollment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="parentFirstName">First Name *</Label>
              <Input
                id="parentFirstName"
                {...register('parentFirstName')}
                className="rounded-xl mt-1"
                placeholder="John"
              />
              {errors.parentFirstName && (
                <p className="text-red-500 text-sm mt-1">{errors.parentFirstName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="parentLastName">Last Name *</Label>
              <Input
                id="parentLastName"
                {...register('parentLastName')}
                className="rounded-xl mt-1"
                placeholder="Doe"
              />
              {errors.parentLastName && (
                <p className="text-red-500 text-sm mt-1">{errors.parentLastName.message}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className="rounded-xl mt-1"
                placeholder="john.doe@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                className="rounded-xl mt-1"
                placeholder="(555) 123-4567"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="address">Street Address *</Label>
            <Input
              id="address"
              {...register('address')}
              className="rounded-xl mt-1"
              placeholder="123 Main St"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                {...register('city')}
                className="rounded-xl mt-1"
                placeholder="San Francisco"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="state">State *</Label>
              <Input
                id="state"
                {...register('state')}
                className="rounded-xl mt-1"
                placeholder="CA"
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="zipCode">ZIP Code *</Label>
              <Input
                id="zipCode"
                {...register('zipCode')}
                className="rounded-xl mt-1"
                placeholder="94102"
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Child Information */}
      <Card className="rounded-3xl border-0 shadow-xl mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Child Information</CardTitle>
          <CardDescription>Tell us about your child</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="childFirstName">Child's First Name *</Label>
              <Input
                id="childFirstName"
                {...register('childFirstName')}
                className="rounded-xl mt-1"
                placeholder="Emma"
              />
              {errors.childFirstName && (
                <p className="text-red-500 text-sm mt-1">{errors.childFirstName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="childLastName">Child's Last Name *</Label>
              <Input
                id="childLastName"
                {...register('childLastName')}
                className="rounded-xl mt-1"
                placeholder="Doe"
              />
              {errors.childLastName && (
                <p className="text-red-500 text-sm mt-1">{errors.childLastName.message}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="childDateOfBirth">Date of Birth *</Label>
              <Input
                id="childDateOfBirth"
                type="date"
                {...register('childDateOfBirth')}
                className="rounded-xl mt-1"
              />
              {errors.childDateOfBirth && (
                <p className="text-red-500 text-sm mt-1">{errors.childDateOfBirth.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="childAge">Current Age *</Label>
              <Input
                id="childAge"
                {...register('childAge')}
                className="rounded-xl mt-1"
                placeholder="2 years"
              />
              {errors.childAge && (
                <p className="text-red-500 text-sm mt-1">{errors.childAge.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="childGender">Gender *</Label>
              <select
                id="childGender"
                {...register('childGender')}
                className="w-full rounded-xl border border-gray-300 p-2 mt-1"
              >
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
              {errors.childGender && (
                <p className="text-red-500 text-sm mt-1">{errors.childGender.message}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Program Selection */}
      <Card className="rounded-3xl border-0 shadow-xl mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Program Selection</CardTitle>
          <CardDescription>Choose the program that best fits your needs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="programInterest">Program of Interest *</Label>
            <select
              id="programInterest"
              {...register('programInterest')}
              className="w-full rounded-xl border border-gray-300 p-2 mt-1"
            >
              <option value="">Select a program...</option>
              <option value="infant">Infant Care (6 weeks - 12 months)</option>
              <option value="toddler">Toddler Program (12 - 24 months)</option>
              <option value="preschool">Preschool (2 - 3 years)</option>
              <option value="pre-k">Pre-Kindergarten (4 - 5 years)</option>
            </select>
            {errors.programInterest && (
              <p className="text-red-500 text-sm mt-1">{errors.programInterest.message}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="startDate">Preferred Start Date *</Label>
              <Input
                id="startDate"
                type="date"
                {...register('startDate')}
                className="rounded-xl mt-1"
              />
              {errors.startDate && (
                <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="scheduleType">Schedule Type *</Label>
              <select
                id="scheduleType"
                {...register('scheduleType')}
                className="w-full rounded-xl border border-gray-300 p-2 mt-1"
              >
                <option value="">Select...</option>
                <option value="full-time">Full-Time (7 AM - 6 PM)</option>
                <option value="part-time">Part-Time (3-4 days/week)</option>
                <option value="half-day">Half-Day (AM or PM)</option>
              </select>
              {errors.scheduleType && (
                <p className="text-red-500 text-sm mt-1">{errors.scheduleType.message}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="rounded-3xl border-0 shadow-xl mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Emergency Contact</CardTitle>
          <CardDescription>Someone we can reach if you're unavailable</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="emergencyContactName">Full Name *</Label>
              <Input
                id="emergencyContactName"
                {...register('emergencyContactName')}
                className="rounded-xl mt-1"
                placeholder="Jane Smith"
              />
              {errors.emergencyContactName && (
                <p className="text-red-500 text-sm mt-1">{errors.emergencyContactName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="emergencyContactPhone">Phone Number *</Label>
              <Input
                id="emergencyContactPhone"
                type="tel"
                {...register('emergencyContactPhone')}
                className="rounded-xl mt-1"
                placeholder="(555) 987-6543"
              />
              {errors.emergencyContactPhone && (
                <p className="text-red-500 text-sm mt-1">{errors.emergencyContactPhone.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="emergencyContactRelation">Relationship *</Label>
              <Input
                id="emergencyContactRelation"
                {...register('emergencyContactRelation')}
                className="rounded-xl mt-1"
                placeholder="Grandmother"
              />
              {errors.emergencyContactRelation && (
                <p className="text-red-500 text-sm mt-1">{errors.emergencyContactRelation.message}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Medical Information */}
      <Card className="rounded-3xl border-0 shadow-xl mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Medical Information</CardTitle>
          <CardDescription>Help us provide the best care for your child</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="allergies">Known Allergies</Label>
            <Textarea
              id="allergies"
              {...register('allergies')}
              className="rounded-xl mt-1"
              placeholder="Food allergies, environmental allergies, etc."
              rows={3}
            />
            <p className="text-sm text-gray-500 mt-1">Leave blank if none</p>
          </div>

          <div>
            <Label htmlFor="medications">Current Medications</Label>
            <Textarea
              id="medications"
              {...register('medications')}
              className="rounded-xl mt-1"
              placeholder="List any medications your child takes regularly"
              rows={3}
            />
            <p className="text-sm text-gray-500 mt-1">Leave blank if none</p>
          </div>

          <div>
            <Label htmlFor="specialNeeds">Special Needs or Considerations</Label>
            <Textarea
              id="specialNeeds"
              {...register('specialNeeds')}
              className="rounded-xl mt-1"
              placeholder="Any special needs, developmental considerations, or other information we should know"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card className="rounded-3xl border-0 shadow-xl mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Additional Information</CardTitle>
          <CardDescription>Optional details to help us serve you better</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
            <select
              id="howDidYouHear"
              {...register('howDidYouHear')}
              className="w-full rounded-xl border border-gray-300 p-2 mt-1"
            >
              <option value="">Select...</option>
              <option value="google">Google Search</option>
              <option value="social-media">Social Media</option>
              <option value="friend">Friend/Family Referral</option>
              <option value="drive-by">Drove/Walked By</option>
              <option value="online-ad">Online Advertisement</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <Label htmlFor="additionalNotes">Additional Notes or Questions</Label>
            <Textarea
              id="additionalNotes"
              {...register('additionalNotes')}
              className="rounded-xl mt-1"
              placeholder="Any other information you'd like to share or questions you have"
              rows={4}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="tourScheduled"
              {...register('tourScheduled')}
              className="w-4 h-4 text-blush-600 rounded"
            />
            <Label htmlFor="tourScheduled" className="cursor-pointer">
              I would like to schedule a tour of the facility
            </Label>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-blush-50 to-skyblue-50">
        <CardContent className="p-8">
          <p className="text-sm text-gray-600 mb-6">
            By submitting this form, you acknowledge that the information provided is accurate and you agree to our enrollment policies. 
            This is not a binding enrollment agreement but rather an application to be reviewed by our team.
          </p>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 py-6 text-lg shadow-xl"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting Application...
              </>
            ) : (
              'Submit Enrollment Application'
            )}
          </Button>
        </CardContent>
      </Card>
    </form>
  )
}

