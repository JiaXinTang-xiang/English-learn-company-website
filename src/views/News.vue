<template>
  <div class="news-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-content">
        <h1 data-aos="fade-up">News & Updates</h1>
        <p data-aos="fade-up" data-aos-delay="100">
          Stay informed about our latest developments and industry insights
        </p>
      </div>
    </section>

    <!-- Featured News -->
    <section class="section featured">
      <div class="container">
        <div class="featured-card" data-aos="fade-up">
          <div class="featured-image">
            <div class="image-placeholder">
              <span>📰</span>
              <p>Featured News Image</p>
            </div>
          </div>
          <div class="featured-content">
            <span class="news-category">Product Launch</span>
            <h2>FlashCore Launches X1 Pro: PCIe 4.0 SSD with 7000MB/s Read Speed</h2>
            <div class="news-meta">
              <span class="date">June 1, 2026</span>
              <span class="author">By Marketing Team</span>
            </div>
            <p class="excerpt">
              FlashCore Technology today announced the launch of its flagship X1 Pro solid state drive,
              featuring sequential read speeds of 7000MB/s and write speeds of 6000MB/s. The X1 Pro
              represents a breakthrough in consumer storage performance.
            </p>
            <p class="excerpt">
              The X1 Pro uses FlashCore's proprietary controller chip paired with premium 3D NAND flash,
              delivering flagship performance at just ¥599 for 1TB — 40% less than competing products
              with similar specifications.
            </p>
            <button class="btn-read-more">Read Full Article</button>
          </div>
        </div>
      </div>
    </section>

    <!-- News Grid -->
    <section class="section news-grid">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Latest News</h2>
        <div class="news-items">
          <article class="news-card" v-for="(news, index) in newsList" :key="index"
                   :data-aos="'fade-up'" :data-aos-delay="index * 100">
            <div class="card-image">
              <div class="image-placeholder">
                <span>{{ news.icon }}</span>
              </div>
            </div>
            <div class="card-content">
              <span class="news-category">{{ news.category }}</span>
              <h3>{{ news.title }}</h3>
              <div class="news-meta">
                <span class="date">{{ news.date }}</span>
                <span class="read-time">{{ news.readTime }}</span>
              </div>
              <p>{{ news.excerpt }}</p>
              <button class="btn-read-more">Read More</button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Press Releases -->
    <section class="section press">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Press Releases</h2>
        <div class="press-list">
          <div class="press-item" v-for="(press, index) in pressReleases" :key="index"
               :data-aos="'fade-up'" :data-aos-delay="index * 100">
            <div class="press-date">
              <span class="day">{{ press.day }}</span>
              <span class="month">{{ press.month }}</span>
            </div>
            <div class="press-content">
              <h3>{{ press.title }}</h3>
              <p>{{ press.description }}</p>
              <span class="press-source">{{ press.source }}</span>
            </div>
            <button class="btn-download">📥 PDF</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="section newsletter">
      <div class="container">
        <div class="newsletter-content" data-aos="zoom-in">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest news and updates delivered directly to your inbox.</p>
          <div class="newsletter-form">
            <input type="email" placeholder="Enter your email address">
            <button class="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const newsList = [
  {
    icon: '🚀',
    category: 'Product Launch',
    title: 'FlashCore X1 Pro Breaks Price-Performance Record in Consumer SSDs',
    date: 'May 28, 2026',
    readTime: '5 min read',
    excerpt: 'Our flagship X1 Pro delivers 7000MB/s read speeds at just ¥599, proving that high performance doesn\'t have to come with a premium price tag.'
  },
  {
    icon: '💰',
    category: 'Market Insight',
    title: 'How FlashCore Broke the Flash Memory Supply Chain Monopoly',
    date: 'May 15, 2026',
    readTime: '4 min read',
    excerpt: 'Industry analysis reveals how FlashCore\'s vertical integration strategy and proprietary controller chips have disrupted the traditional pricing model.'
  },
  {
    icon: '🔬',
    category: 'R&D',
    title: 'FlashCore Develops 2nd Gen Controller Chip with 40% Cost Reduction',
    date: 'May 10, 2026',
    readTime: '6 min read',
    excerpt: 'Our R&D team has successfully developed a second-generation SSD controller chip that reduces production costs by 40% while improving performance.'
  },
  {
    icon: '📊',
    category: 'Company Growth',
    title: 'FlashCore Reaches 350 Employees, Expands Shenzhen Headquarters',
    date: 'April 30, 2026',
    readTime: '3 min read',
    excerpt: 'Rapid growth in both consumer and enterprise segments drives expansion, with the company now employing over 350 professionals.'
  },
  {
    icon: '🤝',
    category: 'Partnership',
    title: 'FlashCore Partners with Top PC Manufacturers for OEM Supply',
    date: 'April 22, 2026',
    readTime: '4 min read',
    excerpt: 'Major laptop and desktop manufacturers now offer FlashCore SSDs as default storage options, validating our quality and reliability.'
  },
  {
    icon: '🏆',
    category: 'Awards',
    title: 'FlashCore S100 Wins "Best Value SSD" Award at Tech Expo 2026',
    date: 'April 15, 2026',
    readTime: '3 min read',
    excerpt: 'Our popular S100 consumer SSD receives industry recognition for delivering exceptional performance at an unbeatable price point.'
  }
]

