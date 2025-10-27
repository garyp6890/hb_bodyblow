import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function StayConnectedSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '' });
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-600/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="relative">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on our needs, programs, and the impact of your donations.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div className="sm:flex-1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-full bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
              </div>
              <div className="sm:flex-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-full bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 whitespace-nowrap inline-flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-white mb-4">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">Thank you for subscribing!</span>
              </div>
              <p className="text-white/90">
                We'll keep you updated on our needs and the impact of donations like yours.
              </p>
            </div>
          )}
          
          <p className="text-sm text-white/70 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </div>
  );
}