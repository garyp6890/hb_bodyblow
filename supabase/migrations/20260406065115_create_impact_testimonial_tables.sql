/*
  # Create Impact Stats and Testimonials Tables

  1. New Tables
    - `impact_stats`
      - `id` (uuid, primary key, auto-generated)
      - `icon_name` (text) - Lucide icon name (e.g., "Users", "Clock", "Calendar")
      - `value` (text) - Stat value (e.g., "250+", "50+", "5-85")
      - `label` (text) - Stat label (e.g., "Friends Served Annually")
      - `sort_order` (integer) - For controlling display order
      - `created_at` (timestamptz) - Record creation timestamp
    
    - `testimonials`
      - `id` (uuid, primary key, auto-generated)
      - `quote` (text) - Testimonial quote
      - `attribution` (text) - Quote attribution/source
      - `is_featured` (boolean) - Whether to feature on homepage
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on all tables
    - Add public read-only policies
    - Add authenticated admin policies for insert/update/delete operations
*/

-- Create impact_stats table
CREATE TABLE IF NOT EXISTS impact_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  icon_name text NOT NULL,
  value text NOT NULL,
  label text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quote text NOT NULL,
  attribution text NOT NULL,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE impact_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Public read access for impact_stats
CREATE POLICY "Anyone can read impact stats"
  ON impact_stats
  FOR SELECT
  TO public
  USING (true);

-- Public read access for testimonials
CREATE POLICY "Anyone can read testimonials"
  ON testimonials
  FOR SELECT
  TO public
  USING (true);

-- Admin policies for impact_stats
CREATE POLICY "Authenticated users can insert impact stats"
  ON impact_stats
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update impact stats"
  ON impact_stats
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete impact stats"
  ON impact_stats
  FOR DELETE
  TO authenticated
  USING (true);

-- Admin policies for testimonials
CREATE POLICY "Authenticated users can insert testimonials"
  ON testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete testimonials"
  ON testimonials
  FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_impact_stats_sort_order ON impact_stats(sort_order);
CREATE INDEX IF NOT EXISTS idx_testimonials_is_featured ON testimonials(is_featured);