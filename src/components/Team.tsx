import teamImage from '../assets/team.png'
import ScrollAnimation from './ScrollAnimation'
import person1 from '../assets/person/1.png'
import person2 from '../assets/person/2.png'
import person3 from '../assets/person/3.png'
import person4 from '../assets/person/4.png'
import person5 from '../assets/person/5.png'
import person6 from '../assets/person/6.png'
import person7 from '../assets/person/7.png'

const teamMembers = [
  {
    name: 'Chen Junyu',
    role: 'Product Manager',
    description: 'TF SSD product planning and market strategy',
    gradient: 'from-indigo-500 to-blue-500',
    avatar: person1,
    bio: 'Led the development of the world\'s first TF SSD. 10+ years experience in storage industry. Won "Innovation Leader Award" in 2024.'
  },
  {
    name: 'Li Zijia',
    role: 'Technical Director',
    description: 'Product R&D and technology innovation',
    gradient: 'from-purple-500 to-indigo-500',
    avatar: person2,
    bio: 'Core inventor of Open Particle Plug-in Architecture. Holds 5 patents in storage technology. Former senior engineer at a leading tech company.'
  },
  {
    name: 'Liu Junjun',
    role: 'Project Director',
    description: 'Project coordination and execution management',
    gradient: 'from-blue-500 to-purple-500',
    avatar: person3,
    bio: 'Successfully managed 3 major product launches. Expert in cross-department coordination. Awarded "Best Project Manager" twice.'
  },
  {
    name: 'Yu Wanmin',
    role: 'Designer',
    description: 'Product design and visual presentation',
    gradient: 'from-violet-500 to-purple-500',
    avatar: person4,
    bio: 'Designed the TF SSD product series. Winner of 2023 National Design Competition. Passionate about user-centered design.'
  },
  {
    name: 'Meng Junrong',
    role: 'Media Specialist',
    description: 'Product photography and content creation',
    gradient: 'from-purple-500 to-pink-500',
    avatar: person5,
    bio: 'Created all product videos and photos. Social media content reached 100K+ views. Professional photographer with 5 years experience.'
  },
  {
    name: 'Xie Yongning',
    role: 'Post-production',
    description: 'Video editing and post-processing',
    gradient: 'from-indigo-500 to-violet-500',
    avatar: person6,
    bio: 'Edited all company promotional videos. Skilled in motion graphics and visual effects. Won "Best Editing" in university film festival.'
  },
  {
    name: 'Chen Xingyu',
    role: 'Content Editor',
    description: 'Copywriting and content planning',
    gradient: 'from-blue-500 to-indigo-500',
    avatar: person7,
    bio: 'Wrote all website content and news articles. Excellent English writing skills. Former editor of university newspaper.'
  }
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 backdrop-blur-md border border-indigo-500/20 mb-6">
            <span className="text-indigo-400 text-sm font-medium">Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text-animated mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We are a group of dreamers who refuse to settle, believing that storage technology can be more accessible.
            From the first line of code to the first chip, from the first debug to the first success, every step is
            infused with the team's dedication. Our goal is simple — to make faster, more stable, and more affordable
            storage products available to everyone.
          </p>
        </ScrollAnimation>

        {/* Team Photo */}
        <ScrollAnimation delay={50}>
          <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl relative group border border-indigo-500/20">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent z-10" />
            <img
              src={teamImage}
              alt="Team Photo"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-white text-2xl font-bold mb-2">Core Team</h3>
              <p className="text-indigo-300 text-sm">Innovation · Professional · Collaboration</p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" style={{ perspective: '1000px' }}>
          {teamMembers.map((member, index) => (
            <ScrollAnimation key={index} delay={50 + index * 30}>
              <div
                className="relative group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${member.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`} />

                {/* Card with 3D effect */}
                <div className="relative bg-[#111118] rounded-xl p-10 transition-all duration-500 border border-indigo-500/10 group-hover:border-indigo-500/40 transform group-hover:scale-115 group-hover:-translate-y-2 group-hover:rotate-x-2 group-hover:rotate-y-1" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Avatar */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-indigo-500/30">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg transition-all duration-500 group-hover:text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-200">{member.name}</h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent transition-all duration-500 group-hover:text-base`}>
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed transition-colors duration-300 group-hover:text-white mb-4">
                    {member.description}
                  </p>

                  {/* Bio - Achievements */}
                  <div className="bg-white/5 rounded-lg p-4 border border-indigo-500/10">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      ⭐ {member.bio}
                    </p>
                  </div>

                  {/* Bottom glow line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${member.gradient} rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
