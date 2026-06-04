import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Products from '../views/Products.vue'
import News from '../views/News.vue'
import AfterSales from '../views/AfterSales.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/after-sales',
    name: 'AfterSales',
    component: AfterSales
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
