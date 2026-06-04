<template>
  <div class="products-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-content">
        <h1 data-aos="fade-up">Our Products</h1>
        <p data-aos="fade-up" data-aos-delay="100">
          High-performance SSDs at affordable prices — breaking the supply chain monopoly
        </p>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="section products">
      <div class="container">
        <div class="products-grid">
          <div class="product-card" v-for="(product, index) in products" :key="index"
               :data-aos="'fade-up'" :data-aos-delay="index * 100">
            <div class="product-image">
              <div class="image-placeholder">
                <span>{{ product.icon }}</span>
              </div>
              <div class="product-badge">{{ product.badge }}</div>
            </div>
            <div class="product-content">
              <h3>{{ product.name }}</h3>
              <p class="product-category">{{ product.category }}</p>
              <p class="product-description">{{ product.description }}</p>

              <div class="product-features">
                <h4>Key Features:</h4>
                <ul>
                  <li v-for="(feature, i) in product.features" :key="i">{{ feature }}</li>
                </ul>
              </div>

              <div class="product-quality">
                <h4>Quality Assurance:</h4>
                <p>{{ product.quality }}</p>
              </div>

              <div class="product-video">
                <h4>Product Demo:</h4>
                <div class="video-placeholder">
                  <span>🎬</span>
                  <p>Video placeholder - Replace with MP4</p>
                </div>
              </div>

              <div class="product-footer">
                <div class="price">
                  <span class="amount">{{ product.price }}</span>
                  <span class="period">{{ product.priceNote }}</span>
                </div>
                <button class="btn-learn-more">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="section comparison">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Product Comparison</h2>
        <div class="table-wrapper" data-aos="fade-up">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th v-for="product in products" :key="product.name">{{ product.name }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(feature, index) in comparisonFeatures" :key="index">
                <td>{{ feature.name }}</td>
                <td v-for="(value, i) in feature.values" :key="i">
                  <span :class="{ 'check': value === '✓', 'cross': value === '✗' }">{{ value }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta">
      <div class="container">
        <div class="cta-content" data-aos="zoom-in">
          <h2>Interested in Our Products?</h2>
          <p>Contact us for a personalized demo and pricing information.</p>
          <button class="btn btn-primary">Request a Quote</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const products = [
  {
    name: 'FlashCore S100',
    icon: '💾',
    badge: 'Best Seller',
    category: 'Consumer SSD',
    price: '¥299',
    priceNote: '512GB',
    description: 'High-performance consumer SSD designed for everyday computing. Perfect for laptops, desktops, and gaming PCs.',
    features: [
      'Sequential Read: 3500MB/s',
      'Sequential Write: 3000MB/s',
      'NVMe M.2 interface',
      '3D NAND flash memory',
      'SLC caching technology'
    ],
    quality: 'Built with premium 3D NAND flash and our proprietary controller. 1.5M hours MTBF, 3-year warranty.',
    video: 's100-demo.mp4'
  },
  {
    name: 'FlashCore X1 Pro',
    icon: '⚡',
    badge: 'Flagship',
    category: 'Gaming SSD',
    price: '¥599',
    priceNote: '1TB',
    description: 'Flagship gaming SSD with extreme performance. Designed for gamers, content creators, and power users.',
    features: [
      'Sequential Read: 7000MB/s',
      'Sequential Write: 6000MB/s',
      'PCIe 4.0 NVMe interface',
      'Built-in heat sink',
      'DRAM cache buffer'
    ],
    quality: 'Top-tier components with graphene heat sink for sustained performance. 2M hours MTBF, 5-year warranty.',
    video: 'x1pro-demo.mp4'
  },
  {
    name: 'FlashCore E500',
    icon: '🏢',
    badge: 'Enterprise',
    category: 'Enterprise SSD',
    price: '¥899',
    priceNote: '960GB',
    description: 'Enterprise-grade SSD built for data centers and servers. Delivers consistent performance under heavy workloads.',
    features: [
      'Sequential Read: 5500MB/s',
      'Sequential Write: 5000MB/s',
      'Power loss protection',
      'End-to-end data protection',
      'AES 256-bit encryption'
    ],
    quality: 'Enterprise-grade reliability with power loss protection. 2.5M hours MTBF, 5-year warranty with on-site service.',
    video: 'e500-demo.mp4'
  },
  {
    name: 'FlashCore M200',
    icon: '📱',
    badge: 'Compact',
    category: 'Portable SSD',
    price: '¥399',
    priceNote: '500GB',
    description: 'Ultra-portable external SSD for on-the-go storage. Perfect for photographers, videographers, and travelers.',
    features: [
      'Sequential Read: 1050MB/s',
      'Sequential Write: 1000MB/s',
      'USB-C 3.2 interface',
      'Shock resistant design',
      'Compact and lightweight'
    ],
    quality: 'Military-grade shock resistance with IP65 dust and water resistance. 3-year warranty.',
    video: 'm200-demo.mp4'
  }
]

const comparisonFeatures = [
  { name: 'NVMe Protocol', values: ['✓', '✓', '✓', '✗'] },
  { name: 'PCIe 4.0', values: ['✗', '✓', '✗', '✗'] },
  { name: 'DRAM Cache', values: ['✗', '✓', '✓', '✗'] },
  { name: 'Heat Sink', values: ['✗', '✓', '✗', '✗'] },
  { name: 'Power Loss Protection', values: ['✗', '✗', '✓', '✗'] },
  { name: 'Encryption', values: ['✗', '✗', '✓', '✗'] },
  { name: 'Water Resistant', values: ['✗', '✗', '✗', '✓'] },
  { name: 'Warranty', values: ['3 Years', '5 Years', '5 Years', '3 Years'] }
]
</script>

<style scoped>
.page-hero {
  padding: 150px 0 100px;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
  text-align: center;
}

.page-hero h1 {
  font-size: 4rem;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
}

.page-hero p {
  font-size: 1.3rem;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
}

.section {
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 60px;
}

.products {
  background: #0f172a;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.product-card {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  border-color: #667eea;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
}

.product-image {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder span {
  font-size: 5rem;
}

.product-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
}

.product-content {
  padding: 30px;
}

.product-content h3 {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.product-category {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 15px;
}

.product-description {
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 20px;
}

.product-features,
.product-quality,
.product-video {
  margin-bottom: 20px;
}

.product-features h4,
.product-quality h4,
.product-video h4 {
  color: white;
  font-size: 1rem;
  margin-bottom: 10px;
}

.product-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.product-features li {
  color: #94a3b8;
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.product-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
}

.product-quality p {
  color: #94a3b8;
  line-height: 1.6;
}

.video-placeholder {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 2px dashed rgba(102, 126, 234, 0.3);
  border-radius: 10px;
  padding: 30px;
  text-align: center;
}

.video-placeholder span {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 10px;
}

.video-placeholder p {
  color: #94a3b8;
  font-size: 0.9rem;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.price {
  display: flex;
  align-items: baseline;
  gap: 5px;
}

.amount {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.period {
  color: #94a3b8;
  font-size: 0.9rem;
}

.btn-learn-more {
  padding: 10px 25px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-learn-more:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}

.comparison {
  background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  overflow: hidden;
}

th, td {
  padding: 15px 20px;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

th {
  background: rgba(102, 126, 234, 0.2);
  color: white;
  font-weight: 600;
}

th:first-child,
td:first-child {
  text-align: left;
  font-weight: 600;
}

td {
  color: #94a3b8;
}

.check {
  color: #10b981;
  font-weight: 700;
}

.cross {
  color: #ef4444;
  font-weight: 700;
}

.cta {
  background: #0f172a;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 20px;
}

.cta-content p {
  color: #94a3b8;
  font-size: 1.1rem;
  margin-bottom: 35px;
}

.btn {
  padding: 15px 35px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.6);
}

@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2.8rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
