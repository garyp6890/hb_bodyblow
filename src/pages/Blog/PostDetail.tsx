import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Calendar, ArrowLeft, FileText, Mail, ArrowRight } from 'lucide-react';
import { getPostBySlug } from '../../data/blogPosts';

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || '');
  
  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-8">Post Not Found</h1>
          <p className="text-xl mb-8">We couldn't find the post you're looking for.</p>
          <Link to="/blog" className="inline-flex items-center text-indigo-500 hover:text-indigo-600">
            <ArrowLeft className="mr-2" /> Back to all posts
          </Link>
        </div>
      </div>
    );
  }
  
  const isGivingGuide = post.category === 'Giving Guides';
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gray-50 pt-40">
        <div className="container mx-auto px-4 py-12">
          <Link 
            to={isGivingGuide ? "/giving-guides" : "/blog"}
            className="inline-flex items-center text-indigo-500 hover:text-indigo-600 mb-8"
          >
            <ArrowLeft className="mr-2" /> 
            Back to {isGivingGuide ? "Giving Guides" : "Blog"}
          </Link>
          
          <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-96">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">{post.title}</h1>
              </div>
            </div>
            
            <div className="p-6 md:p-12">
              <p className="text-xl text-gray-700 mb-12">
                {post.excerpt}
              </p>
              
              {post.content ? (
                <div className="prose max-w-none">
                  <p>{post.content}</p>
                </div>
              ) : (
                <div className="text-center text-gray-500 italic">
                  <p>Full article content coming soon...</p>
                </div>
              )}
              
              {/* PDF Download for Giving Guides */}
              {isGivingGuide && post.pdfLink && (
                <div className="mt-12 mb-8">
                  <div className="bg-gray-100 rounded-xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Get the Full Guide</h3>
                    <p className="text-gray-600 mb-6">
                      Download our complete guide with more detailed information,
                      worksheets, and planning tools.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href={post.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="bg-indigo-500 text-white px-6 py-3 rounded-full font-semibold transition-all hover:bg-indigo-600 flex items-center justify-center gap-2"
                      >
                        <FileText className="w-5 h-5" />
                        View Full Guide PDF
                      </a>
                      
                      <button 
                        className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-700 flex items-center justify-center gap-2"
                      >
                        <Mail className="w-5 h-5" />
                        Send to My Email
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* CTA Block for Giving Guides */}
              {isGivingGuide && (
                <div className="mt-16 border-t pt-8 sticky bottom-4">
                  <div className="bg-indigo-50 rounded-xl p-6 flex flex-wrap md:flex-nowrap gap-4 justify-center">
                    <Link 
                      to="/giving-guides"
                      className="bg-indigo-500 text-white px-6 py-2 rounded-full font-medium text-sm transition-colors hover:bg-indigo-600 flex items-center"
                    >
                      Explore Other Giving Guides
                    </Link>
                    <Link 
                      to="/get-involved"
                      className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium text-sm transition-colors hover:bg-blue-600 flex items-center"
                    >
                      Return to Get Involved
                    </Link>
                    <Link 
                      to="#"
                      className="bg-yellow-500 text-black px-6 py-2 rounded-full font-medium text-sm transition-colors hover:bg-yellow-600 flex items-center"
                    >
                      Start Giving Today <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}