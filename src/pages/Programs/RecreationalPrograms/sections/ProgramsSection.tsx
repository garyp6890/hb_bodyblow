import type { FC } from 'react';
import { Wind, Trophy, Dumbbell, Target, Flag } from 'lucide-react';

const programs = [
  {
    title: "Flag Football League",
    icon: Flag,
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80",
    description: "Experience the thrill of flag football in a league exclusively designed for individuals with disabilities, fostering teamwork, fitness, and fun in the Wabash Valley.",
    features: [
      "Non-contact play with adaptive rules for inclusivity and safety",
      "All skill levels welcome, from beginners to seasoned players",
      "Opportunities for youth participants (ages 8+) to develop coordination and strategy",
      "A unique chance to build confidence, make friends, and stay active while enjoying the excitement of the game"
    ]
  },
  {
    title: "Bowling League",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1553190920-a9c7432283e6?auto=format&fit=crop&q=80",
    description: "Join the only bowling league solely designed for individuals with special needs and the LARGEST bowling league in the Wabash Valley, with over 160 participants enjoying bowling for 'love of the sport' or competition.",
    features: [
      "Seasonal leagues at Terre Haute Bowling Center and Patrick's in Sullivan",
      "Adaptive equipment like ramps and handle balls for inclusivity",
      "Youth bowlers (ages 5–8) welcome to build skills",
      "Unique opportunity to build strength and skill while socializing with peers"
      
    ]
  },
  {
    title: "Basketball",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80",
    description: "Shoot hoops, build skills, and enjoy the game in our inclusive basketball leagues.",
    features: [
      "Recreational leagues for fun and exercise",
      "Opportunities for teamwork and skill development",
      "Regular practices and games at our facility"
    ]
  },
  {
    title: "Corn Toss",
    icon: Target,
    image: "https://images.unsplash.com/photo-1596731498067-aa4ec1a4376b?auto=format&fit=crop&q=80",
    description: "A favorite for all ages, Corn Toss is a game of skill, focus, and fun.",
    features: [
      "Seasonal practices and games starting each July",
      "Options for short or long-board competitions",
      "Unified and traditional two- or four-person teams"
    ]
  },
  {
    title: "Bocce Ball",
    icon: Flag,
    image: "https://images.unsplash.com/photo-1591491653056-4314430901ee?auto=format&fit=crop&q=80",
    description: "A sport of strategy and precision, perfect for participants of all abilities, ages 30 and older, seeking friendly competition and fun.",
    features: [
      "Practices begin each April for community competitions",
      "Traditional and unified teams available",
      "Equipment and adaptations ensure inclusivity"
    ]
  }
];

const ProgramsSection: FC = () => {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {programs.map((program, index) => {
          const Icon = program.icon;
          const isLastItem = index === programs.length - 1;
          return (
            <div 
              key={program.title} 
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] ${
                isLastItem ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''
              }`}
            >
              <div className="relative h-48">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white p-2 rounded-lg">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">{program.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-black mb-6 leading-relaxed">{program.description}</p>
                <ul className="space-y-3">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-black leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramsSection;