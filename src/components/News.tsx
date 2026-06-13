import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'
import newsImg1 from '../assets/news/image.png'
import newsImg2 from '../assets/news/image2.png'
import newsImg3 from '../assets/news/image3.png'
import newsImg4 from '../assets/news/image4.png'
import newsImg5 from '../assets/news/image5.png'

const allNewsItems = [
  {
    id: 1,
    title: 'World\'s First TF SSD Officially Released',
    date: 'December 15, 2024',
    category: 'Product Launch',
    image: newsImg1,
    summary: 'We have successfully developed and released the world\'s first TF solid-state drive, featuring Open Particle Plug-in Architecture and Adaptive Parallel Capacity Pool Technology, bringing revolutionary breakthroughs to the storage industry.',
    content: 'In the era of rapidly evolving storage technology, we have officially released the world\'s first TF solid-state drive. This product features an innovative Open Particle Plug-in Architecture, allowing users to freely replace storage particles based on their needs, greatly enhancing product flexibility and scalability. Meanwhile, the Adaptive Parallel Capacity Pool Technology has improved storage efficiency by over 50%, delivering an unprecedented storage experience for users.',
    gradient: 'from-indigo-500 to-blue-500',
    icon: '🚀'
  },
  {
    id: 2,
    title: 'TF SSD Wins Annual Innovation Technology Award',
    date: 'January 20, 2025',
    category: 'Brand Honor',
    image: newsImg2,
    summary: 'At the 2025 International Storage Technology Summit, our TF SSD won the "Annual Innovation Technology Award" for its innovative technical architecture and excellent performance.',
    content: 'At the recently concluded 2025 International Storage Technology Summit, our TF SSD product stood out among numerous competitors with its unique Open Particle Plug-in Architecture and Adaptive Parallel Capacity Pool Technology, winning the "Annual Innovation Technology Award". This honor is not only a recognition of our technical strength but also an affirmation of the entire team\'s innovative spirit.',
    gradient: 'from-purple-500 to-indigo-500',
    icon: '🏆'
  },
  {
    id: 3,
    title: 'Strategic Partnerships with Leading Enterprises',
    date: 'March 10, 2025',
    category: 'Market Cooperation',
    image: newsImg3,
    summary: 'We have signed strategic cooperation agreements with multiple domestic and international enterprises to jointly promote the application and development of TF SSD across various fields.',
    content: 'Recently, we have signed strategic cooperation agreements with several domestic and international enterprises. Our partners include smartphone manufacturers, data center operators, IoT device manufacturers, and more. Through these strategic partnerships, TF SSD will be promoted in a wider range of application scenarios, providing efficient and reliable storage solutions for more users.',
    gradient: 'from-blue-500 to-purple-500',
    icon: '🤝'
  },
  {
    id: 4,
    title: 'Major Breakthrough in Next-Gen TF SSD Pro Development',
    date: 'April 8, 2025',
    category: 'R&D Update',
    image: newsImg4,
    summary: 'The R&D team has successfully overcome multiple technical challenges, with the next-generation TF SSD Pro achieving read speeds of 720MB/s, setting a new performance record.',
    content: 'After three months of dedicated effort, our R&D team has achieved a major breakthrough in the development of the next-generation TF SSD Pro. The new product utilizes the latest controller chips and 3D NAND flash technology, with read speeds increasing from 520MB/s to 720MB/s and write speeds reaching 650MB/s. Additionally, the new product incorporates intelligent thermal control algorithms, effectively reducing temperatures during extended use and further improving product stability and lifespan.',
    gradient: 'from-violet-500 to-purple-500',
    icon: '🔬'
  },
  {
    id: 5,
    title: 'Invited to Attend 2025 Global Storage Technology Conference',
    date: 'May 15, 2025',
    category: 'Industry Event',
    image: newsImg5,
    summary: 'We have been invited to attend the 2025 Global Storage Technology Conference, where we will deliver a keynote speech sharing the innovative philosophy behind TF SSD.',
    content: 'We have received an invitation from the 2025 Global Storage Technology Conference Organizing Committee to attend this grand event in Shenzhen next month. Our Technical Director will deliver a keynote speech titled "Open Architecture: The Future of Storage Industry" at the main forum, sharing the innovative philosophy and technological breakthroughs of TF SSD with global peers. This is another recognition of our technical strength and an important opportunity to showcase the innovation capabilities of Chinese storage enterprises to the world.',
    gradient: 'from-indigo-500 to-violet-500',
    icon: '🎤'
  }
]

export default function News() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const displayedNews = showAll ? allNewsItems : allNewsItems.slice(0, 3)

  return (
    <section id="news" className="py-20 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
            <span className="text-indigo-400 text-sm font-medium">News</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Company News
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with our latest developments and milestones
          </p>
        </ScrollAnimation>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {displayedNews.map((news, index) => (
            <ScrollAnimation key={news.id} delay={50 + index * 40}>
              <article
                className="relative group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${news.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`} />

                {/* Card with 3D effect */}
                <div className="relative bg-[#111118] rounded-xl overflow-hidden border border-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-500 h-full flex flex-col transform group-hover:-translate-y-2 group-hover:rotate-x-1">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Header with gradient */}
                  <div className={`h-1 bg-gradient-to-r ${news.gradient}`} />

                  {/* News Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category and Date */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{news.icon}</span>
                      <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${news.gradient} text-white font-medium`}>
                        {news.category}
                      </span>
                      <span className="text-gray-500 text-sm ml-auto">{news.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-200 transition-all duration-300">
                      {news.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {expandedId === news.id ? news.content : news.summary}
                    </p>

                    {/* Read More Button */}
                    <button
                      onClick={() => setExpandedId(expandedId === news.id ? null : news.id)}
                      className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${news.gradient} bg-clip-text text-transparent hover:gap-3 transition-all duration-200`}
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
            </ScrollAnimation>
          ))}
        </div>

        {/* View All Button */}
        {allNewsItems.length > 3 && (
          <ScrollAnimation delay={600} className="text-center mt-12">
            <button
              onClick={() => {
                setShowAll(!showAll)
                if (showAll) {
                  setExpandedId(null)
                }
              }}
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25"
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </ScrollAnimation>
        )}
      </div>
    </section>
  )
}
