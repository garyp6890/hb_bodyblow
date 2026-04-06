import { supabase } from './supabase';

export type BlogCategory =
  | 'Success Stories'
  | 'Program Updates'
  | 'Community Impact'
  | 'Special Olympics'
  | 'Volunteer Stories'
  | 'Giving Guides'
  | 'Legacy Giving'
  | 'Corporate Giving'
  | 'Gifts in Kind';

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: BlogCategory;
  image: string;
  slug: string;
  content?: string;
  pdfLink?: string;
};

export const getFeaturedPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_featured', true)
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }

  return data.map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    category: post.category as BlogCategory,
    image: post.image,
    slug: post.slug,
    content: post.content,
    pdfLink: post.pdf_link,
  }));
};

export const getRegularPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_featured', false)
    .not('category', 'in', '("Legacy Giving","Corporate Giving","Gifts in Kind")')
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching regular posts:', error);
    return [];
  }

  return data.map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    category: post.category as BlogCategory,
    image: post.image,
    slug: post.slug,
    content: post.content,
    pdfLink: post.pdf_link,
  }));
};

export const getAllPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching all posts:', error);
    return [];
  }

  return data.map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    category: post.category as BlogCategory,
    image: post.image,
    slug: post.slug,
    content: post.content,
    pdfLink: post.pdf_link,
  }));
};

export const getPostsByCategory = async (category: BlogCategory): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('category', category)
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }

  return data.map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    category: post.category as BlogCategory,
    image: post.image,
    slug: post.slug,
    content: post.content,
    pdfLink: post.pdf_link,
  }));
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }

  if (!data) {
    return null;
  }

  return {
    id: data.id,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    category: data.category as BlogCategory,
    image: data.image,
    slug: data.slug,
    content: data.content,
    pdfLink: data.pdf_link,
  };
};

export const getCategories = async (): Promise<{ name: BlogCategory; count: number }[]> => {
  const posts = await getAllPosts();
  const categories = posts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = 0;
    }
    acc[post.category]++;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(categories).map(([name, count]) => ({
    name: name as BlogCategory,
    count
  })).sort((a, b) => b.count - a.count);
};

export const getGivingGuidesPosts = async (): Promise<BlogPost[]> => {
  return getPostsByCategory('Legacy Giving');
};

export const getCorporateGivingPosts = async (): Promise<BlogPost[]> => {
  return getPostsByCategory('Corporate Giving');
};

export const getGiftsInKindPosts = async (): Promise<BlogPost[]> => {
  return getPostsByCategory('Gifts in Kind');
};
