import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import FeaturedGrid from './components/FeaturedGrid'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedGrid />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-black/5 py-10 text-center text-sm text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="pokeball" className="h-5 w-5" />
            <span className="font-semibold text-slate-800">PokeCards</span>
          </div>
          <p>Gotta buy ’em all. © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
