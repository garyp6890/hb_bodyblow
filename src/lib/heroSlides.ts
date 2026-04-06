import { supabase } from './supabase';

export type HeroSlide = {
  id: string;
  imageUrl: string;
  altText: string;
  sortOrder: number;
};

export const getHeroSlides = async (): Promise<HeroSlide[]> => {
  const { data, error } = await supabase
    .from('hero_slides')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching hero slides:', error);
    return [];
  }

  return data.map(slide => ({
    id: slide.id,
    imageUrl: slide.image_url,
    altText: slide.alt_text,
    sortOrder: slide.sort_order,
  }));
};
