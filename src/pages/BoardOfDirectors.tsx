import React from 'react';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';

export default function BoardOfDirectors() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Board of Directors"
        description="Guiding Our Vision"
        mediaUrl="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
      />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Board Leadership</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Robert Mitchell",
                  title: "Board President",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
                  description: "Community business leader with 15 years of nonprofit experience."
                },
                {
                  name: "Patricia Lee",
                  title: "Vice President",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
                  description: "Education administrator passionate about inclusive programming."
                }
              ].map((member) => (
                <div key={member.name} className="flex gap-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-lg shadow-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <h4 className="text-yellow-500 font-medium mb-2">{member.title}</h4>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "James Wilson",
                title: "Treasurer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              },
              {
                name: "Maria Garcia",
                title: "Secretary",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
              },
              {
                name: "Thomas Anderson",
                title: "Member",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
              },
              {
                name: "Sarah Zhang",
                title: "Member",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
              },
              {
                name: "William Brown",
                title: "Member",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              },
              {
                name: "Lisa Johnson",
                title: "Member",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
              }
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <h4 className="text-yellow-500 font-medium">{member.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}