import { useState } from 'react'
import product1Image from '../assets/image5.png'
import product2Image from '../assets/image6.png'

const products = [
  {
    name: 'TF SSD Pro',
    image: product1Image,
    price: '¥299',
    capacity: '128GB',
    features: [
      '读取速度：520MB/s',
      '写入速度：480MB/s',
      '开放式颗粒插拔架构',
      '自适应并行容量池技术'
    ],
    description: '专业级TF固态硬盘，适用于高性能存储需求',
    gradient: 'from-blue-600 to-purple-600',
    popular: true
  },
  {
    name: 'TF SSD Standard',
    image: product2Image,
    price: '¥199',
    capacity: '64GB',
    features: [
      '读取速度：450MB/s',
      '写入速度：400MB/s',
      '开放式颗粒插拔架构',
      '自适应并行容量池技术'
    ],
    description: '标准级TF固态硬盘，性价比之选',
    gradient: 'from-purple-600 to-pink-600',
    popular: false
  }
]

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0)

  return (
    <section id="products" className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="text-white/80 text-sm">Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            产品介绍
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            全球首款TF固态硬盘，为市场而生，只为解决存储痛点
          </p>
        </div>

        {/* Product Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {products.map((product, index) => (
            <button
              key={index}
              onClick={() => setActiveProduct(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeProduct === index
                  ? `bg-gradient-to-r ${product.gradient} text-white shadow-lg shadow-purple-500/25`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 ${
                activeProduct === index ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
              }`}
            >
              {/* Popular badge */}
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    推荐
                  </div>
                </div>
              )}

              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${product.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              {/* Product Card */}
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                {/* Product Image */}
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                  {/* Price badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`bg-gradient-to-r ${product.gradient} text-white px-5 py-2 rounded-full font-bold text-lg shadow-lg`}>
                      {product.price}
                    </div>
                  </div>

                  {/* Capacity badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full font-semibold border border-white/20">
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

                  <p className="text-gray-300 mb-6">{product.description}</p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 group/feature">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center flex-shrink-0`}>
                          <svg className="w-3 h-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-200 group-hover/feature:text-white transition-colors duration-200">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${product.gradient} text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105`}>
                    了解更多
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            产品演示视频
          </h3>
          <p className="text-gray-400 mb-8">观看视频了解产品详情</p>

          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

            <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
              <video
                controls
                className="w-full h-auto"
                poster={product1Image}
              >
                <source src="/media1.mp4" type="video/mp4" />
                您的浏览器不支持视频播放
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
