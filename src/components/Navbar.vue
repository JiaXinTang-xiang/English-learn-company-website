<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <router-link to="/" class="logo">
        <span class="logo-icon">✦</span>
        <span class="logo-text">FlashCore</span>
      </router-link>

      <button class="mobile-toggle" @click="toggleMobile">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-links" :class="{ 'active': isMobileOpen }">
        <li><router-link to="/" @click="closeMobile">Home</router-link></li>
        <li><router-link to="/team" @click="closeMobile">Team</router-link></li>
        <li><router-link to="/products" @click="closeMobile">Products</router-link></li>
        <li><router-link to="/news" @click="closeMobile">News</router-link></li>
        <li><router-link to="/after-sales" @click="closeMobile">After-sales</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobile = () => {
  isMobileOpen.value = !isMobileOpen.value
}

const closeMobile = () => {
  isMobileOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  padding: 10px 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
}

.logo-icon {
  font-size: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-toggle span {
  width: 25px;
  height: 2px;
  background: white;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(15, 23, 42, 0.98);
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
