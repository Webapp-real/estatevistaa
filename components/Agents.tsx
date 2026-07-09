const agents = [
  {
    name: 'Sophia Laurent',
    role: 'Luxury Estates Specialist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Daniel Brooks',
    role: 'Investment Advisor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Maya Chen',
    role: 'Neighborhood Expert',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80',
  },
]

export default function Agents() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Meet Our Agents</p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">Trusted professionals for every milestone</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {agents.map((agent) => (
          <div key={agent.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <img src={agent.image} alt={agent.name} className="h-64 w-full rounded-[1.25rem] object-cover" />
            <h3 className="mt-5 text-xl font-semibold text-slate-900">{agent.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{agent.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
