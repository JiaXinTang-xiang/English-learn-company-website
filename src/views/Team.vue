<template>
  <div class="team-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-content">
        <h1 data-aos="fade-up">Our Team</h1>
        <p data-aos="fade-up" data-aos-delay="100">
          Meet the talented professionals driving innovation at TechVision
        </p>
      </div>
    </section>

    <!-- Team Photo -->
    <section class="section team-photo">
      <div class="container">
        <div class="photo-wrapper" data-aos="fade-up">
          <div class="placeholder-photo">
            <span>📸</span>
            <p>Team Photo Placeholder</p>
            <small>Replace with your team photo</small>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Members -->
    <section class="section members">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Leadership Team</h2>
        <div class="members-grid">
          <div class="member-card" v-for="(member, index) in members" :key="index"
               :data-aos="'fade-up'" :data-aos-delay="index * 100">
            <div class="member-avatar">
              <div class="avatar-placeholder">{{ member.initials }}</div>
            </div>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <p class="position">{{ member.position }}</p>
              <p class="department">{{ member.department }}</p>
              <div class="member-bio">
                <p>{{ member.bio }}</p>
              </div>
              <div class="member-responsibilities">
                <h4>Key Responsibilities:</h4>
                <ul>
                  <li v-for="(resp, i) in member.responsibilities" :key="i">{{ resp }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Values -->
    <section class="section values">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Our Values</h2>
        <div class="values-grid">
          <div class="value-card" data-aos="fade-up" data-aos-delay="100">
            <div class="value-icon">🎯</div>
            <h3>Innovation</h3>
            <p>We constantly push boundaries and explore new possibilities in technology.</p>
          </div>
          <div class="value-card" data-aos="fade-up" data-aos-delay="200">
            <div class="value-icon">🤝</div>
            <h3>Collaboration</h3>
            <p>We believe in the power of teamwork and open communication.</p>
          </div>
          <div class="value-card" data-aos="fade-up" data-aos-delay="300">
            <div class="value-icon">⭐</div>
            <h3>Excellence</h3>
            <p>We strive for the highest quality in everything we do.</p>
          </div>
          <div class="value-card" data-aos="fade-up" data-aos-delay="400">
            <div class="value-icon">💡</div>
            <h3>Integrity</h3>
            <p>We conduct business with honesty, transparency, and ethical practices.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const members = [
  {
    name: 'Chen Junyu',
    initials: 'CJ',
    position: 'Chief Executive Officer',
    department: 'Executive Office',
    bio: 'Visionary leader with a passion for breaking industry monopolies. Founded FlashCore to make high-quality SSDs accessible to everyone through innovation and supply chain optimization.',
    responsibilities: [
      'Strategic planning and company direction',
      'Building and maintaining partnerships',
      'Overseeing company operations',
      'Driving innovation initiatives'
    ]
  },
  {
    name: 'Li Zijia',
    initials: 'LZ',
    position: 'Chief Technology Officer',
    department: 'Engineering',
    bio: 'Storage technology expert with deep expertise in NAND flash architecture and controller chip design. Led the development of FlashCore\'s proprietary SSD controller.',
    responsibilities: [
      'Technology strategy and roadmap',
      'SSD controller chip R&D',
      'Technical team leadership',
      'Product architecture decisions'
    ]
  },
  {
    name: 'Xie Yongning',
    initials: 'XY',
    position: 'Marketing Director',
    department: 'Marketing',
    bio: 'Creative marketer with extensive experience in consumer electronics branding. Specializes in digital marketing and building strong brand presence in competitive markets.',
    responsibilities: [
      'Brand strategy and positioning',
      'Marketing campaign management',
      'Public relations and communications',
      'Market research and analysis'
    ]
  },
  {
    name: 'Yu Wanmin',
    initials: 'YW',
    position: 'Product Manager',
    department: 'Product',
    bio: 'Product strategist who combines user insights with technical feasibility. Responsible for defining FlashCore\'s product lineup from consumer to enterprise-grade SSDs.',
    responsibilities: [
      'Product vision and roadmap',
      'User experience design',
      'Product development coordination',
      'Market-fit optimization'
    ]
  },
  {
    name: 'Chen Xingyu',
    initials: 'CX',
    position: 'R&D Director',
    department: 'Research & Development',
    bio: 'Hardware engineer specializing in storage solutions. Leads the team in developing next-generation 3D NAND flash technologies and high-speed interfaces.',
    responsibilities: [
      'Hardware design and development',
      'Flash memory integration',
      'Performance optimization',
      'Quality assurance and testing'
    ]
  },
  {
    name: 'Meng Junrong',
    initials: 'MJ',
    position: 'Sales Director',
    department: 'Sales',
    bio: 'Experienced sales professional with strong connections in the electronics distribution channel. Drives FlashCore\'s market expansion across China and international markets.',
    responsibilities: [
      'Sales strategy and planning',
      'Channel partner management',
      'Customer relationship building',
      'Revenue growth and targets'
    ]
  },
  {
    name: 'Liu Junjun',
    initials: 'LJ',
    position: 'Operations Manager',
    department: 'Operations',
    bio: 'Operations expert ensuring smooth production and supply chain management. Implements lean manufacturing principles to maintain quality while controlling costs.',
    responsibilities: [
      'Supply chain management',
      'Production planning and control',
      'Quality management systems',
      'Cost optimization'
    ]
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

.team-photo {
  background: #0f172a;
}

.photo-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

.placeholder-photo {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 2px dashed rgba(102, 126, 234, 0.3);
  border-radius: 20px;
  padding: 100px 40px;
  text-align: center;
}

.placeholder-photo span {
  font-size: 4rem;
  display: block;
  margin-bottom: 20px;
}

.placeholder-photo p {
  color: #94a3b8;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.placeholder-photo small {
  color: #64748b;
}

.members {
  background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.member-card {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  transition: all 0.3s ease;
}

.member-card:hover {
  transform: translateY(-10px);
  border-color: #667eea;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
}

.member-avatar {
  margin-bottom: 20px;
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.member-info h3 {
  color: white;
  font-size: 1.4rem;
  margin-bottom: 5px;
}

.member-info .position {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 5px;
}

.member-info .department {
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.member-bio {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.member-bio p {
  color: #94a3b8;
  line-height: 1.6;
}

.member-responsibilities h4 {
  color: white;
  font-size: 1rem;
  margin-bottom: 10px;
}

.member-responsibilities ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.member-responsibilities li {
  color: #94a3b8;
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.member-responsibilities li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #667eea;
}

.values {
  background: #0f172a;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.value-card {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-10px);
  border-color: #667eea;
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.value-card h3 {
  color: white;
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.value-card p {
  color: #94a3b8;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2.8rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .members-grid {
    grid-template-columns: 1fr;
  }
}
</style>
