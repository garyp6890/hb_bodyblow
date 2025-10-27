import React, { useState } from 'react';
import { Home, Heart, HandshakeIcon } from 'lucide-react';

const services = [
  {
    title: "Residential Habilitation",
    icon: Home,
    description: "Our Residential Habilitation services offer up to 24-hour support and supervision to ensure the health, safety, and welfare of program recipients. This program is designed to help individuals acquire, improve, and retain the skills necessary to live successfully and independently in their own homes. We focus on developing self-help, socialization, and adaptive skills to help our friends achieve greater independence and participate fully in their communities. This service is exclusively for individuals receiving the Community Integration and Habilitation (CIH) Medicaid Waiver.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80",
    features: [
      "24-hour support and supervision",
      "Skill development for independent living",
      "Community integration focus",
      "CIH Medicaid Waiver service"
    ]
  },
  {
    title: "Respite Care Program",
    icon: Heart,
    description: "Our Respite Care Program offers short-term relief for primary caregivers, providing temporary care for individuals who need assistance with daily activities. This service is available on a short-term basis, allowing caregivers to take a break while ensuring their loved one is safe and cared for. Respite care can be accessed through both private payment or the Medicaid Waiver program. Services are provided in the participant's home or in the community by our trained and compassionate Direct Support Professionals (DSPs). We support individual goals by working on daily living skills, personal care, and medication administration as needed. Our focus is on providing quality services with compassion, integrity, and accountability.",
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80",
    features: [
      "Short-term caregiver relief",
      "Flexible payment options",
      "In-home or community-based care",
      "Skilled DSP support"
    ]
  },
  {
    title: "Participant Assistance & Care (PAC) Services",
    icon: HandshakeIcon,
    description: "Our Participant Assistance & Care (PAC) services provide support for individuals with intellectual or developmental disabilities to remain and live successfully in their own homes and to fully participate in their communities. PAC services offer hands-on assistance, prompting, reminders, support, and monitoring needed to ensure the health and safety of the individual, while also promoting increased independence. Activities include assistance with personal care, meals, shopping, errands, scheduling appointments, chores, and leisure activities, as well as mobility, correspondence and bill-paying. This program is exclusively for Medicaid Waiver recipients.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    features: [
      "Daily living assistance",
      "Community participation support",
      "Personal care assistance",
      "Medicaid Waiver service"
    ]
  }
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="grid md:grid-cols-5 gap-8">
        {/* Service Navigation */}
        <div className="md:col-span-2">
          <div className="sticky top-4 space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all ${
                    activeTab === index
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'bg-red-500/10 hover:bg-red-500/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon className={`w-6 h-6 ${
                      activeTab === index ? 'text-white' : 'text-red-500'
                    }`} />
                    <div>
                      <h3 className={`font-bold ${
                        activeTab === index ? 'text-white' : 'text-red-700'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Details */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-64">
              <img
                src={services[activeTab].image}
                alt={services[activeTab].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h2 className="text-2xl font-bold text-white">
                  {services[activeTab].title}
                </h2>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-700 mb-6 leading-relaxed">
                {services[activeTab].description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {services[activeTab].features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-red-500/10 rounded-lg p-4"
                  >
                    <span className="text-red-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}