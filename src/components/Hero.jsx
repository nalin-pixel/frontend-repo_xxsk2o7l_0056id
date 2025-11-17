import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient and shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-yellow-300/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-sky-300/40 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-red-300/50 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Catch premium Pokémon cards
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-sky-500">in one place.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg text-slate-600 max-w-xl"
          >
            Shop authentic singles, sealed boosters, and rare graded pulls. New drops every week, curated by trainers for trainers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#featured" className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-medium shadow hover:shadow-md transition">
              Explore Featured
            </a>
            <a href="#cta" className="px-5 py-2.5 rounded-full bg-white border border-black/10 text-slate-900 font-medium hover:bg-slate-50 transition">
              View Deals
            </a>
          </motion.div>

          <div className="mt-10 flex items-center gap-4 text-sm text-slate-600">
            <div className="flex -space-x-2">
              {[
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png'
              ].map((src, i) => (
                <img key={i} src={src} alt="Trainer avatar" className="h-8 w-8 rounded-full ring-2 ring-white object-cover bg-white" />
              ))}
            </div>
            <p>Trusted by 2,500+ collectors worldwide</p>
          </div>
        </div>

        {/* Decorative card fan */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-yellow-200 via-white to-sky-200 blur-xl -z-10" />
          <div className="grid grid-cols-3 gap-4">
            {['pikachu','charizard','gengar','eevee','snorlax','mewtwo'].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="aspect-[3/4] rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-xl transition overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white/80" />
                <img src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} alt={name} className="h-full w-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pokéball corner decoration */}
      <div className="pointer-events-none absolute -top-6 -left-6 h-24 w-24">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 rounded-full bg-white border-4 border-black" />
          <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 h-1.5 bg-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-white border-4 border-black" />
          <div className="absolute top-0 inset-x-0 h-1/2 rounded-t-full bg-red-500" />
        </div>
      </div>
    </section>
  )
}
