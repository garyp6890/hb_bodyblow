import { supabase } from './supabase';

export type ResourceLink = {
  id: string;
  name: string;
  logo: string;
  description: string;
  url: string;
};

export const getResourceLinks = async (): Promise<ResourceLink[]> => {
  const { data, error } = await supabase
    .from('resource_links')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching resource links:', error);
    return [];
  }

  return data.map(link => ({
    id: link.id,
    name: link.name,
    logo: link.logo,
    description: link.description,
    url: link.url,
  }));
};
