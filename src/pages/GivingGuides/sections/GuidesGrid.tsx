import React, { useState, useEffect } from 'react';
import { Calendar, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  getGivingGuidesPosts,
  getCorporateGivingPosts,
  getGiftsInKindPosts,
  BlogPost
} from '../../../lib/blogPosts';

interface GuidesGridProps {
  category: string | null;
}

const descriptions: Record<string, string> = {
  legacy: 'Create a lasting impact through planned giving. These guides help you explore ways to support our mission while securing your legacy and caring for loved ones.',
  corporate: 'Discover how your company can make a meaningful difference. From matching gifts to volunteer programs, explore strategic ways to partner with us for community impact.',
  'gifts-in-kind': 'Support our mission with non-cash donations. Learn how your goods, services, and expertise directly benefit our programs and the friends we serve.',
};

const defaultDescription = 'Explore our comprehensive library of giving guides covering legacy planning, corporate partnerships, and in-kind donations to find the perfect way to support our mission.';

const categoryBadge: Record<string, string> = {
  'Legacy Giving': 'bg-orange-500 text-white',
  'Corporate Giving': 'bg-blue-500 text-white',
  'Gifts in Kind': 'bg-green-500 text-white',
};

export default function GuidesGrid({ category }: GuidesGridProps) {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [postsByKey, setPostsByKey] = useState<Record<string, BlogPost[]>>({});

  useEffect(() => {
    const load = async () => {
      const [legacy, corporate, gifts] = await Promise.all([
        getGivingGuidesPosts(),
        getCorporateGivingPosts(),
        getGiftsInKindPosts(),
      ]);
      setPostsByKey({ legacy, corporate, 'gifts-in-kind': gifts });
      setAllPosts([...legacy, ...corporate, ...gifts]);
    };
    load();
  }, []);

  const posts = category ? (postsByKey[category] ?? []) : allPosts;
  const title = category === 'legacy' ? 'Legacy Giving Guides'
    : category === 'corporate' ? 'Corporate Giving Guides'
    : category === 'gifts-in-kind' ? 'Gifts in Kind Guides'
    : 'All Giving Guides';

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {category ? descriptions[category] : defaultDescription}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            <div className="relative h-48">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2 text-white/90 text-sm mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${categoryBadge[post.category] ?? 'bg-gray-500 text-white'}`}>
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-blue-600 font-medium">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>Read Guide</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
