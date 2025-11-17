import { Menu, ShoppingCart, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-red-500 to-pink-500 shadow-inner shadow-black/20 grid place-items-center">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>
              <div className="absolute inset-0 rounded-full ring-2 ring-black/10" />
            </div>
            <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
              PokeCards
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#featured" className="hover:text-slate-900 transition">Featured</a>
            <a href="#benefits" className="hover:text-slate-900 transition">Why Us</a>
            <a href="#cta" className="hover:text-slate-900 transition">Deals</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-black/5">
              <Search className="h-4 w-4 text-slate-500" />
              <input
                placeholder="Search cards"
                className="bg-transparent outline-none placeholder:text-slate-400 text-sm w-44"
              />
            </div>
            <button className="relative inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-black/10 shadow-sm hover:shadow transition">
              <ShoppingCart className="h-5 w-5 text-slate-700" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-[10px] grid place-items-center shadow">3</span>
            </button>
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-black/10 shadow-sm">
              <Menu className="h-5 w-5 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
