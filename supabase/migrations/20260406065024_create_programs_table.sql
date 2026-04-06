/*
  # Create Programs Table

  1. New Table
    - `programs`
      - `id` (uuid, primary key, auto-generated)
      - `title` (text) - Program title
      - `description` (text) - Program description
      - `icon_name` (text) - Lucide icon name (e.g., "Users", "Sun", "Music", "Trophy")
      - `image_url` (text) - Image URL
      - `sort_order` (integer) - For controlling display order
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on the table
    - Add public read-only policy
    - Add authenticated admin policies for insert/update/delete operations
*/

-- Create programs table
CREATE TABLE IF NOT EXISTS programs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon_name text NOT NULL,
  image_url text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Anyone can read programs"
  ON programs
  FOR SELECT
  TO public
  USING (true);

-- Admin policies
CREATE POLICY "Authenticated users can insert programs"
  ON programs
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update programs"
  ON programs
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete programs"
  ON programs
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index for sort_order
CREATE INDEX IF NOT EXISTS idx_programs_sort_order ON programs(sort_order);