import teamImage from '../assets/team.png'

const teamMembers = [
  {
    name: '陈俊宇',
    role: '产品经理',
    description: '负责TF固态硬盘产品规划与市场策略'
  },
  {
    name: '刘俊军',
    role: '技术总监',
    description: '负责产品研发与技术创新'
  },
  {
    name: '李梓嘉',
    role: '项目总监',
    description: '负责项目统筹与执行管理'
  },
  {
    name: '余万民',
    role: '设计师',
    description: '负责产品设计与视觉呈现'
  },
  {
    name: '蒙俊荣',
    role: '媒体专员',
    description: '负责产品拍摄与内容制作'
  },
  {
    name: '谢泳宁',
    role: '后期制作',
    description: '负责视频剪辑与后期处理'
  },
  {
    name: '陈星宇',
    role: '内容编辑',
    description: '负责文案编辑与内容策划'
  }
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            我们的团队
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            一支充满激情与创新精神的专业团队
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={teamImage}
            alt="团队合照"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                  <p className="text-blue-400 text-sm">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
