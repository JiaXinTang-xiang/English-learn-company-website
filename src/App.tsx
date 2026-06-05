import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Products from './components/Products'
import News from './components/News'
import AfterSales from './components/AfterSales'
import Footer from './components/Footer'
import MouseEffects from './components/MouseEffects'

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <MouseEffects />
      <Navbar />
      <Hero />
      <Team />
      <Products />
      <News />
      <AfterSales />
      <Footer />
    </div>
  )
}
