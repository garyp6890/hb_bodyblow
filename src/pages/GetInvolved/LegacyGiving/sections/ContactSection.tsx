import React from 'react';
import { Mail, ArrowRight, Phone, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-orange-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-700/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            More questions about joining our Partners in Happiness?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every legacy gift makes you a part of our mission's future. We'd love to honor your 
            impact and help guide your giving journey.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email Us Directly</h3>
              <a 
                href="mailto:empower@happinessbag.org" 
                className="text-white/80 hover:text-white transition-colors"
              >
                empower@happinessbag.org
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-white font-semibold mb-2">Call to Discuss</h3>
              <a 
                href="tel:812.234.8837"
                className="text-white/80 hover:text-white transition-colors"
              >
                812.234.8837
              </a>
            </div>
          </div>

          <button className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center gap-2 hover:scale-105">
            <MessageSquare className="w-5 h-5" />
            Start a Conversation Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}