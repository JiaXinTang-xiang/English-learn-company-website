import { useState } from 'react'

const newsItems = [
  {
    id: 1,
    title: '全球首款TF固态硬盘正式发布',
    date: '2024年12月15日',
    category: '新品发布',
    summary: '我司成功研发并发布全球首款TF固态硬盘，采用开放式颗粒插拔架构和自适应并行容量池技术，为存储行业带来革命性突破。',
    content: '在存储技术不断发展的今天，我司正式发布了全球首款TF固态硬盘。这款产品采用了创新的开放式颗粒插拔架构，用户可以根据需求自由更换存储颗粒，大大提升了产品的灵活性和可扩展性。同时，自适应并行容量池技术使得存储效率提升了50%以上，为用户带来前所未有的存储体验。',
    color: 'from-blue-500 to-cyan-500',
    icon: '🚀'
  },
  {
    id: 2,
    title: 'TF固态硬盘荣获年度创新技术奖',
    date: '2025年1月20日',
    category: '品牌荣誉',
    summary: '在2025年国际存储技术峰会上，我司TF固态硬盘凭借其创新的技术架构和卓越的性能表现，荣获"年度创新技术奖"。',
    content: '在刚刚结束的2025年国际存储技术峰会上，我司的TF固态硬盘产品凭借其独特的开放式颗粒插拔架构和自适应并行容量池技术，从众多参赛产品中脱颖而出，荣获"年度创新技术奖"。这一荣誉不仅是对我司技术实力的认可，更是对整个团队创新精神的肯定。',
    color: 'from-purple-500 to-pink-500',
    icon: '🏆'
  },
  {
    id: 3,
    title: '与多家知名企业达成战略合作',
    date: '2025年3月10日',
    category: '市场合作',
    summary: '我司与多家国内外知名企业签署战略合作协议，共同推动TF固态硬盘在各领域的应用与发展。',
    content: '近日，我司与多家国内外知名企业签署了战略合作协议。合作方涵盖了智能手机制造商、数据中心运营商、物联网设备厂商等多个领域。通过这些战略合作，TF固态硬盘将在更广泛的应用场景中得到推广，为更多用户提供高效、可靠的存储解决方案。',
    color: 'from-orange-500 to-red-500',
    icon: '🤝'
  }
]

export default function News() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="news" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="text-white/80 text-sm">News</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            企业新闻
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            了解我们的最新动态与发展历程
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="relative group"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${news.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700/50 hover:border-transparent transition-all duration-300 h-full flex flex-col">
                {/* Header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${news.color}`} />

                <div className="p-6 flex-1 flex flex-col">
                  {/* Category and Date */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{news.icon}</span>
                    <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${news.color} text-white font-medium`}>
                      {news.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-auto">{news.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {news.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {expandedId === news.id ? news.content : news.summary}
                  </p>

                  {/* Read More Button */}
                  <button
                    onClick={() => setExpandedId(expandedId === news.id ? null : news.id)}
                    className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${news.color} bg-clip-text text-transparent hover:gap-3 transition-all duration-200`}
                  >
                    {expandedId === news.id ? '收起' : '阅读全文'}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${expandedId === news.id ? 'rotate-90' : ''}`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: expandedId === news.id ? '#fff' : undefined }}
                    >
                      <path d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
            <span className="relative z-10">查看全部新闻</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}
