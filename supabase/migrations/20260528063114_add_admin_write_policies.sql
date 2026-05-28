/*
  # Add Admin Write Policies for Blog, Resources, and Timeline Tables

  These tables were created with public read access but are missing
  authenticated insert/update/delete policies needed for the CMS.
*/

-- blog_posts
CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
  ON blog_posts FOR DELETE TO authenticated USING (true);

-- resource_links
CREATE POLICY "Authenticated users can insert resource links"
  ON resource_links FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update resource links"
  ON resource_links FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete resource links"
  ON resource_links FOR DELETE TO authenticated USING (true);

-- timeline_events
CREATE POLICY "Authenticated users can insert timeline events"
  ON timeline_events FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update timeline events"
  ON timeline_events FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete timeline events"
  ON timeline_events FOR DELETE TO authenticated USING (true);