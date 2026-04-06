/*
  # Create Expansion Tables

  1. New Tables
    - `construction_updates`
      - `id` (uuid, primary key, auto-generated)
      - `date` (text) - Date string (e.g., "October 20, 2023")
      - `title` (text) - Update title
      - `description` (text) - Update description
      - `images` (text[]) - Array of image URLs
      - `sort_order` (integer) - For controlling display order
      - `created_at` (timestamptz) - Record creation timestamp
    
    - `expansion_settings`
      - `key` (text, primary key) - Setting key (e.g., "progress", "goal", "video_id")
      - `value` (text) - Setting value
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on all tables
    - Add public read-only policies
    - Add authenticated admin policies for insert/update/delete operations
*/

-- Create construction_updates table
CREATE TABLE IF NOT EXISTS construction_updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date text NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  images text[] NOT NULL DEFAULT '{}',
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create expansion_settings table
CREATE TABLE IF NOT EXISTS expansion_settings (
  key text PRIMARY KEY,
  value text NOT NULL,
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE construction_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE expansion_settings ENABLE ROW LEVEL SECURITY;

-- Public read access for construction_updates
CREATE POLICY "Anyone can read construction updates"
  ON construction_updates
  FOR SELECT
  TO public
  USING (true);

-- Public read access for expansion_settings
CREATE POLICY "Anyone can read expansion settings"
  ON expansion_settings
  FOR SELECT
  TO public
  USING (true);

-- Admin policies for construction_updates
CREATE POLICY "Authenticated users can insert construction updates"
  ON construction_updates
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update construction updates"
  ON construction_updates
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete construction updates"
  ON construction_updates
  FOR DELETE
  TO authenticated
  USING (true);

-- Admin policies for expansion_settings
CREATE POLICY "Authenticated users can insert expansion settings"
  ON expansion_settings
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update expansion settings"
  ON expansion_settings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete expansion settings"
  ON expansion_settings
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index for sort_order
CREATE INDEX IF NOT EXISTS idx_construction_updates_sort_order ON construction_updates(sort_order);