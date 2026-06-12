import ScrollAnimation from './ScrollAnimation'

export default function Home() {
  return (
    <section id="about" className="py-20 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 backdrop-blur-md border border-indigo-500/20 mb-6">
            <span className="text-indigo-400 text-sm font-medium">About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Company Introduction
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Learn more about Guilin CoreFlash Technology and our mission
          </p>
        </ScrollAnimation>

        {/* Company Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Company Overview */}
          <ScrollAnimation delay={100}>
            <div className="bg-[#111118] border border-indigo-500/10 rounded-xl p-8 hover:border-indigo-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-indigo-400">🏢</span>
                Our Company
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Guilin CoreFlash Technology Co., Ltd. is a leading technology company based in Guilin, China.
                We specialize in innovative storage solutions and are proud to be the creator of the world's first TF Solid State Drive.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Founded in 2022, our company has grown to over 50 talented team members dedicated to pushing the boundaries of storage technology.
              </p>
            </div>
          </ScrollAnimation>

          {/* Location & History */}
          <ScrollAnimation delay={200}>
            <div className="bg-[#111118] border border-indigo-500/10 rounded-xl p-8 hover:border-indigo-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-indigo-400">📍</span>
                Location & History
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" />
                  <div>
                    <span className="text-white font-medium">Headquarters:</span>
                    <span className="text-gray-300 ml-2">Guilin, Guangxi, China</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" />
                  <div>
                    <span className="text-white font-medium">Founded:</span>
                    <span className="text-gray-300 ml-2">2022</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" />
                  <div>
                    <span className="text-white font-medium">Team Size:</span>
                    <span className="text-gray-300 ml-2">50+ members</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" />
                  <div>
                    <span className="text-white font-medium">Core Business:</span>
                    <span className="text-gray-300 ml-2">Storage Technology Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Business Scope */}
        <ScrollAnimation delay={300}>
          <div className="bg-[#111118] border border-indigo-500/10 rounded-xl p-8 hover:border-indigo-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
              <span className="text-indigo-400">💼</span>
              Our Business Scope
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: 'Product R&D',
                  desc: 'Design and develop innovative TF SSD products with cutting-edge technology',
                  icon: '🔬'
                },
                {
                  title: 'Storage Solutions',
                  desc: 'Provide comprehensive storage solutions for individuals and businesses',
                  icon: '💾'
                },
                {
                  title: 'Technical Services',
                  desc: 'Offer professional technical support and after-sales service worldwide',
                  icon: '🛠️'
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
