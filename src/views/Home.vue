<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg"></div>
      <Particles
        :particle-count="200"
        :particle-spread="15"
        :speed="0.15"
        :particle-colors="['#667eea', '#764ba2', '#ffffff']"
        :move-particles-on-hover="true"
        :particle-hover-factor="1.5"
        :alpha-particles="true"
        :particle-base-size="150"
        :size-randomness="0.8"
        :disable-rotation="false"
      />
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="gradient-text">Breaking</span> the Monopoly
        </h1>
        <p class="hero-subtitle">
          We are dedicated to making high-quality SSDs accessible to everyone.
          The price of storage should be determined by technology, not by supply chain monopolies.
        </p>
        <div class="hero-buttons">
          <router-link to="/products" class="btn btn-primary">Explore Products</router-link>
          <router-link to="/team" class="btn btn-secondary">Meet Our Team</router-link>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>Scroll Down</span>
        <div class="mouse">
          <div class="wheel"></div>
        </div>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="section overview">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">About FlashCore</h2>
        <div class="overview-grid">
          <div class="overview-card" data-aos="fade-up" data-aos-delay="100">
            <div class="card-icon">📍</div>
            <h3>Shenzhen, China</h3>
            <p>Headquartered in Shenzhen, the electronics capital of China, with direct access to the global supply chain.</p>
          </div>
          <div class="overview-card" data-aos="fade-up" data-aos-delay="200">
            <div class="card-icon">👥</div>
            <h3>350+ Employees</h3>
            <p>A dedicated team of engineers, designers, and professionals working to revolutionize the storage industry.</p>
          </div>
          <div class="overview-card" data-aos="fade-up" data-aos-delay="300">
            <div class="card-icon">🚀</div>
            <h3>Founded in 2019</h3>
            <p>Started with a mission to break the upstream flash memory supply monopoly and make SSDs affordable.</p>
          </div>
          <div class="overview-card" data-aos="fade-up" data-aos-delay="400">
            <div class="card-icon">💡</div>
            <h3>Innovation First</h3>
            <p>Self-developed controller chips and optimized supply chain to deliver high-quality, affordable SSDs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Scope -->
    <section class="section scope">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Our Business Scope</h2>
        <div class="scope-grid">
          <div class="scope-item" data-aos="fade-right">
            <div class="scope-number">01</div>
            <h3>Consumer SSDs</h3>
            <p>High-performance solid state drives for laptops, desktops, and gaming PCs at competitive prices.</p>
          </div>
          <div class="scope-item" data-aos="fade-right" data-aos-delay="100">
            <div class="scope-number">02</div>
            <h3>Enterprise Storage</h3>
            <p>Reliable and scalable storage solutions for data centers, servers, and enterprise applications.</p>
          </div>
          <div class="scope-item" data-aos="fade-right" data-aos-delay="200">
            <div class="scope-number">03</div>
            <h3>Controller Chip R&D</h3>
            <p>Self-developed SSD controller chips to reduce dependency on upstream suppliers and control costs.</p>
          </div>
          <div class="scope-item" data-aos="fade-right" data-aos-delay="300">
            <div class="scope-number">04</div>
            <h3>Storage Solutions</h3>
            <p>Custom storage solutions for industrial, automotive, and embedded applications.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section timeline">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Our Journey</h2>
        <div class="timeline-container">
          <div class="timeline-item" data-aos="fade-up">
            <div class="timeline-year">2019</div>
            <div class="timeline-content">
              <h3>Company Founded</h3>
              <p>FlashCore Technology was established in Shenzhen with a mission to break the flash memory supply monopoly.</p>
            </div>
          </div>
          <div class="timeline-item" data-aos="fade-up" data-aos-delay="100">
            <div class="timeline-year">2020</div>
            <div class="timeline-content">
              <h3>First SSD Launch</h3>
              <p>Released our first consumer SSD, offering 30% lower prices than competitors with the same performance.</p>
            </div>
          </div>
          <div class="timeline-item" data-aos="fade-up" data-aos-delay="200">
            <div class="timeline-year">2022</div>
            <div class="timeline-content">
              <h3>Controller Chip Breakthrough</h3>
              <p>Successfully developed our proprietary SSD controller chip, reducing costs by 40%.</p>
            </div>
          </div>
          <div class="timeline-item" data-aos="fade-up" data-aos-delay="300">
            <div class="timeline-year">2024</div>
            <div class="timeline-content">
              <h3>Enterprise Market Entry</h3>
              <p>Expanded into enterprise storage solutions, serving 100+ business clients nationwide.</p>
            </div>
          </div>
          <div class="timeline-item" data-aos="fade-up" data-aos-delay="400">
            <div class="timeline-year">2026</div>
            <div class="timeline-content">
              <h3>Industry Recognition</h3>
              <p>Recognized as a leading innovator in the storage industry with 350+ employees.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta">
      <div class="container">
        <div class="cta-content" data-aos="zoom-in">
          <h2>Ready to Upgrade Your Storage?</h2>
          <p>Experience high-performance SSDs without the premium price tag.</p>
          <router-link to="/products" class="btn btn-primary">Explore Our Products</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Particles from '../components/Particles.vue'
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
}

.hero-bg::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
  border-radius: 50%;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 20px;
  max-width: 800px;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 25px;
  line-height: 1.1;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #94a3b8;
  margin-bottom: 40px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 15px 35px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
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

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #64748b;
  font-size: 0.9rem;
}

.mouse {
  width: 26px;
  height: 40px;
  border: 2px solid #64748b;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.wheel {
  width: 4px;
  height: 8px;
  background: #667eea;
  border-radius: 2px;
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(12px); }
}

.section {
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 60px;
}

.overview {
  background: #0f172a;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.overview-card {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s ease;
}

.overview-card:hover {
  transform: translateY(-10px);
  border-color: #667eea;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.overview-card h3 {
  color: white;
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.overview-card p {
  color: #94a3b8;
  line-height: 1.8;
}

.scope {
  background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
}

.scope-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.scope-item {
  padding: 30px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.scope-item:hover {
  background: rgba(102, 126, 234, 0.1);
  border-color: #667eea;
}

.scope-number {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
}

.scope-item h3 {
  color: white;
  font-size: 1.4rem;
  margin-bottom: 12px;
}

.scope-item p {
  color: #94a3b8;
  line-height: 1.8;
}

.timeline {
  background: #0f172a;
}

.timeline-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
}

.timeline-item {
  display: flex;
  margin-bottom: 50px;
  position: relative;
}

.timeline-item:nth-child(odd) {
  flex-direction: row;
  padding-right: calc(50% + 30px);
  text-align: right;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
  padding-left: calc(50% + 30px);
  text-align: left;
}

.timeline-year {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: 700;
  z-index: 1;
}

.timeline-content h3 {
  color: white;
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.timeline-content p {
  color: #94a3b8;
  line-height: 1.6;
}

.cta {
  background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
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

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.8rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .timeline-container::before {
    left: 20px;
  }

  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    flex-direction: column;
    padding-left: 50px;
    padding-right: 0;
    text-align: left;
  }

  .timeline-year {
    left: 20px;
    transform: none;
  }
}
</style>
