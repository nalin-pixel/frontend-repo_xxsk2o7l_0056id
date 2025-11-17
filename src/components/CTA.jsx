export default function CTA() {
  return (
    <section id="cta" className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(250,204,21,0.25)_0%,rgba(250,204,21,0)_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/10 bg-white overflow-hidden shadow">
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-12">
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">Bundle & save on sealed products</h3>
              <p className="mt-3 text-slate-600">Get 10% off when you mix any 3 booster packs. Limited time this week only.</p>
              <div className="mt-6 flex gap-3">
                <a href="#" className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-medium">Shop boosters</a>
                <a href="#" className="px-5 py-2.5 rounded-full bg-white border border-black/10 text-slate-900 font-medium">See bundles</a>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-red-50 to-sky-50">
              <div className="absolute -left-12 top-6 h-20 w-20 rounded-full bg-red-400" />
              <div className="absolute right-6 bottom-6 h-12 w-12 rounded-full bg-yellow-400" />
              <img src="https://images.pokemontcg.io/swsh12/179_hires.png" alt="Booster" className="relative z-10 w-full max-w-sm mx-auto -translate-y-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
