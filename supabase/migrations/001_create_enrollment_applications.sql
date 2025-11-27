-- Create enrollment_applications table
CREATE TABLE IF NOT EXISTS enrollment_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Parent Information
  parent_first_name VARCHAR(100) NOT NULL,
  parent_last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address TEXT NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(50) NOT NULL,
  zip_code VARCHAR(10) NOT NULL,
  
  -- Child Information
  child_first_name VARCHAR(100) NOT NULL,
  child_last_name VARCHAR(100) NOT NULL,
  child_date_of_birth DATE NOT NULL,
  child_age VARCHAR(50) NOT NULL,
  child_gender VARCHAR(20) NOT NULL,
  
  -- Program Information
  program_interest VARCHAR(50) NOT NULL,
  start_date DATE NOT NULL,
  schedule_type VARCHAR(20) NOT NULL,
  
  -- Emergency Contact
  emergency_contact_name VARCHAR(100) NOT NULL,
  emergency_contact_phone VARCHAR(20) NOT NULL,
  emergency_contact_relation VARCHAR(50) NOT NULL,
  
  -- Medical Information
  allergies TEXT,
  medications TEXT,
  special_needs TEXT,
  
  -- Additional Information
  how_did_you_hear VARCHAR(100),
  additional_notes TEXT,
  tour_scheduled BOOLEAN DEFAULT false,
  
  -- Metadata
  status VARCHAR(20) DEFAULT 'pending' NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by VARCHAR(100),
  notes_from_admin TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_enrollment_email ON enrollment_applications(email);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_enrollment_status ON enrollment_applications(status);

-- Create index on submitted_at for sorting
CREATE INDEX IF NOT EXISTS idx_enrollment_submitted ON enrollment_applications(submitted_at DESC);

-- Add RLS (Row Level Security) policies
ALTER TABLE enrollment_applications ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (submit enrollment)
CREATE POLICY "Anyone can submit enrollment applications"
  ON enrollment_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Authenticated users can view their own applications
CREATE POLICY "Users can view their own applications"
  ON enrollment_applications
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt()->>'email');

-- Policy: Admins can view all applications (you'll need to create an admin role)
-- CREATE POLICY "Admins can view all applications"
--   ON enrollment_applications
--   FOR ALL
--   TO authenticated
--   USING (auth.jwt()->>'role' = 'admin');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_enrollment_applications_updated_at
  BEFORE UPDATE ON enrollment_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add comments for documentation
COMMENT ON TABLE enrollment_applications IS 'Stores enrollment applications submitted by parents';
COMMENT ON COLUMN enrollment_applications.status IS 'Application status: pending, reviewed, approved, rejected, enrolled';
COMMENT ON COLUMN enrollment_applications.tour_scheduled IS 'Whether parent requested a facility tour';



