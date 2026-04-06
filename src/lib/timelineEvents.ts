import { supabase } from './supabase';

export type TimelineEvent = {
  id: string;
  year: number;
  title: string;
  description: string;
  image: string;
  type: 'image' | 'video';
  videoId?: string;
};

export const getTimelineEvents = async (): Promise<TimelineEvent[]> => {
  const { data, error } = await supabase
    .from('timeline_events')
    .select('*')
    .order('year', { ascending: true });

  if (error) {
    console.error('Error fetching timeline events:', error);
    return [];
  }

  return data.map(event => ({
    id: event.id,
    year: event.year,
    title: event.title,
    description: event.description,
    image: event.image,
    type: event.type as 'image' | 'video',
    videoId: event.video_id,
  }));
};
