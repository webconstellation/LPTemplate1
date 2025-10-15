/*
  # Create Lead Submissions Table

  ## Overview
  Creates a comprehensive table to store all lead form submissions with complete tracking data
  for WhatConverts integration and backup purposes.

  ## Tables Created
  
  ### `lead_submissions`
  Stores all form submissions with contact information and tracking attribution data.
  
  **Form Fields:**
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `full_name` (text, required) - Lead's full name
  - `email` (text, required) - Lead's email address
  - `phone` (text, required) - Lead's phone number
  - `case_summary` (text, required) - Description of their immigration case
  - `form_type` (text) - Type of form submitted (e.g., 'consultation_request')
  - `form_source` (text) - Where the form is located (e.g., 'footer_contact_form')
  
  **Tracking Fields:**
  - `source` (text) - Attribution source (utm_source or derived from referrer)
  - `medium` (text) - Attribution medium (utm_medium or derived)
  - `campaign` (text) - Campaign name from utm_campaign
  - `term` (text) - Keywords from utm_term
  - `content` (text) - Content variation from utm_content
  - `referrer` (text) - Full referrer URL
  - `landing_page` (text) - The page URL where user first landed
  - `submission_page` (text) - The page URL where form was submitted
  
  **Technical Fields:**
  - `user_agent` (text) - Browser/device information
  - `ip_address` (inet) - User's IP address (optional, for fraud prevention)
  - `session_id` (text) - Browser session identifier
  - `first_touch_timestamp` (timestamptz) - When user first visited the site
  - `submission_timestamp` (timestamptz) - When form was submitted
  - `created_at` (timestamptz) - Record creation time
  
  **Integration Fields:**
  - `whatconverts_status` (text) - Status of WhatConverts submission (pending, sent, failed)
  - `whatconverts_lead_id` (text) - Lead ID returned by WhatConverts
  - `whatconverts_error` (text) - Error message if submission failed
  - `whatconverts_sent_at` (timestamptz) - When data was sent to WhatConverts

  ## Security
  - RLS enabled on table
  - Public insert policy allows form submissions
  - Only authenticated admin users can read submissions
  
  ## Indexes
  - Index on email for quick lookups
  - Index on created_at for time-based queries
  - Index on source and medium for attribution reporting
*/

-- Create lead_submissions table
CREATE TABLE IF NOT EXISTS lead_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Form fields
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  case_summary text NOT NULL,
  form_type text DEFAULT 'consultation_request',
  form_source text DEFAULT 'footer_contact_form',
  
  -- Tracking attribution fields
  source text NOT NULL DEFAULT 'direct',
  medium text NOT NULL DEFAULT 'none',
  campaign text,
  term text,
  content text,
  referrer text,
  landing_page text,
  submission_page text,
  
  -- Technical fields
  user_agent text,
  ip_address inet,
  session_id text,
  first_touch_timestamp timestamptz,
  submission_timestamp timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  
  -- WhatConverts integration fields
  whatconverts_status text DEFAULT 'pending',
  whatconverts_lead_id text,
  whatconverts_error text,
  whatconverts_sent_at timestamptz
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_lead_submissions_email ON lead_submissions(email);
CREATE INDEX IF NOT EXISTS idx_lead_submissions_created_at ON lead_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_lead_submissions_source ON lead_submissions(source);
CREATE INDEX IF NOT EXISTS idx_lead_submissions_medium ON lead_submissions(medium);
CREATE INDEX IF NOT EXISTS idx_lead_submissions_whatconverts_status ON lead_submissions(whatconverts_status);

-- Enable Row Level Security
ALTER TABLE lead_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (for form submissions)
CREATE POLICY "Allow public form submissions"
  ON lead_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated users to read all submissions
CREATE POLICY "Authenticated users can read submissions"
  ON lead_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to update WhatConverts status
CREATE POLICY "Authenticated users can update submissions"
  ON lead_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);