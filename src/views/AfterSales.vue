<template>
  <div class="after-sales-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-content">
        <h1 data-aos="fade-up">After-Sales Service</h1>
        <p data-aos="fade-up" data-aos-delay="100">
          Comprehensive warranty and support services for all FlashCore SSD products
        </p>
      </div>
    </section>

    <!-- Service Types -->
    <section class="section services">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Our Service Commitment</h2>
        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="index"
               :data-aos="'fade-up'" :data-aos-delay="index * 100">
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul class="service-details">
              <li v-for="(detail, i) in service.details" :key="i">{{ detail }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Warranty Policy -->
    <section class="section warranty">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Warranty Policy</h2>
        <div class="warranty-content" data-aos="fade-up">
          <div class="warranty-card">
            <div class="warranty-header">
              <span class="warranty-icon">🛡️</span>
              <h3>S100 / M200 Warranty</h3>
            </div>
            <div class="warranty-body">
              <div class="warranty-period">
                <span class="period-number">3</span>
                <span class="period-text">Years</span>
              </div>
              <ul class="warranty-features">
                <li>✓ Hardware defect coverage</li>
                <li>✓ Firmware updates</li>
                <li>✓ Technical support via email</li>
                <li>✓ Free replacement within 7 days</li>
                <li>✓ Data recovery assistance</li>
              </ul>
            </div>
          </div>

          <div class="warranty-card featured">
            <div class="warranty-badge">Recommended</div>
            <div class="warranty-header">
              <span class="warranty-icon">⭐</span>
              <h3>X1 Pro Warranty</h3>
            </div>
            <div class="warranty-body">
              <div class="warranty-period">
                <span class="period-number">5</span>
                <span class="period-text">Years</span>
              </div>
              <ul class="warranty-features">
                <li>✓ All S100/M200 warranty features</li>
                <li>✓ Priority 24/7 phone support</li>
                <li>✓ Advanced replacement service</li>
                <li>✓ Free data recovery (1 time)</li>
                <li>✓ Extended wear-out coverage</li>
                <li>✓ Dedicated technical support</li>
              </ul>
            </div>
          </div>

          <div class="warranty-card">
            <div class="warranty-header">
              <span class="warranty-icon">🏢</span>
              <h3>E500 Enterprise Warranty</h3>
            </div>
            <div class="warranty-body">
              <div class="warranty-period">
                <span class="period-number">5</span>
                <span class="period-text">Years</span>
              </div>
              <ul class="warranty-features">
                <li>✓ All X1 Pro warranty features</li>
                <li>✓ On-site replacement service</li>
                <li>✓ 4-hour response time SLA</li>
                <li>✓ Spare units pre-positioned</li>
                <li>✓ Annual health diagnostics</li>
                <li>✓ Power loss recovery support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Return & Exchange Policy -->
    <section class="section policy">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Return & Exchange Policy</h2>
        <div class="policy-grid">
          <div class="policy-card" data-aos="fade-up" data-aos-delay="100">
            <div class="policy-icon">📦</div>
            <h3>30-Day Return Guarantee</h3>
            <p>If you're not completely satisfied with your purchase, you may return the product within 30 days of delivery for a full refund.</p>
            <ul>
              <li>Product must be in original condition</li>
              <li>Original packaging required</li>
              <li>Proof of purchase needed</li>
              <li>Free return shipping label provided</li>
            </ul>
          </div>

          <div class="policy-card" data-aos="fade-up" data-aos-delay="200">
            <div class="policy-icon">🔄</div>
            <h3>Exchange Policy</h3>
            <p>Exchange your product for a different model or specification within 15 days of purchase.</p>
            <ul>
              <li>One-time exchange per purchase</li>
              <li>Price difference may apply</li>
              <li>Product must be unused</li>
              <li>Quick processing within 48 hours</li>
            </ul>
          </div>

          <div class="policy-card" data-aos="fade-up" data-aos-delay="300">
            <div class="policy-icon">💰</div>
            <h3>Refund Process</h3>
            <p>Refunds are processed within 5-7 business days after we receive and inspect the returned product.</p>
            <ul>
              <li>Refund to original payment method</li>
              <li>Email notification at each step</li>
              <li>Tracking number for return shipment</li>
              <li>Customer service support available</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Channels -->
    <section class="section support">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Support Channels</h2>
        <div class="support-grid">
          <div class="support-card" data-aos="fade-up" data-aos-delay="100">
            <div class="support-icon">📞</div>
            <h3>Phone Support</h3>
            <p class="support-availability">24/7 Available</p>
            <p class="support-number">+1 (800) 123-4567</p>
            <p>Average wait time: Under 2 minutes</p>
          </div>

          <div class="support-card" data-aos="fade-up" data-aos-delay="200">
            <div class="support-icon">✉️</div>
            <h3>Email Support</h3>
            <p class="support-availability">Response within 4 hours</p>
            <p class="support-number">support@techvision.com</p>
            <p>For non-urgent inquiries</p>
          </div>

          <div class="support-card" data-aos="fade-up" data-aos-delay="300">
            <div class="support-icon">💬</div>
            <h3>Live Chat</h3>
            <p class="support-availability">Mon-Fri, 9AM-6PM EST</p>
            <p class="support-number">Available on website</p>
            <p>Instant support from our team</p>
          </div>

          <div class="support-card" data-aos="fade-up" data-aos-delay="400">
            <div class="support-icon">🎫</div>
            <h3>Ticket System</h3>
            <p class="support-availability">Track your issues</p>
            <p class="support-number">support.techvision.com</p>
            <p>Submit and monitor support tickets</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Frequently Asked Questions</h2>
        <div class="faq-list">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index"
               :data-aos="'fade-up'" :data-aos-delay="index * 50">
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <span class="faq-toggle" :class="{ 'active': faq.open }">+</span>
            </div>
            <div class="faq-answer" v-show="faq.open">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="section cta">
      <div class="container">
        <div class="cta-content" data-aos="zoom-in">
          <h2>Need Technical Support?</h2>
          <p>Our dedicated support team is ready to assist you with any questions or issues.</p>
          <div class="cta-buttons">
            <button class="btn btn-primary">Contact Support</button>
            <button class="btn btn-secondary">Submit a Ticket</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const services = [
  {
    icon: '🔧',
    title: 'Technical Support',
    description: 'Expert assistance for troubleshooting, configuration, and optimization of your products.',
    details: [
      'Remote troubleshooting and diagnostics',
      'Software installation assistance',
      'Configuration optimization',
      'Performance tuning'
    ]
  },
  {
    icon: '📦',
    title: 'Repair Services',
    description: 'Professional repair services for hardware issues with quick turnaround times.',
    details: [
      'Hardware component replacement',
      'Board-level repairs',
      'Firmware restoration',
      'Quality testing after repair'
    ]
  },
  {
    icon: '🎓',
    title: 'Training Services',
    description: 'Comprehensive training programs to help your team maximize product utilization.',
    details: [
      'On-site training sessions',
      'Online certification courses',
      'Custom training programs',
      'User documentation and guides'
    ]
  },
  {
    icon: '📋',
    title: 'Maintenance Contracts',
    description: 'Proactive maintenance agreements to ensure optimal system performance.',
    details: [
      'Scheduled preventive maintenance',
      'System health monitoring',
      'Performance reports',
      'Priority service scheduling'
    ]
  },
  {
    icon: '🔄',
    title: 'Upgrade Services',
    description: 'Keep your systems up-to-date with our professional upgrade services.',
    details: [
      'Hardware upgrade installations',
      'Software migration services',
      'System compatibility assessment',
      'Data migration assistance'
    ]
  },
  {
    icon: '📊',
    title: 'Consulting Services',
    description: 'Expert advice on technology strategy, implementation, and optimization.',
    details: [
      'Technology assessment',
      'Solution architecture design',
      'Implementation planning',
      'ROI analysis and reporting'
    ]
  }
]

const faqs = ref([
  {
    question: 'How do I request a warranty repair?',
    answer: 'You can request a warranty repair by contacting our support team via phone, email, or the ticket system. Please have your product serial number and proof of purchase ready. Our team will guide you through the process and arrange for repair or replacement as needed.',
    open: false
  },
  {
    question: 'What is covered under the standard warranty?',
    answer: 'The standard warranty covers manufacturing defects in materials and workmanship for 12 months from the date of purchase. This includes hardware component failures, software bugs, and firmware issues. It does not cover damage from misuse, accidents, or unauthorized modifications.',
    open: false
  },
  {
    question: 'How long does a typical repair take?',
    answer: 'Standard repairs are completed within 5-7 business days. For Premium and Enterprise warranty holders, we offer expedited service with next-business-day replacement options. You will receive a tracking number to monitor the repair status.',
    open: false
  },
  {
    question: 'Can I extend my warranty coverage?',
    answer: 'Yes, warranty extensions can be purchased at any time during the original warranty period. We offer 1-year and 2-year extension options. Contact our sales team or visit our website to purchase an extension plan.',
    open: false
  },
  {
    question: 'Do you offer on-site support?',
    answer: 'Yes, on-site support is available for Premium and Enterprise warranty customers. Our technicians will visit your location to diagnose and resolve issues. Standard warranty customers can upgrade to include on-site support for an additional fee.',
    open: false
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return guarantee for products purchased directly from TechVision. The product must be in its original condition and packaging. A full refund will be issued within 5-7 business days after we receive and inspect the returned item.',
    open: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}
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

.services {
  background: #0f172a;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.service-card {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 35px;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: #667eea;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.service-card h3 {
  color: white;
  font-size: 1.3rem;
  margin-bottom: 12px;
}

.service-card p {
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 20px;
}

.service-details {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-details li {
  color: #94a3b8;
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.service-details li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
}

.warranty {
  background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
}

.warranty-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.warranty-card {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  transition: all 0.3s ease;
  position: relative;
}

.warranty-card.featured {
  border-color: #667eea;
  transform: scale(1.05);
}

.warranty-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5px 20px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
}

.warranty-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.warranty-icon {
  font-size: 2.5rem;
}

.warranty-header h3 {
  color: white;
  font-size: 1.4rem;
}

.warranty-body {
  text-align: center;
}

.warranty-period {
  margin-bottom: 25px;
}

.period-number {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
}

.period-text {
  color: #94a3b8;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.warranty-features {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.warranty-features li {
  color: #94a3b8;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.policy {
  background: #0f172a;
}

.policy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.policy-card {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 35px;
  transition: all 0.3s ease;
}

.policy-card:hover {
  transform: translateY(-10px);
  border-color: #667eea;
}

.policy-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.policy-card h3 {
  color: white;
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.policy-card p {
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 20px;
}

.policy-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.policy-card li {
  color: #94a3b8;
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.policy-card li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #667eea;
}

.support {
  background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.support-card {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 35px;
  text-align: center;
  transition: all 0.3s ease;
}

.support-card:hover {
  transform: translateY(-10px);
  border-color: #667eea;
}

.support-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.support-card h3 {
  color: white;
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.support-availability {
  color: #10b981;
  font-weight: 600;
  margin-bottom: 10px;
}

.support-number {
  color: #667eea;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.support-card p:last-child {
  color: #94a3b8;
  font-size: 0.9rem;
}

.faq {
  background: #0f172a;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin-bottom: 15px;
  overflow: hidden;
}

.faq-question {
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: rgba(102, 126, 234, 0.1);
}

.faq-question h3 {
  color: white;
  font-size: 1.1rem;
  margin: 0;
}

.faq-toggle {
  color: #667eea;
  font-size: 1.5rem;
  font-weight: 700;
  transition: transform 0.3s ease;
}

.faq-toggle.active {
  transform: rotate(45deg);
}

.faq-answer {
  padding: 0 25px 20px;
}

.faq-answer p {
  color: #94a3b8;
  line-height: 1.8;
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

.cta-buttons {
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
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
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

@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2.8rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .services-grid,
  .warranty-content,
  .policy-grid,
  .support-grid {
    grid-template-columns: 1fr;
  }

  .warranty-card.featured {
    transform: scale(1);
  }
}
</style>
