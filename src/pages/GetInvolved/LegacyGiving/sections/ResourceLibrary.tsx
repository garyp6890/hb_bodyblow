import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Brain, Download, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { givingGuidesPosts } from "../../../../data/blogPosts";

interface ResourceLibraryProps {
  emailSubmitted: boolean;
  setEmailSubmitted: (submitted: boolean) => void;
}

export default function ResourceLibrary({ emailSubmitted, setEmailSubmitted }: ResourceLibraryProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setEmailSubmitted(true);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto mb-20">
      {!emailSubmitted ? (
        <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-800/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Download Our Full Legacy Planning Library
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Unlock all 18 guides + the Giving Happiness Magazine, our interactive Records Book, and access to our giving quiz.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="px-6 py-4 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email Address"
                className="px-6 py-4 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white hover:bg-gray-100 text-orange-600 px-6 py-4 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-orange-600 border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    Send Me the Library
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
            
            <p className="text-sm text-white/70 mt-4">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center bg-green-100 text-green-600 px-4 py-2 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Thank you! Your resources are now available</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Your Complete Legacy Planning Library</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Access all the guides and tools you need to create a meaningful legacy. Download any 
              of the resources below or explore our individual guides for more detailed information.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-orange-50 rounded-xl p-6 text-center">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-orange-800 mb-2">Giving Happiness Booklet</h3>
              <p className="text-gray-600 mb-6 text-sm">
                A comprehensive 70+ page digital magazine featuring all 18 giving guides, donor stories, 
                checklists, and real examples of impact.
              </p>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download Full Booklet
              </button>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 text-center">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-orange-800 mb-2">Giving Records Book</h3>
              <p className="text-gray-600 mb-6 text-sm">
                A fillable workbook to document your wishes, login information, giving directives, 
                and important legal contacts.
              </p>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download Records Book
              </button>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 text-center">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-orange-800 mb-2">Giving Type Quiz</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Discover your unique giving identity and receive personalized recommendations 
                for the most impactful giving strategies.
              </p>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center justify-center gap-2">
                <ArrowRight className="w-4 h-4" />
                Take the Quiz
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Guide Library</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {givingGuidesPosts.map((guide) => (
                <div key={guide.id} className="flex gap-2 p-2 hover:bg-gray-100 rounded-lg">
                  <div className="mt-1 min-w-8 text-orange-700">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <Link 
                      to={`/blog/${guide.slug}`}
                      className="font-semibold text-gray-900 hover:text-orange-700 transition-colors"
                    >
                      {guide.title}
                    </Link>
                    <p className="text-gray-500 text-sm leading-snug">{guide.excerpt.substring(0, 80)}...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}