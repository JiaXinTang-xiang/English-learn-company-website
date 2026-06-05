import { useState } from 'react'

const allNewsItems = [
  {
    id: 1,
    title: 'World\'s First TF SSD Officially Released',
    date: 'December 15, 2024',
    category: 'Product Launch',
    summary: 'We have successfully developed and released the world\'s first TF solid-state drive, featuring Open Particle Plug-in Architecture and Adaptive Parallel Capacity Pool Technology, bringing revolutionary breakthroughs to the storage industry.',
    content: 'In the era of rapidly evolving storage technology, we have officially released the world\'s first TF solid-state drive. This product features an innovative Open Particle Plug-in Architecture, allowing users to freely replace storage particles based on their needs, greatly enhancing product flexibility and scalability. Meanwhile, the Adaptive Parallel Capacity Pool Technology has improved storage efficiency by over 50%, delivering an unprecedented storage experience for users.',
    color: 'from-blue-500 to-cyan-500',
    icon: '🚀'
  },
  {
    id: 2,
    title: 'TF SSD Wins Annual Innovation Technology Award',
    date: 'January 20, 2025',
    category: 'Brand Honor',
    summary: 'At the 2025 International Storage Technology Summit, our TF SSD won the "Annual Innovation Technology Award" for its innovative technical architecture and excellent performance.',
    content: 'At the recently concluded 2025 International Storage Technology Summit, our TF SSD product stood out among numerous competitors with its unique Open Particle Plug-in Architecture and Adaptive Parallel Capacity Pool Technology, winning the "Annual Innovation Technology Award". This honor is not only a recognition of our technical strength but also an affirmation of the entire team\'s innovative spirit.',
    color: 'from-purple-500 to-pink-500',
    icon: '🏆'
  },
  {
    id: 3,
    title: 'Strategic Partnerships with Leading Enterprises',
    date: 'March 10, 2025',
    category: 'Market Cooperation',
    summary: 'We have signed strategic cooperation agreements with multiple domestic and international enterprises to jointly promote the application and development of TF SSD across various fields.',
    content: 'Recently, we have signed strategic cooperation agreements with several domestic and international enterprises. Our partners include smartphone manufacturers, data center operators, IoT device manufacturers, and more. Through these strategic partnerships, TF SSD will be promoted in a wider range of application scenarios, providing efficient and reliable storage solutions for more users.',
    color: 'from-orange-500 to-red-500',
    icon: '🤝'
  },
  {
    id: 4,
    title: 'Major Breakthrough in Next-Gen TF SSD Pro Development',
    date: 'April 8, 2025',
    category: 'R&D Update',
    summary: 'The R&D team has successfully overcome multiple technical challenges, with the next-generation TF SSD Pro achieving read speeds of 720MB/s, setting a new performance record.',
    content: 'After three months of dedicated effort, our R&D team has achieved a major breakthrough in the development of the next-generation TF SSD Pro. The new product utilizes the latest controller chips and 3D NAND flash technology, with read speeds increasing from 520MB/s to 720MB/s and write speeds reaching 650MB/s. Additionally, the new product incorporates intelligent thermal control algorithms, effectively reducing temperatures during extended use and further improving product stability and lifespan.',
    color: 'from-green-500 to-teal-500',
    icon: '🔬'
  },
  {
    id: 5,
    title: 'Invited to Attend 2025 Global Storage Technology Conference',
    date: 'May 15, 2025',
    category: 'Industry Event',
    summary: 'We have been invited to attend the 2025 Global Storage Technology Conference, where we will deliver a keynote speech sharing the innovative philosophy behind TF SSD.',
    content: 'We have received an invitation from the 2025 Global Storage Technology Conference Organizing Committee to attend this grand event in Shenzhen next month. Our Technical Director will deliver a keynote speech titled "Open Architecture: The Future of Storage Industry" at the main forum, sharing the innovative philosophy and technological breakthroughs of TF SSD with global peers. This is another recognition of our technical strength and an important opportunity to showcase the innovation capabilities of Chinese storage enterprises to the world.',
    color: 'from-yellow-500 to-orange-500',
    icon: '🎤'
  }
]

export default function News() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const displayedNews = showAll ? allNewsItems : allNewsItems.slice(0, 3)

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
            Company News
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with our latest developments and milestones
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {displayedNews.map((news, index) => (
            <article
              key={news.id}
              className="relative group"
              style={{
                animation: showAll && index >= 3 ? `fadeInUp 0.5s ease-out ${(index - 3) * 0.1}s both` : undefined,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${news.color} rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`} />

              {/* Card with 3D effect */}
              <div className="relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700/50 group-hover:border-indigo-500/30 transition-all duration-500 h-full flex flex-col transform group-hover:-translate-y-2 group-hover:rotate-x-1">
                {/* Shimmer effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
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
                    {expandedId === news.id ? 'Collapse' : 'Read More'}
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
        {allNewsItems.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => {
                setShowAll(!showAll)
                if (showAll) {
                  setExpandedId(null)
                }
              }}
              className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAll ? 'Show Less' : 'View All News'}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
