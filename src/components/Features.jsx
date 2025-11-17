import { Star, ShieldCheck, Package, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Star,
    title: 'Authentic & Graded',
    desc: 'We verify every card. PSA and BGS graded options for serious collectors.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure Packaging',
    desc: 'Tamper-proof sleeves, top-loaders, and crush-resistant boxes as standard.'
  },
  {
    icon: Package,
    title: 'Fast Worldwide Shipping',
    desc: 'Tracked delivery, careful handling, and free returns within 30 days.'
  },
  {
    icon: Sparkles,
    title: 'Weekly Drops',
    desc: 'Limited runs of rare pulls and vintage sets handpicked by our team.'
  }
]

export default function Features() {
  return (
    <section id="benefits" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Why collectors choose us</h2>
          <p className="mt-3 text-slate-600">Built by fans. Trusted by trainers. Backed by guarantees.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition relative overflow-hidden">
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-yellow-300/30 blur-2xl group-hover:scale-125 transition" />
              <div className="h-11 w-11 rounded-xl bg-slate-900 text-white grid place-items-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