const pressReleases = [
  {
    day: '01',
    month: 'Jun',
    title: 'FlashCore Launches X1 Pro Flagship Gaming SSD',
    description: 'Official press release regarding the launch of our highest-performance consumer SSD.',
    source: 'Official Press Release'
  },
  {
    day: '15',
    month: 'May',
    title: 'FlashCore Completes Series B Funding Round of ¥200 Million',
    description: 'Funding will be used to expand R&D capabilities and increase production capacity.',
    source: 'Investor Relations'
  },
  {
    day: '01',
    month: 'May',
    title: 'FlashCore Receives ISO 9001 Quality Management Certification',
    description: 'Official certification confirms our commitment to the highest quality standards.',
    source: 'Corporate Communications'
  },
  {
    day: '15',
    month: 'Apr',
    title: 'New Enterprise SSD Product Line Announced for Data Centers',
    description: 'FlashCore enters the enterprise storage market with the E500 series.',
    source: 'Product Development'
  }
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

.featured {
  background: #0f172a;
}

.featured-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
}

.featured-image {
  min-height: 400px;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(102, 126, 234, 0.3);
}

.image-placeholder span {
  font-size: 4rem;
  margin-bottom: 10px;
}

.image-placeholder p {
  color: #94a3b8;
  font-size: 0.9rem;
}

.featured-content {
  padding: 40px 40px 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-category {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
  width: fit-content;
}

.featured-content h2 {
  color: white;
  font-size: 1.8rem;
  margin-bottom: 15px;
  line-height: 1.4;
}

.news-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.news-meta span {
  color: #94a3b8;
  font-size: 0.9rem;
}

.excerpt {
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 15px;
}

.btn-read-more {
  padding: 10px 25px;
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
}

.btn-read-more:hover {
  background: #667eea;
  color: white;
}

.news-grid {
  background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
}

.news-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.news-card {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.news-card:hover {
  transform: translateY(-10px);
  border-color: #667eea;
}

.card-image {
  height: 200px;
}

.card-content {
  padding: 25px;
}

.card-content h3 {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 10px;
  line-height: 1.4;
}

.card-content .news-meta {
  margin-bottom: 15px;
}

.card-content p {
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 20px;
}

.press {
  background: #0f172a;
}

.press-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.press-item {
  display: flex;
  align-items: center;
  gap: 30px;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 25px 30px;
  transition: all 0.3s ease;
}

.press-item:hover {
  border-color: #667eea;
  transform: translateX(10px);
}

.press-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 70px;
}

.press-date .day {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.press-date .month {
  color: #94a3b8;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.press-content {
  flex: 1;
}

.press-content h3 {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.press-content p {
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.press-source {
  color: #667eea;
  font-size: 0.8rem;
  font-weight: 600;
}

.btn-download {
  padding: 10px 20px;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  border: 1px solid #667eea;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-download:hover {
  background: #667eea;
  color: white;
}

.newsletter {
  background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
}

.newsletter-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.newsletter-content h2 {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 15px;
}

.newsletter-content p {
  color: #94a3b8;
  font-size: 1.1rem;
  margin-bottom: 35px;
}

.newsletter-form {
  display: flex;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
}

.newsletter-form input {
  flex: 1;
  padding: 15px 25px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: white;
  font-size: 1rem;
}

.newsletter-form input::placeholder {
  color: #64748b;
}

.newsletter-form input:focus {
  outline: none;
  border-color: #667eea;
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

  .featured-card {
    grid-template-columns: 1fr;
  }

  .featured-content {
    padding: 30px;
  }

  .news-items {
    grid-template-columns: 1fr;
  }

  .press-item {
    flex-direction: column;
    text-align: center;
  }

  .newsletter-form {
    flex-direction: column;
  }
}
</style>
