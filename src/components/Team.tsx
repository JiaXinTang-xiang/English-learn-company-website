import teamImage from '../assets/team.png'

const teamMembers = [
  {
    name: 'Chen Junyu',
    role: 'Product Manager',
    description: 'TF SSD product planning and market strategy',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    name: 'Li Zijia',
    role: 'Technical Director',
    description: 'Product R&D and technology innovation',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    name: 'Liu Junjun',
    role: 'Project Director',
    description: 'Project coordination and execution management',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    name: 'Yu Wanmin',
    role: 'Designer',
    description: 'Product design and visual presentation',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    name: 'Meng Junrong',
    role: 'Media Specialist',
    description: 'Product photography and content creation',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Xie Yongning',
    role: 'Post-production',
    description: 'Video editing and post-processing',
    gradient: 'from-indigo-500 to-violet-500'
  },
  {
    name: 'Chen Xingyu',
    role: 'Content Editor',
    description: 'Copywriting and content planning',
    gradient: 'from-blue-500 to-indigo-500'
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 backdrop-blur-md border border-indigo-500/20 mb-6">
            <span className="text-indigo-400 text-sm font-medium">Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We are a group of dreamers who refuse to settle, believing that storage technology can be more accessible.
            From the first line of code to the first chip, from the first debug to the first success, every step is
            infused with the team's dedication. Our goal is simple — to make faster, more stable, and more affordable
            storage products available to everyone.
          </p>
        </div>

        {/* Team Photo */}
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

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative bg-[#111118] rounded-xl p-6 hover:bg-[#16161e] transition-all duration-300 border border-indigo-500/10 hover:border-indigo-500/30">
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${member.gradient} rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <span className="text-white font-bold text-xl">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                    <p className={`text-sm font-medium bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.description}
                </p>

                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${member.gradient} rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
