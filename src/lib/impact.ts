import { supabase } from './supabase';

export type ImpactStat = {
  id: string;
  iconName: string;
  value: string;
  label: string;
  sortOrder: number;
};

export type Testimonial = {
  id: string;
  quote: string;
  attribution: string;
  isFeatured: boolean;
};

export const getImpactStats = async (): Promise<ImpactStat[]> => {
  const { data, error } = await supabase
    .from('impact_stats')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching impact stats:', error);
    return [];
  }

  return data.map(stat => ({
    id: stat.id,
    iconName: stat.icon_name,
    value: stat.value,
    label: stat.label,
    sortOrder: stat.sort_order,
  }));
};

export const getFeaturedTestimonial = async (): Promise<Testimonial | null> => {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_featured', true)
    .maybeSingle();

  if (error) {
    console.error('Error fetching featured testimonial:', error);
    return null;
  }

  if (!data) {
    return null;
  }

  return {
    id: data.id,
    quote: data.quote,
    attribution: data.attribution,
    isFeatured: data.is_featured,
  };
};
