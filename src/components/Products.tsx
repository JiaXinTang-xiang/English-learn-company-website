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
    description: '专业级TF固态硬盘，适用于高性能存储需求'
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
    description: '标准级TF固态硬盘，性价比之选'
  }
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            产品介绍
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            全球首款TF固态硬盘，为市场而生，只为解决存储痛点
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-64 sm:h-72 md:h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full font-bold">
                  {product.price}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {product.name}
                  </h3>
                  <span className="text-blue-400 font-semibold">
                    {product.capacity}
                  </span>
                </div>

                <p className="text-gray-300 mb-6">{product.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                  了解更多
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            产品演示视频
          </h3>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
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
    </section>
  )
}
