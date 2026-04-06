import { supabase } from './supabase';

export type ConstructionUpdate = {
  id: string;
  date: string;
  title: string;
  description: string;
  images: string[];
  sortOrder: number;
};

export type ExpansionSettings = {
  progress: number;
  goal: number;
  videoId: string;
};

export const getConstructionUpdates = async (): Promise<ConstructionUpdate[]> => {
  const { data, error } = await supabase
    .from('construction_updates')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching construction updates:', error);
    return [];
  }

  return data.map(update => ({
    id: update.id,
    date: update.date,
    title: update.title,
    description: update.description,
    images: update.images,
    sortOrder: update.sort_order,
  }));
};

export const getExpansionSettings = async (): Promise<ExpansionSettings> => {
  const { data, error } = await supabase
    .from('expansion_settings')
    .select('*');

  if (error) {
    console.error('Error fetching expansion settings:', error);
    return {
      progress: 2449500,
      goal: 3450000,
      videoId: '5jaX8NcLOEQ'
    };
  }

  const settings: any = {};
  data.forEach(item => {
    settings[item.key] = item.value;
  });

  return {
    progress: parseInt(settings.progress || '2449500'),
    goal: parseInt(settings.goal || '3450000'),
    videoId: settings.video_id || '5jaX8NcLOEQ'
  };
};
