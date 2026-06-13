import { useState } from 'react'
import product1Image from '../assets/image000.png'
import product2Image from '../assets/image0000.png'
import product3Image from '../assets/image5.png'
import product4Image from '../assets/image6.png'
import ScrollAnimation from './ScrollAnimation'

const products = [
  {
    name: 'TF SSD Pro',
    image: product1Image,
    price: '¥299',
    capacity: '128GB',
    features: [
      'Read Speed: 520MB/s',
      'Write Speed: 480MB/s',
      'Open Particle Plug-in Architecture',
      'Adaptive Parallel Capacity Pool Technology'
    ],
    description: 'Professional-grade TF SSD for high-performance storage needs',
    gradient: 'from-indigo-500 to-purple-500',
    popular: true
  },
  {
    name: 'TF SSD Standard',
    image: product2Image,
    price: '¥199',
    capacity: '64GB',
    features: [
      'Read Speed: 450MB/s',
      'Write Speed: 400MB/s',
      'Open Particle Plug-in Architecture',
      'Adaptive Parallel Capacity Pool Technology'
    ],
    description: 'Standard TF SSD, the best value for money',
    gradient: 'from-purple-500 to-pink-500',
    popular: false
  },
  {
    name: 'TF SSD Lite',
    image: product3Image,
    price: '¥149',
    capacity: '32GB',
    features: [
      'Read Speed: 400MB/s',
      'Write Speed: 350MB/s',
      'Compact Design',
      'Energy Efficient'
    ],
    description: 'Lightweight TF SSD for basic storage needs',
    gradient: 'from-blue-500 to-cyan-500',
    popular: false
  },
  {
    name: 'TF SSD Max',
    image: product4Image,
    price: '¥399',
    capacity: '256GB',
    features: [
      'Read Speed: 600MB/s',
      'Write Speed: 550MB/s',
      'Maximum Capacity',
      'Premium Performance'
    ],
    description: 'Maximum capacity TF SSD for power users',
    gradient: 'from-orange-500 to-red-500',
    popular: false
  }
]

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0)

  return (
    <section id="products" className="py-20 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 backdrop-blur-md border border-indigo-500/20 mb-6">
            <span className="text-indigo-400 text-sm font-medium">Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text-animated mb-4">
            Our Products
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The world's first TF solid-state drive, born for the market, solving storage pain points
          </p>
        </ScrollAnimation>

        {/* Product Tabs */}
        <ScrollAnimation delay={50} className="flex justify-center gap-4 mb-12">
          {products.map((product, index) => (
            <button
              key={index}
              onClick={() => setActiveProduct(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeProduct === index
                  ? `bg-gradient-to-r ${product.gradient} text-white shadow-lg shadow-indigo-500/25`
                  : 'bg-[#111118] text-gray-400 hover:text-white hover:bg-[#16161e] border border-indigo-500/10'
              }`}
            >
              {product.name}
            </button>
          ))}
        </ScrollAnimation>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ perspective: '1000px' }}>
          {products.map((product, index) => (
            <ScrollAnimation key={index} delay={50 + index * 50}>
              <div
                className={`relative group transition-all duration-500 ${
                  activeProduct === index ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Popular badge */}
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-indigo-500/30">
                      Recommended
                    </div>
                  </div>
                )}

                {/* Glow effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${product.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`} />

                {/* Product Card with 3D effect */}
                <div className="relative bg-[#111118] rounded-2xl overflow-hidden border border-indigo-500/10 group-hover:border-indigo-500/40 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-x-1 group-hover:rotate-y-1" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden z-10 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Product Image */}
                  <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent" />

                    {/* Price badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`bg-gradient-to-r ${product.gradient} text-white px-5 py-2 rounded-full font-bold text-lg shadow-lg`}>
                        {product.price}
                      </div>
                    </div>

                    {/* Capacity badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-[#0a0a0f]/70 backdrop-blur-md text-white px-4 py-2 rounded-full font-semibold border border-indigo-500/20">
                        {product.capacity}
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">
                        {product.name}
                      </h3>
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${product.gradient} animate-pulse`} />
                    </div>

                    <p className="text-gray-400 mb-6">{product.description}</p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 group/feature">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-3 h-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-gray-300 group-hover/feature:text-white transition-colors duration-200">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button
                      onClick={() => {
                        document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className={`w-full bg-gradient-to-r ${product.gradient} text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Video Section */}
        <ScrollAnimation delay={800}>
          <div id="video-section" className="mt-20 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Product Demo Video
            </h3>
            <p className="text-gray-400 mb-8">Watch the video to learn more about our products</p>

            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

              <div className="relative bg-[#111118] rounded-2xl overflow-hidden border border-indigo-500/20">
                <video
                  controls
                  className="w-full h-auto"
                  poster={product1Image}
                  preload="metadata"
                >
                  <source src={import.meta.env.BASE_URL + 'media1.mp4'} type="video/mp4" />
                  Your browser does not support video playback
                </video>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
