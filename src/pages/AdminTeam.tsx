import React, { useState } from 'react';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import LearnMoreSection from '../components/shared/LearnMoreSection';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Users, GraduationCap } from 'lucide-react';

export default function AdminTeam() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader
        title="Admin Team"
        description="Leading with Purpose"
        mediaUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
      />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img
                src="https://www.happinessbag.org/uploads/1/3/7/6/137606177/published/moan-2_1.png"
                alt="Jodi Moan"
                className="w-48 h-48 object-cover rounded-lg shadow-lg"
              />
              <div>
                <h2 className="text-2xl font-bold mb-2">Jodi Moan</h2>
                <h3 className="text-lg text-yellow-500 font-semibold mb-4">Executive Director</h3>
                <a
                  href="mailto:jmoan@happinessbag.org"
                  className="inline-block mb-4 text-gray-600 hover:text-yellow-500 transition-colors"
                >
                  jmoan@happinessbag.org
                </a>
                <div className="md:block">
                  <div
                    className={`relative ${
                      !isExpanded
                        ? 'max-h-24 overflow-hidden md:max-h-none md:overflow-visible'
                        : ''
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed mb-4">
                      For nearly four decades, Jodi Moan has been at the heart of Happiness Bag's
                      mission, transforming a part-time summer job during her Indiana State
                      University basketball days into a lifelong dedication to serving individuals
                      with disabilities.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Under her visionary leadership, Happiness Bag now supports over 250
                      participants, ages 5 to 85. While promoting inclusivity and fostering
                      community connections, Moan's collaborative spirit has forged strong
                      partnerships with Indiana State University and local businesses, building a
                      network that enriches opportunities for Happiness Bag participants.
                    </p>
                    {!isExpanded && (
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent md:hidden" />
                    )}
                  </div>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-2 text-yellow-500 hover:text-yellow-600 font-medium md:hidden"
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Michelle Hazen",
                title: "R&R Program Director",
                image: "https://www.happinessbag.org/uploads/1/3/7/6/137606177/published/hazen-2_1.jpg",
                email: "michelle.hazen@happinessbag.org"
              },
              {
                name: "Jessica Keena",
                title: "Administrative Assistant",
                image: "https://www.happinessbag.org/uploads/1/3/7/6/137606177/published/keena-1_3.png",
                email: "jessica.keena@happinessbag.org"
              },
              {
                name: "Jordan Shirar",
                title: "Day Service Coordinator",
                image: "https://www.happinessbag.org/uploads/1/3/7/6/137606177/published/shirar-1_2.png",
                email: "jordan.shirar@happinessbag.org"
              },
              {
                name: "Brittnie Barker",
                title: "Service Coordinator",
                image: "https://www.happinessbag.org/uploads/1/3/7/6/137606177/published/barker-2_1.png",
                email: "brittnie.barker@happinessbag.org"
              },
              {
                name: "Keely Thomas",
                title: "Service Coordinator",
                image: "https://www.happinessbag.org/uploads/1/3/7/6/137606177/published/thomas-2_1.png",
                email: "keely.thomas@happinessbag.org"
              },
              {
                name: "Kelsey Clements, RN",
                title: "Wellness Coordinator",
                image: "https://www.happinessbag.org/uploads/1/3/7/6/137606177/published/clements-1_1.jpg",
                email: "keely.thomas@happinessbag.org"
              },
              {
                name: "Leah York",
                title: "Service Coordinator",
                image: "https://www.happinessbag.org/uploads/1/3/7/6/137606177/published/york-1_1.png",
                email: "leah.york@happinessbag.org"
              },
              {
                name: "Latesha Sewell",
                title: "Day Service Coordinator",
                image: "https://www.happinessbag.org/uploads/1/3/7/6/137606177/published/sewell-1_1.png",
                email: "latesha.sewell@happinessbag.org"
              }
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="h-1 bg-yellow-500 w-full" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <h4 className="text-yellow-500 font-medium mb-3">{member.title}</h4>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-yellow-500 transition-colors"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Careers Module */}
          <div className="bg-gray-900 rounded-xl p-6 md:p-8 mt-12 mb-20 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Join Our Team</h2>
                <p className="text-gray-300">Make a difference in the lives of our friends.</p>
              </div>
              <Link
                to="/careers"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap w-full md:w-auto"
              >
                Apply Today
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-4 h-4 text-yellow-500" />
                  <span>Meaningful Work</span>
                </div>
                <p className="text-gray-400">Make a real impact in our community</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-yellow-500" />
                  <span>Great Benefits</span>
                </div>
                <p className="text-gray-400">Comprehensive benefits package</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-yellow-500" />
                  <span>Growth</span>
                </div>
                <p className="text-gray-400">Professional development opportunities</p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <LearnMoreSection page="admin-team" />
          </div>
        </div>
      </div>
    </div>
  );
}