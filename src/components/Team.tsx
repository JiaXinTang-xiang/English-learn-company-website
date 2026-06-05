import { useState } from 'react'
import teamImage from '../assets/team.png'

const teamMembers = [
  {
    name: '陈俊宇',
    role: '产品经理',
    description: '负责TF固态硬盘产品规划与市场策略',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: '刘俊军',
    role: '技术总监',
    description: '负责产品研发与技术创新',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: '李梓嘉',
    role: '项目总监',
    description: '负责项目统筹与执行管理',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: '余万民',
    role: '设计师',
    description: '负责产品设计与视觉呈现',
    color: 'from-green-500 to-teal-500'
  },
  {
    name: '蒙俊荣',
    role: '媒体专员',
    description: '负责产品拍摄与内容制作',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: '谢泳宁',
    role: '后期制作',
    description: '负责视频剪辑与后期处理',
    color: 'from-pink-500 to-rose-500'
  },
  {
    name: '陈星宇',
    role: '内容编辑',
    description: '负责文案编辑与内容策划',
    color: 'from-indigo-500 to-blue-500'
  }
]

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="team" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="text-white/80 text-sm">Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            我们的团队
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            一支充满激情与创新精神的专业团队
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
          <img
            src={teamImage}
            alt="团队合照"
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 z-20">
            <h3 className="text-white text-2xl font-bold mb-2">核心团队</h3>
            <p className="text-gray-200 text-sm">创新 · 专业 · 协作</p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700/80 transition-all duration-300 border border-gray-700/50 hover:border-transparent">
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${member.color} rounded-xl flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <span className="text-white font-bold text-xl">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                    <p className={`text-sm font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.description}
                </p>

                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${member.color} rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
