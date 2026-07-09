import { Compass, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Compass,
    title: 'Private Tour Planning',
    description: 'Curated neighborhood tours and off-market access for discerning clients.',
  },
  {
    icon: TrendingUp,
    title: 'Market Intelligence',
    description: 'Live pricing insights, trend analysis, and investment-ready reporting.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Transactions',
    description: 'Confidential documentation, vetted agents, and seamless closing support.',
  },
  {
    icon: Sparkles,
    title: 'Concierge Experience',
    description: 'White-glove guidance from first viewing to final signature and beyond.',
  },
]

export default function ProfessionalFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
        <div className="grid gap-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-8 py-10 text-white lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Signature Services</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              A high-touch experience for modern luxury buyers and sellers.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
              From private tours to closing-day coordination, every detail is handled with precision, discretion, and care.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-sky-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
