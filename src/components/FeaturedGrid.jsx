import { motion } from 'framer-motion'

const cards = [
  { name: 'Charizard Holo', price: 249.99, img: 'https://images.pokemontcg.io/base2/4_hires.png' },
  { name: 'Pikachu VMAX', price: 89.99, img: 'https://images.pokemontcg.io/swsh4/44_hires.png' },
  { name: 'Gengar EX', price: 129.99, img: 'https://images.pokemontcg.io/xyp/XY166_hires.png' },
  { name: 'Mewtwo GX', price: 159.99, img: 'https://images.pokemontcg.io/sm3/72_hires.png' },
  { name: 'Eevee Alt Art', price: 49.99, img: 'https://images.pokemontcg.io/sv2/189_hires.png' },
  { name: 'Snorlax V', price: 39.99, img: 'https://images.pokemontcg.io/swsh1/141_hires.png' },
]

export default function FeaturedGrid() {
  return (
    <section id="featured" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Featured pulls</h2>
            <p className="text-slate-600 mt-2">Handpicked highlights from this week’s drop.</p>
          </div>
          <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="group rounded-2xl bg-white border border-black/10 overflow-hidden shadow hover:shadow-xl transition relative"
            >
              <div className="aspect-[4/3] bg-slate-50 grid place-items-center overflow-hidden">
                <img src={c.img} alt={c.name} className="h-full w-full object-contain group-hover:scale-105 transition" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{c.name}</h3>
                  <span className="font-semibold text-slate-900">${'{'}c.price.toFixed(2){'}'}</span>
                </div>
                <button className="mt-4 w-full rounded-xl bg-slate-900 text-white py-2.5 font-medium hover:bg-slate-800 transition">Add to cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
