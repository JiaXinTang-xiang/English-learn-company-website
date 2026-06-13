import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Home from './components/Home'
import Team from './components/Team'
import Products from './components/Products'
import News from './components/News'
import AfterSales from './components/AfterSales'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import MouseEffects from './components/MouseEffects'

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <MouseEffects />
      <Navbar />
      <Hero />
      <Home />
      <Team />
      <Products />
      <News />
      <AfterSales />
      <BackToTop />
      <Footer />
    </div>
  )
}
