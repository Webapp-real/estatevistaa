import Link from 'next/link'

const favorites = [
  { title: 'Oceanview Villa', location: 'Malibu, CA' },
  { title: 'Skyline Penthouse', location: 'Miami, FL' },
]

const inquiries = [
  { property: 'Garden Estate', status: 'Scheduled tour' },
  { property: 'Modern Loft', status: 'Awaiting response' },
]

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Dashboard</p>
        <h1 className="mt-2 text-4xl font-semibold text-slate-900">Welcome back to your EstateVista dashboard</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Favorites</h2>
            <Link href="/search" className="text-sm font-semibold text-sky-600">Explore more</Link>
          </div>
          <ul className="mt-6 space-y-4">
            {favorites.map((item) => (
              <li key={item.title} className="rounded-2xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.location}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Recent inquiries</h2>
          <ul className="mt-6 space-y-4">
            {inquiries.map((item) => (
              <li key={item.property} className="rounded-2xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">{item.property}</p>
                <p className="mt-1 text-sm text-slate-600">{item.status}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
