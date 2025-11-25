import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Initialize Supabase client
    const supabase = await createClient()

    // Insert enrollment application into Supabase
    const { error } = await supabase
      .from('enrollment_applications')
      .insert([
        {
          // Parent Information
          parent_first_name: data.parentFirstName,
          parent_last_name: data.parentLastName,
          email: data.email,
          phone: data.phone,
          address: data.address,
          city: data.city,
          state: data.state,
          zip_code: data.zipCode,
          
          // Child Information
          child_first_name: data.childFirstName,
          child_last_name: data.childLastName,
          child_date_of_birth: data.childDateOfBirth,
          child_age: data.childAge,
          child_gender: data.childGender,
          
          // Program Information
          program_interest: data.programInterest,
          start_date: data.startDate,
          schedule_type: data.scheduleType,
          
          // Emergency Contact
          emergency_contact_name: data.emergencyContactName,
          emergency_contact_phone: data.emergencyContactPhone,
          emergency_contact_relation: data.emergencyContactRelation,
          
          // Medical Information
          allergies: data.allergies,
          medications: data.medications,
          special_needs: data.specialNeeds,
          
          // Additional Information
          how_did_you_hear: data.howDidYouHear,
          additional_notes: data.additionalNotes,
          tour_scheduled: data.tourScheduled || false,
          
          // Metadata
          status: 'pending',
          submitted_at: new Date().toISOString(),
        }
      ])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit enrollment application' },
        { status: 500 }
      )
    }

    // TODO: Send confirmation email to parent
    // TODO: Send notification email to admin
    
    return NextResponse.json(
      { 
        message: 'Enrollment application submitted successfully',
        success: true 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}

