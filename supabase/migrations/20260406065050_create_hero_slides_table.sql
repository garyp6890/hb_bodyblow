/*
  # Create Hero Slides Table

  1. New Table
    - `hero_slides`
      - `id` (uuid, primary key, auto-generated)
      - `image_url` (text) - Slide image URL
      - `alt_text` (text) - Image alt text for accessibility
      - `sort_order` (integer) - For controlling display order
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on the table
    - Add public read-only policy
    - Add authenticated admin policies for insert/update/delete operations
*/

-- Create hero_slides table
CREATE TABLE IF NOT EXISTS hero_slides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  alt_text text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE hero_slides ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Anyone can read hero slides"
  ON hero_slides
  FOR SELECT
  TO public
  USING (true);

-- Admin policies
CREATE POLICY "Authenticated users can insert hero slides"
  ON hero_slides
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update hero slides"
  ON hero_slides
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete hero slides"
  ON hero_slides
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index for sort_order
CREATE INDEX IF NOT EXISTS idx_hero_slides_sort_order ON hero_slides(sort_order);