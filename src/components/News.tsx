const newsItems = [
  {
    id: 1,
    title: '全球首款TF固态硬盘正式发布',
    date: '2024年12月15日',
    category: '新品发布',
    summary: '我司成功研发并发布全球首款TF固态硬盘，采用开放式颗粒插拔架构和自适应并行容量池技术，为存储行业带来革命性突破。',
    content: '在存储技术不断发展的今天，我司正式发布了全球首款TF固态硬盘。这款产品采用了创新的开放式颗粒插拔架构，用户可以根据需求自由更换存储颗粒，大大提升了产品的灵活性和可扩展性。同时，自适应并行容量池技术使得存储效率提升了50%以上，为用户带来前所未有的存储体验。'
  },
  {
    id: 2,
    title: 'TF固态硬盘荣获年度创新技术奖',
    date: '2025年1月20日',
    category: '品牌荣誉',
    summary: '在2025年国际存储技术峰会上，我司TF固态硬盘凭借其创新的技术架构和卓越的性能表现，荣获"年度创新技术奖"。',
    content: '在刚刚结束的2025年国际存储技术峰会上，我司的TF固态硬盘产品凭借其独特的开放式颗粒插拔架构和自适应并行容量池技术，从众多参赛产品中脱颖而出，荣获"年度创新技术奖"。这一荣誉不仅是对我司技术实力的认可，更是对整个团队创新精神的肯定。'
  },
  {
    id: 3,
    title: '与多家知名企业达成战略合作',
    date: '2025年3月10日',
    category: '市场合作',
    summary: '我司与多家国内外知名企业签署战略合作协议，共同推动TF固态硬盘在各领域的应用与发展。',
    content: '近日，我司与多家国内外知名企业签署了战略合作协议。合作方涵盖了智能手机制造商、数据中心运营商、物联网设备厂商等多个领域。通过这些战略合作，TF固态硬盘将在更广泛的应用场景中得到推广，为更多用户提供高效、可靠的存储解决方案。'
  }
]

export default function News() {
  return (
    <section id="news" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* News Header */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                  <span className="text-gray-400 text-sm">{news.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {news.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {news.summary}
                </p>

                <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors duration-200">
                  阅读全文 →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200">
            查看全部新闻
          </button>
        </div>
      </div>
    </section>
  )
}
