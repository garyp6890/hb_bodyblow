import { supabase } from './supabase';

export type Program = {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
  sortOrder: number;
};

export const getPrograms = async (): Promise<Program[]> => {
  const { data, error } = await supabase
    .from('programs')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching programs:', error);
    return [];
  }

  return data.map(program => ({
    id: program.id,
    title: program.title,
    description: program.description,
    iconName: program.icon_name,
    imageUrl: program.image_url,
    sortOrder: program.sort_order,
  }));
};
