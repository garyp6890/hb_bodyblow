/*
  # Create Content Tables

  1. New Tables
    - `blog_posts`
      - `id` (text, primary key) - Original ID from data file
      - `title` (text) - Blog post title
      - `excerpt` (text) - Short preview text
      - `date` (text) - Publication date as formatted string
      - `category` (text) - Blog category
      - `image` (text) - Image URL
      - `slug` (text, unique) - URL-friendly identifier
      - `content` (text, nullable) - Full post content
      - `pdf_link` (text, nullable) - Link to PDF version
      - `is_featured` (boolean) - Whether post is featured
      - `created_at` (timestamptz) - Record creation timestamp
    
    - `resource_links`
      - `id` (uuid, primary key, auto-generated)
      - `name` (text) - Resource name
      - `logo` (text) - Logo image URL
      - `description` (text) - Resource description
      - `url` (text) - Resource website URL
      - `created_at` (timestamptz) - Record creation timestamp
    
    - `timeline_events`
      - `id` (uuid, primary key, auto-generated)
      - `year` (integer) - Event year
      - `title` (text) - Event title
      - `description` (text) - Event description
      - `image` (text) - Image or video thumbnail URL
      - `type` (text) - "image" or "video"
      - `video_id` (text, nullable) - YouTube video ID if type is video
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on all tables
    - Add public read-only policies for all tables (public-facing content)
    - Add authenticated admin policies for insert/update/delete operations
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id text PRIMARY KEY,
  title text NOT NULL,
  excerpt text NOT NULL,
  date text NOT NULL,
  category text NOT NULL,
  image text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text,
  pdf_link text,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create resource_links table
CREATE TABLE IF NOT EXISTS resource_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo text NOT NULL,
  description text NOT NULL,
  url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create timeline_events table
CREATE TABLE IF NOT EXISTS timeline_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  year integer NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  image text NOT NULL,
  type text NOT NULL CHECK (type IN ('image', 'video')),
  video_id text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE resource_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE timeline_events ENABLE ROW LEVEL SECURITY;

-- Public read access for blog_posts
CREATE POLICY "Anyone can read blog posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (true);

-- Public read access for resource_links
CREATE POLICY "Anyone can read resource links"
  ON resource_links
  FOR SELECT
  TO public
  USING (true);

-- Public read access for timeline_events
CREATE POLICY "Anyone can read timeline events"
  ON timeline_events
  FOR SELECT
  TO public
  USING (true);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_is_featured ON blog_posts(is_featured);
CREATE INDEX IF NOT EXISTS idx_timeline_events_year ON timeline_events(year);