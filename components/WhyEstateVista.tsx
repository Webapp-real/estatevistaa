import { Sparkles, Shield, Users, Zap } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Search',
    desc: 'Smart summaries + instant property matching so you see the best homes first.',
  },
  {
    icon: Shield,
    title: 'Verified Listings',
    desc: 'Every property and agent is manually verified. No scams, no duplicates.',
  },
  {
    icon: Users,
    title: 'Expert Agents',
    desc: 'We match you with top 5% agents in your city based on your needs.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    desc: 'Get responses from agents in under 2 hours. Close 30% faster than average.',
  },
]

export default function WhyEstateVista() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-2 text-center text-2xl font-bold">Why EstateVista</h2>
      <p className="mb-10 text-center text-gray-600">The modern way to buy, sell, and invest</p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon

          return (
            <div key={index} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                <Icon size={24} />
              </div>
              <h3 className="mb-1 font-bold">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
