/*
  # Create Franchise Applications Table

  1. New Tables
    - `franchise_applications`
      - `id` (uuid, primary key)
      - `full_name` (text) - Applicant's full name
      - `phone` (text) - Contact phone number
      - `email` (text) - Contact email address
      - `location` (text) - Targeted location (City/District)
      - `investment_budget` (text) - Investment budget range
      - `business_experience` (text) - Brief business experience description
      - `additional_notes` (text) - Additional information from applicant
      - `created_at` (timestamptz) - Application submission timestamp
  
  2. Security
    - Enable RLS on `franchise_applications` table
    - Add policy for public inserts (anyone can apply)
    - Add policy for authenticated admins to read applications (for future admin panel)
*/

CREATE TABLE IF NOT EXISTS franchise_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  location text NOT NULL,
  investment_budget text NOT NULL,
  business_experience text DEFAULT '',
  additional_notes text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE franchise_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit franchise application"
  ON franchise_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view applications"
  ON franchise_applications
  FOR SELECT
  TO authenticated
  USING (true);