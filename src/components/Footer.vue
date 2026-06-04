<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-section">
          <h3 class="footer-logo">
            <span class="logo-icon">✦</span> FlashCore
          </h3>
          <p>Making high-quality SSDs accessible to everyone through innovation and supply chain optimization.</p>
          <div class="social-links">
            <a href="#" class="social-icon">📘</a>
            <a href="#" class="social-icon">🐦</a>
            <a href="#" class="social-icon">💼</a>
            <a href="#" class="social-icon">📸</a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/team">Our Team</router-link></li>
            <li><router-link to="/products">Products</router-link></li>
            <li><router-link to="/news">News</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Support</h4>
          <ul>
            <li><router-link to="/after-sales">After-sales Service</router-link></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact Info</h4>
          <div class="contact-info">
            <p>📍 Shenzhen, Guangdong, China</p>
            <p>📞 +86 400-888-9999</p>
            <p>✉️ info@flashcore.com</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 FlashCore Technology. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  padding: 80px 0 20px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
}

.footer-section h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-section h4 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #667eea;
}

.footer-section p {
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 15px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 12px;
}

.footer-section ul a {
  color: #94a3b8;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-section ul a:hover {
  color: #667eea;
  padding-left: 5px;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-icon {
  width: 40px;
  height: 40px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #667eea;
  transform: translateY(-3px);
}

.contact-info p {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  color: #64748b;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .contact-info p {
    justify-content: center;
  }
}
</style>
