import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const featureCards = [
  {
    type: 'video',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
    title: 'Your creative canvas.',
  },
  {
    type: 'checklist',
    number: '01',
    title: 'Project Storyboard.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'Visual shot planning',
      'Scene-by-scene breakdown',
      'Drag-and-drop sequencing',
      'Real-time collaboration',
    ],
  },
  {
    type: 'checklist',
    number: '02',
    title: 'Smart Critiques.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'AI-powered frame analysis',
      'Contextual creative notes',
      'Integrates with your tools',
    ],
  },
  {
    type: 'checklist',
    number: '03',
    title: 'Immersion Capsule.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'Silence all notifications',
      'Ambient creative soundscapes',
      'Schedule sync with your team',
    ],
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const headingSegments = [
    { text: 'Studio-grade workflows for visionary creators.', className: 'text-[#E1E0CC]' },
    { text: 'Built for pure vision. Powered by art.', className: 'text-gray-500' },
  ]

  return (
    <section className="relative min-h-screen bg-black py-20 md:py-32 px-4 md:px-6">
      {/* Subtle noise overlay */}
      <div className="bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
            <WordsPullUpMultiStyle segments={headingSegments} />
          </h2>
        </div>

        {/* Card grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {featureCards.map((card, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl overflow-hidden bg-[#212121] flex flex-col"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {card.type === 'video' ? (
                <>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    src={card.videoUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="relative mt-auto p-5">
                    <p className="text-sm sm:text-base font-medium" style={{ color: '#E1E0CC' }}>
                      {card.title}
                    </p>
                  </div>
                </>
              ) : (
                <div className="p-5 flex flex-col h-full">
                  {/* Icon */}
                  <img
                    src={card.icon}
                    alt=""
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded mb-4 object-cover"
                  />

                  {/* Title with number */}
                  <h3 className="text-base sm:text-lg font-medium mb-4" style={{ color: '#E1E0CC' }}>
                    <span className="text-gray-500 mr-2">{card.number}</span>
                    {card.title}
                  </h3>

                  {/* Checklist */}
                  <ul className="space-y-2 flex-1">
                    {card.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn more */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-primary text-xs sm:text-sm mt-4 hover:opacity-80 transition-opacity"
                  >
                    Learn more
                    <ArrowRight className="w-3 h-3 rotate-[-45deg]" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
